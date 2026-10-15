import os
from PIL import Image
from rembg import remove

input_path = r"c:\Users\Visha\.gemini\antigravity-ide\brain\d36f5241-26b2-4757-8e8b-31b7fc9343e7\.user_uploaded\media_1792071690062.jpg"
output_png = r"c:\Users\Visha\.antigravity-ide\wedding-temple\public\images\couple_full.png"
output_webp = r"c:\Users\Visha\.antigravity-ide\wedding-temple\public\images\couple_full.webp"

print(f"Loading input image: {input_path}")
img = Image.open(input_path).convert("RGBA")
print(f"Input size: {img.size}")

print("Removing background with rembg...")
nobg = remove(img)

# Find bounding box of non-transparent pixels to crop tight
bbox = nobg.getbbox()
if bbox:
    # Give a tiny 4px padding if possible
    w, h = nobg.size
    x1 = max(0, bbox[0] - 4)
    y1 = max(0, bbox[1] - 4)
    x2 = min(w, bbox[2] + 4)
    y2 = min(h, bbox[3] + 4)
    nobg = nobg.crop((x1, y1, x2, y2))
    print(f"Cropped to bbox: {nobg.size}")

# Resize if needed - keep high quality
# Target width ~700px, aspect ratio preserved
max_w = 700
if nobg.width > max_w:
    ratio = max_w / nobg.width
    new_h = int(nobg.height * ratio)
    nobg = nobg.resize((max_w, new_h), Image.Resampling.LANCZOS)
    print(f"Resized to: {nobg.size}")

nobg.save(output_png, "PNG")
print(f"Saved PNG to {output_png} (size: {os.path.getsize(output_png)} bytes)")

nobg.save(output_webp, "WEBP", quality=85, method=6)
print(f"Saved WEBP to {output_webp} (size: {os.path.getsize(output_webp)} bytes)")
