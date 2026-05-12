"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Reviews from "@/components/Reviews";
import Image from "next/image";
import Link from "next/link";

const featuredDelimwitu = [
  { title: "Mango Juice Deli", subtitle: "Fresh cold juice", price: "KSh 150" },
  { title: "Passion Juice 250 ML Deli", subtitle: "Tropical refreshment", price: "KSh 150" },
  { title: "Cappuccino S Deli", subtitle: "Classic espresso drink", price: "KSh 250" },
  { title: "Beef Stew Deli", subtitle: "Hearty slow-cooked beef", price: "KSh 300" },
  { title: "Chicken Curry Deli", subtitle: "Rich spicy comfort", price: "KSh 400" },
  { title: "Fish Fillet Deli", subtitle: "Golden fillet with sides", price: "KSh 450" },
];

const cuisineGallery = [
  { src: "/menu/everydayclassic/everyday-breakfast-01.png", alt: "Everyday breakfast" },
  { src: "/menu/food/breakfast/eggs-toast.svg", alt: "Eggs and toast" },
  { src: "/menu/food/starters/chicken-wings.svg", alt: "Chicken wings starter" },
  { src: "/menu/lunch&dinner/slow-cooked-bbq-beef-02_200x.png", alt: "Slow cooked beef" },
  { src: "/menu/everydayclassic/french-toast-01.png", alt: "French toast" },
  { src: "/menu/lunch&dinner/grilled-salmon-02_200x.png", alt: "Grilled salmon" },
];

const businessInfoSections = [
  {
    title: "Service options",
    staff: ["Floor host", "Delivery crew", "Kitchen team"],
  },
  {
    title: "Highlights",
    staff: ["Chef curator", "Pastry specialist", "Beverage lead"],
  },
  {
    title: "Popular for",
    staff: ["Family dining", "Weekend brunch", "Celebrations"],
  },
  {
    title: "Accessibility",
    staff: ["Ramp access", "Comfort seating", "Quiet corners"],
  },
  {
    title: "Offerings",
    staff: ["Signature cocktails", "Plant-forward bowls", "Savory grills"],
  },
  {
    title: "Dining options",
    staff: ["Dine-in", "Takeaway", "Event catering"],
  },
  {
    title: "Amenities",
    staff: ["Outdoor seating", "Wi-Fi", "Private tables"],
  },
  {
    title: "Atmosphere",
    staff: ["Warm hospitality", "Relaxed seats", "Lively energy"],
  },
  {
    title: "Crowd",
    staff: ["Friends", "Couples", "Families"],
  },
  {
    title: "Planning",
    staff: ["Reservations", "Group menus", "Event packages"],
  },
  {
    title: "Payments",
    staff: ["Cash", "Cards", "Mobile pay"],
  },
  {
    title: "Children",
    staff: ["Kids menu", "Family packs", "Friendly staff"],
  },
  {
    title: "Parking",
    staff: ["Street parking", "Nearby lot", "Valet on request"],
  },
];

