"use client";

import Image from "next/image";

export default function Footer() {
  const paymentMethods = [
    { name: "M-PESA", src: "/mpesa.png" },
    { name: "Airtel Money", src: "/airtel.png" },
    { name: "VISA", src: "/visa.png" },
  ];

  return (
    <>
      {/* Location Section */}
      <section id="location" className="py-24 max-md:py-16 bg-white">
        <div className="px-6">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
            <div className="rounded-[32px] bg-cream/70 p-8 shadow-sm ring-1 ring-orange/10 max-md:p-6">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.35em] text-orange mb-4">Find Us</span>
              <h2 className="text-4xl font-bold text-dark-brown mb-4 max-md:text-3xl">Come Visit Us</h2>
              <div className="w-16 h-0.75 bg-orange rounded mb-6"></div>
              <p className="text-base text-gray-700 mb-4 leading-relaxed">
                Delimwitu is at Maralal Oasis, Ground Floor, Hurlingham, Nairobi. It’s easy to reach, has parking on Rose Avenue, and is a great stop for a relaxed meal or quick takeaway.
              </p>
              <div className="rounded-3xl border border-orange/10 bg-white p-4 text-sm text-gray-700 shadow-sm mb-8">
                <strong className="text-dark-brown">Directions:</strong> From Nairobi, head toward Hurlingham and look for Maralal Oasis on Rose Avenue. Delimwitu is on the ground floor with parking available nearby.
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <div className="rounded-3xl bg-white p-4 shadow-sm ring-1 ring-orange/10">
                  <div className="mb-2 text-xl">📍</div>
                  <h4 className="font-semibold text-dark-brown mb-1">Address</h4>
                  <p className="text-sm text-gray-600">Maralal Oasis, Ground Floor, Hurlingham, Nairobi</p>
                </div>
                <div className="rounded-3xl bg-white p-4 shadow-sm ring-1 ring-orange/10">
                  <div className="mb-2 text-xl">🕐</div>
                  <h4 className="font-semibold text-dark-brown mb-1">Hours</h4>
                  <p className="text-sm text-gray-600">Mon–Fri: 7:00 AM – 8:30 PM<br />Sat–Sun: 8:00 AM – 7:00 PM</p>
                </div>
                <div className="rounded-3xl bg-white p-4 shadow-sm ring-1 ring-orange/10">
                  <div className="mb-2 text-xl">📞</div>
                  <h4 className="font-semibold text-dark-brown mb-1">Contact</h4>
                  <p className="text-sm text-gray-600">+254 757 787463<br />+254 788 401395<br />delimwitu@chemalukacreslimited.co.ke</p>
                </div>
                <div className="rounded-3xl bg-white p-4 shadow-sm ring-1 ring-orange/10">
                  <div className="mb-2 text-xl">🚗</div>
                  <h4 className="font-semibold text-dark-brown mb-1">Directions</h4>
                  <p className="text-sm text-gray-600">Free parking on Rose Avenue, 5 mins from Nairobi Hospital, and easy access from the main road.</p>
                </div>
              </div>
            </div>

            <div className="rounded-[32px] border border-orange/10 bg-white p-3 shadow-xl">
              <div className="relative h-[420px] overflow-hidden rounded-[24px] bg-cream sm:h-[460px] lg:h-[520px]">
                <iframe
                  title="Delimwitu location in Maralal Oasis"
                  src="https://www.google.com/maps?q=Maralal%20Oasis%2C%20Ground%20Floor%2C%20Hurlingham%2C%20Nairobi&z=15&output=embed"
                  className="h-full w-full border-0"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="mt-4 flex flex-col gap-3 rounded-[24px] bg-cream/80 p-4 text-sm text-gray-700 sm:flex-row sm:items-center sm:justify-between">
                <p className="leading-relaxed">Get turn-by-turn directions to Delimwitu in Maralal Oasis, Hurlingham.</p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Maralal+Oasis%2C+Ground+Floor%2C+Hurlingham%2C+Nairobi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-orange px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-orange-hover"
                >
                  Open Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-brown text-white py-16 max-md:py-12">
        <div className="px-6">
          <div className="grid grid-cols-1 gap-10 xl:grid-cols-[1.6fr_1fr_1fr_1fr_1.2fr] xl:gap-12 mb-12">
            <div className="space-y-4">
              <div className="inline-flex items-center justify-center rounded-full bg-white/10 p-2 shadow-sm border border-orange/20">
                <span className="sr-only">Deli Mwitu</span>
                <Image
                  src="/logo.png"
                  alt="Deli Mwitu Logo"
                  width={64}
                  height={64}
                  className="w-16 h-16 rounded-full"
                />
              </div>
              <p className="text-sm text-sand/80 max-w-xs">
                Bold flavours, fresh ingredients, and warm hospitality in every bite.
              </p>
              <div className="space-y-3 text-sm text-sand/80">
                <p>Maralal, Nairobi</p>
                <p>Mon–Fri: 7:00 AM – 8:30 PM</p>
                <p>Sat–Sun: 8:00 AM – 7:00 PM</p>
                <p>+254 757 787463</p>
                <p>+254 788 401395</p>
                <p>delimwitu@chemalukacreslimited.co.ke</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-orange mb-5 border-b border-orange/20 pb-3">Customer Service</h4>
              <ul className="space-y-3 text-sm text-sand/80">
                <li><a href="#" className="hover:text-orange transition">Ways to Order</a></li>
                <li><a href="#" className="hover:text-orange transition">Order by Phone</a></li>
                <li><a href="#" className="hover:text-orange transition">Order by WhatsApp</a></li>
                <li><a href="#" className="hover:text-orange transition">Restaurant Near You</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-orange mb-5 border-b border-orange/20 pb-3">Information</h4>
              <ul className="space-y-3 text-sm text-sand/80">
                <li><a href="#" className="hover:text-orange transition">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-orange transition">Privacy Statement</a></li>
                <li><a href="#" className="hover:text-orange transition">Allergy Advice</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-orange mb-5 border-b border-orange/20 pb-3">About Us</h4>
              <ul className="space-y-3 text-sm text-sand/80">
                <li><a href="#" className="hover:text-orange transition">Our Story</a></li>
                <li><a href="#" className="hover:text-orange transition">Our Standards</a></li>
                <li><a href="#" className="hover:text-orange transition">Health & Safety Measures</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-orange mb-5 border-b border-orange/20 pb-3">Keep in Touch</h4>
              <ul className="space-y-4 text-sm text-sand/80">
                <li>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 hover:text-orange transition">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-orange/20 bg-orange/10 text-orange">f</span>
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/deli.mwitu?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 hover:text-orange transition">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-orange/20 bg-orange/10 text-orange">📸</span>
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://www.tiktok.com/@deli_mwitu?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 hover:text-orange transition">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-orange/20 bg-orange/10 text-orange">🎵</span>
                    TikTok
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-orange/20 pt-8">
            <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr] lg:items-center lg:justify-between">
              <div className="flex flex-wrap items-center gap-4">
                {paymentMethods.map((method) => (
                  <Image
                    key={method.name}
                    src={method.src}
                    alt={method.name}
                    width={96}
                    height={56}
                    className="object-contain"
                    unoptimized
                  />
                ))}
              </div>

              <form className="flex flex-wrap items-center gap-3 justify-end">
                <label className="sr-only" htmlFor="footer-email">Email address</label>
                <input
                  id="footer-email"
                  type="email"
                  placeholder="Enter your email address"
                  className="min-w-[240px] flex-1 rounded border border-orange/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-sand/60 focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/40"
                />
                <button type="submit" className="inline-flex h-12 items-center justify-center rounded border border-orange bg-orange text-sm font-semibold text-dark-brown hover:bg-orange-hover transition px-5">
                  →
                </button>
              </form>
            </div>

            <p className="mt-8 text-sm text-sand/70 text-center lg:text-left">
              © 2026, Deli Mwitu Restaurant. Authentic Kenyan Cuisine. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
