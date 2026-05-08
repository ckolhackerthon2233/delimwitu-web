"use client";

import { useMemo, useState } from "react";
import type { MenuItem } from "@/types";
import { menuData } from "@/data/menuDataComplete";
import FilterButton from "@/components/FilterButton";
import MenuGrid from "@/components/MenuGrid";
import DrinkMenuTable from "@/components/DrinkMenuTable";

const DRINK_FILTERS = [
  "all",
  "coffee",
  "hot beverages",
  "cold drinks",
  "smoothies & juices",
  "sodas",
  "syrups"
] as const;

const SUBCATEGORY_LOOKUP: Record<string, string | undefined> = {
  all: undefined,
  coffee: "Coffee",
  "hot beverages": "Hot Beverages",
  "cold drinks": "Cold Drinks",
  "smoothies & juices": "Smoothies & Juices",
  sodas: "Sodas",
  syrups: "Syrups"
};

const findDrinkPrice = (title: string) => {
  return menuData.find((item) => item.cat === "drinks" && item.title === title)?.price;
};

const coffeeTableRows = [
  {
    title: "Espresso",
    desc: "Classic espresso shots",
    single: findDrinkPrice("Espresso Small"),
    double: findDrinkPrice("Espresso"),
    iced: findDrinkPrice("Iced Espresso")
  },
  {
    title: "Americano",
    desc: "Smooth brewed americano",
    single: findDrinkPrice("Americano Small"),
    double: findDrinkPrice("Americano"),
    iced: findDrinkPrice("Iced Americano"),
    badge: "Popular"
  },
  {
    title: "Cappuccino",
    desc: "Creamy cappuccino",
    single: findDrinkPrice("Cappuccino Small"),
    double: findDrinkPrice("Cappuccino"),
    iced: findDrinkPrice("Iced Cappuccino")
  },
  {
    title: "Latte",
    desc: "Smooth milk latte",
    single: findDrinkPrice("Latte Small"),
    double: findDrinkPrice("Latte"),
    iced: findDrinkPrice("Iced Latte")
  },
  {
    title: "Mocha",
    desc: "Chocolate coffee drink",
    single: findDrinkPrice("Mocha Small"),
    double: findDrinkPrice("Mocha"),
    iced: findDrinkPrice("Iced Mocha")
  },
  {
    title: "Decaf Cappuccino",
    desc: "Caffeine-free cappuccino",
    single: findDrinkPrice("Decaf Cappuccino Small"),
    double: findDrinkPrice("Decaf Cappuccino")
  },
  {
    title: "Decaf Latte",
    desc: "Caffeine-free latte",
    single: findDrinkPrice("Decaf Latte")
  },
  {
    title: "Macchiato",
    desc: "Espresso with a splash of milk",
    single: findDrinkPrice("Macchiato")
  },
  {
    title: "Black Coffee",
    desc: "Simple black coffee",
    single: findDrinkPrice("Black Coffee")
  },
  {
    title: "White Coffee",
    desc: "Smooth coffee with milk",
    single: findDrinkPrice("White Coffee")
  },
  {
    title: "White Decaf",
    desc: "Decaf coffee with milk",
    single: findDrinkPrice("White Decaf")
  }
];

export default function DrinksMenuPage() {
  const [activeSubfilter, setActiveSubfilter] = useState<typeof DRINK_FILTERS[number]>("all");

  const selectedSubcategory = SUBCATEGORY_LOOKUP[activeSubfilter];

  const filteredItems: MenuItem[] = useMemo(() => {
    if (!selectedSubcategory) {
      return menuData.filter((item) => item.cat === "drinks");
    }
    return menuData.filter(
      (item) => item.cat === "drinks" && item.subcategory === selectedSubcategory
    );
  }, [selectedSubcategory]);

  const isCoffeeTable = activeSubfilter === "coffee";
  const visibleItemCount = isCoffeeTable ? coffeeTableRows.length : filteredItems.length;

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
            {DRINK_FILTERS.map((subcat) => (
              <FilterButton
                key={subcat}
                label={subcat}
                isActive={activeSubfilter === subcat}
                onClick={() => setActiveSubfilter(subcat)}
              />
            ))}
          </div>

          {/* Drinks Section */}
          {isCoffeeTable ? (
            <DrinkMenuTable
              title="Hot Coffee Menu"
              subtitle="A compact coffee price table for popular hot brews."
              note="Images can be added later once the coffee photography is available."
              rows={coffeeTableRows}
            />
          ) : (
            <MenuGrid items={filteredItems} variant="default" />
          )}

          {/* Results Count */}
          <div className="text-center mt-10 text-gray-600">
            <p className="text-sm">
              Showing {visibleItemCount} item{visibleItemCount !== 1 ? "s" : ""}{activeSubfilter !== "all" && ` in ${activeSubfilter}`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
