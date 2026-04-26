"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Footer() {
  const hours = [
    { day: "Monday", time: "7AM – 10PM" },
    { day: "Tuesday", time: "7AM – 10PM" },
    { day: "Wednesday", time: "7AM – 10PM" },
    { day: "Thursday", time: "7AM – 10PM" },
    { day: "Friday", time: "7AM – 11PM" },
    { day: "Saturday", time: "8AM – 11PM" },
    { day: "Sunday", time: "8AM – 10PM" },
  ];

  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Location Section */}
      <section id="contact" className="py-24 max-md:py-16">
        <div className="px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-lg:gap-12 max-md:gap-8">
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-orange mb-4">Find Us</span>
              <h2 className="text-4xl font-bold text-dark-brown mb-6 max-md:text-3xl">Come Visit Us</h2>
              <div className="w-15 h-0.75 bg-orange rounded mb-8"></div>
              <p className="text-base text-gray-700 mb-8">
                We&apos;re located around ngong road in lavington, with ample parking, a
                beautiful outdoor terrace, and a warm welcome waiting for you.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="text-2xl flex-shrink-0">📍</div>
                  <div>
                    <h4 className="font-semibold text-dark-brown mb-1">Address</h4>
                    <p className="text-sm text-gray-600">Lovington, Nairobi, Kenya</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-2xl flex-shrink-0">🕐</div>
                  <div>
                    <h4 className="font-semibold text-dark-brown mb-1">Hours</h4>
                    <p className="text-sm text-gray-600">
                      Mon–Fri: 7:00 AM – 10:00 PM<br />
                      Sat–Sun: 8:00 AM – 11:00 PM
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-2xl flex-shrink-0">📞</div>
                  <div>
                    <h4 className="font-semibold text-dark-brown mb-1">Contact</h4>
                    <p className="text-sm text-gray-600">
                      +254 712 345 678<br />
                      hello@wfoodcafe.co.ke
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-2xl flex-shrink-0">🚗</div>
                  <div>
                    <h4 className="font-semibold text-dark-brown mb-1">Getting Here</h4>
                    <p className="text-sm text-gray-600">
                      Free parking available. 5 mins from Nairobi Hospital. 
                      Bus stop directly outside.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="relative h-96 rounded-lg overflow-hidden shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&h=900&fit=crop"
                alt="Restaurant ambiance"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 max-md:py-12">
        <div className="px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12 max-md:gap-6">
            {/* Brand */}
            <div className="md:col-span-2 lg:col-span-1">
              <a href="#home" className="font-playfair text-2xl font-black italic text-dark-brown mb-4 inline-block">
                Delimwitu
              </a>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                A café born from love and passion. We serve honest, 
                fresh food made with ingredients you can&apos;t help but trust.
              </p>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 rounded-full bg-orange text-white flex items-center justify-center text-xs font-bold hover:bg-orange-hover transition-colors" aria-label="Instagram">
                  IG
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-orange text-white flex items-center justify-center text-xs font-bold hover:bg-orange-hover transition-colors" aria-label="Facebook">
                  FB
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-orange text-white flex items-center justify-center text-xs font-bold hover:bg-orange-hover transition-colors" aria-label="YouTube">
                  YT
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-orange text-white flex items-center justify-center text-xs font-bold hover:bg-orange-hover transition-colors" aria-label="TikTok">
                  TK
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-dark-brown mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-sm text-gray-600 hover:text-orange transition-colors">Home</a></li>
                <li><a href="#menu" className="text-sm text-gray-600 hover:text-orange transition-colors">Our Menu</a></li>
                <li><a href="#about" className="text-sm text-gray-600 hover:text-orange transition-colors">About Us</a></li>
                <li><a href="#gallery" className="text-sm text-gray-600 hover:text-orange transition-colors">Gallery</a></li>
                <li><a href="#reservation" className="text-sm text-gray-600 hover:text-orange transition-colors">Reserve</a></li>
                <li><a href="#contact" className="text-sm text-gray-600 hover:text-orange transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Menu Highlights */}
            <div>
              <h4 className="font-semibold text-dark-brown mb-4">Menu Highlights</h4>
              <ul className="space-y-2">
                <li><a href="#menu" className="text-sm text-gray-600 hover:text-orange transition-colors">Swahili Breakfast</a></li>
                <li><a href="#menu" className="text-sm text-gray-600 hover:text-orange transition-colors">Avocado Toast</a></li>
                <li><a href="#menu" className="text-sm text-gray-600 hover:text-orange transition-colors">Coconut Curry</a></li>
                <li><a href="#menu" className="text-sm text-gray-600 hover:text-orange transition-colors">Artisan Coffees</a></li>
                <li><a href="#menu" className="text-sm text-gray-600 hover:text-orange transition-colors">Vegan Bowls</a></li>
                <li><a href="#menu" className="text-sm text-gray-600 hover:text-orange transition-colors">House Desserts</a></li>
              </ul>
            </div>

            {/* Hours */}
            <div>
              <h4 className="font-semibold text-dark-brown mb-4">Opening Hours</h4>
              <div className="space-y-1.5">
                {hours.map((h, idx) => (
                  <div key={idx} className="flex justify-between gap-4">
                    <span className="text-xs text-gray-600">{h.day}</span>
                    <span className="text-xs font-medium text-dark-brown">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-tan pt-4 flex flex-col md:flex-row justify-between items-center gap-4 text-lg text-gray-600">
            <p className="items-center">&copy; 2026 Delimwitu Café. All rights reserved.</p>
            <p>Made by  <a href="https://nexustechke.netlify.app" target="_blank" className="text-orange ">Vico softwares</a></p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        id="scroll-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-8 right-8 w-12 h-12 rounded-full bg-orange text-white font-bold flex items-center justify-center hover:bg-orange-hover transition-all duration-300 hover:shadow-lg z-50 ${showScrollTop ? "opacity-100 visible" : "opacity-0 invisible"}`}
        aria-label="Back to top"
      >
        ↑
      </button>
    </>
  );
}
