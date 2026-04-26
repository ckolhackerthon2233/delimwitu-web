"use client";

import { useState } from "react";
import { MenuItem } from "@/types";
import { sendOrderEmail } from "@/actions/emails";

interface OrderFormProps {
  item: MenuItem;
  onSubmitStart?: () => void;
  onSubmitEnd?: () => void;
}

export default function OrderForm({ item, onSubmitStart, onSubmitEnd }: OrderFormProps) {
  const [quantity, setQuantity] = useState(1);
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");
  const [orderMethod, setOrderMethod] = useState("email");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 1;
    setQuantity(Math.max(1, value));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!customerName || !customerEmail || !customerPhone) {
      setMessage("Please fill in all required fields");
      return;
    }

    if (orderMethod === "email") {
      setLoading(true);
      onSubmitStart?.();
      try {
        const result = await sendOrderEmail({
          customerName,
          customerEmail,
          customerPhone,
          itemName: item.title,
          itemPrice: item.price,
          quantity,
          specialRequests: specialRequests || undefined,
        });

        if (result.success) {
          setMessage("✓ Order sent successfully! Check your email for confirmation.");
          // Reset form
          setCustomerName("");
          setCustomerEmail("");
          setCustomerPhone("");
          setSpecialRequests("");
          setQuantity(1);
        } else {
          setMessage("Failed to send order. Please try again.");
        }
      } catch (error) {
        setMessage("An error occurred. Please try again.");
        console.error(error);
      } finally {
        onSubmitEnd?.();
        setLoading(false);
      }
    } else if (orderMethod === "whatsapp") {
      // WhatsApp coming soon
      setMessage("WhatsApp ordering is coming soon!");
    }
  };

  const priceNum = parseFloat(item.price.replace(/[^0-9.]/g, ""));
  const totalPrice = (priceNum * quantity).toFixed(2);

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-md">
      <h2 className="text-2xl font-bold text-dark-brown mb-6">Place Your Order</h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Quantity */}
        <div>
          <label className="block text-sm font-semibold text-dark-brown mb-2">
            Quantity
          </label>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={handleQuantityChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange"
          />
        </div>

        {/* Price Display */}
        <div className="bg-gradient-to-r from-orange/10 to-orange/5 p-4 rounded-lg">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-600">Unit Price:</span>
            <span className="font-semibold text-dark-brown">{item.price}</span>
          </div>
          <div className="border-t border-orange/20 pt-2 flex justify-between items-center">
            <span className="font-bold text-dark-brown">Total:</span>
            <span className="text-xl font-bold text-orange">KSh {totalPrice}</span>
          </div>
        </div>

        {/* Customer Name */}
        <div>
          <label className="block text-sm font-semibold text-dark-brown mb-2">
            Full Name *
          </label>
          <input
            type="text"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            placeholder="Your full name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange"
            required
          />
        </div>

        {/* Customer Email */}
        <div>
          <label className="block text-sm font-semibold text-dark-brown mb-2">
            Email *
          </label>
          <input
            type="email"
            value={customerEmail}
            onChange={(e) => setCustomerEmail(e.target.value)}
            placeholder="your.email@example.com"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange"
            required
          />
        </div>

        {/* Customer Phone */}
        <div>
          <label className="block text-sm font-semibold text-dark-brown mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            value={customerPhone}
            onChange={(e) => setCustomerPhone(e.target.value)}
            placeholder="+254 700 000 000"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange"
            required
          />
        </div>

        {/* Special Requests */}
        <div>
          <label className="block text-sm font-semibold text-dark-brown mb-2">
            Special Requests (Optional)
          </label>
          <textarea
            value={specialRequests}
            onChange={(e) => setSpecialRequests(e.target.value)}
            placeholder="Any special requests or dietary requirements?"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange resize-none"
            rows={3}
          />
        </div>

        {/* Order Method */}
        <div>
          <label className="block text-sm font-semibold text-dark-brown mb-3">
            Order Method
          </label>
          <div className="space-y-2">
            <label className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
              <input
                type="radio"
                name="orderMethod"
                value="email"
                checked={orderMethod === "email"}
                onChange={(e) => setOrderMethod(e.target.value)}
                className="w-4 h-4 text-orange"
              />
              <span className="ml-3 text-dark-brown font-medium">Email Order</span>
            </label>
            <label className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer opacity-60">
              <input
                type="radio"
                name="orderMethod"
                value="whatsapp"
                onChange={(e) => setOrderMethod(e.target.value)}
                className="w-4 h-4 text-orange"
                disabled
              />
              <span className="ml-3 text-dark-brown font-medium">WhatsApp (Coming Soon)</span>
            </label>
          </div>
        </div>

        {/* Message */}
        {message && (
          <div
            className={`p-3 rounded-lg text-sm ${
              message.startsWith("✓")
                ? "bg-green-100 text-green-800"
                : "bg-amber-100 text-amber-800"
            }`}
          >
            {message}
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-gradient-to-r from-orange to-orange-hover text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Sending..." : "Send Order"}
        </button>

        <p className="text-xs text-gray-600 text-center">
          We&apos;ll confirm your order via email. No payment info stored online.
        </p>
      </form>
    </div>
  );
}
