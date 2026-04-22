"use client";

export default function SpecialsBanner() {
  return (
    <div className="relative py-20 bg-dark-brown text-white overflow-hidden max-md:py-16">
      {/* Background image */}
      <div className="absolute inset-0 opacity-20" style={{backgroundImage: "url('https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1800&q=80')", backgroundSize: "cover", backgroundPosition: "center"}}></div>
      <div className="absolute inset-0 bg-gradient-to-r from-dark-brown via-dark-brown/80 to-dark-brown/60"></div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-lg:gap-12">
          {/* Text Section */}
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-white/60 mb-4">This Week</span>
            <h2 className="text-4xl font-bold mb-6 max-md:text-3xl">Chef&apos;s Special: Swahili Coconut Curry</h2>
            <p className="text-base text-white/90 mb-8 leading-relaxed">
              An aromatic blend of slow-cooked local vegetables in creamy coconut
              milk, served with fragrant basmati rice and warm chapati. Available
              Tuesday – Sunday.
            </p>

            {/* Price Section */}
            <div className="flex gap-4 flex-wrap items-center mb-6">
              <span className="font-playfair text-4xl font-black text-gold">KSh 850</span>
              <span className="line-through text-white/40 text-lg">KSh 1,100</span>
              <span className="bg-orange text-white px-2.5 py-1 rounded text-xs font-bold">Save 23%</span>
            </div>

            <a href="#reservation" className="inline-flex items-center gap-2 px-8 py-3 bg-white text-dark-brown text-xs font-semibold uppercase tracking-wider rounded cursor-pointer border-0 transition-all duration-250 hover:bg-cream hover:shadow-lg">
              Order Now
            </a>
          </div>

          {/* Image Section */}
          <div className="hidden lg:block h-96 rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=700&q=85"
              alt="Chef's special curry"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=700&q=80";
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
