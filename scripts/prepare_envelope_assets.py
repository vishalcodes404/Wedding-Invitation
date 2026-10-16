from PIL import Image, ImageDraw, ImageFont, ImageFilter
import numpy as np
import os

img1_path = r"C:\Users\Visha\.gemini\antigravity-ide\brain\d36f5241-26b2-4757-8e8b-31b7fc9343e7\.user_uploaded\media_1792149039645.png"
img2_path = r"C:\Users\Visha\.gemini\antigravity-ide\brain\d36f5241-26b2-4757-8e8b-31b7fc9343e7\.user_uploaded\media_1792149063678.png"
out_dir = r"c:\Users\Visha\.antigravity-ide\wedding-temple\public\images"

img1 = Image.open(img1_path).convert("RGBA")
img2 = Image.open(img2_path).convert("RGBA")
w, h = img1.size

# Let's clean the monogram on Image 1: replace "K & K" with "S & S"
# Monogram area in img1: x: 120..310, y: 810..870
img1_ss = img1.copy()
draw = ImageDraw.Draw(img1_ss)

# Sample background cream color around the text
# The background is a soft textured cream ~ (242, 237, 230)
# Let's clone background or inpaint smoothly over "K & K"
patch_bg = img1.crop((50, 810, 100, 870)).resize((180, 60))
# Or fill with the exact ivory gradient
for y in range(815, 870):
    for x in range(130, 300):
        # sample left side background at (80, y)
        r, g, b, a = img1.getpixel((80, y))
        img1_ss.putpixel((x, y), (r, g, b, 255))

# Feather/smooth the patch
blur_box = img1_ss.crop((120, 810, 310, 875)).filter(ImageFilter.GaussianBlur(1.0))
img1_ss.paste(blur_box, (120, 810))

# Now draw "S & S" in the exact matching style:
# Font: Playfair Display or Georgia Bold Italic, color: #4e3f35 (dark sepia), & is #c29849 (gold)
draw = ImageDraw.Draw(img1_ss)
try:
    font_mono = ImageFont.truetype("georgiaz.ttf", 46) # Georgia Bold Italic
except:
    try:
        font_mono = ImageFont.truetype("georgia.ttf", 46)
    except:
        font_mono = ImageFont.load_default()

# Measure S & S
s1_w = draw.textbbox((0, 0), "S", font=font_mono)[2] - draw.textbbox((0, 0), "S", font=font_mono)[0]
amp_w = draw.textbbox((0, 0), "&", font=font_mono)[2] - draw.textbbox((0, 0), "&", font=font_mono)[0]
s2_w = draw.textbbox((0, 0), "S", font=font_mono)[2] - draw.textbbox((0, 0), "S", font=font_mono)[0]

gap = 14
tot_w = s1_w + gap + amp_w + gap + s2_w
cx = w / 2
start_x = int(cx - tot_w / 2)
y_mono = 818

draw.text((start_x, y_mono), "S", font=font_mono, fill=(78, 63, 53, 255))
draw.text((start_x + s1_w + gap, y_mono + 2), "&", font=font_mono, fill=(194, 152, 73, 255))
draw.text((start_x + s1_w + gap + amp_w + gap, y_mono), "S", font=font_mono, fill=(78, 63, 53, 255))

# Save the full closed envelope
closed_webp = os.path.join(out_dir, "envelope_closed_full.webp")
img1_ss.save(closed_webp, "WEBP", quality=90, method=6)
print(f"Saved {closed_webp}")

# Also extract the golden wax seal as a standalone transparent asset
# Seal is at center (211, 511), radius 86
seal_crop = img1.crop((211 - 95, 511 - 95, 211 + 95, 511 + 95))
# Create circular alpha mask with soft anti-aliased edge
mask = Image.new("L", (190, 190), 0)
m_draw = ImageDraw.Draw(mask)
m_draw.ellipse((8, 8, 182, 182), fill=255)
mask = mask.filter(ImageFilter.GaussianBlur(1.0))
seal_rgba = Image.new("RGBA", (190, 190), (0, 0, 0, 0))
seal_rgba.paste(seal_crop, (0, 0), mask)

seal_webp = os.path.join(out_dir, "envelope_wax_seal.webp")
seal_rgba.save(seal_webp, "WEBP", quality=92, method=6)
print(f"Saved {seal_webp}")

# Now let's extract the Top Flap layer:
# In Image 1, the top flap has a curved triangular bottom edge reaching down to y=515.
# Let's inspect the flap contour to make an authentic top flap layer!
top_flap = img1.crop((0, 0, w, 595))
# Mask out everything below the top flap curve:
# Top flap curve: from left edge (0, 440) curving down to (211, 595) around the seal, then up to (426, 440)
top_mask = Image.new("L", (w, 595), 0)
t_draw = ImageDraw.Draw(top_mask)

# Points along the top flap contour:
# Top edges: (0, 0), (w, 0), (w, 440), curve down to (211, 595), curve up to (0, 440)
curve_points = [(0, 0), (w, 0), (w, 440)]
# Generate smooth curve points from right to center
for x in range(w, 211, -1):
    # quadratic curve from (w, 440) to (211, 515), with circular bulge around seal (radius 86 at (211, 511))
    t = (x - 211) / (w - 211)
    base_y = 515 - (515 - 440) * (1 - (1 - t)**2)
    # Check if inside seal circle
    dx = x - 211
    if abs(dx) < 86:
        circle_y = 511 + np.sqrt(max(0, 86**2 - dx**2))
        y = max(base_y, circle_y)
    else:
        y = base_y
    curve_points.append((x, int(y)))

# center bottom
curve_points.append((211, 511 + 86))

# Left side
for x in range(211, -1, -1):
    t = (211 - x) / 211
    base_y = 515 - (515 - 440) * (1 - (1 - t)**2)
    dx = x - 211
    if abs(dx) < 86:
        circle_y = 511 + np.sqrt(max(0, 86**2 - dx**2))
        y = max(base_y, circle_y)
    else:
        y = base_y
    curve_points.append((x, int(y)))

curve_points.append((0, 440))
t_draw.polygon(curve_points, fill=255)
top_mask = top_mask.filter(ImageFilter.GaussianBlur(1.2))

top_flap_rgba = Image.new("RGBA", (w, 595), (0, 0, 0, 0))
top_flap_rgba.paste(top_flap, (0, 0), top_mask)

top_flap_webp = os.path.join(out_dir, "envelope_top_flap.webp")
top_flap_rgba.save(top_flap_webp, "WEBP", quality=90, method=6)
print(f"Saved {top_flap_webp}")

# Now let's extract the Bottom Body layer (from Image 1 with S & S monogram)
# The bottom body starts from the flap curve down to the bottom
bot_body = img1_ss.copy()
bot_webp = os.path.join(out_dir, "envelope_bottom_body.webp")
bot_body.save(bot_webp, "WEBP", quality=90, method=6)
print(f"Saved {bot_webp}")

# Also process Image 2 (partially opened state)
# We can also save Image 2 as a clean reference / frame
img2_clean = img2.copy()
# Save Image 2 webp
opened_webp = os.path.join(out_dir, "envelope_opened_ref.webp")
img2_clean.save(opened_webp, "WEBP", quality=90, method=6)
print(f"Saved {opened_webp}")
