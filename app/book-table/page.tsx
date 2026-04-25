"use client";

import { useState, useEffect } from "react";
import { createReservation, getBranches } from "@/actions/reservations";
import dynamic from "next/dynamic";

interface Branch {
  id: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  openTime: string;
  closeTime: string;
  capacity: number;
}

const MapComponent = dynamic(() => import("@/components/MapDynamic"), {
  ssr: false,
  loading: () => <div className="h-96 bg-gray-200 rounded-lg animate-pulse" />,
});

export default function BookTable() {
  const [branches, setBranches] = useState<Branch[]>([]);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [formData, setFormData] = useState({
    branchId: "",
    customerName: "",
    customerEmail: "",
    customerPhone: "",
    guestCount: 2,
    reservationDate: "",
    reservationTime: "19:00",
    seatingPreference: "flexible",
    specialOccasion: "",
  });

  useEffect(() => {
    async function loadBranches() {
      const data = await getBranches();
      setBranches(data);
      if (data.length > 0) {
        setFormData((prev) => ({ ...prev, branchId: data[0].id }));
      }
    }
    loadBranches();
  }, []);

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
      const reservationDateTime = new Date(
        `${formData.reservationDate}T${formData.reservationTime}`
      );

      const result = await createReservation({
        branchId: formData.branchId,
        customerName: formData.customerName,
        customerEmail: formData.customerEmail,
        customerPhone: formData.customerPhone,
        guestCount: parseInt(formData.guestCount.toString()),
        reservationDate: reservationDateTime.toISOString(),
        seatingPreference: formData.seatingPreference,
        specialOccasion: formData.specialOccasion || undefined,
      });

      if (result.success) {
        setSuccessMessage(result.message);
        setSubmitted(true);
        setFormData({
          branchId: branches[0]?.id || "",
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

  // Branch image mappings
  const branchImages: Record<string, string> = {
    default: "",
    kileleshua: "",
    downtown: "",
    westlands: "",
  };

  const getBranchImage = (branchName: string) => {
    const name = branchName.toLowerCase();
    if (name.includes("kileleshua")) return branchImages.kileleshua;
    if (name.includes("downtown")) return branchImages.downtown;
    if (name.includes("westlands")) return branchImages.westlands;
    return branchImages.default;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream via-white to-warm-white">
       {/* Hero Section */}
       <div className="pt-32 pb-20 px-6 relative">
         <div className="absolute inset-0 bg-[url('/hero/tb')] bg-center bg-cover bg-no-repeat" />
         <div className="absolute inset-0 bg-black bg-opacity-50" />
         <div className="relative max-w-6xl mx-auto text-center text-white pt-32 pb-20 px-6">
           <h1 className="text-6xl md:text-7xl font-black mb-6">Book Your Table</h1>
           <p className="text-xl md:text-2xl mb-4 text-white/90">
             Reserve your culinary experience at Delimwitu
           </p>
           <p className="text-lg text-white/80 max-w-2xl mx-auto">
             Join us for an unforgettable meal in one of our carefully curated locations across Nairobi
           </p>
         </div>
       </div>

      {/* Reservation Form Section */}
      <div className="py-20 px-6">
        <div className="container max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Form */}
            <div className="md:col-span-2 bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Branch Selection */}
                <div>
                  <label className="block text-sm font-semibold text-dark-brown mb-2">
                    Choose a Branch *
                  </label>
                  <select
                    name="branchId"
                    value={formData.branchId}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-tan rounded-lg focus:border-orange focus:outline-none transition"
                  >
                    {branches.map((branch) => (
                      <option key={branch.id} value={branch.id}>
                        {branch.name} — {branch.address.split(",")[0]}
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

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-gradient-to-r from-orange to-red-500 text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50"
                >
                  {loading ? "Processing..." : "Reserve Your Table"}
                </button>
              </form>

              {/* Success Message */}
              {submitted && (
                <div className="mt-8 p-6 bg-green-50 border-l-4 border-green-500 rounded-lg text-green-700">
                  <p className="font-bold text-lg">✓ {successMessage}</p>
                  <p className="text-sm mt-2">
                    Check your email for confirmation details. We look forward to welcoming you!
                  </p>
                </div>
              )}
            </div>
            {/* Sidebar */}
            <div className="md:col-span-1 space-y-6">
              {/* Current Branch Info with Image */}
              {selectedBranch && (
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="h-48 bg-gradient-to-br from-orange to-red-500 relative overflow-hidden">
                    <img
                      src={getBranchImage(selectedBranch.name)}
                      alt={selectedBranch.name}
                      className="w-full h-full object-cover opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-dark-brown mb-4">
                      📍 {selectedBranch.name}
                    </h3>
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

              {/* Guidelines */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 shadow-lg border-l-4 border-blue-500">
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
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 shadow-lg border-l-4 border-orange">
                <h3 className="text-lg font-bold text-dark-brown mb-4">
                  💬 Need Help?
                </h3>
                <p className="text-sm text-gray-700 mb-4">
                  Contact us for large groups or special requests.
                </p>
                <a
                  href="tel:+254701234567"
                  className="inline-block px-6 py-3 bg-gradient-to-r from-orange to-red-500 text-white rounded-lg font-bold hover:shadow-lg transition-all"
                >
                  Call Us Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Branch Locations Section */}
      <div className="py-20 px-6 bg-gradient-to-b from-transparent to-orange-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-orange mb-4">Our Locations</span>
            <h2 className="text-5xl font-black text-dark-brown mb-6">Visit Our Branches</h2>
            <p className="text-lg text-gray-700">
              Three carefully curated locations across Nairobi, each with its own unique charm
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {branches.map((branch) => (
              <div
                key={branch.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="h-64 bg-gradient-to-br from-orange to-red-500 relative overflow-hidden">
                  <img
                    src={getBranchImage(branch.name)}
                    alt={branch.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white">{branch.name}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="text-orange text-xl">📍</span>
                      <div>
                        <p className="font-semibold text-dark-brown">Location</p>
                        <p className="text-sm text-gray-600">{branch.address}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-orange text-xl">🕐</span>
                      <div>
                        <p className="font-semibold text-dark-brown">Hours</p>
                        <p className="text-sm text-gray-600">
                          {branch.openTime} - {branch.closeTime}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-orange text-xl">🪑</span>
                      <div>
                        <p className="font-semibold text-dark-brown">Capacity</p>
                        <p className="text-sm text-gray-600">{branch.capacity} Guests</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-orange text-xl">📞</span>
                      <div>
                        <p className="font-semibold text-dark-brown">Call</p>
                        <a
                          href={`tel:${branch.phone}`}
                          className="text-sm text-orange font-semibold hover:underline"
                        >
                          {branch.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setFormData((prev) => ({ ...prev, branchId: branch.id }));
                      document.querySelector(".md\\:col-span-2")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="w-full mt-6 py-3 bg-gradient-to-r from-orange to-red-500 text-white font-bold rounded-lg hover:shadow-lg transition-all"
                  >
                    Book at this Location
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="py-20 px-6 bg-cream">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-orange mb-4">Find Us</span>
            <h2 className="text-5xl font-black text-dark-brown mb-6">Our Locations on the Map</h2>
            <p className="text-lg text-gray-700">
              Discover our branches and plan your visit
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl h-96 md:h-[500px]">
            <MapComponent />
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-20 px-6 bg-gradient-to-b from-orange-50 to-cream">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-orange mb-4">Experience</span>
            <h2 className="text-5xl font-black text-dark-brown mb-6">Why Dine With Us</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: "🍽️",
                title: "Premium Cuisine",
                description: "Authentic Kenyan and international dishes prepared by our expert chefs",
              },
              {
                icon: "👨‍💼",
                title: "Exceptional Service",
                description: "Dedicated staff ensuring every moment of your visit is memorable",
              },
              {
                icon: "🎭",
                title: "Ambiance",
                description: "Carefully designed spaces perfect for any occasion or celebration",
              },
              {
                icon: "🎵",
                title: "Entertainment",
                description: "Live music and special events to enhance your dining experience",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-dark-brown mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-6 bg-gradient-to-r from-dark-brown via-orange to-red-500">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-black mb-4">Ready to Experience Delimwitu?</h2>
          <p className="text-xl mb-8 text-white/90">
            Book your table now and join us for an unforgettable culinary journey
          </p>
          <a
            href="#reservation"
            className="inline-block px-8 py-4 bg-white text-orange font-bold rounded-lg hover:shadow-lg transition-all text-lg"
          >
            Reserve Your Table
          </a>
        </div>
      </div>
    </div>
  );
}
