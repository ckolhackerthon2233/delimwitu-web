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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-max">
          {/* Wide image */}
          <div className="md:col-span-2 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <img
              src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=900&q=80"
              alt="Cafe breakfast spread"
              className="w-full h-72 md:h-80 object-cover hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80";
              }}
            />
          </div>

          {/* Tall image */}
          <div className="md:row-span-2 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <img
              src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80"
              alt="Latte art"
              className="w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80";
              }}
            />
          </div>

          {/* Regular images */}
          <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <img
              src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=500&q=80"
              alt="Pancake stack"
              className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=500&q=80";
              }}
            />
          </div>

          <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <img
              src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&q=80"
              alt="Pizza"
              className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80";
              }}
            />
          </div>

          <div className="md:col-span-2 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80"
              alt="Restaurant interior"
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80";
              }}
            />
          </div>

          <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <img
              src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=500&q=80"
              alt="Cocktails"
              className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=500&q=80";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
