#!/usr/bin/env python3
"""
Generate placeholder images for all menu items in menuDataComplete.ts
Creates SVG placeholders with appropriate colors for each category
"""

import os
import re
from pathlib import Path

def extract_menu_data():
    """Extract menu items from menuDataComplete.ts"""
    menu_file = Path("data/menuDataComplete.ts")

    if not menu_file.exists():
        print("menuDataComplete.ts not found!")
        return []

    with open(menu_file, 'r', encoding='utf-8') as f:
        content = f.read()

    # Extract menu items using regex
    items = []
    # Match the menuData array items
    pattern = r'{\s*id:\s*"([^"]+)",\s*cat:\s*"([^"]+)",\s*subcategory:\s*"([^"]+)",\s*title:\s*"([^"]+)",\s*desc:\s*"([^"]+)",\s*price:\s*"([^"]+)",\s*img:\s*"([^"]+)"(?:,\s*badge:\s*"([^"]+)")?\s*}'

    matches = re.findall(pattern, content, re.MULTILINE | re.DOTALL)
    for match in matches:
        item = {
            'id': match[0],
            'cat': match[1],
            'subcategory': match[2],
            'title': match[3],
            'desc': match[4],
            'price': match[5],
            'img': match[6],
            'badge': match[7] if len(match) > 7 else None
        }
        items.append(item)

    return items

def get_category_color(cat, subcategory):
    """Get appropriate color for category"""
    colors = {
        'juices': '#FF6B35',      # Orange
        'sodas': '#FF8C42',      # Light orange
        'syrups': '#FFD23F',     # Yellow
        'hot': '#8B4513',        # Brown
        'coffee': '#654321',     # Dark brown
        'porridge': '#D2691E',   # Chocolate

        'breakfast': '#FF6347',  # Tomato
        'beef': '#DC143C',       # Crimson
        'goat': '#B22222',       # Firebrick
        'fish': '#4169E1',       # Royal blue
        'gizzards': '#8B0000',   # Dark red
        'chicken': '#FFD700',    # Gold
        'fillet': '#FFA500',     # Orange
        'beans': '#8B4513',      # Saddle brown
        'meatballs': '#A0522D',  # Sienna
        'starters': '#DEB887'    # Burlywood
    }

    # Try subcategory first, then fallback to category
    return colors.get(subcategory.lower().replace(' ', '').replace('&', ''), colors.get(cat, '#666666'))

def create_svg_placeholder(filename, title, color, width=400, height=300):
    """Create an SVG placeholder image"""
    # Truncate title if too long
    display_title = title if len(title) <= 20 else title[:17] + "..."

    svg_content = f'''<?xml version="1.0" encoding="UTF-8"?>
<svg width="{width}" height="{height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="{color}"/>
  <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="18" fill="white"
        text-anchor="middle" dominant-baseline="middle" font-weight="bold">
    {display_title}
  </text>
</svg>'''

    with open(filename, 'w', encoding='utf-8') as f:
        f.write(svg_content)

def generate_all_placeholders():
    """Generate placeholder images for all menu items"""

    items = extract_menu_data()
    print(f"Found {len(items)} menu items")

    base_path = Path("public/menu")
    created_count = 0

    for item in items:
        # Extract image path and create directory structure
        img_path = item['img']
        if img_path.startswith('/menu/'):
            img_path = img_path[6:]  # Remove '/menu/' prefix

        full_path = base_path / img_path

        # Create directory if it doesn't exist
        full_path.parent.mkdir(parents=True, exist_ok=True)

        # Create SVG placeholder
        svg_path = full_path.with_suffix('.svg')
        if not svg_path.exists():
            color = get_category_color(item['cat'], item['subcategory'])
            create_svg_placeholder(svg_path, item['title'], color)
            created_count += 1
            print(f"Created: {svg_path}")

    print(f"\n✅ Generated {created_count} placeholder images")
    print("\n📝 Next Steps:")
    print("1. Replace SVG placeholders with actual photos")
    print("2. Download high-quality food/drink images from:")
    print("   • Unsplash.com (free, high quality)")
    print("   • Pexels.com (free stock photos)")
    print("   • Pixabay.com (free commercial use)")
    print("   • Freepik.com (restaurant/cafe themed)")
    print("\n3. Use search terms like:")
    print("   • 'fresh mango juice', 'coca cola can', 'fried chicken'")
    print("   • 'kenyan breakfast', 'ugali beef stew', 'fresh passion fruit'")
    print("\n4. Image specs: 400x300px or larger, PNG/JPG format")

if __name__ == "__main__":
    generate_all_placeholders()</content>
<parameter name="filePath">c:\Users\Felix cole\Desktop\deli\delimwitu\scripts\generate_all_placeholders.py