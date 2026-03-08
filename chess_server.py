#!/usr/bin/env python3
"""
Minimal Chess Game Server - Version 2
Handles authentication, turn state, and board state management
"""

import json
import sys
import os
import mimetypes
from urllib.parse import parse_qs, unquote
from http.server import HTTPServer, BaseHTTPRequestHandler
import uuid
import random
import traceback
from copy import deepcopy

# ============================================================================
# GAME STATE - Stored in memory
# ============================================================================

GAME_PASSWORD = "asd"  # Change this!
RULES_FILE = "rules.json"


def load_rules_from_file():
  """Load custom rules from rules.json if available"""
  try:
    with open(RULES_FILE, "r") as f:
      data = json.load(f)
      rules = data.get("rules", [])
      if rules:
        print(
          f"[Server] Loaded {len(rules)} custom rules from {RULES_FILE}",
          file=sys.stderr,
        )
        return rules
  except FileNotFoundError:
    print(f"[Server] {RULES_FILE} not found, using default rules", file=sys.stderr)
  except json.JSONDecodeError:
    print(
      f"[Server] Error parsing {RULES_FILE}, using default rules", file=sys.stderr
    )

  # Default rules
  return []


def get_random_rule_choices(all_rules, count=3):
  """Get random rule choices from available rules"""
  if not all_rules:
    return []
  selected = random.sample(all_rules, min(count, len(all_rules)))
  # Normalize turnsLeft to single value (first one if it's an array)
  for rule in selected:
    if isinstance(rule.get("turnsLeft"), list):
      rule["turnsLeft"] = rule["turnsLeft"][0]
  return selected


# Load all available rules
AVAILABLE_RULES = load_rules_from_file()

# Global game state
game_state = {
  "currentTurn": 0,
  "currentPlayer": "white",
  "currentRules": [],
  "newRuleChoices": [],
  "nextTurnWithNewRules": 3,  # New rules every 3 turns
  "ruleJustExpired": False,
  "boardState": {},  # Stores piece positions from all clients
  "lastPlayerToMove": None,  # Track which player made the last move
}

# Board state history for undo functionality
board_state_history = {}

# Track authenticated sessions
authenticated_clients = set()


# ============================================================================
# HELPER FUNCTIONS
# ============================================================================


def generate_user_id():
  """Generate a unique user ID"""
  return str(uuid.uuid4())[:8]


def next_turn():
  """Advance to the next turn"""
  global game_state

  save_board_state()
  game_state["currentTurn"] += 1
  game_state["currentPlayer"] = (
    "black" if game_state["currentPlayer"] == "white" else "white"
  )

  # Decrease turn counters on active rules
  for rule in game_state["currentRules"]:
    rule["turnsLeft"] -= 1

  # Remove expired rules
  game_state["currentRules"] = [
    r for r in game_state["currentRules"] if r["turnsLeft"] > 0
  ]

  # Check if new rules should be added (every 3 turns)
  if game_state["currentTurn"] >= game_state["nextTurnWithNewRules"]:
    game_state["ruleJustExpired"] = True
    game_state["newRuleChoices"] = get_random_rule_choices(AVAILABLE_RULES)
    game_state["nextTurnWithNewRules"] = game_state["currentTurn"] + 3
  save_board_state()


def select_rule(chosen_index):
  """Apply a selected rule to the game"""
  global game_state

  if 0 <= chosen_index < len(game_state["newRuleChoices"]):
    chosen_rule = game_state["newRuleChoices"][chosen_index]
    game_state["currentRules"].append(chosen_rule.copy())
    game_state["newRuleChoices"] = get_random_rule_choices(AVAILABLE_RULES)
    game_state["newRuleChoices"] = []
    return True
  return False


