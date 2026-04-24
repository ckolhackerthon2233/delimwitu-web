"use client";

import { getItemsByCategory } from "@/data/menuData";

export default function DrinksPage() {
  const filteredItems = getItemsByCategory("drinks");

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream via-white to-warm-white">
      {/* Hero Section */}
      <div className="pt-32 pb-20 px-6 bg-gradient-to-r from-dark-brown to-orange">
        <div className="max-w-6xl mx-auto text-center text-white">
          <h1 className="text-6xl md:text-7xl font-black mb-6">Beverages</h1>
          <p className="text-xl md:text-2xl mb-4 text-white/90">
            Quench your thirst with our refreshing drinks
          </p>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            From premium cold brews to exotic smoothies and specialty beverages
          </p>
        </div>
      </div>

      {/* Drinks Section */}
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
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
              their own
            </p>
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

          {/* Quick Navigation */}
          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-6">Looking for something else?</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/menu"
                className="inline-flex items-center gap-2 px-6 py-2 bg-dark-brown text-white text-xs font-semibold uppercase rounded hover:bg-opacity-90 transition-all"
              >
                View All Menu
              </a>
              <a
                href="/menu/food"
                className="inline-flex items-center gap-2 px-6 py-2 bg-transparent text-dark-brown text-xs font-semibold uppercase border-1.5 border-dark-brown rounded hover:bg-dark-brown hover:text-white transition-all"
              >
                View Food Menu
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
