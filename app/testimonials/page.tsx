import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    rating: 5,
    comment: "The best café in Nairobi! Amazing coffee and the ambiance is perfect for both work and meetings.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
  },
  {
    id: 2,
    name: "David Mwangi",
    rating: 5,
    comment: "Delimwitu never disappoints. Their food is consistently delicious and the service is excellent.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
  },
  {
    id: 3,
    name: "Emily Roberts",
    rating: 5,
    comment: "Love the variety on the menu and how everything is prepared with fresh ingredients. Highly recommend!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
  },
  {
    id: 4,
    name: "James Kipchoge",
    rating: 5,
    comment: "The perfect spot for coffee breaks during the day. Staff is always friendly and welcoming.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
  },
  {
    id: 5,
    name: "Lisa Chen",
    rating: 5,
    comment: "Best pastries in Nairobi! The quality and taste are unmatched. I come here every morning.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop"
  },
  {
    id: 6,
    name: "Peter Ochieng",
    rating: 5,
    comment: "Excellent service, great food, and the WhatsApp ordering system is super convenient!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
  },
];

export default function TestimonialsPage() {
  const averageRating = testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length;

  return (
    <main className="w-full overflow-hidden bg-cream">
      <Header />
      
      {/* Testimonials Hero */}
      <section className="relative min-h-[400px] flex items-center justify-center bg-dark-brown pt-20 px-6">
        <div className="absolute inset-0 z-0" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1920&h=1080&fit=crop&crop=center')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}></div>
        <div className="absolute inset-0 bg-dark-brown/70 z-5"></div>
        
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4">Customer Reviews</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Hear from our satisfied customers about their experience at Delimwitu
          </p>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 px-6 lg:px-10">
        <div className="max-w-screen-xl mx-auto">
          {/* Average Rating */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-5xl font-black text-dark-brown">{averageRating.toFixed(1)}</span>
              <div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-2xl">⭐</span>
                  ))}
                </div>
                <p className="text-sm text-gray-600 mt-1">{testimonials.length} Reviews</p>
              </div>
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-lg">⭐</span>
                  ))}
                </div>

                {/* Comment */}
                <p className="text-gray-700 mb-6 line-clamp-4">{testimonial.comment}</p>

                {/* Customer Info */}
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-dark-brown">{testimonial.name}</h4>
                    <p className="text-xs text-gray-500">Verified Customer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-orange rounded-2xl p-12 text-center text-white">
            <h2 className="text-4xl font-black mb-4">Share Your Experience</h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Have you visited Delimwitu? We'd love to hear about your experience!
            </p>
            <a href="https://wa.me/254720000000" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-orange font-bold uppercase rounded-lg hover:shadow-lg transition">
              📝 Leave a Review
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
