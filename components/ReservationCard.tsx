"use client";

import Link from "next/link";

export default function ReservationCard() {
  return (
    <section id="reservation-cta" className="py-20 bg-gradient-to-br from-orange-50 to-cream">
      <div className="container">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <div className="bg-gradient-to-r from-orange to-red-500 h-32 flex items-center justify-center">
              <span className="text-5xl">💬</span>
            </div>
            <div className="p-8 text-center">
              <h3 className="text-2xl font-bold text-dark-brown mb-3">
                Get in Touch
              </h3>
              <p className="text-gray-600 mb-6">
                Have questions or need assistance? Contact us and our team will be happy to help.
              </p>
              <Link
                href="/#contact"
                className="inline-block px-8 py-3 bg-orange text-white font-semibold rounded-lg hover:bg-red-600 transition-colors duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
