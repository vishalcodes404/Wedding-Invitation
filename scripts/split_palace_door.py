from PIL import Image, ImageFilter
import os

cleaned_path = r"c:\Users\Visha\.antigravity-ide\wedding-temple\scripts\palace_door_final.png"
img = Image.open(cleaned_path).convert("RGBA")
w, h = img.size
print(f"Loaded palace door: {w}x{h}")

output_dir = r"c:\Users\Visha\.antigravity-ide\wedding-temple\public\images"

# 1. Save palace_door_full.webp
full_webp_path = os.path.join(output_dir, "palace_door_full.webp")
img.save(full_webp_path, "WEBP", quality=88, method=6)
print(f"Saved {full_webp_path} ({os.path.getsize(full_webp_path)} bytes)")

# 2. Split into left and right door leaves
# Center line is at x = 213.5 -> left: 0..214, right: 213..427
# To avoid any 1px gap, we overlap by 1px
left_leaf = img.crop((0, 0, 214, h))
right_leaf = img.crop((213, 0, w, h))

left_webp_path = os.path.join(output_dir, "palace_door_left.webp")
right_webp_path = os.path.join(output_dir, "palace_door_right.webp")

left_leaf.save(left_webp_path, "WEBP", quality=88, method=6)
right_leaf.save(right_webp_path, "WEBP", quality=88, method=6)

print(f"Saved left leaf: {left_webp_path} ({os.path.getsize(left_webp_path)} bytes)")
print(f"Saved right leaf: {right_webp_path} ({os.path.getsize(right_webp_path)} bytes)")

# 3. Create a warm glowing palace courtyard background for behind the opening doors
# We can use the soft blurred courtyard colors and lighting from the image
# to create a breathtaking glowing sanctum depth
courtyard_bg = img.copy().filter(ImageFilter.GaussianBlur(18))
courtyard_bg_path = os.path.join(output_dir, "palace_courtyard_bg.webp")
courtyard_bg.save(courtyard_bg_path, "WEBP", quality=80, method=6)
print(f"Saved courtyard bg: {courtyard_bg_path} ({os.path.getsize(courtyard_bg_path)} bytes)")
