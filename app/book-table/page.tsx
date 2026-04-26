"use client";

import { useState } from "react";
import Image from "next/image";
import { createReservation } from "@/actions/reservations";
import dynamic from "next/dynamic";

interface Branch {
  id: string;
  name: string;
  address: string;
  phone: string;
  openTime: string;
  closeTime: string;
  capacity: number;
}

// Hardcoded branches
const BRANCHES: Branch[] = [
  {
    id: "1",
    name: "Delimwitu",
    address: "Lovington, Nairobi",
    phone: "+254 701 234 567",
    openTime: "10:00 AM",
    closeTime: "10:00 PM",
    capacity: 50,
  },
  {
    id: "2",
    name: "Delimwitu Downtown",
    address: "CBD, Nairobi",
    phone: "+254 701 234 568",
    openTime: "10:00 AM",
    closeTime: "10:00 PM",
    capacity: 60,
  },
  {
    id: "3",
    name: "Delimwitu Westlands",
    address: "Westlands, Nairobi",
    phone: "+254 701 234 569",
    openTime: "10:00 AM",
    closeTime: "11:00 PM",
    capacity: 70,
  },
];

// Leaflet map loaded dynamically to avoid SSR issues
const LeafletMap = dynamic(() => import("@/components/LeafletMap"), {
  ssr: false,
  loading: () => (
    <div className="h-full bg-gray-100 rounded-2xl animate-pulse flex items-center justify-center">
      <p className="text-gray-400 font-medium">Loading map…</p>
    </div>
  ),
});

