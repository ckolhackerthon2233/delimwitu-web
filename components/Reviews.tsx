"use client";

export default function Reviews() {
  const reviews = [
    {
      rating: 5,
      text: '"Hands down the best brunch spot in Mombasa. The avocado toast is absolutely heavenly, and the coffee is roasted in-house. I come here every Sunday without fail."',
      author: "Amina Khalid",
      role: "Regular Guest · Mombasa",
      avatar: "https://i.pravatar.cc/80?img=47",
    },
    {
      rating: 5,
      text: '"We hosted our anniversary dinner here and the team went above and beyond. The private dining setup, the personalised menu, the ambiance — everything was flawless."',
      author: "David Omondi",
      role: "Event Guest · Nairobi",
      avatar: "https://i.pravatar.cc/80?img=12",
    },
    {
      rating: 5,
      text: '"As someone with dietary restrictions, finding a restaurant that genuinely caters to my needs felt impossible — until W\'Food. Their vegan menu is imaginative and filling!"',
      author: "Priya Mehta",
      role: "Food Blogger",
      avatar: "https://i.pravatar.cc/80?img=25",
    },
  ];

  return (
    <section id="reviews" className="py-24 bg-white max-md:py-16">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 max-md:mb-12">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-orange mb-4">Reviews</span>
          <h2 className="text-4xl font-bold text-dark-brown max-md:text-3xl">What Our Guests Say</h2>
          <div className="h-0.75 w-15 bg-orange mx-auto rounded mt-6"></div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-cream rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              {/* Star Rating */}
              <div className="text-2xl text-orange mb-6">★★★★★</div>

              {/* Review Text */}
              <p className="text-base text-gray-700 mb-6 leading-relaxed italic">{review.text}</p>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 bg-tan">
                  <img
                    src={review.avatar}
                    alt={review.author}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.background = "var(--sand)";
                    }}
                  />
                </div>
                <div>
                  <div className="font-semibold text-sm text-dark-brown">{review.author}</div>
                  <div className="text-xs text-gray-600">{review.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
