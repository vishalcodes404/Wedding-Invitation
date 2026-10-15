import os
import glob
from PIL import Image

image_dir = os.path.join(os.path.dirname(__file__), '..', 'public', 'images')
image_dir = os.path.abspath(image_dir)

print(f"Optimizing images in: {image_dir}")

# Targeted maximum widths (retina 2x for max-width 480px is 960px)
MAX_WIDTHS = {
    'temple_frame_cutout.png': 800,
    'thankyou_garland_transparent.png': 900,
    'marigold_bells_transparent.png': 900,
    'hanging_diyas_transparent.png': 900,
    'couple_full.png': 700,
    'cartoon_bride_clean.png': 500,
    'cartoon_groom_clean.png': 500,
    'peacock_feather_transparent.png': 400,
    'hero_mandap.jpg': 1000,
    'musicians_footer.jpg': 1000,
    'temple_door_left.jpg': 500,
    'temple_door_right.jpg': 500,
    'temple_entrance_full.jpg': 900,
    'intro_palace_courtyard.jpg': 1000,
}

total_original = 0
total_optimized = 0

for filename, max_w in MAX_WIDTHS.items():
    file_path = os.path.join(image_dir, filename)
    if not os.path.exists(file_path):
        continue
    
    orig_size = os.path.getsize(file_path)
    total_original += orig_size
    
    with Image.open(file_path) as img:
        w, h = img.size
        # Resize if width exceeds max_w
        if w > max_w:
            new_w = max_w
            new_h = int(h * (max_w / w))
            img = img.resize((new_w, new_h), Image.Resampling.LANCZOS)
        
        # Save optimized
        if filename.lower().endswith('.jpg') or filename.lower().endswith('.jpeg'):
            if img.mode != 'RGB':
                img = img.convert('RGB')
            img.save(file_path, 'JPEG', quality=82, optimize=True, progressive=True)
        elif filename.lower().endswith('.png'):
            # For RGBA, compress while preserving transparency
            img.save(file_path, 'PNG', optimize=True, compress_level=9)
            
    new_size = os.path.getsize(file_path)
    total_optimized += new_size
    savings = (1 - (new_size / orig_size)) * 100
    print(f"{filename:35} {orig_size:>9,d} B -> {new_size:>9,d} B (-{savings:4.1f}%)")

print("-" * 65)
print(f"Total: {total_original:>10,d} B -> {total_optimized:>10,d} B (-{(1 - (total_optimized / total_original)) * 100:.1f}%)")
