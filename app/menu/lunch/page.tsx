"use client";

import { useState } from "react";
import { getItemsByCategory } from "@/data/menuData";
import FilterButton from "@/components/FilterButton";
import MenuGrid from "@/components/MenuGrid";

export default function LunchPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = ["all", "fish", "chicken", "beef"];
  const filteredItems =
    activeFilter === "all"
      ? getItemsByCategory("lunch")
      : getItemsByCategory("lunch").filter(
          (item) => item.subcategory === activeFilter
        );

  const getCategoryTitle = (cat: string) => {
    const titles: Record<string, string> = {
      all: "Lunch Menu",
      fish: "Fish & Seafood",
      chicken: "Chicken Dishes",
      beef: "Beef Dishes",
    };
    return titles[cat] || cat.charAt(0).toUpperCase() + cat.slice(1);
  };

  const getCategoryDescription = (cat: string) => {
    const descriptions: Record<string, string> = {
      all: "Enjoy our lunch specials and hearty midday meals",
      fish: "Fresh fish and seafood preparations",
      chicken: "Delicious chicken specialties",
      beef: "Premium beef selections",
    };
    return descriptions[cat] || "";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream via-white to-warm-white">
      {/* Hero Section */}
      <div className="pt-32 pb-20 px-6 bg-gradient-to-r from-dark-brown to-orange">
        <div className="text-center text-white">
          <h1 className="text-6xl md:text-7xl font-black mb-6">Lunch</h1>
          <p className="text-xl md:text-2xl mb-4 text-white/90">
            Perfect midday meals
          </p>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Fresh ingredients prepared with passion for your dining pleasure
          </p>
        </div>
      </div>



      {/* Food Section */}
      <div className="py-20 px-6">
        <div className="">
          {/* Section Header */}
          <div className="text-center mb-14 max-md:mb-10">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-orange mb-3">
              Lunch Types
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
              <FilterButton
                key={cat}
                label={cat.charAt(0).toUpperCase() + cat.slice(1)}
                isActive={activeFilter === cat}
                onClick={() => setActiveFilter(cat)}
              />
            ))}
          </div>

          {/* Menu Grid */}
          <MenuGrid items={filteredItems} />

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
