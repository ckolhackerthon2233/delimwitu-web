"use client";

import { useState } from "react";
import { menuData } from "@/data/menuData";
import FilterButton from "@/components/FilterButton";
import MenuGrid from "@/components/MenuGrid";

export default function MenuPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = ["all", "breakfast", "lunch", "mains", "desserts", "drinks"];
  const filteredItems =
    activeFilter === "all"
      ? menuData
      : menuData.filter((item) => item.cat === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream via-white to-warm-white">
      {/* Hero Section */}
      <div className="pt-32 pb-20 px-6 bg-gradient-to-r from-dark-brown to-orange">
        <div className="max-w-6xl mx-auto text-center text-white">
          <h1 className="text-6xl md:text-7xl font-black mb-6">Our Complete Menu</h1>
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
          {/* Section Header */}
          <div className="text-center mb-14 max-md:mb-10">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-orange mb-3">
              What We Serve
            </span>
            <h2 className="text-4xl font-bold text-dark-brown max-md:text-3xl">
              All Menu Items
            </h2>
            <div className="w-15 h-0.75 bg-orange mx-auto my-6 rounded"></div>
            <p className="max-w-96 mx-auto text-base text-gray-700">
              Discover our diverse selection of breakfast, lunch, main courses,
              desserts, and refreshing beverages.
            </p>
          </div>

           {/* Filter Tabs */}
           <div className="flex justify-center gap-2 flex-wrap mb-10">
              {categories.map((cat) => (
                <FilterButton
                  key={cat}
                  label={cat}
                  isActive={activeFilter === cat}
                  onClick={() => setActiveFilter(cat)}
                />
              ))}
            </div>

          {/* Menu Grid */}
          <MenuGrid items={filteredItems} variant="default" />

          {/* Results Count */}
          <div className="text-center mt-10 text-gray-600">
            <p className="text-sm">
              Showing {filteredItems.length} item{filteredItems.length !== 1 ? "s" : ""}
              {activeFilter !== "all" && ` in ${activeFilter}`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
