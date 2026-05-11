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
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop&crop=center",
  },
  {
    title: "Feast on our most-loved dishes",
    desc: "Freshly plated favorites that keep guests returning night after night.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop&crop=center",
  },
  {
    title: "Celebrate in style",
    desc: "From casual catch-ups to special moments, our space is made for memorable dining.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop&crop=center",
  },
];

export default function HomePage() {
  return (
    <main className="w-full overflow-hidden bg-cream">
      <Header />
      <Hero />

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
