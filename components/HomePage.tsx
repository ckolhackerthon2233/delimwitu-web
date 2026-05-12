"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Reviews from "@/components/Reviews";
import Image from "next/image";
import Link from "next/link";
import { sendContactEmail } from "@/actions/emails";

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
  { src: "/menu/lunch&dinner/slow-cooked-bbq-beef-02_200x.png", alt: "Slow cooked beef" },
  { src: "/menu/everydayclassic/french-toast-01.png", alt: "French toast" },
  { src: "/menu/lunch&dinner/grilled-salmon-02_200x.png", alt: "Grilled salmon" },
  { src: "/menu/pizza/hawaiian-pizza-01_180x.png", alt: "Hawaiian pizza" },
  { src: "/menu/chicken/fried-chicken.jpg", alt: "Fried chicken" },
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
  const [contactForm, setContactForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const showToast = (message: string, type: "success" | "error" | "info" = "info") => {
    if (typeof window === "undefined") return;

    const windowWithToast = window as Window & {
      showToast?: (message: string, type: "success" | "error" | "info") => void;
    };

    windowWithToast.showToast?.(message, type);
  };

  const handleContactChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleContactSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!contactForm.name || !contactForm.email || !contactForm.phone || !contactForm.message) {
      const message = "Please fill in all fields.";
      setSubmitStatus({ type: "error", message });
      showToast(message, "error");
      return;
    }

    setIsSubmitting(true);
    try {
      const result = await sendContactEmail(contactForm);
      if (result.success) {
        const message = result.message;
        setSubmitStatus({ type: "success", message });
        setContactForm({ name: "", email: "", phone: "", message: "" });
        showToast(message, "success");
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        const message = result.message || "Failed to send message. Please try again.";
        setSubmitStatus({ type: "error", message });
        showToast(message, "error");
      }
    } catch {
      const message = "An error occurred. Please try again.";
      setSubmitStatus({ type: "error", message });
      showToast(message, "error");
    } finally {
      setIsSubmitting(false);
    }
  };

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
                    <span className={`text-lg transition-transform duration-300 ${isOpen ? "-rotate-180 text-orange" : "text-orange"}`}>
                      ▼
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

      <section id="contact" className="py-20 px-6 lg:px-10 bg-gradient-to-b from-cream to-white">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.35em] text-orange mb-3">
              Get In Touch
            </span>
            <h2 className="text-4xl font-black text-dark-brown sm:text-5xl mb-4">
              Connect with Delimwitu
            </h2>
            <p className="mx-auto max-w-2xl text-base text-gray-600">
              Have questions about reservations, catering, or just want to say hello? We&apos;d love to hear from you. Fill out the form and we&apos;ll respond within 24 hours.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Contact Form */}
            <div className="rounded-3xl bg-white p-8 shadow-lg border border-sand/20">
              <h3 className="text-2xl font-bold text-dark-brown mb-6">Send us a Message</h3>
              
              <form onSubmit={handleContactSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-dark-brown mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={contactForm.name}
                    onChange={handleContactChange}
                    placeholder="Your name"
                    className="w-full rounded-2xl border border-sand/40 bg-cream/50 px-4 py-3 text-sm text-dark-brown placeholder:text-gray-400 outline-none focus:border-orange focus:ring-2 focus:ring-orange/20 transition"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-dark-brown mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={contactForm.email}
                    onChange={handleContactChange}
                    placeholder="your@email.com"
                    className="w-full rounded-2xl border border-sand/40 bg-cream/50 px-4 py-3 text-sm text-dark-brown placeholder:text-gray-400 outline-none focus:border-orange focus:ring-2 focus:ring-orange/20 transition"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-dark-brown mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={contactForm.phone}
                    onChange={handleContactChange}
                    placeholder="+254 XXX XXX XXX"
                    className="w-full rounded-2xl border border-sand/40 bg-cream/50 px-4 py-3 text-sm text-dark-brown placeholder:text-gray-400 outline-none focus:border-orange focus:ring-2 focus:ring-orange/20 transition"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-dark-brown mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={contactForm.message}
                    onChange={handleContactChange}
                    placeholder="Tell us about your inquiry..."
                    rows={4}
                    className="w-full rounded-2xl border border-sand/40 bg-cream/50 px-4 py-3 text-sm text-dark-brown placeholder:text-gray-400 outline-none focus:border-orange focus:ring-2 focus:ring-orange/20 transition resize-none"
                    disabled={isSubmitting}
                  />
                </div>

                {submitStatus && (
                  <div
                    className={`rounded-2xl p-4 text-sm font-semibold ${
                      submitStatus.type === "success"
                        ? "bg-green-50 border border-green-200 text-green-700"
                        : "bg-red-50 border border-red-200 text-red-700"
                    }`}
                  >
                    {submitStatus.type === "success" ? "✓" : "✕"} {submitStatus.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange to-orange/80 px-6 py-3 text-sm font-semibold text-white transition hover:from-orange hover:to-orange/70 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>

            {/* Hours & Info */}
            <div className="space-y-6">
              <div className="rounded-3xl bg-white p-8 shadow-lg border border-sand/20">
                <h3 className="text-2xl font-bold text-dark-brown mb-6">Hours of Operation</h3>
                <div className="space-y-3">
                  {[
                    { day: "Monday", hours: "8:00 AM – 9:00 PM" },
                    { day: "Tuesday", hours: "8:00 AM – 9:00 PM" },
                    { day: "Wednesday", hours: "8:00 AM – 9:00 PM" },
                    { day: "Thursday", hours: "8:00 AM – 9:00 PM" },
                    { day: "Friday", hours: "8:00 AM – 9:00 PM" },
                    { day: "Saturday", hours: "9:00 AM – 8:00 PM" },
                    { day: "Sunday", hours: "9:00 AM – 8:00 PM" },
                  ].map((schedule) => (
                    <div key={schedule.day} className="flex items-center justify-between rounded-2xl bg-cream/50 px-4 py-3">
                      <span className="text-sm font-medium text-dark-brown">{schedule.day}</span>
                      <span className="text-sm font-semibold text-orange">{schedule.hours}</span>
                    </div>
                  ))}
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
