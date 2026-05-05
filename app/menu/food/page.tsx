"use client";

import { useState } from "react";
import type { MenuItem } from "@/types";
import { menuData, getSubcategoryItems } from "@/data/menuData";
import FilterButton from "@/components/FilterButton";
import MenuGrid from "@/components/MenuGrid";

export default function FoodMenuPage() {
  const [activeSubfilter, setActiveSubfilter] = useState("all");

  const subcategories = ["all", "breakfast", "starters", "bowls-salads", "lunch-dinner", "burgers", "pizza"];
  const filteredItems: MenuItem[] = getSubcategoryItems("food", activeSubfilter === "all" ? undefined : activeSubfilter);

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream via-white to-warm-white">
      {/* Hero Section */}
      <div className="pt-32 pb-20 px-6 bg-gradient-to-r from-green-800 via-green-900 to-orange">
        <div className="max-w-6xl mx-auto text-center text-white">
          <h1 className="text-6xl md:text-7xl font-black mb-6">Food Menu</h1>
          <p className="text-xl md:text-2xl mb-4 text-white/90">
            Our savory masterpieces
          </p>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            From breakfast bowls to gourmet pizzas, taste the art in every bite
          </p>
        </div>
      </div>

      {/* Menu Section */}
      <div className="py-20 px-6">
        <div className="w-full">
          {/* Section Header */}
          <div className="text-center mb-14 max-md:mb-10">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-orange mb-3">
              Food Collection
            </span>
            <h2 className="text-4xl font-bold text-dark-brown max-md:text-3xl">
              Food Menu Items
            </h2>
            <div className="w-15 h-0.75 bg-orange mx-auto my-6 rounded"></div>
            <p className="max-w-96 mx-auto text-base text-gray-700">
              Explore our diverse food offerings from morning to night.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex justify-center gap-2 flex-wrap mb-10">
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
