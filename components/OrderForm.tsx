"use client";

import { useState } from "react";
import { MenuItem } from "@/types";
import { sendOrderEmail } from "@/actions/emails";

interface OrderFormProps {
  item: MenuItem;
  onSubmitStart?: () => void;
  onSubmitEnd?: () => void;
}

interface WindowWithToast extends Window {
  showToast?: (message: string, type: 'success' | 'error' | 'info') => void;
}

export default function OrderForm({ item, onSubmitStart, onSubmitEnd }: OrderFormProps) {
  const [quantity, setQuantity] = useState("1");
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");
  const [orderChannel, setOrderChannel] = useState<"email" | "whatsapp">("email");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setQuantity(value);
  };

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "254742767255";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!customerName || !customerEmail || !customerPhone) {
      setMessage("Please fill in all required fields");
      return;
    }

    const quantityValue = parseInt(quantity, 10);
    if (!quantity || isNaN(quantityValue) || quantityValue < 1) {
      setMessage("Please enter a quantity of at least 1.");
      return;
    }

    setLoading(true);
    onSubmitStart?.();

    const total = (parseFloat(item.price.replace(/[^0-9.]/g, "")) * quantityValue).toFixed(2);
    const orderSummary = `Hello Delimwitu,\n\nI would like to place an order:\n- Item: ${item.title}\n- Quantity: ${quantityValue}\n- Unit price: ${item.price}\n- Total: KSh ${total}\n\nCustomer details:\n- Name: ${customerName}\n- Email: ${customerEmail}\n- Phone: ${customerPhone}${specialRequests ? `\n- Special requests: ${specialRequests}` : ""}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(orderSummary)}`;

    try {
      if (orderChannel === "whatsapp") {
        if (typeof window !== "undefined") {
          window.open(whatsappUrl, "_blank");
        }
        setMessage("✓ WhatsApp order opened. Please confirm the message in WhatsApp.");
        if (typeof window !== 'undefined') {
          (window as WindowWithToast).showToast?.('WhatsApp order opened. Confirm it in WhatsApp.', 'success');
        }
      } else {
        const result = await sendOrderEmail({
          customerName,
          customerEmail,
          customerPhone,
          itemName: item.title,
          itemPrice: item.price,
          quantity: quantityValue,
          specialRequests: specialRequests || undefined,
        });

        if (result.success) {
          setMessage("✓ Order sent successfully! Check your email for confirmation.");
          if (typeof window !== 'undefined') {
            (window as WindowWithToast).showToast?.('Order sent successfully! Check your email for confirmation.', 'success');
          }
        } else {
          setMessage("Failed to send order. Please try again.");
          if (typeof window !== 'undefined') {
            (window as WindowWithToast).showToast?.('Failed to send order. Please try again.', 'error');
          }
        }
      }

      // Reset form after any successful flow
      setCustomerName("");
      setCustomerEmail("");
      setCustomerPhone("");
      setSpecialRequests("");
      setQuantity("1");
      setOrderChannel("email");
    } catch (error) {
      setMessage("An error occurred. Please try again.");
      if (typeof window !== 'undefined') {
        (window as WindowWithToast).showToast?.('An error occurred. Please try again.', 'error');
      }
      console.error(error);
    } finally {
      onSubmitEnd?.();
      setLoading(false);
    }
  };

  const priceNum = parseFloat(item.price.replace(/[^0-9.]/g, ""));
  const quantityNumber = quantity === "" ? 1 : Math.max(1, parseInt(quantity, 10) || 1);
  const totalPrice = (priceNum * quantityNumber).toFixed(2);

  return (
    <div className="bg-white rounded-3xl shadow-lg p-8 max-w-md">
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="inline-flex items-center rounded-full bg-orange/10 text-orange px-3 py-1 text-xs font-bold uppercase">
            {item.cat}
          </span>
          {item.subcategory && (
            <span className="inline-flex items-center rounded-full bg-slate-100 text-slate-700 px-3 py-1 text-xs font-medium">
              {item.subcategory}
            </span>
          )}
        </div>
        <h2 className="text-3xl font-bold text-dark-brown mb-3">Order {item.title}</h2>
        <p className="text-sm text-gray-600">{item.desc}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
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
            className="w-full px-4 py-2 border border-orange-light rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-light/40"
          />
        </div>

        {/* Order Channel */}
        <div>
          <label className="block text-sm font-semibold text-dark-brown mb-2">
            Order via
          </label>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setOrderChannel("email")}
              className={`rounded-2xl border px-4 py-2 text-sm font-semibold transition ${orderChannel === "email" ? "border-orange bg-orange/10 text-orange" : "border-slate-200 bg-white text-dark-brown hover:border-orange"}`}
            >
              Email
            </button>
            <button
              type="button"
              onClick={() => setOrderChannel("whatsapp")}
              className={`rounded-2xl border px-4 py-2 text-sm font-semibold transition ${orderChannel === "whatsapp" ? "border-green-500 bg-green-50 text-green-700" : "border-slate-200 bg-white text-dark-brown hover:border-green-500"}`}
            >
              WhatsApp
            </button>
          </div>
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
            className="w-full px-4 py-2 border border-orange-light rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-light/40"
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
            className="w-full px-4 py-2 border border-orange-light rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-light/40"
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
            className="w-full px-4 py-2 border border-orange-light rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-light/40"
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
            className="w-full px-4 py-2 border border-orange-light rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-light/40 resize-none"
            rows={3}
          />
        </div>

        <div className="rounded-3xl border border-orange/10 bg-orange/10 px-4 py-3 text-sm text-orange font-semibold">
          {orderChannel === "whatsapp"
            ? "WhatsApp ordering selected — your order will open in WhatsApp for confirmation."
            : "Email ordering selected — your order will be sent directly to our team for confirmation."}
        </div>

        {/* Message */}
        {message && (
          <div
            className={`p-3 rounded-lg text-sm shadow-md border ${
              message.startsWith("✓")
                ? "bg-white border-green-300 text-slate-950"
                : "bg-white border-red-300 text-slate-950"
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
          {orderChannel === "whatsapp"
            ? "We\'ll open WhatsApp so you can send your order directly to Delimwitu."
            : "We\'ll confirm your order via email. No payment info stored online."}
        </p>
      </form>
    </div>
  );
}
