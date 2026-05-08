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
      {/* Hero Section */}
      <div className="pt-32 pb-20 px-6 bg-gradient-to-r from-dark-brown to-orange">
        <div className="max-w-6xl mx-auto text-center text-white">
          <h1 className="text-6xl md:text-7xl font-black mb-6">Our Menu Collections</h1>
          <p className="text-xl md:text-2xl mb-4 text-white/90">
            Explore all our delicious offerings
          </p>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Handcrafted dishes featuring the finest local and international ingredients
          </p>
        </div>
      </div>

      {/* Menu Section */}
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Main Category Tabs - Left Aligned */}
          <div className="flex gap-4 mb-16 flex-wrap">
            {MAIN_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleMainCatChange(cat.id)}
                className={`px-8 py-3 text-lg font-bold tracking-widest transition-all duration-200 border-b-4 ${
                  activeMainCat === cat.id
                    ? "text-orange border-orange"
                    : "text-gray-600 border-transparent hover:text-dark-brown"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Section Header */}
          <div className="mb-10">
            <h2 className="text-4xl font-bold text-dark-brown max-md:text-3xl capitalize mb-8">
              {activeMainCat}
            </h2>
            <div className="w-20 h-1 bg-orange rounded"></div>
          </div>

          {/* Horizontal Subcategories */}
          <div className="mb-12 overflow-x-auto">
            <div className="flex gap-2 flex-nowrap">
              {subcategories.map((subcat) => (
                <button
                  key={subcat}
                  onClick={() => setActiveSubCat(subcat)}
                  className={`px-3 py-2 rounded-full border-2 text-xs font-medium cursor-pointer transition-all duration-200 whitespace-nowrap ${
                    selectedSubCat === subcat
                      ? "bg-dark-brown text-white border-dark-brown shadow-lg"
                      : "bg-transparent text-gray-700 border-orange hover:bg-orange/10 hover:border-orange"
                  }`}
                >
                  {subcat}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-8 text-sm text-gray-600">
            <p>
              Showing {filteredItems.length} item{filteredItems.length !== 1 ? "s" : ""} in{" "}
              <span className="font-semibold">{selectedSubCat || "all"}</span>
            </p>
          </div>

          {/* Menu Grid */}
          <MenuGrid items={filteredItems} variant="default" />

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">No items found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
