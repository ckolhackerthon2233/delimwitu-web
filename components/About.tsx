"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function About() {
  const features = [
    "Locally sourced ingredients",
    "Zero-waste kitchen",
    "Seasonal rotating menu",
    "Private event catering",
    "Vegan & allergy-friendly",
    "Live music on weekends",
  ];

  const [smallImgSrc, setSmallImgSrc] = useState("/about/img.png");
  const [largeImgSrc, setLargeImgSrc] = useState("/about/img-2.png");

  return (
    <section id="about" className="py-24 max-md:py-16">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-lg:gap-12 max-md:gap-8">
          {/* Images Section */}
          <div className="grid grid-cols-2 gap-6 max-md:gap-4">
            {/* Large image */}
            <div className="col-span-2 lg:col-span-1 lg:row-span-2 h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-md">
              <Image
                src={largeImgSrc}
                alt="Cafe interior"
                fill
                className="object-cover"
                onError={() => setLargeImgSrc("/hero/bg.png")}
              />
            </div>

            {/* Small image */}
            <div className="h-48 lg:h-56 rounded-lg overflow-hidden shadow-md relative">
              <Image
                src={smallImgSrc}
                alt="Coffee preparation"
                fill
                className="object-cover"
                onError={() => setSmallImgSrc("/hero/bg.png")}
              />
            </div>

            {/* Badge */}
            <div className="flex justify-center items-center bg-orange text-white rounded-lg shadow-md col-span-1 h-32 lg:h-auto">
              <div className="text-center">
                <strong className="font-playfair text-3xl font-black block">5+</strong>
                <span className="text-xs font-semibold uppercase tracking-wider">
                  Years Serving
                </span>
              </div>
            </div>
          </div>

          {/* Text Section */}
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-orange mb-4">Our Story</span>
            <h2 className="text-4xl font-bold text-dark-brown mb-6 max-md:text-3xl">Let&apos;s Talk About Delimwitu</h2>
            <div className="h-0.75 w-15 bg-orange rounded mb-8"></div>

            <p className="text-base leading-relaxed text-gray-700 mb-6">
              Born from a deep love for rich culinary heritage,
               Delimwitu began as a small corner café built on a 
              simple belief: great food isn’t complicated it’s honest, 
              fresh, and full of heart.
            </p>

            <p className="text-base leading-relaxed text-gray-700 mb-8">
              Today, we serve hundreds of guests daily, but our philosophy
              remains unchanged: every plate leaving our kitchen carries the
              same care as the very first one we made. We partner directly with
              local farmers to ensure every ingredient is seasonal, sustainable,
              and extraordinary.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 bg-cream rounded">
                  <span className="w-2 h-2 rounded-full bg-orange flex-shrink-0"></span>
                  <span className="text-sm font-medium text-dark-brown">{feature}</span>
                </div>
              ))}
            </div>

            <Link href="/book-table" className="inline-flex items-center gap-2 px-8 py-3 bg-orange text-white text-xs font-semibold uppercase tracking-wider rounded cursor-pointer border-0 transition-all duration-250 hover:bg-orange-hover hover:shadow-lg hover:-translate-y-0.5">
              Reserve a Table
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
