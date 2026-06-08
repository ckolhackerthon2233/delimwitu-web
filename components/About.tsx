"use client";

import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section className="bg-cream">
      <div className="max-w-7xl mx-auto px-6 py-24 space-y-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.95fr] items-center">
          <div className="space-y-6">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.35em] text-orange mb-4">
              About Us
            </span>
            <h2 className="text-5xl font-black text-dark-brown max-w-2xl leading-tight md:text-6xl">
              Delimwitu Market is more than a shop — it’s a culinary journey.
            </h2>
            <p className="text-base leading-relaxed text-dark-brown/80 max-w-2xl">
              Delimwitu Market brings together inspired food, fresh produce,
              beautiful blooms and everyday essentials under one welcoming roof.
              From thoughtfully curated pantry goods to ready meals and live cooking
              demos, every visit is designed to be flavorful, convenient, and full of
              warmth.
            </p>
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 rounded-full bg-orange px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-orange-hover"
            >
              Discover Menu
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="relative h-72 overflow-hidden rounded-[2rem] shadow-xl sm:h-[420px]">
              <Image
                src="/about/img.png"
                alt="Deli Mwitu market interior"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-72 overflow-hidden rounded-[2rem] shadow-xl sm:h-[420px]">
              <Image
                src="/about/img-2.svg"
                alt="Fresh ingredients and bakery display"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-center">
          <div className="relative h-[420px] overflow-hidden rounded-[32px] shadow-2xl">
            <Image
              src="/about/img.png"
              alt="Team at Deli Mwitu"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6 rounded-[32px] bg-white p-10 shadow-xl">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.35em] text-orange">
              Our Menu Philosophy
            </span>
            <h3 className="text-4xl font-bold text-dark-brown">
              The Deli Mwitu menu tells a story of comfort, variety, and authentic Kenyan hospitality.
            </h3>
            <p className="text-base leading-relaxed text-dark-brown/80">
              Delimwitu is a family of people who grow with us, care for one
              another, and take pride in every moment they serve. Our leadership
              is rooted in strong values, and our teams are empowered to learn,
              excel, and create memorable experiences for every guest.
            </p>
            <p className="text-base leading-relaxed text-dark-brown/80">
              From baristas rising on stage to servers becoming managers, every
              team member is part of what makes Delimwitu special. We celebrate
              curiosity, craftsmanship, and a culture of support.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-cream p-5">
                <p className="text-sm uppercase tracking-[0.35em] text-sand/70">Team size</p>
                <p className="mt-3 text-3xl font-bold text-dark-brown">190+</p>
              </div>
              <div className="rounded-3xl bg-cream p-5">
                <p className="text-sm uppercase tracking-[0.35em] text-sand/70">Female leaders</p>
                <p className="mt-3 text-3xl font-bold text-dark-brown">Majority</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1fr_0.95fr] items-center">
          <div className="space-y-6 rounded-[32px] bg-white p-10 shadow-xl">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.35em] text-orange">
              Core Brand Pillars
            </span>
            <h3 className="text-4xl font-bold text-dark-brown">
              Authentic Hospitality, Thoughtful Variety, Continuous Growth.
            </h3>
            <p className="text-base leading-relaxed text-dark-brown/80">
              At the heart of Delimwitu lies a bakery dedicated to authentic,
              artisanal breads made without additives or preservatives. We honor
              techniques like natural fermentation, stone baking, and a starter
              that has matured for years.
            </p>
            <p className="text-base leading-relaxed text-dark-brown/80">
              Continuous Growth: Intentional about service, committed to consistency, and always listening to our community so we can improve every single day.
            </p>
          </div>
          <div className="relative h-[420px] overflow-hidden rounded-[32px] shadow-2xl">
            <Image
              src="/about/img-2.svg"
              alt="Delimwitu bakery specialty"                
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