def save_board_state():
  """Save current board state to history for undo functionality"""
  global game_state, board_state_history
  # Deep copy the current board state
  # print(board_state_history, "board_state_history, board_state_history")
  if game_state["currentTurn"] not in board_state_history:
    board_state_history[game_state["currentTurn"]] = deepcopy(game_state)
    print(
      f"[Undo History] Saved board state. History size: {len(board_state_history)}",
      file=sys.stderr,
    )


def undo_board_state():
  """Restore previous board state and remove it from history"""
  global game_state, board_state_history
  print(board_state_history.keys(), "board_state_history", game_state["currentTurn"])
  if (game_state["currentTurn"] - 1) in board_state_history:
    game_state = deepcopy(board_state_history[game_state["currentTurn"] - 1])
    print(
      f"[Undo] Restored previous board state. History size: {len(board_state_history)}",
      file=sys.stderr,
    )
    return True
  else:
    print(f"[Undo] No previous state to restore", file=sys.stderr)
    return False


# ============================================================================
# REQUEST HANDLERS
# ============================================================================


class ChessServerHandler(BaseHTTPRequestHandler):

  def do_POST(self):
    """Handle POST requests"""
    try:
      content_length = int(self.headers.get("Content-Length", 0))
      body = self.rfile.read(content_length).decode("utf-8")

      try:
        data = json.loads(body)
      except json.JSONDecodeError:
        self.send_error(400, "Invalid JSON")
        return

      # Route to appropriate handler
      if self.path == "/api/auth":
        self.handle_auth(data)
      elif self.path == "/api/game-state":
        self.handle_game_state(data)
      elif self.path == "/api/turns":
        self.handle_turns(data)
      elif self.path == "/api/board-state":
        self.handle_board_state(data)
      elif self.path == "/api/undo":
        self.handle_undo(data)
      else:
        self.send_error(404, "Not Found")
    except Exception as e:
      print(f"Error in do_POST: {e}", file=sys.stderr)
      traceback.print_exc(file=sys.stderr)
      self.send_error(500, "Internal Server Error")

  def do_GET(self):
    """Handle GET requests - serve static files or API endpoints"""
    global game_state, board_state_history
    save_board_state()
    try:
      # Parse path and query parameters
      path_parts = self.path.split("?", 1)
      clean_path = path_parts[0]
      query_string = path_parts[1] if len(path_parts) > 1 else ""
      query_params = parse_qs(query_string) if query_string else {}

      # print(f"GET {clean_path} with params: {query_params}", file=sys.stderr)

      # API endpoints
      if clean_path == "/api/auth":
        client_secret = query_params.get("clientSecret", [""])[0]
        if client_secret == GAME_PASSWORD:
          self.send_json_response(
            {
              "success": True,
              "message": "Authentication successful",
            }
          )
        else:
          self.send_json_response(
            {
              "success": False,
              "message": "Invalid password",
            }
          )
        return

      if clean_path == "/api/client-id":
        self.send_json_response({"clientId": generate_user_id()})
        return

      if clean_path == "/api/game-state":
        client_secret = query_params.get("clientSecret", [""])[0]
        user_id = query_params.get("userId", [""])[0]
        action = query_params.get("action", [""])[0]

        if client_secret != GAME_PASSWORD:
          self.send_json_response(
            {"success": False, "message": "Unauthorized"}
          )
          return

        # Track the user ID
        if user_id:
          game_state["lastPlayerToMove"] = user_id
        if game_state["currentTurn"] >= game_state["nextTurnWithNewRules"]:
          game_state["ruleJustExpired"] = True
          game_state["newRuleChoices"] = get_random_rule_choices(
            AVAILABLE_RULES
          )
          game_state["nextTurnWithNewRules"] = game_state["currentTurn"] + 3

        # print(
        #   'game_state["nextTurnWithNewRules"]',
        #   game_state["nextTurnWithNewRules"],
        # )

        # Handle actions
        if action == "INCREMENT_TURN" or action == "NEXT_TURN":
          next_turn()
          # print(
          #   f"[GET /api/game-state] Advanced turn to {game_state['currentPlayer']}",
          #   file=sys.stderr,
          # )
        elif action == "RESET_TURNS":
          board_state_history = {}
          game_state = {
            "currentTurn": 0,
            "currentPlayer": "white",
            "currentRules": [],
            "newRuleChoices": [],
            "nextTurnWithNewRules": 3,  # New rules every 3 turns
            "ruleJustExpired": False,
            "boardState": {},  # Stores piece positions from all clients
            "lastPlayerToMove": None,  # Track which player made the last move
          }
          # print(f"[GET /api/game-state] Reset turns", file=sys.stderr)

        board_pieces = {k: v for k, v in game_state["boardState"].items()}
        # print(
        #   f"[GET /api/game-state] Returning {len(board_pieces)} pieces and turn state",
        #   file=sys.stderr,
        # )
        # save_board_state()
        self.send_json_response(
          {
            "success": True,
            "boardState": board_pieces,
            "turnState": {
              "userId": game_state.get("lastPlayerToMove"),
              "newTurn": {
                "currentTurn": game_state["currentTurn"],
                "currentPlayer": game_state["currentPlayer"],
                "currentRules": game_state["currentRules"],
                "newRuleChoices": game_state["newRuleChoices"],
                "nextTurnWithNewRules": game_state[
                  "nextTurnWithNewRules"
                ],
                "justSelectedRule": True,
              },
              "ruleJustExpired": game_state["ruleJustExpired"],
            },
          }
        )
        return

      if clean_path == "/api/board-state":
        client_secret = query_params.get("clientSecret", [""])[0]
        if client_secret != GAME_PASSWORD:
          self.send_json_response(
            {"success": False, "message": "Unauthorized"}
          )
          return
        board_pieces = {k: v for k, v in game_state["boardState"].items()}
        # print(
        #   f"[Board State GET] Returning {len(board_pieces)} pieces",
        #   file=sys.stderr,
        # )
        self.send_json_response(
          {
            "success": True,
            "boardState": board_pieces,
          }
        )
        return

      if clean_path == "/api/turns":
        client_secret = query_params.get("clientSecret", [""])[0]
        user_id = query_params.get("userId", [""])[0]
        action = query_params.get("action", [""])[0]

        # print(
        #   f"[GET /api/turns] user_id={user_id}, action={action}",
        #   file=sys.stderr,
        # )

        if client_secret != GAME_PASSWORD:
          # print(f"[GET /api/turns] Auth failed", file=sys.stderr)
          self.send_json_response(
            {"success": False, "message": "Unauthorized"}
          )
          return

        # Track the user ID
        if user_id:
          game_state["lastPlayerToMove"] = user_id
          # print(f"[GET /api/turns] Tracked user {user_id}", file=sys.stderr)

        # Handle actions
        if action == "INCREMENT_TURN" or action == "NEXT_TURN":
          next_turn()
          # print(
          #   f"[GET /api/turns] Advanced turn to {game_state['currentPlayer']}",
          #   file=sys.stderr,
          # )
        # elif action == "RESET_TURNS":
        #   game_state["currentTurn"] = 1
        #   game_state["currentPlayer"] = "white"
        #   game_state["currentRules"] = []
        #   game_state["newRuleChoices"] = get_random_rule_choices(
        #     AVAILABLE_RULES
        #   )
        #   game_state["nextTurnWithNewRules"] = 5
        #   # print(f"[GET /api/turns] Reset turns", file=sys.stderr)

        response = {
          "success": True,
          "turnState": {
            "userId": game_state.get("lastPlayerToMove"),
            "newTurn": {
              "currentTurn": game_state["currentTurn"],
              "currentPlayer": game_state["currentPlayer"],
              "currentRules": game_state["currentRules"],
              "newRuleChoices": game_state["newRuleChoices"],
              "nextTurnWithNewRules": game_state["nextTurnWithNewRules"],
              "justSelectedRule": False,
            },
            "ruleJustExpired": game_state["ruleJustExpired"],
          },
        }

        # print(
        #   f"[GET /api/turns] Responding with turn {game_state['currentTurn']}",
        #   file=sys.stderr,
        # )
        self.send_json_response(response)
        return

      # Serve static files
      if clean_path == "/":
        clean_path = "/index.html"

      # Security: prevent directory traversal
      if ".." in clean_path:
        self.send_error(400, "Bad Request")
        return

      # Remove leading slash and decode URL encoding for file path
      file_path = unquote(clean_path.lstrip("/"))

      # Check if file exists
      if os.path.isfile(file_path):
        with open(file_path, "rb") as f:
          content = f.read()

        # Guess content type
        content_type, _ = mimetypes.guess_type(file_path)
        if content_type is None:
          content_type = "application/octet-stream"

        self.send_response(200)
        self.send_header("Content-Type", content_type)
        self.send_header("Content-Length", len(content))
        self.send_header("Access-Control-Allow-Origin", "*")
        self.end_headers()
        self.wfile.write(content)
      else:
        self.send_error(404, f"File not found: {file_path}")
    except Exception as e:
      # print(f"Error in do_GET: {e}", file=sys.stderr)
      traceback.print_exc(file=sys.stderr)
      self.send_error(500, "Internal Server Error")

  def handle_auth(self, data):
    """Handle /api/auth - password validation"""
    client_secret = data.get("clientSecret", "")

    if client_secret == GAME_PASSWORD:
      self.send_json_response(
        {
          "success": True,
          "message": "Authentication successful",
        }
      )
    else:
      self.send_json_response(
        {
          "success": False,
          "message": "Invalid password",
        }
      )

  def handle_turns(self, data):
    """Handle /api/turns - game state and actions"""
    global game_state

    try:
      client_secret = data.get("clientSecret")
      user_id = data.get("userId")
      action = data.get("action")
      payload = data.get("payload", {})

      # print(
      #   f"[/api/turns POST] user_id={user_id}, action={action}", file=sys.stderr
      # )

      # Verify authentication
      if client_secret != GAME_PASSWORD:
        # print(f"[/api/turns] Auth failed: invalid secret", file=sys.stderr)
        self.send_json_response({"success": False, "message": "Unauthorized"})
        return

      # Track the user ID
      if user_id:
        game_state["lastPlayerToMove"] = user_id
        # print(f"[/api/turns] Tracked move to user {user_id}", file=sys.stderr)

      # Handle different actions
      if action == "SELECT_RULE":
        chosen_index = payload.get("chosenIndex")
        if select_rule(chosen_index):
          # next_turn()
          print(
            f"[/api/turns] Selected rule {chosen_index}, advanced turn",
            file=sys.stderr,
          )

      elif action == "NEXT_TURN" or action == "INCREMENT_TURN":
        next_turn()
        # print(
        #   f"[/api/turns] Advanced turn to {game_state['currentPlayer']} (Turn {game_state['currentTurn']})",
        #   file=sys.stderr,
        # )

      elif action == "RESET_TURNS":
        game_state = {
          "currentTurn": 0,
          "currentPlayer": "white",
          "currentRules": [],
          "newRuleChoices": [],
          "nextTurnWithNewRules": 3,  # New rules every 3 turns
          "ruleJustExpired": False,
          "boardState": {},  # Stores piece positions from all clients
          "lastPlayerToMove": None,  # Track which player made the last move
        }
        print(f"[/api/turns] Reset turns to initial state", file=sys.stderr)

      # Build response
      response = {
        "success": True,
        "turnState": {
          "userId": game_state.get("lastPlayerToMove"),
          "newTurn": {
            "currentTurn": game_state["currentTurn"],
            "currentPlayer": game_state["currentPlayer"],
            "currentRules": game_state["currentRules"],
            "newRuleChoices": game_state["newRuleChoices"],
            "nextTurnWithNewRules": game_state["nextTurnWithNewRules"],
            "justSelectedRule": action == "SELECT_RULE",
          },
          "ruleJustExpired": game_state["ruleJustExpired"],
        },
      }

      # print(
      #   f"[/api/turns] Responding with turn: {game_state['currentTurn']}, player: {game_state['currentPlayer']}",
      #   file=sys.stderr,
      # )
      self.send_json_response(response)

      # Reset the flag after sending
      game_state["ruleJustExpired"] = False

    except Exception as e:
      # print(f"[/api/turns] ERROR: {e}", file=sys.stderr)
      import traceback

      traceback.print_exc(file=sys.stderr)
      self.send_json_response({"success": False, "message": str(e)})

  def handle_game_state(self, data):
    """Handle /api/game-state - combined board and turn state (single endpoint)"""
    global game_state
    client_secret = data.get("clientSecret")
    user_id = data.get("userId")

    # Verify authentication
    if client_secret != GAME_PASSWORD:
      self.send_json_response({"success": False, "message": "Unauthorized"})
      return

    # If client sends board state update, process it
    # new_state = data.get("newState")
    # # board_changed = False

    # if new_state:
    # piece_count = 0
    # for piece_id, piece_data in new_state.items():
    #   if piece_id not in ["boardEffects", "highlightedSquare", "selectedSlot"]:
    #     # Check if this piece's position changed
    #     old_piece = game_state["boardState"].get(piece_id, {})
    #     if old_piece.get("position") != piece_data.get("position"):
    #       board_changed = True

    #     game_state["boardState"][piece_id] = piece_data
    #     piece_count += 1

    # print(f"[Game State Update] User {user_id} sent {piece_count} pieces, board_changed={board_changed}", file=sys.stderr)

    # Track which player made this move
    # Save current board state before advancing turn

    # game_state["lastPlayerToMove"] = user_id
    # print(f"[Last Move] Tracked to player {user_id}", file=sys.stderr)

    # Auto-advance turn if board state changed (opponent made a move)
    # next_turn()
    # print(
    #   f"[Turn Advanced] Now {game_state['currentPlayer']}'s turn (Turn {game_state['currentTurn']})",
    #   file=sys.stderr,
    # )

    # Handle explicit actions (SELECT_RULE, etc)
    action = data.get("action")
    payload = data.get("payload", {})

    if action == "SELECT_RULE":
      chosen_index = payload.get("chosenIndex")
      if select_rule(chosen_index):
        print(
          f"[handle_game_state] Selected rule {chosen_index}, advanced turn",
          file=sys.stderr,
        )

    elif action == "NEXT_TURN" or action == "INCREMENT_TURN":
      next_turn()
      print(
        f"[handle_game_state] Advanced turn to {game_state['currentPlayer']}",
        file=sys.stderr,
      )

    elif action == "RESET_TURNS":
      game_state = {
        "currentTurn": 0,
        "currentPlayer": "white",
        "currentRules": [],
        "newRuleChoices": [],
        "nextTurnWithNewRules": 3,  # New rules every 3 turns
        "ruleJustExpired": False,
        "boardState": {},  # Stores piece positions from all clients
        "lastPlayerToMove": None,  # Track which player made the last move
      }
      print(
        f"[handle_game_state] Reset turns to initial state with new random rules",
        file=sys.stderr,
      )

    # Return combined state
    board_pieces: dict[Any, Any] = {
      k: v for k, v in game_state["boardState"].items()
    }

    self.send_json_response(
      {
        "success": True,
        "boardState": board_pieces,
        "turnState": {
          "userId": game_state.get("lastPlayerToMove"),
          "newTurn": {
            "currentTurn": game_state["currentTurn"],
            "currentPlayer": game_state["currentPlayer"],
            "currentRules": game_state["currentRules"],
            # "newRuleChoices": game_state["newRuleChoices"],
            "nextTurnWithNewRules": game_state["nextTurnWithNewRules"],
            "justSelectedRule": action == "SELECT_RULE",
          },
          "ruleJustExpired": game_state["ruleJustExpired"],
        },
      }
    )

    # Reset the flag after sending
    game_state["ruleJustExpired"] = False

  def handle_board_state(self, data):
    """Handle /api/board-state - piece positions and board updates"""
    global game_state
    client_secret = data.get("clientSecret")
    user_id = data.get("userId")

    # Verify authentication
    if client_secret != GAME_PASSWORD:
      self.send_json_response({"success": False, "message": "Unauthorized"})
      return

    # If client sends board state, update it
    # Client sends as "newState", which contains the full board state
    new_state = data.get("newState")
    if new_state:
      # newState contains piece IDs as keys with piece data as values
      # Update only the pieces (not boardEffects, highlightedSquare, selectedSlot)
      piece_count = 0
      for piece_id, piece_data in new_state.items():
        if piece_id not in [
          "boardEffects",
          "highlightedSquare",
          "selectedSlot",
        ]:
          game_state["boardState"][piece_id] = piece_data
          piece_count += 1
      print(
        f"[Board Update] User {user_id} sent {piece_count} pieces",
        file=sys.stderr,
      )

    # Return the current board state (just the pieces, not the other UI state)
    board_pieces = {k: v for k, v in game_state["boardState"].items()}
    print(
      f"[Board State] Returning {len(board_pieces)} pieces to {user_id}",
      file=sys.stderr,
    )

    self.send_json_response(
      {
        "success": True,
        "userId": user_id,
        "boardState": board_pieces,
      }
    )

  def handle_undo(self, data):
    """Handle /api/undo - restore previous board state"""
    global game_state
    client_secret = data.get("clientSecret")

    # Verify authentication
    if client_secret != GAME_PASSWORD:
      self.send_json_response({"success": False, "message": "Unauthorized"})
      return

    # Try to undo the last move
    if undo_board_state():
      board_pieces = {k: v for k, v in game_state["boardState"].items()}
      print(
        f"[Undo] Successfully restored previous state with {len(board_pieces)} pieces",
        file=sys.stderr,
      )
      self.send_json_response(
        {
          "success": True,
          "message": "Board state restored",
          "boardState": board_pieces,
          "historySize": len(board_state_history),
        }
      )
    else:
      print(f"[Undo] No previous state to restore", file=sys.stderr)
      self.send_json_response(
        {
          "success": False,
          "message": "No previous board state to restore",
          "historySize": 0,
        }
      )

  def send_json_response(self, data):
    """Send a JSON response"""
    self.send_response(200)
    self.send_header("Content-Type", "application/json")
    self.send_header("Access-Control-Allow-Origin", "*")
    self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
    self.send_header("Access-Control-Allow-Headers", "Content-Type")
    self.end_headers()
    self.wfile.write(json.dumps(data).encode())

  def do_OPTIONS(self):
    """Handle CORS preflight requests"""
    self.send_response(200)
    self.send_header("Access-Control-Allow-Origin", "*")
    self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
    self.send_header("Access-Control-Allow-Headers", "Content-Type")
    self.end_headers()

  def log_message(self, format, *args):
    """Log messages to stderr"""
    print(f"[{self.client_address[0]}] {format % args}", file=sys.stderr)


# ============================================================================
# MAIN
# ============================================================================

if __name__ == "__main__":
  PORT = 9564
  server = HTTPServer(("0.0.0.0", PORT), ChessServerHandler)

  print(f"Chess server running on http://0.0.0.0:{PORT}")
  print(f"Password: {GAME_PASSWORD}")
  print("Press Ctrl+C to stop")
  print("=" * 60)

  try:
    server.serve_forever()
  except KeyboardInterrupt:
    print("\nServer stopped")
    server.server_close()