export default function HomePage() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  return (
    <main className="w-full overflow-hidden bg-cream">
      <Header />
      <Hero />

      <section id="featured-picks" className="relative overflow-hidden bg-white py-20 px-6 lg:px-10">
        <div className="pointer-events-none absolute inset-0 opacity-10 lg:block">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="featured-stripes" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M0 40 L40 0" stroke="#F8E9DE" strokeWidth="2" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#featured-stripes)" />
          </svg>
        </div>

        <div className="pointer-events-none absolute top-16 right-0 hidden h-80 w-80 opacity-15 lg:block">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="featured-dots" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                <circle cx="15" cy="15" r="3" fill="#E8703A" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#featured-dots)" />
          </svg>
        </div>

        <div className="mx-auto max-w-screen-xl relative">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.35em] text-orange mb-3">
              Featured Products
            </span>
            <h2 className="text-4xl font-black text-dark-brown sm:text-5xl">
              Flavours from the Delimwitu menu you can’t miss.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-gray-700">
              A fresh look at our most-loved drinks and dishes, styled as a simple menu highlight that invites guests to explore more.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
            {featuredDelimwitu.map((item) => (
              <div key={item.title} className="flex items-center justify-between rounded-3xl border border-sand/40 bg-cream px-5 py-4 shadow-sm transition hover:shadow-md">
                <div>
                  <p className="text-base font-semibold text-dark-brown">{item.title}</p>
                  <p className="mt-1 text-sm text-gray-500">{item.subtitle}</p>
                </div>
                <p className="text-right text-base font-bold text-orange">{item.price}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/menu"
              className="inline-flex items-center justify-center rounded-full border border-dark-brown bg-dark-brown px-8 py-3 text-sm font-semibold text-white transition hover:bg-orange hover:border-orange"
            >
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      <section id="gallery" className="bg-white py-24 px-6 lg:px-10">
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.35em] text-orange mb-3">
              Delimwitu Cuisine
            </span>
            <h2 className="text-4xl font-black text-dark-brown sm:text-5xl">
              Gallery of flavours and plates
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-gray-700">
              A visual preview of Delimwitu’s food and drink styling with curated menu shots from our kitchen.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {cuisineGallery.map((image) => (
              <div key={image.src} className="overflow-hidden rounded-[2rem] border border-sand/40 bg-cream shadow-sm">
                <div className="relative h-80 w-full">
                  <Image src={image.src} alt={image.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Reviews />

      <section id="business-info" className="py-24 px-6 lg:px-10 bg-white">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-dark-brown">
              Business Info
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {businessInfoSections.map((section) => {
              const isOpen = openSection === section.title;

              return (
                <div key={section.title} className="border-b border-gray-300">
                  <button
                    type="button"
                    onClick={() => setOpenSection(isOpen ? null : section.title)}
                    className={`w-full flex items-center justify-between py-2 text-left transition-all duration-200 ${
                      isOpen
                        ? "text-orange"
                        : "text-dark-brown hover:text-orange hover:translate-x-1"
                    }`}
                  >
                    <span className="text-sm font-medium">{section.title}</span>
                    <span className={`text-xl font-light transition-transform duration-300 ${isOpen ? "rotate-45 text-orange" : "text-orange"}`}>
                      +
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pb-2 pl-0 animate-in fade-in slide-in-from-top-2 duration-200">
                      <ul className="space-y-1 text-xs text-gray-600">
                        {section.staff.map((staffItem) => (
                          <li key={staffItem} className="flex items-start gap-2">
                            <span className="text-orange">•</span>
                            <span>{staffItem}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 px-6 lg:px-10 bg-orange-100 text-dark-brown">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-[1.5rem] bg-white/95 p-7 shadow-lg border border-orange-200">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.35em] text-orange/80 mb-2">
                Find Us
              </span>
              <h2 className="text-3xl font-black text-dark-brown mb-4">Location & Contact</h2>
              <p className="text-sm text-dark-brown/80 mb-6">
                Get in touch with the Delimwitu support team for bookings, inquiries, and venue details.
              </p>
              <form className="space-y-4">
                <div className="grid gap-2 sm:grid-cols-3">
                  <input
                    type="text"
                    placeholder="Name"
                    className="rounded-2xl border border-orange-200 bg-orange-50 px-3 py-2 text-sm text-dark-brown outline-none focus:border-orange focus:ring-2 focus:ring-orange/20"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="rounded-2xl border border-orange-200 bg-orange-50 px-3 py-2 text-sm text-dark-brown outline-none focus:border-orange focus:ring-2 focus:ring-orange/20"
                  />
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="rounded-2xl border border-orange-200 bg-orange-50 px-3 py-2 text-sm text-dark-brown outline-none focus:border-orange focus:ring-2 focus:ring-orange/20"
                  />
                </div>
                <textarea
                  rows={3}
                  placeholder="Message"
                  className="w-full rounded-2xl border border-orange-200 bg-orange-50 px-3 py-2 text-sm text-dark-brown outline-none focus:border-orange focus:ring-2 focus:ring-orange/20"
                />
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-full bg-dark-brown px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-orange"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="rounded-[1.5rem] bg-white/90 p-7 shadow-lg border border-orange-200">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.35em] text-orange/80 mb-2">
                Our open schedules
              </span>
              <h2 className="text-3xl font-black text-dark-brown mb-5">Hours</h2>
              <div className="space-y-3 text-dark-brown/80 text-sm">
                <div className="flex items-center justify-between rounded-2xl bg-orange-50 px-3 py-2">
                  <span>Monday</span>
                  <span className="font-semibold text-orange">8:00 AM – 9:00 PM</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl bg-orange-50 px-3 py-2">
                  <span>Tuesday</span>
                  <span className="font-semibold text-orange">8:00 AM – 9:00 PM</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl bg-orange-50 px-3 py-2">
                  <span>Wednesday</span>
                  <span className="font-semibold text-orange">8:00 AM – 9:00 PM</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl bg-orange-50 px-3 py-2">
                  <span>Thursday</span>
                  <span className="font-semibold text-orange">8:00 AM – 9:00 PM</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl bg-orange-50 px-3 py-2">
                  <span>Friday</span>
                  <span className="font-semibold text-orange">8:00 AM – 9:00 PM</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl bg-orange-50 px-3 py-2">
                  <span>Saturday</span>
                  <span className="font-semibold text-orange">9:00 AM – 8:00 PM</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl bg-orange-50 px-3 py-2">
                  <span>Sunday</span>
                  <span className="font-semibold text-orange">9:00 AM – 8:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
