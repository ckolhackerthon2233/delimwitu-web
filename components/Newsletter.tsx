"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }
    alert("You're subscribed! Welcome to the Delimwitu Cafe family 🎉");
    setEmail("");
  };

  return (
    <div className="bg-dark-brown text-white py-16">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-white/50 mb-4">Stay Connected</span>
        <h2 className="text-3xl font-bold mb-4">Get Weekly Specials</h2>
        <p className="max-w-96 mx-auto text-base text-white/80 mb-8">
          Subscribe and be the first to know about new dishes, seasonal menus,
          and exclusive events at Delimwitu.
        </p>
        <form onSubmit={handleSubscribe} className="flex gap-2 max-w-96 mx-auto max-md:flex-col">
          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-3 rounded bg-white/90 text-dark-brown placeholder-gray-500 border-0 focus:outline-none focus:ring-2 focus:ring-orange"
            required
          />
          <button
            type="submit"
            className="px-8 py-3 bg-orange text-white font-semibold uppercase text-xs tracking-wider rounded hover:bg-orange-hover transition-colors border-0 cursor-pointer"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}
