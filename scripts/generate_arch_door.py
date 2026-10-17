from PIL import Image, ImageDraw, ImageFont
import numpy as np
import os

"""
Reproducible generator for Regal Floral Arch Door assets (Image 1):
- Cleans original couple text seamlessly preserving ivory vertical pinstripes
- Renders Sunil & Santhiya, 13.11.2026, and TAP ANYWHERE TO OPEN
- Generates:
  1. arch_door_full.webp
  2. arch_door_left.webp
  3. arch_door_right.webp
"""

src_img_path = r"C:\Users\Visha\.gemini\antigravity-ide\brain\f423f0aa-3322-4ba3-8754-f9014f8366c3\.user_uploaded\media_1792225024632.png"
out_dir = os.path.abspath("public/images")

img = Image.open(src_img_path).convert("RGB")
arr = np.array(img)
clean_strip = arr[868:888, :, :]
clean_pattern = np.median(clean_strip, axis=0).astype(np.uint8)

# Clean text area
cleaned = arr.copy()
for y in range(715, 930):
    cleaned[y, 165:475] = clean_pattern[165:475]

result = Image.fromarray(cleaned)
draw = ImageDraw.Draw(result)

font_names = ImageFont.truetype("scripts/fonts/Cinzel-SemiBold.ttf", 44)
font_amp = ImageFont.truetype("scripts/fonts/Playfair-Italic.ttf", 42)
font_date = ImageFont.truetype("scripts/fonts/Cinzel-SemiBold.ttf", 30)
font_tap = ImageFont.truetype("scripts/fonts/Montserrat-Medium.ttf", 13)

text_color = (122, 93, 62)
amp_color = (140, 105, 65)
tap_color = (135, 105, 72)

w, h = result.size
cx = w / 2

def draw_centered_tracked_text(draw, text, y, font, fill, tracking=3):
    total_w = sum(draw.textbbox((0, 0), ch, font=font)[2] - draw.textbbox((0, 0), ch, font=font)[0] for ch in text) + tracking * (len(text) - 1)
    x = cx - total_w / 2
    for ch in text:
        ch_w = draw.textbbox((0, 0), ch, font=font)[2] - draw.textbbox((0, 0), ch, font=font)[0]
        draw.text((x, y), ch, font=font, fill=fill)
        x += ch_w + tracking

# 1. Couple names & date matching Image 1 styling
draw_centered_tracked_text(draw, "SUNIL", 716, font_names, text_color, tracking=5)
draw_centered_tracked_text(draw, "&", 770, font_amp, amp_color, tracking=0)
draw_centered_tracked_text(draw, "SANTHIYA", 816, font_names, text_color, tracking=5)
draw_centered_tracked_text(draw, "13.11.2026", 884, font_date, text_color, tracking=4)
draw_centered_tracked_text(draw, "TAP ANYWHERE TO OPEN", 938, font_tap, tap_color, tracking=4)

# Save high-performance WebP assets
full_path = os.path.join(out_dir, "arch_door_full.webp")
result.save(full_path, "WEBP", quality=90, method=6)

left_leaf = result.crop((0, 0, 322, h))
left_path = os.path.join(out_dir, "arch_door_left.webp")
left_leaf.save(left_path, "WEBP", quality=90, method=6)

right_leaf = result.crop((320, 0, w, h))
right_path = os.path.join(out_dir, "arch_door_right.webp")
right_leaf.save(right_path, "WEBP", quality=90, method=6)

print(f"Generated arch_door_full.webp ({os.path.getsize(full_path)} bytes)")
print(f"Generated arch_door_left.webp ({os.path.getsize(left_path)} bytes)")
print(f"Generated arch_door_right.webp ({os.path.getsize(right_path)} bytes)")
