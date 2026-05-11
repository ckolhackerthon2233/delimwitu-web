import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="w-full overflow-hidden bg-cream">
      <Header />
      
      {/* Contact Hero */}
      <section className="relative min-h-[400px] flex items-center justify-center bg-dark-brown pt-20 px-6">
        <div className="absolute inset-0 z-0" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&h=1080&fit=crop&crop=center')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}></div>
        <div className="absolute inset-0 bg-dark-brown/70 z-5"></div>
        
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4">Get in Touch</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Reach out anytime.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 px-6 lg:px-10">
        <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-4xl font-black text-dark-brown mb-8">Send us a Message</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-dark-brown mb-2">Name</label>
                <input type="text" required className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange focus:outline-none" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-dark-brown mb-2">Email</label>
                <input type="email" required className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange focus:outline-none" placeholder="your@email.com" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-dark-brown mb-2">Phone</label>
                <input type="tel" className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange focus:outline-none" placeholder="+254 712 345 678" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-dark-brown mb-2">Message</label>
                <textarea rows={5} required className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange focus:outline-none" placeholder="Your message here..."></textarea>
              </div>
              <button type="submit" className="w-full px-6 py-3 bg-orange text-white font-bold uppercase rounded-lg hover:shadow-lg transition">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-4xl font-black text-dark-brown mb-8">Contact Information</h2>
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <div className="text-3xl mb-3">📍</div>
                <h3 className="font-bold text-lg text-dark-brown mb-2">Address</h3>
                <p className="text-gray-600">Lavington, Nairobi, Kenya</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md">
                <div className="text-3xl mb-3">📞</div>
                <h3 className="font-bold text-lg text-dark-brown mb-2">Phone</h3>
                <p className="text-gray-600">+254 712 345 678</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md">
                <div className="text-3xl mb-3">✉️</div>
                <h3 className="font-bold text-lg text-dark-brown mb-2">Email</h3>
                <p className="text-gray-600">hello@delimwitu.co.ke</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md">
                <div className="text-3xl mb-3">🕐</div>
                <h3 className="font-bold text-lg text-dark-brown mb-2">Business Hours</h3>
                <p className="text-gray-600">
                  Mon–Fri: 7:00 AM – 10:00 PM<br />
                  Sat–Sun: 8:00 AM – 11:00 PM
                </p>
              </div>

              <div className="bg-orange rounded-2xl p-6">
                <a href="https://wa.me/254720000000" target="_blank" rel="noopener noreferrer" className="text-white font-bold text-lg">
                  💬 Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
