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
              At Deli Mwitu, we are more than just a food spot — we are a team built on passion, people, and the everyday Kenyan spirit.
            </h2>
            <p className="text-base leading-relaxed text-dark-brown/80 max-w-2xl">
              Rooted in the heart of Nairobi, we’ve created a vibrant space that reflects the energy around us: warm, lively, and grounded in real connection. We believe that food should be exciting, evolving, and enjoyable every single time you visit.
            </p>
            <p className="text-base leading-relaxed text-dark-brown/80 max-w-2xl">
              That’s why our menu thoughtfully balances the rich comfort of Kenyan traditions with the fast-paced creativity of modern café culture. Whether you are dropping in for a quick bite on the move or sitting down to connect with friends, Deli Mwitu is a place where you can always discover something new while enjoying the flavors you already love.
            </p>
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 rounded-full bg-orange px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-orange-hover"
            >
              Discover More
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="relative h-72 overflow-hidden rounded-[2rem] shadow-xl sm:h-[420px]">
              <Image
                src="/about/img.png"
                alt="Delimwitu market interior"
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
              alt="Team at Delimwitu"
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
              We pride ourselves on offering a diverse selection where traditional favorites sit comfortably alongside contemporary café staples.
            </p>
            <p className="text-base leading-relaxed text-dark-brown/80">
              Traditional Comforts: Hearty, heritage dishes like perfectly prepared mukimo, savory mbuzi, fresh managu, and nourishing uji that taste like home.
            </p>
            <p className="text-base leading-relaxed text-dark-brown/80">
              Modern Café Culture: Quick, flavorful bites and contemporary favorites, including juicy burgers, savory shawarmas, fresh juices, and specialty coffees crafted for life on the go.
            </p>
            <p className="text-base leading-relaxed text-dark-brown/80">
              Every plate and drink we serve is intentional, fresh, and designed to bring people together over satisfying, familiar meals.
            </p>
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
              Authentic Hospitality: Grounded in a real Kenyan vibe, offering warmth, care, and a welcoming environment to everyone who walks through our doors.
            </p>
            <p className="text-base leading-relaxed text-dark-brown/80">
              Thoughtful Variety: Keeping food exciting by balancing classic heritage dishes with modern, fresh café favorites.
            </p>
            <p className="text-base leading-relaxed text-dark-brown/80">
              Continuous Growth: Intentional about service, committed to consistency, and always listening to our community so we can improve every single day.
            </p>
          </div>
          <div className="relative h-[420px] overflow-hidden rounded-[32px] shadow-2xl">
            <Image
              src="/about/img-2.svg"
              alt="Delimwitu team and hospitality"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
