"use client";

import { useState } from "react";
import { getItemsByCategory, getItemsByMultipleCategories } from "@/data/menuData";
import FilterButton from "@/components/FilterButton";
import MenuGrid from "@/components/MenuGrid";

export default function FoodPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = ["all", "breakfast", "lunch", "mains", "sides", "desserts"];
  const filteredItems =
    activeFilter === "all"
      ? getItemsByMultipleCategories([
          "breakfast",
          "lunch",
          "mains",
          "sides",
          "desserts",
        ])
      : getItemsByCategory(activeFilter);

  const getCategoryTitle = (cat: string) => {
    const titles: Record<string, string> = {
      all: "Food Menu",
      breakfast: "Breakfast Menu",
      lunch: "Lunch Menu",
      mains: "Main Course",
      sides: "Sides & Starters",
      desserts: "Desserts",
    };
    return titles[cat] || cat.charAt(0).toUpperCase() + cat.slice(1);
  };

  const getCategoryDescription = (cat: string) => {
    const descriptions: Record<string, string> = {
      all: "Explore our full food selection",
      breakfast: "Start your day with our delicious breakfast selections",
      lunch: "Enjoy our lunch specials and hearty midday meals",
      mains: "Heartier dishes to satisfy your appetite",
      sides: "Perfect accompaniments to your meal",
      desserts: "Sweet treats to end your meal",
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
         </div>
       </div>
     </div>
   );
 }
