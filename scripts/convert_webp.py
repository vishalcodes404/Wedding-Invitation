import os
from PIL import Image

image_dir = os.path.join(os.path.dirname(__file__), '..', 'public', 'images')
image_dir = os.path.abspath(image_dir)

files = [
    ('temple_frame_cutout.png', 'temple_frame_cutout.webp', 75, 750),
    ('thankyou_garland_transparent.png', 'thankyou_garland_transparent.webp', 75, 800),
    ('marigold_bells_transparent.png', 'marigold_bells_transparent.webp', 75, 800),
    ('hanging_diyas_transparent.png', 'hanging_diyas_transparent.webp', 75, 800),
    ('couple_full.png', 'couple_full.webp', 82, 650),
    ('cartoon_bride_clean.png', 'cartoon_bride_clean.webp', 82, 450),
    ('cartoon_groom_clean.png', 'cartoon_groom_clean.webp', 82, 450),
    ('peacock_feather_transparent.png', 'peacock_feather_transparent.webp', 78, 350),
    ('hero_mandap.jpg', 'hero_mandap.webp', 80, 960),
    ('musicians_footer.jpg', 'musicians_footer.webp', 78, 960),
    ('temple_door_left.jpg', 'temple_door_left.webp', 80, 450),
    ('temple_door_right.jpg', 'temple_door_right.webp', 80, 450),
    ('intro_palace_courtyard.jpg', 'intro_palace_courtyard.webp', 78, 960),
    ('temple_entrance_full.jpg', 'temple_entrance_full.webp', 78, 960)
]

total_orig = 0
total_webp = 0

for orig_name, webp_name, q, max_w in files:
    orig_p = os.path.join(image_dir, orig_name)
    webp_p = os.path.join(image_dir, webp_name)
    if os.path.exists(orig_p):
        s_orig = os.path.getsize(orig_p)
        total_orig += s_orig
        with Image.open(orig_p) as img:
            w, h = img.size
            if w > max_w:
                img = img.resize((max_w, int(h * (max_w / w))), Image.Resampling.LANCZOS)
            img.save(webp_p, 'WEBP', quality=q, method=4)
        s_webp = os.path.getsize(webp_p)
        total_webp += s_webp
        print(f'{orig_name:35} {s_orig:>9,d} B -> {s_webp:>9,d} B (-{(1 - s_webp/s_orig)*100:4.1f}%)')

print('-' * 65)
print(f'Total: {total_orig:>10,d} B -> {total_webp:>10,d} B (-{(1 - total_webp/total_orig)*100:4.1f}%)')
