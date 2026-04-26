"use client";

import Link from "next/link";
import { useState } from "react";
import { getItemsByCategory, getItemsByMultipleCategories } from "@/data/menuData";
import FilterButton from "@/components/FilterButton";
import MenuGrid from "@/components/MenuGrid";

export default function DrinksPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = ["all", "hot", "cold", "alcoholic", "non-alcoholic"];
  const filteredItems =
    activeFilter === "all"
      ? getItemsByCategory("drinks")
      : getItemsByMultipleCategories(["drinks"]).filter(
          (item) => item.subcategory === activeFilter
        );

  const getCategoryTitle = (cat: string) => {
    const titles: Record<string, string> = {
      all: "Beverages",
      hot: "Hot Drinks",
      cold: "Cold Drinks",
      alcoholic: "Alcoholic Beverages",
      "non-alcoholic": "Non-Alcoholic Beverages",
    };
    return titles[cat] || cat.charAt(0).toUpperCase() + cat.slice(1);
  };

  const getCategoryDescription = (cat: string) => {
    const descriptions: Record<string, string> = {
      all: "Explore our full beverage selection",
      hot: "Warm beverages to comfort and refresh",
      cold: "Chilled drinks to cool and revitalize",
      alcoholic: "Spirited beverages for special occasions",
      "non-alcoholic": "Refreshing drinks without alcohol",
    };
    return descriptions[cat] || "";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream via-white to-warm-white">
      {/* Hero Section */}
      <div className="pt-32 pb-20 px-6 bg-gradient-to-r from-dark-brown to-orange">
        <div className="text-center text-white">
          <h1 className="text-6xl md:text-7xl font-black mb-6">
            {getCategoryTitle(activeFilter)}
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-white/90">
            Quench your thirst with our refreshing drinks
          </p>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            {getCategoryDescription(activeFilter)}
          </p>
        </div>
      </div>

      {/* Drinks Section */}
      <div className="py-20 px-6">
        <div className="">
          {/* Section Header */}
          <div className="text-center mb-14 max-md:mb-10">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-orange mb-3">
              Stay Refreshed
            </span>
            <h2 className="text-4xl font-bold text-dark-brown max-md:text-3xl">
              Our Beverage Selection
            </h2>
            <div className="w-15 h-0.75 bg-orange mx-auto my-6 rounded"></div>
            <p className="max-w-96 mx-auto text-base text-gray-700">
              Carefully crafted beverages to complement your meal or enjoy on
              their own.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex justify-center gap-3 flex-wrap mb-12">
            {categories.map((cat) => (
              <FilterButton
                key={cat}
                label={cat}
                isActive={activeFilter === cat}
                onClick={() => setActiveFilter(cat)}
              />
            ))}
          </div>

          {/* Menu Grid - Fully Responsive */}
          <MenuGrid items={filteredItems} variant="compact" />

          {/* Results Count */}
          <div className="text-center mt-12 text-gray-600">
            <p className="text-sm">
              Showing {filteredItems.length} item{filteredItems.length !== 1 ? "s" : ""}
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-6">Looking for something else?</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/menu"
                className="inline-flex items-center gap-2 px-6 py-2 bg-dark-brown text-white text-xs font-semibold uppercase rounded hover:bg-opacity-90 transition-all"
              >
                View All Menu
              </Link>
              <Link
                href="/menu/food"
                className="inline-flex items-center gap-2 px-6 py-2 bg-transparent text-dark-brown text-xs font-semibold uppercase border-1.5 border-dark-brown rounded hover:bg-dark-brown hover:text-white transition-all"
              >
                View Food Menu
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