export default function BookTable() {
  const branches = BRANCHES;
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [formData, setFormData] = useState({
    branchId: BRANCHES[0]?.id || "1",
    customerName: "",
    customerEmail: "",
    customerPhone: "",
    guestCount: 2,
    reservationDate: "",
    reservationTime: "19:00",
    seatingPreference: "flexible",
    specialOccasion: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await createReservation({
        customerName: formData.customerName,
        customerEmail: formData.customerEmail,
        customerPhone: formData.customerPhone,
        guestCount: parseInt(formData.guestCount.toString()),
        reservationDate: formData.reservationDate,
        reservationTime: formData.reservationTime,
        seatingPreference: formData.seatingPreference,
        specialOccasion: formData.specialOccasion || undefined,
      });

      if (result.success) {
        setSuccessMessage(result.message);
        setSubmitted(true);
        setFormData({
          branchId: BRANCHES[0]?.id || "1",
          customerName: "",
          customerEmail: "",
          customerPhone: "",
          guestCount: 2,
          reservationDate: "",
          reservationTime: "19:00",
          seatingPreference: "flexible",
          specialOccasion: "",
        });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const selectedBranch = branches.find((b) => b.id === formData.branchId);

  const whyDineFeatures = [
    {
      icon: "🍽️",
      title: "Premium Cuisine",
      description:
        "Authentic Kenyan and international dishes crafted by our award-winning chefs using locally sourced, seasonal ingredients.",
      accent: "from-amber-400 to-orange-500",
    },
    {
      icon: "👨‍💼",
      title: "Exceptional Service",
      description:
        "Our dedicated team anticipates your every need, ensuring a seamless and memorable dining experience from arrival to farewell.",
      accent: "from-rose-400 to-red-500",
    },
    {
      icon: "🎭",
      title: "Curated Ambiance",
      description:
        "Thoughtfully designed spaces that balance warmth and sophistication — ideal for intimate dinners, celebrations, or business meals.",
      accent: "from-violet-400 to-purple-500",
    },
    {
      icon: "🎵",
      title: "Live Entertainment",
      description:
        "Enjoy curated live music and special cultural performances that transform your meal into an all-round sensory experience.",
      accent: "from-teal-400 to-cyan-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b via-cream to-warm-cream">

      {/* ── Hero Section ── */}
      <div className="relative w-full min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/hero/tb1.jpg"
          alt="Book a table hero"
          fill
          className="object-cover object-center w-full h-full"
          sizes="100vw"
          priority
          quality={85}
          unoptimized
        /> 
        <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-black/70 via-black/55 to-black/80" />
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-900/30 to-transparent" />

        <div className="relative z-10 text-center text-white px-4 sm:px-6 max-w-4xl mx-auto">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.3em] text-orange-300 mb-4 sm:mb-6">
        Delimwitu Restaurant
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black mb-4 sm:mb-6 leading-none tracking-tight text-white">
        Book Your
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-amber-400">
          Table
        </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed">
        Reserve your culinary experience at one of our carefully curated
        locations across Nairobi.
          </p>
          <div className="mt-8 sm:mt-12 flex justify-center">
        <div className="w-px h-12 sm:h-16 bg-gradient-to-b from-white/60 to-transparent" />
          </div>
        </div>
      </div>

      {/* ── Reservation Form Section ── */}
      <div className="py-12 md:py-20 px-4 md:px-6 relative">
        <div className="w-full max-w-screen-xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 md:gap-12">

            {/* Form — 2/3 width */}
            <div className="md:col-span-2 bg-white rounded-2xl shadow-xl p-6 md:p-12 w-full overflow-visible">
              <h2 className="text-3xl font-black text-dark-brown mb-8">
                Make a Reservation
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">

                {/* Branch Selection */}
                <div className="relative z-50">
                  <label className="block text-sm font-semibold text-dark-brown mb-2">
                    Choose a Branch *
                  </label>
                  <select
                    name="branchId"
                    value={formData.branchId}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-tan rounded-lg focus:border-orange focus:outline-none transition text-sm md:text-base bg-white cursor-pointer"
                  >
                    {branches.map((branch) => (
                      <option key={branch.id} value={branch.id}>
                        {branch.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-dark-brown mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="customerName"
                    value={formData.customerName}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 border-2 border-tan rounded-lg focus:border-orange focus:outline-none transition"
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-dark-brown mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="customerEmail"
                      value={formData.customerEmail}
                      onChange={handleInputChange}
                      required
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 border-2 border-tan rounded-lg focus:border-orange focus:outline-none transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-dark-brown mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="customerPhone"
                      value={formData.customerPhone}
                      onChange={handleInputChange}
                      required
                      placeholder="+254 7XX XXX XXX"
                      className="w-full px-4 py-3 border-2 border-tan rounded-lg focus:border-orange focus:outline-none transition"
                    />
                  </div>
                </div>

                {/* Date & Time */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-dark-brown mb-2">
                      Date *
                    </label>
                    <input
                      type="date"
                      name="reservationDate"
                      value={formData.reservationDate}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-tan rounded-lg focus:border-orange focus:outline-none transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-dark-brown mb-2">
                      Time *
                    </label>
                    <input
                      type="time"
                      name="reservationTime"
                      value={formData.reservationTime}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-tan rounded-lg focus:border-orange focus:outline-none transition"
                    />
                  </div>
                </div>

                {/* Guests & Seating */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-dark-brown mb-2">
                      Number of Guests *
                    </label>
                    <select
                      name="guestCount"
                      value={formData.guestCount}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-tan rounded-lg focus:border-orange focus:outline-none transition"
                    >
                      {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? "Guest" : "Guests"}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-dark-brown mb-2">
                      Seating Preference *
                    </label>
                    <select
                      name="seatingPreference"
                      value={formData.seatingPreference}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-tan rounded-lg focus:border-orange focus:outline-none transition"
                    >
                      <option value="flexible">Flexible</option>
                      <option value="inside">Inside</option>
                      <option value="outside">Outside</option>
                    </select>
                  </div>
                </div>

                {/* Special Occasion */}
                <div>
                  <label className="block text-sm font-semibold text-dark-brown mb-2">
                    Special Occasion (Optional)
                  </label>
                  <input
                    type="text"
                    name="specialOccasion"
                    value={formData.specialOccasion}
                    onChange={handleInputChange}
                    placeholder="e.g., Birthday, Anniversary, Proposal"
                    maxLength={100}
                    className="w-full px-4 py-3 border-2 border-tan rounded-lg focus:border-orange focus:outline-none transition"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-gradient-to-r from-orange to-red-500 text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50 text-lg"
                >
                  {loading ? "Processing…" : "Reserve Your Table"}
                </button>
              </form>

              {/* Success Message */}
              {submitted && (
                <div className="mt-8 p-6 bg-green-50 border-l-4 border-green-500 rounded-lg text-green-700">
                  <p className="font-bold text-lg">✓ {successMessage}</p>
                  <p className="text-sm mt-2">
                    Check your email for confirmation details. We look forward to
                    welcoming you!
                  </p>
                </div>
              )}
            </div>

            {/* Sidebar — 1/3 width */}
            <div className="md:col-span-1 space-y-6 w-full">

              {/* Selected Branch Info */}
              {selectedBranch && (
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-full">
                  <div className="h-48 bg-gradient-to-br from-orange to-red-500 relative overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&auto=format&fit=crop&q=80"
                      alt={selectedBranch.name}
                      fill
                      className="object-cover opacity-80"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <p className="absolute bottom-3 left-4 text-white font-bold text-lg">
                      {selectedBranch.name}
                    </p>
                  </div>
                  <div className="p-6">
                    <div className="space-y-3 text-sm text-gray-700">
                      <div>
                        <p className="font-semibold text-dark-brown mb-1">Address</p>
                        <p className="text-gray-600">{selectedBranch.address}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-dark-brown mb-1">Phone</p>
                        <a
                          href={`tel:${selectedBranch.phone}`}
                          className="text-orange font-bold hover:underline"
                        >
                          {selectedBranch.phone}
                        </a>
                      </div>
                      <div>
                        <p className="font-semibold text-dark-brown mb-1">Hours</p>
                        <p className="text-gray-600">
                          {selectedBranch.openTime} - {selectedBranch.closeTime}
                        </p>
                      </div>
                      <div>
                        <p className="font-semibold text-dark-brown mb-1">Capacity</p>
                        <p className="text-gray-600">🪑 {selectedBranch.capacity} Seats</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Booking Guidelines */}
              <div className="w-full bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 shadow-lg border-l-4 border-blue-500">
                <h3 className="text-lg font-bold text-dark-brown mb-4">
                  ℹ️ Booking Guidelines
                </h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex gap-3">
                    <span className="text-orange font-bold text-xl">✓</span>
                    <span>
                      <strong>≤12 Guests:</strong> Auto-confirmed immediately
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange font-bold text-xl">⏳</span>
                    <span>
                      <strong>&gt;12 Guests:</strong> Manual confirmation within 1 hour
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange font-bold text-xl">📧</span>
                    <span>Confirmation sent to your email</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange font-bold text-xl">🕐</span>
                    <span>Please arrive 10 minutes early</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange font-bold text-xl">❌</span>
                    <span>Cancel 24 hours before for free cancellation</span>
                  </li>
                </ul>
              </div>

              {/* Contact Support */}
              <div className="w-full bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 shadow-lg border-l-4 border-orange">
                <h3 className="text-lg font-bold text-dark-brown mb-4">
                  💬 Need Help?
                </h3>
                <p className="text-sm text-gray-700 mb-4">
                  Contact us for large groups or special requests.
                </p>
                <a
                  href="tel:+254701234567"
                  className="inline-block w-full text-center px-6 py-3 bg-gradient-to-r from-orange to-red-500 text-white rounded-lg font-bold hover:shadow-lg transition-all"
                >
                  Call Us Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Leaflet Map Section ── */}
      <div className="py-20 px-6 bg-cream">
        <div className="max-w-screen-xl mx-auto w-full">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-orange mb-4">
              Find Us
            </span>
            <h2 className="text-5xl font-black text-dark-brown mb-4">
              Our Locations on the Map
            </h2>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              Explore our branches across Nairobi and plan your visit with ease.
            </p>
          </div>

          {/* Full-width Leaflet map */}
          <div className="w-full rounded-2xl overflow-hidden shadow-2xl h-[500px]">
            <LeafletMap />
          </div>
        </div>
      </div>

      {/* ── Why Dine With Us ── */}
      <div className="py-24 px-6 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-screen-xl mx-auto w-full">

          {/* Section header */}
          <div className="text-center mb-20">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.3em] text-orange mb-4">
              The Delimwitu Difference
            </span>
            <h2 className="text-5xl md:text-6xl font-black text-dark-brown mb-6 leading-tight">
              Why Dine With Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Every visit to Delimwitu is crafted to be more than a meal — it&apos;s
                an experience that stays with you long after the last bite.
              </p>
          </div>

          {/* Feature cards — full width grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {whyDineFeatures.map((item, idx) => (
              <div
                key={idx}
                className="w-full group relative bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Gradient top bar */}
                <div
                  className={`h-2 w-full bg-gradient-to-r ${item.accent}`}
                />

                <div className="p-8">
                  {/* Icon bubble */}
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${item.accent} mb-6 text-3xl shadow-md group-hover:scale-110 transition-transform duration-300`}
                  >
                    {item.icon}
                  </div>

                  <h3 className="text-xl font-black text-dark-brown mb-3 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Decorative corner circle */}
                <div
                  className={`absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-br ${item.accent} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
                />
              </div>
            ))}
          </div>

          {/* Bottom CTA strip */}
          <div className="mt-16 w-full bg-gradient-to-r from-orange to-red-500 rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
            <div className="text-white">
              <h3 className="text-3xl md:text-4xl font-black mb-2">
                Ready for an Unforgettable Evening?
              </h3>
              <p className="text-white/80 text-lg">
                Secure your table now — availability is limited.
              </p>
            </div>
            <button
              onClick={() =>
                document
                  .querySelector("form")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="flex-shrink-0 px-10 py-4 bg-white text-orange font-black rounded-xl hover:bg-orange hover:text-white border-2 border-white transition-all duration-300 text-lg shadow-lg"
            >
              Book Now →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}