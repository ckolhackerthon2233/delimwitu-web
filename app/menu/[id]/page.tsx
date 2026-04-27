"use client";

import { useState, use } from "react";
import Link from "next/link";
import { menuData } from "@/data/menuData";
import { sendOrderEmail } from "@/actions/emails";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default function FoodDetailPage({ params }: Props) {
  const { id } = use(params);
  const decodedId = decodeURIComponent(id);
  const food = menuData.find((item) => (item.id || item.title.toLowerCase().replace(/\s+/g, "-")) === decodedId);

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [formData, setFormData] = useState({
    customerName: "",
    customerEmail: "",
    customerPhone: "",
    quantity: 1,
    specialRequests: "",
  });

  if (!food) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-cream via-white to-warm-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-dark-brown mb-4">Item Not Found</h1>
          <p className="text-gray-600 mb-6">Sorry, we couldn&apos;t find the food item you&apos;re looking for.</p>
          <Link href="/menu" className="px-8 py-3 bg-orange text-white rounded-lg font-bold hover:bg-orange-600 transition">
            Back to Menu
          </Link>
        </div>
      </div>
    );
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleOrderByEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await sendOrderEmail({
        customerName: formData.customerName,
        customerEmail: formData.customerEmail,
        customerPhone: formData.customerPhone,
        itemName: food.title,
        itemPrice: food.price,
        quantity: parseInt(formData.quantity.toString()),
        specialRequests: formData.specialRequests,
      });

      if (result.success) {
        setSuccessMessage(result.message);
        setSubmitted(true);
        setFormData({
          customerName: "",
          customerEmail: "",
          customerPhone: "",
          quantity: 1,
          specialRequests: "",
        });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error("Order error:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleOrderByWhatsApp = () => {
    const message = `Hi! I'd like to order:\n\n${food.title}\nQuantity: ${formData.quantity}\nPrice: ${food.price}${formData.specialRequests ? `\n\nSpecial Requests: ${formData.specialRequests}` : ""}`;
    const whatsappUrl = `https://wa.me/254701234567?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream via-white to-warm-white">
      {/* Back Button */}
      <div className="pt-8 px-6">
        <div className="">
          <Link href="/menu" className="inline-flex items-center gap-2 text-orange font-semibold hover:text-orange-600 transition">
            ← Back to Menu
          </Link>
        </div>
      </div>

      {/* Food Details Section */}
      <div className="">
        <div className="w-full">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Food Image */}
            <div className="relative">
              <div className="aspect-square bg-white rounded-2xl shadow-xl overflow-hidden">
                <img src={food.img} alt={food.title} className="w-full h-full object-cover" />
              </div>
              {food.badge && (
                <div className="absolute top-6 right-6 bg-orange text-white px-4 py-2 rounded-full font-bold text-sm">
                  {food.badge}
                </div>
              )}
            </div>

            {/* Food Details */}
            <div>
              <div className="mb-6">
                <div className="inline-block bg-orange/10 text-orange px-4 py-1 rounded-full text-sm font-semibold mb-4">
                  {food.cat.charAt(0).toUpperCase() + food.cat.slice(1)}
                </div>
                <h1 className="text-5xl font-black text-dark-brown mb-4">{food.title}</h1>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">{food.desc}</p>
                <div className="flex items-center gap-4">
                  <span className="text-4xl font-black text-orange">{food.price}</span>
                </div>
              </div>

              {/* Order Form */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-dark-brown mb-6">Place Your Order</h2>

                <form onSubmit={handleOrderByEmail} className="space-y-4 mb-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-dark-brown mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="customerName"
                      value={formData.customerName}
                      onChange={handleInputChange}
                      required
                      placeholder="Your name"
                      className="w-full px-4 py-3 border-2 border-tan rounded-lg focus:border-orange focus:outline-none transition"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-dark-brown mb-2">Email *</label>
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

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-dark-brown mb-2">Phone *</label>
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

                  {/* Quantity */}
                  <div>
                    <label className="block text-sm font-semibold text-dark-brown mb-2">Quantity *</label>
                    <select
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-tan rounded-lg focus:border-orange focus:outline-none transition"
                    >
                      {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                        <option key={num} value={num}>
                          {num}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Special Requests */}
                  <div>
                    <label className="block text-sm font-semibold text-dark-brown mb-2">Special Requests (Optional)</label>
                    <textarea
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleInputChange}
                      placeholder="Any allergies, preferences, or special instructions?"
                      maxLength={200}
                      className="w-full px-4 py-3 border-2 border-tan rounded-lg focus:border-orange focus:outline-none transition resize-none"
                      rows={3}
                    />
                  </div>

                  {/* Order by Email Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-gradient-to-r from-orange to-red-500 text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50 text-lg"
                  >
                    {loading ? "Processing…" : "📧 Order by Email"}
                  </button>
                </form>

                {/* WhatsApp Button */}
                <button
                  onClick={handleOrderByWhatsApp}
                  className="w-full py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300 text-lg"
                >
                  💬 Order by WhatsApp
                </button>

                {/* Success Message */}
                {submitted && (
                  <div className="mt-6 p-4 bg-green-50 border-l-4 border-green-500 rounded-lg text-green-700">
                    <p className="font-bold">✓ {successMessage}</p>
                    <p className="text-sm mt-2">Check your email for confirmation details.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Items */}
      <div className="py-20 px-6 bg-orange/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-dark-brown mb-12 text-center">You might also like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {menuData
              .filter((item) => item.cat === food.cat && item.title !== food.title)
              .slice(0, 3)
              .map((item, idx) => (
                <Link
                  key={idx}
                  href={`/menu/${item.id || item.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden"
                >
                  <div className="aspect-square bg-gray-200 overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-dark-brown mb-2 group-hover:text-orange transition">{item.title}</h3>
                    <p className="text-lg font-bold text-orange">{item.price}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
