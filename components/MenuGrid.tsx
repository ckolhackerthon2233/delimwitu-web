"use client";

import { MenuItem } from "@/types";

interface MenuGridProps {
  items: MenuItem[];
  variant?: "default" | "compact";
}

export default function MenuGrid({ items, variant = "default" }: MenuGridProps) {
  const isCompact = variant === "compact";

  if (isCompact) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="group bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:translate-y-3 hover:shadow-xl cursor-pointer"
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
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {items.map((item, idx) => (
        <div
          key={idx}
          className="bg-white rounded-lg overflow-hidden shadow-sm transition-all duration-350 hover:translate-y-2 hover:shadow-lg cursor-pointer"
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
                className="w-8 h-8 rounded-full bg-orange text-white font-bold flex items-center justify-center hover:bg-orange-hover transition-colors cursor-pointer border-0"
                title="Add to order"
              >
                +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
