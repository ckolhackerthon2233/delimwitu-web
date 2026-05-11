import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function OrderPage() {
  return (
    <main className="w-full overflow-hidden bg-cream">
      <Header />
      
      {/* Order Page Hero */}
      <section className="relative min-h-[400px] flex items-center justify-center bg-dark-brown pt-20 px-6">
        <div className="absolute inset-0 z-0" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=1920&h=1080&fit=crop&crop=center')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}></div>
        <div className="absolute inset-0 bg-dark-brown/70 z-5"></div>
        
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4">Order Online</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Quick and easy ordering through WhatsApp. Browse our menu and place your order instantly.
          </p>
        </div>
      </section>

      {/* Order Info Section */}
      <section className="py-24 px-6 lg:px-10">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-orange mb-4">
              How It Works
            </span>
            <h2 className="text-5xl font-black text-dark-brown">Easy Ordering Process</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { step: "1", title: "Browse Menu", desc: "Explore our delicious menu items and categories" },
              { step: "2", title: "Select Items", desc: "Choose your favorite dishes and customize as needed" },
              { step: "3", title: "Order via WhatsApp", desc: "Send your order directly through WhatsApp for quick processing" }
            ].map((item) => (
              <div key={item.step} className="rounded-2xl bg-white p-8 text-center shadow-md hover:shadow-lg transition">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange text-white text-xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-2xl font-black text-dark-brown mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/menu" className="inline-flex items-center gap-2 px-8 py-4 bg-orange text-white text-sm font-bold uppercase tracking-wider rounded-lg shadow-lg hover:shadow-xl transition">
              Browse Our Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Contact WhatsApp */}
      <section className="py-16 px-6 bg-orange text-white text-center">
        <h2 className="text-4xl font-black mb-4">Order Now via WhatsApp</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Have questions? Contact us directly through WhatsApp for immediate assistance
        </p>
        <a href="https://wa.me/254720000000" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-orange font-bold uppercase rounded-lg shadow-lg hover:shadow-xl transition">
          💬 Chat on WhatsApp
        </a>
      </section>

      <Footer />
    </main>
  );
}
