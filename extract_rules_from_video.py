#!/usr/bin/env python3
"""
Extract game rules from video frames using OCR
Looks for rules that appear like the screenshot format
Saves them to a JSON file with title as the key
"""

import cv2
import pytesseract
import json
import re
from pathlib import Path
from PIL import Image
import numpy as np

VIDEO_PATH = "/home/nyix/videos/a.mp4"
OUTPUT_PATH = "extracted_rules.json"
SKIP_FRAMES = 30  # Process every Nth frame to speed up

def preprocess_frame(frame):
    """Preprocess frame for better OCR"""
    # Convert to grayscale
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    
    # Increase contrast
    clahe = cv2.createCLAHE(clipLimit=2.0, tileGridSize=(8, 8))
    contrast = clahe.apply(gray)
    
    # Threshold to get text more clearly
    _, thresh = cv2.threshold(contrast, 100, 255, cv2.THRESH_BINARY)
    
    return thresh

def extract_text_from_frame(frame):
    """Extract text from a frame using OCR"""
    try:
        processed = preprocess_frame(frame)
        
        # Use pytesseract to extract text
        text = pytesseract.image_to_string(processed)
        return text
    except Exception as e:
        print(f"Error during OCR: {e}")
        return ""

def parse_rule(text):
    """
    Parse extracted text to identify a rule
    Expected format:
    Title
    Description
    Duration (e.g., "5 Turns" or "Instant")
    """
    lines = [line.strip() for line in text.split('\n') if line.strip()]
    
    if len(lines) < 3:
        return None
    
    # Try to identify rule components
    title = lines[0]
    
    # Find duration (last line should contain "Turns" or "Instant")
    duration_line = lines[-1].lower()
    
    is_instant = "instant" in duration_line
    turns = 1
    
    if not is_instant:
        # Extract number from "X Turns"
        match = re.search(r'(\d+)\s*turns', duration_line, re.IGNORECASE)
        if match:
            turns = int(match.group(1))
    
    # Description is everything between title and duration
    description = ' '.join(lines[1:-1])
    
    # Only consider it a rule if it has reasonable content
    if len(title) > 3 and len(description) > 10:
        return {
            "title": title,
            "description": description,
            "isInstant": is_instant,
            "turnsLeft": turns,
            "kingImmune": False
        }
    
    return None

def extract_rules_from_video(video_path):
    """Extract rules from video frames"""
    cap = cv2.VideoCapture(video_path)
    
    if not cap.isOpened():
        print(f"Error: Could not open video {video_path}")
        return {}
    
    total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    fps = cap.get(cv2.CAP_PROP_FPS)
    
    print(f"Video: {total_frames} frames, {fps} FPS")
    print(f"Processing every {SKIP_FRAMES} frames...")
    
    rules = {}
    frame_count = 0
    processed_count = 0
    
    while True:
        ret, frame = cap.read()
        
        if not ret:
            break
        
        frame_count += 1
        
        # Process every Nth frame
        if frame_count % SKIP_FRAMES == 0:
            processed_count += 1
            
            # Resize for faster processing (optional)
            small_frame = cv2.resize(frame, (frame.shape[1]//2, frame.shape[0]//2))
            
            # Extract text
            text = extract_text_from_frame(small_frame)
            
            if text.strip():
                # Try to parse as rule
                rule = parse_rule(text)
                
                if rule:
                    print(f"\n[Frame {frame_count}] Found rule: {rule['title']}")
                    print(f"  Description: {rule['description']}")
                    print(f"  Duration: {'Instant' if rule['isInstant'] else f\"{rule['turnsLeft']} Turns\"}")
                    
                    # Use title as key
                    rules[rule['title']] = rule
            
            if processed_count % 100 == 0:
                progress = (frame_count / total_frames) * 100
                print(f"Progress: {progress:.1f}% ({frame_count}/{total_frames})")
    
    cap.release()
    return rules

def main():
    print(f"Extracting rules from: {VIDEO_PATH}")
    print("=" * 60)
    
    rules = extract_rules_from_video(VIDEO_PATH)
    
    print("\n" + "=" * 60)
    print(f"Found {len(rules)} unique rules")
    
    # Save to JSON
    output = {"rules": list(rules.values())}
    
    with open(OUTPUT_PATH, 'w') as f:
        json.dump(output, f, indent=2)
    
    print(f"Saved to: {OUTPUT_PATH}")
    
    # Also print summary
    print("\nExtracted Rules:")
    for title, rule in rules.items():
        print(f"\n- {title}")
        print(f"  {rule['description']}")
        print(f"  {'Instant' if rule['isInstant'] else f\"{rule['turnsLeft']} Turns\"}")

if __name__ == "__main__":
    main()
