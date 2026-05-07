#!/usr/bin/env python3
"""
Generate placeholder images for Delimwitu Cafe menu items
Creates colored rectangles with text labels as placeholders
"""

import os
from pathlib import Path

def create_svg_placeholder(filename, title, color, width=400, height=300):
    """Create an SVG placeholder image"""
    svg_content = f'''<?xml version="1.0" encoding="UTF-8"?>
<svg width="{width}" height="{height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="{color}"/>
  <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="24" fill="white"
        text-anchor="middle" dominant-baseline="middle" font-weight="bold">
    {title}
  </text>
</svg>'''

    with open(filename, 'w', encoding='utf-8') as f:
        f.write(svg_content)

def generate_placeholders():
    """Generate placeholder images for all menu items"""

    # Color schemes for different categories
    colors = {
        'juices': '#FF6B35',    # Orange
        'sodas': '#FF8C42',    # Light orange
        'syrups': '#FFD23F',   # Yellow
        'hot': '#8B4513',      # Brown
        'coffee': '#654321',   # Dark brown
        'porridge': '#D2691E', # Chocolate

        'breakfast': '#FF6347', # Tomato
        'beef': '#DC143C',     # Crimson
        'goat': '#B22222',     # Firebrick
        'fish': '#4169E1',     # Royal blue
        'gizzards': '#8B0000', # Dark red
        'chicken': '#FFD700',  # Gold
        'fillet': '#FFA500',   # Orange
        'beans': '#8B4513',    # Saddle brown
        'meatballs': '#A0522D', # Sienna
        'starters': '#DEB887'  # Burlywood
    }

    base_path = Path("public/menu")

    # Generate placeholders for drinks
    drinks_path = base_path / "drinks"
    for subcat in ['juices', 'sodas', 'syrups', 'hot', 'coffee', 'porridge']:
        subcat_path = drinks_path / subcat
        if subcat_path.exists():
            color = colors.get(subcat, '#666666')
            # Create a few sample images for each subcategory
            samples = ['sample-1', 'sample-2', 'sample-3']
            for sample in samples:
                filename = subcat_path / f"{sample}.svg"
                if not filename.exists():
                    create_svg_placeholder(filename, f"{subcat.title()} {sample}", color)

    # Generate placeholders for food
    food_path = base_path / "food"
    for subcat in ['breakfast', 'beef', 'goat', 'fish', 'gizzards', 'chicken', 'fillet', 'beans', 'meatballs', 'starters']:
        subcat_path = food_path / subcat
        if subcat_path.exists():
            color = colors.get(subcat, '#666666')
            # Create a few sample images for each subcategory
            samples = ['sample-1', 'sample-2', 'sample-3']
            for sample in samples:
                filename = subcat_path / f"{sample}.svg"
                if not filename.exists():
                    create_svg_placeholder(filename, f"{subcat.title()} {sample}", color)

    print("Placeholder images generated successfully!")
    print("Note: These are temporary SVG placeholders.")
    print("Replace them with actual food/drink photos from:")
    print("- Unsplash.com")
    print("- Pexels.com")
    print("- Pixabay.com")
    print("- Freepik.com")

if __name__ == "__main__":
    generate_placeholders()</content>
<parameter name="filePath">c:\Users\Felix cole\Desktop\deli\delimwitu\scripts\generate_placeholders.py