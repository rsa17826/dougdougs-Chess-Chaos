#!/usr/bin/env python3
"""
Patch script to replace Pusher with polling in index-readable.js
Usage: python3 patch_pusher.py
"""

import sys
import re

POLLING_CODE = '''
function startBoardPolling() {
  setInterval(async () => {
    try {
      const r = await fetch("/api/board-state?clientSecret=" + encodeURIComponent(H))
      const d = await r.json()
      if (d.success && d.boardState) gs({ userId: d.userId || "server", newState: d.boardState })
    } catch (e) { console.error("Board poll error:", e) }
  }, 300)
}

function startTurnPolling() {
  setInterval(async () => {
    try {
      const r = await fetch("/api/turns", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ clientSecret: H, userId: q() }),
      })
      const d = await r.json()
      if (d.success && d.turnState) dn(d.turnState)
    } catch (e) { console.error("Turn poll error:", e) }
  }, 500)
}
'''

def patch_file(filepath):
    """Patch the index-readable.js file to use polling instead of Pusher"""
    
    print(f"Reading {filepath}...")
    with open(filepath, 'r') as f:
        content = f.read()
    
    # Backup original
    backup_path = filepath + '.backup_pusher'
    with open(backup_path, 'w') as f:
        f.write(content)
    print(f"Backup created: {backup_path}")
    
    # Find and comment out the Pusher initialization in cs() function
    # Look for: Be = new _i(i, { cluster: "us2", })
    # and replace with: Be = null // Pusher disabled - using polling instead
    
    pattern = r'(Be = new _i\(i, \{\s*cluster: "us2",\s*\}\))'
    replacement = 'Be = null // Pusher disabled - using polling instead'
    content = re.sub(pattern, replacement, content)
    
    # Comment out the ft.bind() calls for Pusher events
    pattern = r'ft = Be\.subscribe\(a\)'
    replacement = '// ft = Be.subscribe(a) // Disabled - using polling'
    content = re.sub(pattern, replacement, content)
    
    pattern = r'ft\.bind\(l, \(c\) => \{\s*gs\(c\)\s*\}\)'
    replacement = '// ft.bind(l, (c) => { gs(c) }) // Disabled - using polling'
    content = re.sub(pattern, replacement, content)
    
    pattern = r'ft\.bind\(h, \(c\) => \{\s*dn\(c\)\s*\}\)'
    replacement = '// ft.bind(h, (c) => { dn(c) }) // Disabled - using polling'
    content = re.sub(pattern, replacement, content)
    
    # Replace Pusher connection event bindings
    pattern = r'Be\.connection\.bind\("connected"'
    replacement = '// Be.connection.bind("connected"'
    content = re.sub(pattern, replacement, content)
    
    pattern = r'Be\.connection\.bind\("disconnected"'
    replacement = '// Be.connection.bind("disconnected"'
    content = re.sub(pattern, replacement, content)
    
    pattern = r'Be\.connection\.bind\("error"'
    replacement = '// Be.connection.bind("error"'
    content = re.sub(pattern, replacement, content)
    
    # Find the end of the cs() function and add polling start
    # Look for the closing } of cs() and add polling calls
    pattern = r'(function cs\(\) \{[^}]*?)\}'
    def add_polling(match):
        func_body = match.group(1)
        # Add polling calls at the end
        return func_body + '\n  startBoardPolling()\n  startTurnPolling()\n}'
    
    # This is a more manual approach - find cs() function
    cs_start = content.find('function cs() {')
    if cs_start != -1:
        # Find the matching closing brace
        brace_count = 0
        i = cs_start + len('function cs() {')
        for j in range(i, len(content)):
            if content[j] == '{':
                brace_count += 1
            elif content[j] == '}':
                if brace_count == 0:
                    # Found the closing brace
                    before = content[:j]
                    after = content[j:]
                    # Insert polling calls before the closing brace
                    content = before + '\n  startBoardPolling()\n  startTurnPolling()' + after
                    break
                else:
                    brace_count -= 1
    
    # Add the polling functions at the end of the file
    content += '\n\n// Polling functions to replace Pusher\n' + POLLING_CODE
    
    # Write the patched content
    with open(filepath, 'w') as f:
        f.write(content)
    
    print(f"✅ Patched {filepath}")
    print(f"✅ Pusher initialization disabled")
    print(f"✅ Polling functions added")
    print(f"\nChanges made:")
    print("  - Commented out Pusher initialization")
    print("  - Commented out Pusher event bindings")
    print("  - Added startBoardPolling() function")
    print("  - Added startTurnPolling() function")
    print("\nNext steps:")
    print("  1. Run: python3 chess_server_v2.py")
    print("  2. Open http://127.0.0.1:8000 in browser")
    print("  3. Test by moving pieces - should sync via polling")

if __name__ == "__main__":
    filepath = "index-readable.js"
    
    if not sys.argv:
        print(f"Patching {filepath}...")
        patch_file(filepath)
    else:
        filepath = sys.argv[1]
        patch_file(filepath)
