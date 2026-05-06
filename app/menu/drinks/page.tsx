"use client";

import { useState } from "react";
import type { MenuItem } from "@/types";
import { getSubcategoryItems } from "@/data/menuData";
import FilterButton from "@/components/FilterButton";
import MenuGrid from "@/components/MenuGrid";

export default function DrinksMenuPage() {
  const [activeSubfilter, setActiveSubfilter] = useState("all");

  const subcategories = ["all", "non-alcoholic"];
  const filteredItems: MenuItem[] = getSubcategoryItems("drinks", activeSubfilter === "all" ? undefined : activeSubfilter);

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream via-white to-warm-white">
      {/* Hero Section */}
      <div className="pt-32 pb-20 px-6 bg-gradient-to-r from-blue-800 via-indigo-900 to-orange">
        <div className="max-w-6xl mx-auto text-center text-white">
          <h1 className="text-6xl md:text-7xl font-black mb-6">Drinks Menu</h1>
          <p className="text-xl md:text-2xl mb-4 text-white/90">
            Refreshing beverages
          </p>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Perfect companions for your meals
          </p>
        </div>
      </div>

      {/* Menu Section */}
      <div className="py-20 px-6">
        <div className="w-full">
          {/* Section Header */}
          <div className="text-center mb-14 max-md:mb-10">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-orange mb-3">
              Drinks Collection
            </span>
            <h2 className="text-4xl font-bold text-dark-brown max-md:text-3xl">
              Drinks Menu Items
            </h2>
            <div className="w-15 h-0.75 bg-orange mx-auto my-6 rounded"></div>
            <p className="max-w-96 mx-auto text-base text-gray-700">
              Quench your thirst with our selection.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex justify-center gap-1 flex-nowrap overflow-x-auto mb-10 pb-2">
            {subcategories.map((subcat) => (
              <FilterButton
                key={subcat}
                label={subcat}
                isActive={activeSubfilter === subcat}
                onClick={() => setActiveSubfilter(subcat)}
              />
            ))}
          </div>

          {/* Menu Grid */}
          <MenuGrid items={filteredItems} variant="default" />

          {/* Results Count */}
          <div className="text-center mt-10 text-gray-600">
            <p className="text-sm">
              Showing {filteredItems.length} item{filteredItems.length !== 1 ? "s" : ""}{activeSubfilter !== "all" && ` in ${activeSubfilter}`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
