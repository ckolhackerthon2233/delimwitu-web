"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <>
      {/* Hero Section - Reduced Height */}
      <section id="hero" className="relative h-screen flex flex-col items-end justify-end overflow-hidden bg-dark-brown pt-20 max-md:pt-16 max-md:h-[600px]">
        {/* Background image - Full height */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&h=1080&fit=crop&crop=center')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "scroll",
            backgroundRepeat: "no-repeat"
          }}
        ></div>

        {/* Dark overlay at bottom for text readability */}
        <div className="absolute bottom-0 left-0 right-0 z-5 h-1/2 bg-gradient-to-t from-dark-brown/95 via-dark-brown/70 to-transparent"></div>

        {/* Grain texture overlay */}
        <div className="absolute inset-0 pointer-events-none z-0 opacity-10 anim-grain" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")"}}></div>

        {/* Content at Bottom */}
        <div className="max-w-[1200px] w-full mx-auto px-6 relative z-10 pb-12 max-md:pb-8">
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
            {/* Cafe Name */}
            <h1 className="text-6xl md:text-7xl font-black text-white mb-4 anim-fade-up leading-tight drop-shadow-lg max-md:text-5xl">
              Deli Mwitu
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange via-orange to-red-500">Cafe</span>
            </h1>

            {/* Location */}
            <div className="flex items-center justify-center gap-2 mb-8 anim-fade-up delay-1">
              <span className="text-2xl">📍</span>
              <p className="text-white text-lg font-semibold drop-shadow-md">Maralal Oasis, Hurlingham, Nairobi</p>
            </div>

            {/* Tagline */}
            <p className="text-white/90 text-lg mb-10 anim-fade-up delay-2 drop-shadow-md max-w-xl font-medium max-md:text-base">
              Experience authentic Kenyan food culture
            </p>

            {/* CTA Buttons */}
            <div className="flex gap-4 flex-wrap justify-center anim-fade-up delay-3 max-md:flex-col max-md:w-full">
              <Link href="/menu" className="inline-flex items-center gap-2 px-8 py-3 bg-white text-dark-brown text-sm font-bold uppercase tracking-wider rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 max-md:w-full max-md:justify-center">
                Explore Menu
              </Link>
              <a href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+254 757 787463"}?text=Hi,%20I'd%20like%20to%20place%20an%20order%20with%20Delimwitu`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-3 bg-orange text-white text-sm font-bold uppercase tracking-wider rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 max-md:w-full max-md:justify-center">
                Order Online
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
