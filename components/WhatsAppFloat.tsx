"use client";

import { useState } from "react";
import Image from "next/image";

export default function WhatsAppFloat() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href="https://wa.me/254712345678?text=Hi,%20I'd%20like%20to%20place%20an%20order%20with%20Delimwitu"
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 flex items-center justify-center rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40 ${
        isHovered
          ? "w-48 h-16"
          : "w-16 h-16"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    >
      <div className={`flex items-center gap-3 transition-all duration-300 ${isHovered ? "opacity-100" : "opacity-100"}`}>
        <Image
          src="/whatsapp.png"
          alt="WhatsApp"
          width={60}
          height={60}
          className={`transition-all duration-300 ${isHovered ? "w-12 h-12" : "w-14 h-14"}`}
        />
        {isHovered && (
          <span className="text-green-600 font-semibold text-sm whitespace-nowrap">
            WhatsApp
          </span>
        )}
      </div>
    </a>
  );
}
