"use client";

import { useState } from "react";
import Link from "next/link";
import { menuData } from "@/data/menuData";
import FilterButton from "@/components/FilterButton";

export default function Menu() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredItems =
    activeFilter === "all"
      ? menuData.slice(0, 8)
      : menuData
          .filter((item) => item.cat === activeFilter)
          .slice(0, 8);

  return (
    <section id="menu" className="py-24 bg-cream relative max-md:py-16">
      {/* "MENU" watermark text */}
      <div className="absolute top-12 right-8 text-9xl font-black text-tan opacity-40 pointer-events-none line-height-1 z-0 max-md:text-6xl">
        MENU
      </div>

      <div className="mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14 max-md:mb-10">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-orange mb-3">
            What We Serve
          </span>
          <h2 className="text-4xl font-bold text-dark-brown max-md:text-3xl">
            Our Favourite Menu
          </h2>
          <div className="w-15 h-0.75 bg-orange mx-auto my-6 rounded"></div>
          <p className="max-w-96 mx-auto text-base text-gray-700">
            Crafted with the freshest local ingredients, every dish is a
            celebration of flavour and culture.
          </p>
        </div>

         {/* Filter Tabs */}
         <div className="flex justify-center gap-2 flex-wrap mb-10">
           {["all", "breakfast", "lunch", "mains", "desserts", "drinks"].map(
             (cat) => (
               <FilterButton
                 key={cat}
                 label={cat}
                 isActive={activeFilter === cat}
                 onClick={() => setActiveFilter(cat)}
               />
             ))}
         </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {filteredItems.map((item, idx) => {
            const itemId = item.id || item.title.toLowerCase().replace(/\s+/g, "-");
            const category = item.cat;
            return (
              <Link
                key={idx}
                href={`/menu/${category}/${itemId}`}
                className="bg-white rounded-lg overflow-hidden shadow-sm transition-all duration-350 hover:translate-y-minus-2 hover:shadow-lg cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative aspect-square overflow-hidden bg-gray-100">
                  {item.badge && (
                    <div className="absolute top-0 right-0 bg-orange text-white px-3 py-1 text-xs font-semibold uppercase z-10">
                      {item.badge}
                    </div>
                  )}
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-600 hover:scale-108"
                  />
                </div>

                {/* Card Body */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-dark-brown mb-2 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {item.desc}
                  </p>

                  {/* Footer with Price and Button */}
                  <div className="flex items-center justify-between">
                    <div className="font-semibold text-dark-brown">
                      {item.price}
                    </div>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href = `/menu/${category}/${itemId}`;
                      }}
                      className="w-8 h-8 rounded-full bg-orange text-white font-bold flex items-center justify-center hover:bg-orange-hover transition-colors cursor-pointer border-0"
                      title="View details & order"
                    >
                      →
                    </button>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* View Full Menu Button */}
        <div className="text-center mt-10">
          <a
            href="/menu"
            className="inline-flex items-center gap-2 px-8 py-3 bg-transparent text-dark-brown text-xs font-semibold uppercase tracking-wider rounded border-1.5 border-dark-brown transition-all duration-250 hover:bg-dark-brown hover:text-white"
          >
            View Full Menu
          </a>
        </div>
      </div>
    </section>
  );
}
