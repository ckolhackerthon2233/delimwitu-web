"use client";

import { useState } from "react";
import { getItemsByCategory } from "@/data/menuData";

export default function FoodPage() {
  const [activeFilter, setActiveFilter] = useState("breakfast");

  const categories = ["breakfast", "lunch"];
  const filteredItems = getItemsByCategory(activeFilter);

  const getCategoryTitle = (cat: string) => {
    const titles: Record<string, string> = {
      breakfast: "Breakfast Menu",
      lunch: "Lunch Menu",
    };
    return titles[cat] || cat.charAt(0).toUpperCase() + cat.slice(1);
  };

  const getCategoryDescription = (cat: string) => {
    const descriptions: Record<string, string> = {
      breakfast: "Start your day with our delicious breakfast selections",
      lunch: "Enjoy our lunch specials and hearty midday meals",
    };
    return descriptions[cat] || "";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream via-white to-warm-white">
      {/* Hero Section */}
      <div className="pt-32 pb-20 px-6 bg-gradient-to-r from-dark-brown to-orange">
        <div className="max-w-6xl mx-auto text-center text-white">
          <h1 className="text-6xl md:text-7xl font-black mb-6">Food Menu</h1>
          <p className="text-xl md:text-2xl mb-4 text-white/90">
            Discover our breakfast and lunch offerings
          </p>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Fresh ingredients prepared with passion for your dining pleasure
          </p>
        </div>
      </div>

      {/* Food Section */}
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-14 max-md:mb-10">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-orange mb-3">
              Choose Your Category
            </span>
            <h2 className="text-4xl font-bold text-dark-brown max-md:text-3xl">
              {getCategoryTitle(activeFilter)}
            </h2>
            <div className="w-15 h-0.75 bg-orange mx-auto my-6 rounded"></div>
            <p className="max-w-96 mx-auto text-base text-gray-700">
              {getCategoryDescription(activeFilter)}
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex justify-center gap-3 flex-wrap mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-6 py-3 rounded-full border-2 text-sm font-medium cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                  activeFilter === cat
                    ? "bg-dark-brown text-white border-dark-brown shadow-lg"
                    : "bg-transparent text-gray-600 border-tan hover:bg-dark-brown hover:text-white hover:border-dark-brown"
                }`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>

          {/* Menu Grid - Fully Responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredItems.map((item, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:translate-y-minus-3 hover:shadow-xl cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative aspect-square overflow-hidden bg-gray-100">
                  {item.badge && (
                    <div className="absolute top-2 right-2 bg-orange text-white px-3 py-1 text-xs font-semibold uppercase z-10 rounded">
                      {item.badge}
                    </div>
                  )}
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-110"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = item.fallback;
                    }}
                  />
                </div>

                {/* Card Body */}
                <div className="p-4 md:p-5">
                  <h3 className="text-base md:text-lg font-semibold text-dark-brown mb-2 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600 mb-4 line-clamp-2">
                    {item.desc}
                  </p>

                  {/* Footer with Price and Button */}
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <div className="font-semibold text-dark-brown text-sm md:text-base">
                      {item.price}
                    </div>
                    <button
                      className="w-8 h-8 rounded-full bg-orange text-white font-bold flex items-center justify-center hover:bg-orange-hover transition-all duration-300 transform hover:scale-110 cursor-pointer border-0"
                      title="Add to order"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Results Count */}
          <div className="text-center mt-12 text-gray-600">
            <p className="text-sm">
              Showing {filteredItems.length} item{filteredItems.length !== 1 ? "s" : ""}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
