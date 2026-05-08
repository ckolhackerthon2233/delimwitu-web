"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  const paymentMethods = [
    { name: "M-PESA", src: "/mpesa.jpeg" },
    { name: "Airtel Money", src: "/airtel%20money.jpeg" },
    { name: "VISA", src: "/visa.jpeg" },
  ];

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
      <footer className="bg-green text-white py-16 max-md:py-12">
        <div className="px-6">
          <div className="grid grid-cols-1 xl:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10 xl:gap-12 mb-12">
            <div className="space-y-6">
              <div>
                <a href="#home" className="font-playfair text-3xl font-black italic tracking-tight inline-block">
                  Delimwitu
                </a>
                <p className="mt-3 max-w-xs text-sm text-sand/80">
                  Café · Restaurant · Bar
                </p>
              </div>

              <div>
                <h3 className="text-xs uppercase tracking-[0.35em] text-sand/60 mb-5 inline-block border-b border-white/15 pb-3">
                  Keep in touch
                </h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <a href="#" className="inline-flex items-center gap-3 text-sand/80 hover:text-white transition">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-base">f</span>
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="#" className="inline-flex items-center gap-3 text-sand/80 hover:text-white transition">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-base">📸</span>
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-5 border-b border-white/10 pb-3">Customer Service</h4>
              <ul className="space-y-3 text-sm text-sand/80">
                <li><a href="#" className="hover:text-white transition">Ways to order</a></li>
                <li><a href="#" className="hover:text-white transition">Order by phone</a></li>
                <li><a href="#" className="hover:text-white transition">Order by WhatsApp</a></li>
                <li><a href="#" className="hover:text-white transition">Restaurant near you</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-5 border-b border-white/10 pb-3">Information</h4>
              <ul className="space-y-3 text-sm text-sand/80">
                <li><a href="#" className="hover:text-white transition">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-white transition">Privacy Statement</a></li>
                <li><a href="#" className="hover:text-white transition">Allergy Advice</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-5 border-b border-white/10 pb-3">About Us</h4>
              <ul className="space-y-3 text-sm text-sand/80">
                <li><a href="#" className="hover:text-white transition">Our story</a></li>
                <li><a href="#" className="hover:text-white transition">Our standards</a></li>
                <li><a href="#" className="hover:text-white transition">Health & safety measures</a></li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-8 items-end border-t border-white/10 pt-8">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.35em] text-sand/60">Subscribe to our emails</p>
              <p className="text-sm text-sand/80 max-w-md">
                Stay updated with menu news, special offers, and restaurant events.
              </p>
            </div>

            <form className="flex flex-wrap gap-3">
              <label className="sr-only" htmlFor="footer-email">Email address</label>
              <input
                id="footer-email"
                type="email"
                placeholder="Enter your email address"
                className="min-w-[240px] flex-1 rounded border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-sand/60 focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-orange/50"
              />
              <button type="submit" className="inline-flex h-12 items-center justify-center rounded bg-orange px-6 text-sm font-semibold text-white hover:bg-orange-hover transition">
                →
              </button>
            </form>
          </div>

          <div className="mt-12 border-t border-white/10 pt-6 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between text-sm text-sand/70">
            <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-start">
              {paymentMethods.map((method) => (
                <div
                  key={method.name}
                  className="relative h-16 w-32"
                >
                  <Image
                    src={method.src}
                    alt={method.name}
                    fill
                    className={`object-contain ${method.name === "VISA" ? "scale-125" : ""}`}
                    unoptimized
                  />
                </div>
              ))}
            </div>
            <p className="text-center sm:text-right">
              © 2026, Artcaffè Restaurant & The Artcaffè Market are the registered trademark of Artcaffè Coffee & Bakery Limited. All Rights Reserved.
            </p>
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
