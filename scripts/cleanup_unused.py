import os
import shutil

# 1. Target images to KEEP in public/images
KEEP_IMAGES = {
    'arch_door_full.webp',
    'arch_door_left.webp',
    'arch_door_right.webp',
    'cartoon_bride_clean.webp',
    'cartoon_groom_clean.webp',
    'couple_full.webp',
    'gates_hall.jpg',
    'hanging_diyas_transparent.webp',
    'hero_mandap.webp',
    'mangal_kalash_top.jpg',
    'marigold_bells_transparent.webp',
    'musicians_footer.webp',
    'peacock_feather_transparent.webp',
    'thankyou_garland_transparent.webp'
}

public_images_dir = os.path.abspath('public/images')
deleted_images = []
kept_images = []

for filename in os.listdir(public_images_dir):
    file_path = os.path.join(public_images_dir, filename)
    if os.path.isfile(file_path):
        if filename in KEEP_IMAGES:
            kept_images.append(filename)
        else:
            os.remove(file_path)
            deleted_images.append(filename)

print(f"Deleted {len(deleted_images)} unused images from public/images:")
for d in sorted(deleted_images):
    print(f"  - {d}")

print(f"\nKept {len(kept_images)} required images in public/images:")
for k in sorted(kept_images):
    print(f"  + {k}")

# 2. Remove legacy directory if present
legacy_dir = os.path.abspath('legacy')
if os.path.exists(legacy_dir):
    shutil.rmtree(legacy_dir)
    print(f"\nRemoved legacy directory: {legacy_dir}")

# 3. Remove root assets directory if present (duplicate mp3, audio is in public/assets)
root_assets_dir = os.path.abspath('assets')
if os.path.exists(root_assets_dir):
    shutil.rmtree(root_assets_dir)
    print(f"Removed redundant root assets directory: {root_assets_dir}")

# 4. Clean scratch PNG files in scripts
scripts_dir = os.path.abspath('scripts')
for f in os.listdir(scripts_dir):
    if f.endswith('.png'):
        try:
            os.remove(os.path.join(scripts_dir, f))
            print(f"Cleaned script test image: {f}")
        except:
            pass

print("\nCleanup completed successfully!")
