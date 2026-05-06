"use client";

import { useState } from "react";
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

      {/* ── Page Header ── */}
      <div className="py-16 px-6 md:px-10 lg:px-14 bg-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm uppercase tracking-[0.3em] text-orange font-semibold mb-4">
            Table Booking
          </p>
          <h1 className="text-5xl md:text-6xl font-black text-dark-brown leading-tight mb-6">
            Planning Something <span className="text-orange">Special?</span>
          </h1>
          <p className="max-w-3xl text-gray-600 text-base md:text-lg leading-relaxed">
            Leave your table booking details and we&apos;ll get back to you to confirm. Bookings for up to 12 people are confirmed automatically. For groups larger than 12, our team will contact you within an hour to confirm.
          </p>
        </div>
      </div>

      {/* ── Reservation Form Section ── */}
      <div className="py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid gap-10 lg:grid-cols-[1.5fr_0.9fr]">

            {/* Form Column */}
            <div className="bg-white rounded-[2rem] shadow-[0_40px_120px_rgba(0,0,0,0.08)] p-6 md:p-10 lg:p-12">
              <div className="mb-10">
                <h2 className="text-3xl md:text-4xl font-black text-dark-brown mb-3">
                  Reserve Your Table
                </h2>
                <p className="text-sm md:text-base text-gray-600">
                  Fill in the details below and we&apos;ll handle the rest.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-dark-brown mb-2">
                      Pick your preferred location *
                    </label>
                    <select
                      name="branchId"
                      value={formData.branchId}
                      onChange={handleInputChange}
                      required
                      className="w-full rounded-2xl border-2 border-orange/20 bg-white px-4 py-3 text-sm text-dark-brown outline-none transition focus:border-orange focus:ring-2 focus:ring-orange/20"
                    >
                      {branches.map((branch) => (
                        <option key={branch.id} value={branch.id}>
                          {branch.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-dark-brown mb-2">
                      Your name *
                    </label>
                    <input
                      type="text"
                      name="customerName"
                      value={formData.customerName}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your full name"
                      className="w-full rounded-2xl border-2 border-orange/20 bg-white px-4 py-3 text-sm text-dark-brown outline-none transition focus:border-orange focus:ring-2 focus:ring-orange/20"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-dark-brown mb-2">
                      How many people are coming? *
                    </label>
                    <select
                      name="guestCount"
                      value={formData.guestCount}
                      onChange={handleInputChange}
                      required
                      className="w-full rounded-2xl border-2 border-orange/20 bg-white px-4 py-3 text-sm text-dark-brown outline-none transition focus:border-orange focus:ring-2 focus:ring-orange/20"
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
                      Booking date *
                    </label>
                    <input
                      type="date"
                      name="reservationDate"
                      value={formData.reservationDate}
                      onChange={handleInputChange}
                      required
                      className="w-full rounded-2xl border-2 border-orange/20 bg-white px-4 py-3 text-sm text-dark-brown outline-none transition focus:border-orange focus:ring-2 focus:ring-orange/20"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-dark-brown mb-2">
                      Reservation time *
                    </label>
                    <input
                      type="time"
                      name="reservationTime"
                      value={formData.reservationTime}
                      onChange={handleInputChange}
                      required
                      className="w-full rounded-2xl border-2 border-orange/20 bg-white px-4 py-3 text-sm text-dark-brown outline-none transition focus:border-orange focus:ring-2 focus:ring-orange/20"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-dark-brown mb-2">
                      Mobile phone number *
                    </label>
                    <input
                      type="tel"
                      name="customerPhone"
                      value={formData.customerPhone}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your valid phone number"
                      className="w-full rounded-2xl border-2 border-orange/20 bg-white px-4 py-3 text-sm text-dark-brown outline-none transition focus:border-orange focus:ring-2 focus:ring-orange/20"
                    />
                  </div>

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
                      placeholder="Enter your valid email address"
                      className="w-full rounded-2xl border-2 border-orange/20 bg-white px-4 py-3 text-sm text-dark-brown outline-none transition focus:border-orange focus:ring-2 focus:ring-orange/20"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-dark-brown mb-2">
                      Special occasion? Let us know
                    </label>
                    <input
                      type="text"
                      name="specialOccasion"
                      value={formData.specialOccasion}
                      onChange={handleInputChange}
                      placeholder="Up to 25 characters"
                      maxLength={25}
                      className="w-full rounded-2xl border-2 border-orange/20 bg-white px-4 py-3 text-sm text-dark-brown outline-none transition focus:border-orange focus:ring-2 focus:ring-orange/20"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <p className="block text-sm font-semibold text-dark-brown mb-3">
                      Where would you like to sit? *
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {[
                        { value: "flexible", label: "I’m flexible" },
                        { value: "inside", label: "Inside" },
                        { value: "outside", label: "Outside" },
                      ].map((option) => (
                        <label
                          key={option.value}
                          className={`flex items-center justify-between gap-3 rounded-2xl border-2 px-4 py-3 text-sm font-semibold transition ${
                            formData.seatingPreference === option.value
                              ? "border-dark-brown bg-dark-brown text-white"
                              : "border-orange/30 bg-white text-dark-brown hover:border-orange"
                          }`}
                        >
                          <span>{option.label}</span>
                          <input
                            type="radio"
                            name="seatingPreference"
                            value={option.value}
                            checked={formData.seatingPreference === option.value}
                            onChange={handleInputChange}
                            className="h-4 w-4 text-orange accent-orange"
                          />
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-full bg-dark-brown px-6 py-4 text-base font-bold uppercase tracking-[0.15em] text-white shadow-lg shadow-dark-brown/20 transition hover:bg-orange disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? "Sending request..." : "Send Booking Request"}
                </button>
              </form>

              {submitted && (
                <div className="mt-8 rounded-3xl border border-green-200 bg-green-50 p-6 text-sm text-green-700">
                  <p className="font-semibold text-dark-brown">✓ {successMessage}</p>
                  <p className="mt-2 text-gray-700">
                    Check your email for confirmation details. We look forward to welcoming you!
                  </p>
                </div>
              )}
            </div>

            {/* Info Column */}
            <div className="space-y-6">
              {selectedBranch && (
                <div className="rounded-[2rem] border border-orange/20 bg-white p-6 shadow-[0_30px_80px_rgba(0,0,0,0.08)]">
                  <div className="mb-6 rounded-3xl overflow-hidden bg-gradient-to-br from-orange to-red-500 p-6 text-white">
                    <p className="text-sm uppercase tracking-[0.3em] mb-2 opacity-90">Location</p>
                    <h3 className="text-2xl font-black">{selectedBranch.name}</h3>
                  </div>
                  <div className="space-y-4 text-sm text-gray-700">
                    <div>
                      <p className="font-semibold text-dark-brown">Address</p>
                      <p>{selectedBranch.address}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-dark-brown">Phone</p>
                      <a href={`tel:${selectedBranch.phone}`} className="text-orange font-semibold hover:underline">
                        {selectedBranch.phone}
                      </a>
                    </div>
                    <div>
                      <p className="font-semibold text-dark-brown">Hours</p>
                      <p>{selectedBranch.openTime} - {selectedBranch.closeTime}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-dark-brown">Capacity</p>
                      <p>{selectedBranch.capacity} seats</p>
                    </div>
                  </div>
                </div>
              )}

              <div className="rounded-[2rem] border border-orange/20 bg-amber-50 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.06)]">
                <h3 className="text-xl font-bold text-dark-brown mb-4">Booking Notes</h3>
                <ul className="space-y-4 text-sm text-gray-700">
                  <li>
                    <span className="font-semibold text-orange">•</span> Groups up to 12 people are confirmed automatically.
                  </li>
                  <li>
                    <span className="font-semibold text-orange">•</span> For larger groups, we will contact you within an hour.
                  </li>
                  <li>
                    <span className="font-semibold text-orange">•</span> Please arrive 10 minutes early for seating.
                  </li>
                  <li>
                    <span className="font-semibold text-orange">•</span> Free cancellation 24 hours before your booking.
                  </li>
                </ul>
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