"use client";

import { useState } from "react";
import { menuData, getSubcategoriesForCategory } from "@/data/menuDataComplete";
import MenuGrid from "@/components/MenuGrid";
import type { MenuItem } from "@/types";

const MAIN_CATEGORIES = [
  { id: "food", label: "FOOD" },
  { id: "bakery", label: "BAKERY" },
  { id: "drinks", label: "DRINKS" }
];

export default function MenuPage() {
  const [activeMainCat, setActiveMainCat] = useState<"food" | "bakery" | "drinks">("food");
  const [activeSubCat, setActiveSubCat] = useState<string | null>(null);

  // Get subcategories for active main category
  const subcategories = getSubcategoriesForCategory(activeMainCat);
  
  // Set first subcategory as active if none selected
  const selectedSubCat = activeSubCat || (subcategories.length > 0 ? subcategories[0] : null);

  // Filter items based on active main category and subcategory
  const filteredItems: MenuItem[] = menuData.filter(
    (item) => item.cat === activeMainCat && (selectedSubCat ? item.subcategory === selectedSubCat : true)
  );

  const handleMainCatChange = (catId: string) => {
    setActiveMainCat(catId as "food" | "bakery" | "drinks");
    setActiveSubCat(null); // Reset subcategory
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream via-white to-warm-white">
      {/* Seasonal Section with Pattern */}
      <div className="py-16 px-6 bg-gray-100 relative overflow-hidden">
        {/* Decorative Pattern Background */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="diagonal" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="40" y2="40" stroke="#3D1F0D" strokeWidth="2" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#diagonal)" />
          </svg>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center">
              <h2 className="text-8xl md:text-9xl font-black text-orange/15 mb-4 leading-none">SUMMER</h2>
              <h3 className="text-3xl md:text-4xl font-light text-orange italic mb-6">Seasonal Symphonies & Freshness</h3>
            </div>
            <div className="text-center md:text-center text-gray-700 leading-relaxed">
              <p className="text-base mb-4">
                Inspired by the spirit of summer, Artcaffè unveils a curated menu infused with vibrant Latin zest designed to delight the palate. Explore bright, artfully layered wraps, indulge in flavour-forward bowls crafted with seasonal vegetables, and discover flavourful new creations of our coffees and signature cocktails. Each plate, from the first bite, is a testament to culinary creativity, freshness, and a passionate celebration of the season's finest moments
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Section with Pattern Accents */}
      <div className="py-20 px-6 relative">
        {/* Dot Pattern Accent */}
        <div className="absolute top-0 right-0 w-96 h-96 opacity-3 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dots" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                <circle cx="15" cy="15" r="3" fill="#E8703A" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Main Category Tabs - Left Aligned - Sticky with Pattern */}
          <div className="sticky top-0 z-50 bg-white py-6 px-6 -mx-6 mb-8 shadow-sm relative">
            {/* Subtle hexagon pattern accent */}
            <div className="absolute bottom-0 left-0 w-full h-1 opacity-5" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width=%22100%22 height=%224%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cpath d=%22M0 2 L5 0 L10 2 L10 4 L5 6 L0 4 Z%22 fill=%22%233D1F0D%22 opacity=%220.3%22/%3E%3C/svg%3E')", backgroundRepeat: "repeat-x"}}></div>
            
            <div className="flex gap-8 flex-wrap items-center pb-6 border-b border-gray-200">
              {MAIN_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleMainCatChange(cat.id)}
                  className={`text-lg font-bold tracking-widest transition-all duration-200 pb-2 border-b-4 ${
                    activeMainCat === cat.id
                      ? "text-dark-green border-dark-green"
                      : "text-gray-600 border-transparent hover:text-dark-brown"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Horizontal Subcategories with Pattern Accent */}
          <div className="mb-12 overflow-x-auto relative">
            {/* Leaf decorations */}
            <div className="absolute -top-8 left-0 opacity-10 text-orange text-4xl">🍃</div>
            <div className="absolute -bottom-8 right-0 opacity-10 text-orange text-4xl">🌿</div>
            
            <div className="flex gap-3 flex-nowrap">
              {subcategories.map((subcat) => (
                <button
                  key={subcat}
                  onClick={() => setActiveSubCat(subcat)}
                  className={`px-4 py-2 rounded-full border-2 text-sm font-semibold cursor-pointer transition-all duration-200 whitespace-nowrap ${
                    selectedSubCat === subcat
                      ? "bg-dark-green text-white border-dark-green"
                      : "bg-white text-dark-brown border-dark-brown hover:bg-dark-brown hover:text-white"
                  }`}
                >
                  {subcat}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count with Line Pattern */}
          <div className="mb-8 text-sm text-gray-600 relative">
            <div className="absolute -left-6 top-0 bottom-0 w-1 opacity-10" style={{backgroundImage: "repeating-linear-gradient(90deg, #E8703A 0px, #E8703A 2px, transparent 2px, transparent 6px)"}}></div>
            <p>
              Showing {filteredItems.length} item{filteredItems.length !== 1 ? "s" : ""} in{" "}
              <span className="font-semibold">{selectedSubCat || "all"}</span>
            </p>
          </div>

          {/* Menu Grid */}
          <MenuGrid items={filteredItems} variant="default" />

          {/* Empty State with Pattern */}
          {filteredItems.length === 0 && (
            <div className="text-center py-20 relative">
              <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
                <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="waves" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M0 20 Q 10 10, 20 20 T 40 20" stroke="#E8703A" fill="none" strokeWidth="2" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#waves)" />
                </svg>
              </div>
              <p className="text-gray-500 text-lg relative z-10">No items found in this category.</p>
            </div>
          )}
        </div>
        
        {/* Decorative accent on the left */}
        <div className="absolute bottom-20 left-0 w-48 h-48 opacity-5 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="circles" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                <circle cx="25" cy="25" r="20" fill="none" stroke="#3D1F0D" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circles)" />
          </svg>
        </div>
      </div>
    </div>
  );
}
