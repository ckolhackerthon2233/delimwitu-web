import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

const inspirationCards = [
  {
    title: "Savour the vibrant textures",
    desc: "A table set for friends, rich coffee aromas, and flavors that invite lingering conversations.",
    image: "/hero/tb2.jpg",
  },
  {
    title: "Feast on our most-loved dishes",
    desc: "Freshly plated favorites that keep guests returning night after night.",
    image: "/hero/coffee.png",
  },
  {
    title: "Celebrate in style",
    desc: "From casual catch-ups to special moments, our space is made for memorable dining.",
    image: "/hero/tb1.jpg",
  },
];

export default function HomePage() {
  return (
    <main className="w-full overflow-hidden bg-cream">
      <Header />
      <Hero />

      <section className="py-24 px-6 lg:px-10">
        <div className="max-w-screen-xl mx-auto grid gap-16 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full bg-orange/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-orange">
              Most Served Dish
            </div>
            <div className="space-y-6">
              <h2 className="text-5xl font-black text-dark-brown leading-tight">
                Meals our guests come back for again and again.
              </h2>
              <p className="max-w-2xl text-lg text-gray-700">
                Beautifully plated, bold in flavor, and styled to deliver a delightful dining story from first sight to last bite.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Slow-simmered curry with warm spices",
                "Crispy roasted vegetables with herb drizzle",
              ].map((text) => (
                <div key={text} className="rounded-[2rem] border border-orange/20 bg-white p-6 shadow-[0_30px_60px_rgba(0,0,0,0.08)] transition hover:-translate-y-1">
                  <p className="text-sm uppercase tracking-[0.3em] text-orange mb-3">Top choice</p>
                  <h3 className="text-xl font-black text-dark-brown">{text}</h3>
                </div>
              ))}
            </div>
            <Link href="/book-table" className="inline-flex items-center gap-2 rounded-full bg-orange px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-lg transition hover:bg-orange-hover">
              Reserve a taste of Delimwitu
            </Link>
          </div>

          <div className="relative isolate overflow-visible">
            <div className="absolute inset-0 -right-8 rounded-[3rem] bg-orange/10 blur-3xl" />
            <div className="relative rounded-[3rem] bg-white p-6 shadow-[0_35px_90px_rgba(0,0,0,0.08)]">
              <div className="perspective-[1400px]">
                <div className="group relative overflow-hidden rounded-[2.5rem] bg-gray-100 shadow-2xl transition-transform duration-700 hover:-rotate-2 hover:scale-[1.02]">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark-brown/10" />
                  <Image
                    src="/menu/lunch&dinner/butter-curry-chicken-02_200x.png"
                    alt="Most served butter curry chicken"
                    width={860}
                    height={720}
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-white/90 p-6 backdrop-blur-sm">
                    <p className="text-xs uppercase tracking-[0.35em] text-orange mb-3">Chef&apos;s signature</p>
                    <h3 className="text-3xl font-black text-dark-brown">Butter curry chicken</h3>
                    <p className="mt-2 text-sm text-gray-600">Creamy, fragrant, and plated with color and depth for every guest.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Menu />

      <section id="inspiration" className="py-24 px-6 lg:px-10 bg-white">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-orange mb-4">
              Inspiration
            </span>
            <h2 className="text-5xl font-black text-dark-brown">
              Feels like a celebration every time.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-700">
              Discover the moments that turn a meal into a memory, with dishes designed to delight guests and inspire the next visit.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {inspirationCards.map((item) => (
              <div key={item.title} className="group relative overflow-hidden rounded-[2rem] bg-cream shadow-[0_30px_80px_rgba(0,0,0,0.08)] transition hover:-translate-y-2">
                <div className="relative h-72">
                  <Image src={item.image} alt={item.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-black text-dark-brown mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
