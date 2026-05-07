#!/usr/bin/env python3
"""
Image Download Helper for Delimwitu Cafe
Downloads product images from free image sources and organizes them by category
"""

import os
import json
import urllib.request
from pathlib import Path

# Create placeholder marker file to indicate where to place images
def create_image_placeholders():
    """Create placeholder text files for each image location"""
    
    categories = {
        "drinks": ["juices", "sodas", "syrups", "hot", "coffee", "porridge"],
        "food": ["breakfast", "beef", "goat", "fish", "gizzards", "chicken", "fillet", "beans", "meatballs", "starters"]
    }
    
    base_path = Path("public/menu")
    
    for cat_type, subcats in categories.items():
        for subcat in subcats:
            path = base_path / cat_type / subcat
            path.mkdir(parents=True, exist_ok=True)
            
            # Create a placeholder file
            placeholder = path / "README.md"
            if not placeholder.exists():
                placeholder.write_text(f"""# {subcat.title()} Images

Place images for {subcat} items in this folder.

Image naming convention:
- Use kebab-case (lowercase with hyphens)
- Example: blended-juice.png, coke-300.png
- Include size in name if multiple sizes: mango-juice.png, mango-juice-500.png

Recommended image sources:
- Unsplash.com
- Pexels.com
- Pixabay.com
- Freepik.com

Search terms: See /public/IMAGE_LINKS_AND_ORGANIZATION.txt
""")

def create_sample_images():
    """Create simple colored placeholder images"""
    try:
        from PIL import Image, ImageDraw, ImageFont
        
        colors = {
            "drinks": (173, 216, 230),  # Light blue
            "food": (240, 128, 128),     # Light red
        }
        
        base_path = Path("public/menu")
        
        for cat_type in ["drinks", "food"]:
            for item in (base_path / cat_type).iterdir():
                if item.is_dir() and item.name != "__pycache__":
                    img_path = item / "placeholder.png"
                    if not img_path.exists():
                        # Create a 400x300 placeholder image
                        img = Image.new('RGB', (400, 300), color=colors.get(cat_type, (200, 200, 200)))
                        draw = ImageDraw.Draw(img)
                        
                        # Add text
                        text = item.name.replace('_', ' ').title()
                        draw.text((20, 130), f"Place {text} images here", fill=(0, 0, 0))
                        draw.text((20, 160), "Image size: 400x300px recommended", fill=(100, 100, 100))
                        
                        img.save(img_path)
                        print(f"Created placeholder: {img_path}")
    except ImportError:
        print("PIL not installed. Install with: pip install Pillow")
        print("Skipping placeholder image creation.")

def main():
    print("Delimwitu Cafe - Image Setup Helper")
    print("=" * 50)
    
    # Create folder structure
    print("\n1. Creating folder structure...")
    create_image_placeholders()
    print("   ✓ Folder structure created successfully!")
    
    # Create sample images (optional)
    print("\n2. Creating placeholder images...")
    try:
        create_sample_images()
        print("   ✓ Placeholder images created!")
    except Exception as e:
        print(f"   ⚠ Could not create placeholder images: {e}")
    
    print("\n" + "=" * 50)
    print("NEXT STEPS:")
    print("-" * 50)
    print("1. Review IMAGE_LINKS_AND_ORGANIZATION.txt for sourcing recommendations")
    print("2. Download images from free sources:")
    print("   - Unsplash.com")
    print("   - Pexels.com")
    print("   - Pixabay.com")
    print("   - Freepik.com")
    print("\n3. Place images in appropriate folders:")
    print("   public/menu/[category]/[subcategory]/[image-name].png")
    print("\n4. Image naming: Use kebab-case")
    print("   Example: mango-juice.png, coke-300.png, jolof-beef-full.png")
    print("\n5. Recommended image size: 400x300px or larger")
    print("\nFor more details, see: public/IMAGE_LINKS_AND_ORGANIZATION.txt")

if __name__ == "__main__":
    main()
