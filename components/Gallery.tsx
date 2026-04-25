"use client";

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-cream max-md:py-16">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 max-md:mb-12">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-orange mb-4">Moments</span>
          <h2 className="text-4xl font-bold text-dark-brown mb-6 max-md:text-3xl">Life at Delimwitu</h2>
          <div className="h-0.75 w-15 bg-orange mx-auto rounded mb-4"></div>
          <p className="max-w-lg mx-auto text-base text-gray-700">A glimpse into our kitchen, our café, and the beautiful food we create every day.</p>
        </div>

        {/* Gallery Grid - Masonry layout */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-max">
          {/* Wide image */}
          <div className="col-span-2 md:col-span-2 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <img
              src="/menu/lunch&dinner/classic-fish-_-chips-02_200x.png"
              alt="Cafe breakfast spread"
              className="w-full h-56 md:h-72 lg:h-80 object-cover hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "/hero/plate.png";
              }}
            />
          </div>

          {/* Tall image */}
          <div className="md:row-span-2 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <img
              src="/menu/everydayclassic/french-toast-01.png"
              alt="Latte art"
              className="w-full h-56 md:h-96 object-cover hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "/hero/plate.png";
              }}
            />
          </div>

          {/* Regular images */}
          <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <img
              src="/menu/everydayclassic/Pancakes.png"
              alt="Pancake stack"
              className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "/hero/plate.png";
              }}
            />
          </div>

          <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <img
              src="/menu/pizza/hawaiian-pizza-01_180x.png"
              alt="Pizza"
              className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "/hero/plate.png";
              }}
            />
          </div>

          <div className="col-span-2 md:col-span-2 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <img
              src="/menu/burgers/classic-beef-burger.png"
              alt="Restaurant interior"
              className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "/hero/plate.png";
              }}
            />
          </div>

          <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <img
              src="/menu/starters/southwestern-fries-01_180x.png"
              alt="Cocktails"
              className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "/hero/plate.png";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
