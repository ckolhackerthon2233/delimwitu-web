"use client";

import { useState } from "react";
import type { MenuItem } from "@/types";
import { menuData, getSubcategoryItems } from "@/data/menuDataComplete";
import FilterButton from "@/components/FilterButton";
import MenuGrid from "@/components/MenuGrid";

export default function FoodMenuPage() {
  const [activeSubfilter, setActiveSubfilter] = useState("all");

  const subcategories = ["all", "breakfast", "starters", "bowls-salads", "lunch-dinner", "burgers", "pizza"];
  const filteredItems: MenuItem[] = getSubcategoryItems("food", activeSubfilter === "all" ? undefined : activeSubfilter);
  const classicBreakfasts = menuData.filter((item) => item.subcategory === "Everyday Classic Breakfasts");

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
          <div className="sticky top-0 z-40 bg-cream/95 backdrop-blur-sm border-b border-tan/40 pb-4 mb-6">
            <div className="flex justify-center gap-1 flex-nowrap overflow-x-auto px-4 md:px-0 py-4">
              {subcategories.map((subcat) => (
                <FilterButton
                  key={subcat}
                  label={subcat}
                  isActive={activeSubfilter === subcat}
                  onClick={() => setActiveSubfilter(subcat)}
                />
              ))}
            </div>
          </div>

          {/* Featured Breakfast Picks */}
          <div className="mb-10 rounded-[2rem] border border-orange/20 bg-cream/90 p-6 shadow-sm">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-orange font-semibold mb-2">
                  Morning favourites
                </p>
                <h3 className="text-3xl font-black text-dark-brown">
                  Everyday Classic Breakfasts
                </h3>
                <p className="mt-2 max-w-2xl text-sm text-gray-600">
                  A bright little section for sunrise cravings and cosy morning moments — chef-picked breakfast bites with a playful twist.
                </p>
              </div>
              <span className="inline-flex items-center rounded-full bg-orange/10 px-4 py-2 text-sm font-semibold text-orange">
                Mornings made delicious
              </span>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {classicBreakfasts.map((item) => (
                <div
                  key={item.id ?? item.title}
                  className="rounded-full border border-tan bg-white px-4 py-2 text-sm font-medium text-dark-brown shadow-sm"
                >
                  {item.title}
                  <span className="ml-2 text-xs text-gray-500">
                    +{item.price.replace("KES", "Ksh")}
                  </span>
                </div>
              ))}
            </div>
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
