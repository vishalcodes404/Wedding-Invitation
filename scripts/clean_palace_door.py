import math
from PIL import Image, ImageDraw, ImageFont, ImageFilter

input_path = r"c:\Users\Visha\.gemini\antigravity-ide\brain\d36f5241-26b2-4757-8e8b-31b7fc9343e7\.user_uploaded\media_1792072014755.png"
img = Image.open(input_path).convert("RGBA")
w, h = img.size

# 1. Clean Back button by mirroring top-right
crop_top_right = img.crop((w - 120, 0, w, 90)).transpose(Image.FLIP_LEFT_RIGHT)
img_clean = img.copy()
img_clean.paste(crop_top_right, (0, 0))

# 2. Clean WhatsApp button by mirroring bottom-right
crop_bot_right = img.crop((w - 170, 910, w, h)).transpose(Image.FLIP_LEFT_RIGHT)
img_clean.paste(crop_bot_right, (0, 910))

# 3. Smooth, pristine medallion interior
# Medallion center is (213.5, 412).
# Let's create a polygon mask for the inside of the inner gold hexagon.
# Inner hexagon vertices:
# Top: (213.5, 335)
# Top-right: (282, 375)
# Bot-right: (282, 452)
# Bottom: (213.5, 492)
# Bot-left: (145, 452)
# Top-left: (145, 375)

hex_mask = Image.new("L", (w, h), 0)
mask_draw = ImageDraw.Draw(hex_mask)
hex_points = [
    (213.5, 336),
    (281, 375),
    (281, 451),
    (213.5, 490),
    (146, 451),
    (146, 375)
]
mask_draw.polygon(hex_points, fill=255)

# Create radial gradient plate
grad_plate = Image.new("RGBA", (w, h), (255, 255, 255, 255))
cx, cy = 213.5, 412.0
max_r = 75.0

# Generate smooth radial gradient
pixels = grad_plate.load()
for y in range(330, 500):
    for x in range(140, 290):
        dist = math.sqrt((x - cx)**2 + (y - cy)**2)
        ratio = min(1.0, dist / max_r)
        # Interpolate between pure white (255, 255, 255) and warm pearl (244, 239, 227)
        r_c = int(255 - ratio * 12)
        g_c = int(255 - ratio * 17)
        b_c = int(255 - ratio * 28)
        pixels[x, y] = (r_c, g_c, b_c, 255)

# Soft feather the mask edges slightly
hex_mask = hex_mask.filter(ImageFilter.GaussianBlur(1.2))

# Composite the pristine gradient onto img_clean inside the hexagon
img_clean.paste(grad_plate, (0, 0), hex_mask)

# Now render "S & S", divider rule, and "TAP TO OPEN"
draw = ImageDraw.Draw(img_clean)

# Load fonts
try:
    font_monogram = ImageFont.truetype("georgiaz.ttf", 36) # Georgia Bold Italic
except:
    try:
        font_monogram = ImageFont.truetype("georgia.ttf", 36)
    except:
        font_monogram = ImageFont.load_default()

try:
    font_tap = ImageFont.truetype("montserrat.ttf", 10)
except:
    try:
        font_tap = ImageFont.truetype("arialbd.ttf", 10)
    except:
        font_tap = ImageFont.load_default()

# Measure text
s1_text = "S"
amp_text = "&"
s2_text = "S"

bb1 = draw.textbbox((0, 0), s1_text, font=font_monogram)
bb_amp = draw.textbbox((0, 0), amp_text, font=font_monogram)
bb2 = draw.textbbox((0, 0), s2_text, font=font_monogram)

w1 = bb1[2] - bb1[0]
w_amp = bb_amp[2] - bb_amp[0]
w2 = bb2[2] - bb2[0]

spacing = 8
total_w = w1 + spacing + w_amp + spacing + w2
start_x = int(cx - total_w / 2)
y_text = 376

# Draw S (rich charcoal/burgundy), & (gold), S
draw.text((start_x, y_text), s1_text, font=font_monogram, fill=(88, 70, 58, 255))
draw.text((start_x + w1 + spacing, y_text - 1), amp_text, font=font_monogram, fill=(196, 153, 61, 255))
draw.text((start_x + w1 + spacing + w_amp + spacing, y_text), s2_text, font=font_monogram, fill=(88, 70, 58, 255))

# Draw the delicate gold line between S & S and TAP TO OPEN
draw.line([(int(cx - 25), 422), (int(cx + 25), 422)], fill=(205, 168, 88, 255), width=1)

# Draw "TAP TO OPEN" with wide letter tracking
tap_text = "TAP TO OPEN"
# Draw tracked text
track_spacing = 3.5
# measure
total_tap_w = sum(draw.textbbox((0, 0), ch, font=font_tap)[2] - draw.textbbox((0, 0), ch, font=font_tap)[0] + track_spacing for ch in tap_text) - track_spacing
cur_x = cx - total_tap_w / 2
tap_y = 434
for ch in tap_text:
    draw.text((cur_x, tap_y), ch, font=font_tap, fill=(160, 126, 68, 255))
    ch_w = draw.textbbox((0, 0), ch, font=font_tap)[2] - draw.textbbox((0, 0), ch, font=font_tap)[0]
    cur_x += ch_w + track_spacing

img_clean.save("scripts/palace_door_final.png")
print("Saved scripts/palace_door_final.png successfully!")
