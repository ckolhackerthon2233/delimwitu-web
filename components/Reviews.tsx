"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Reviews() {
  const reviews = [
    {
      rating: 5,
      text: '"Hands down the best brunch spot in Mombasa. The avocado toast is absolutely heavenly, and the coffee is roasted in-house. I come here every Sunday without fail."',
      author: 'Amina Khalid',
      role: 'Regular Guest · Mombasa',
      avatar: 'https://i.pravatar.cc/80?img=47',
    },
    {
      rating: 5,
      text: '"We hosted our anniversary dinner here and the team went above and beyond. The private dining setup, the personalised menu, the ambiance — everything was flawless."',
      author: 'David Omondi',
      role: 'Event Guest · Nairobi',
      avatar: 'https://i.pravatar.cc/80?img=12',
    },
    {
      rating: 5,
      text: '"As someone with dietary restrictions, finding a restaurant that genuinely caters to my needs felt impossible — until WFood. Their vegan menu is imaginative and filling!"',
      author: 'Priya Mehta',
      role: 'Food Blogger',
      avatar: 'https://i.pravatar.cc/80?img=25',
    },
    {
      rating: 5,
      text: '"The seafood platter is an absolute masterpiece. Fresh, flavorful, and beautifully presented. Best coastal dining experience weve had in years!"',
      author: 'Marcus Johnson',
      role: 'Travel Enthusiast · Cape Town',
      avatar: 'https://i.pravatar.cc/80?img=31',
    },
    {
      rating: 5,
      text: '"Incredible attention to detail in every dish. The wine pairing recommendations were spot on. A truly world-class culinary experience."',
      author: 'Sophie Laurent',
      role: 'Sommelier · Bordeaux',
      avatar: 'https://i.pravatar.cc/80?img=42',
    },
    {
      rating: 5,
      text: '"From the moment we walked in, the service was impeccable. The chefs tasting menu was a journey through flavors well never forget."',
      author: 'James Chen',
      role: 'Corporate Executive · Singapore',
      avatar: 'https://i.pravatar.cc/80?img=55',
    },
    {
      rating: 5,
      text: '"The farm-to-table concept is executed perfectly here. Every ingredient sings with freshness. An inspiring dining experience!"',
      author: 'Elena Rossi',
      role: 'Chef & Restaurateur · Tuscany',
      avatar: 'https://i.pravatar.cc/80?img=63',
    },
    {
      rating: 5,
      text: '"Absolutely magical evening. The outdoor garden seating, the live jazz, the food — every element harmonized beautifully. A perfect date night spot."',
      author: 'Carlos Mendez',
      role: 'Photographer · Madrid',
      avatar: 'https://i.pravatar.cc/80?img=71',
    },
    {
      rating: 5,
      text: '"Consistently outstanding. Whether its a quick lunch or a celebratory dinner, they never disappoint. The pastry chef is an absolute genius."',
      author: 'Isabella Kim',
      role: 'Local Food Critic · Seoul',
      avatar: 'https://i.pravatar.cc/80?img=84',
    },
  ];

  const trackRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [offset, setOffset] = useState(0);

  const cardWidth = 340;
  const gap = 24;
  const itemWidth = cardWidth + gap;
  const totalItems = reviews.length;

  useEffect(() => {
    if (isPaused) return;
    const startTime = Date.now();
    const duration = 60;
    const pixelsPerSecond = (totalItems * itemWidth) / duration;

    function step() {
      const elapsed = (Date.now() - startTime) / 1000;
      const pixelsMoved = elapsed * pixelsPerSecond;
      setOffset(pixelsMoved % itemWidth);
      requestAnimationFrame(step);
    }
    const rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [isPaused, itemWidth, totalItems]);

  const displayItems = [...reviews, ...reviews, ...reviews];

  return (
    <section id="reviews" className="py-24 bg-white max-md:py-16 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16 max-md:mb-12">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-orange mb-4">
            Reviews
          </span>
          <h2 className="text-4xl font-bold text-dark-brown max-md:text-3xl">
            What Our Guests Say
          </h2>
          <div className="h-0.75 w-15 bg-orange mx-auto rounded mt-6"></div>
        </div>

        <div className="hidden lg:block">
          <div
            className="relative overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              ref={trackRef}
              className="flex will-change-transform"
              style={{
                transform: `translateX(-${offset}px)`,
                transition: isPaused ? 'transform 0.1s linear' : 'none',
              }}
            >
              {displayItems.map((review, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 bg-cream rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
                  style={{ width: cardWidth, marginRight: gap }}
                >
                  <div className="text-xl text-orange mb-4">★★★★★</div>
                  <p className="text-gray-700 text-sm leading-relaxed italic mb-4 line-clamp-3">
                    {review.text}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-tan">
                      <Image
                        src={review.avatar}
                        alt={review.author}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-dark-brown">
                        {review.author}
                      </div>
                      <div className="text-xs text-gray-500">{review.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:hidden mt-8">
          <div
            className="relative overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              className="flex will-change-transform"
              style={{
                transform: `translateX(-${offset}px)`,
                transition: isPaused ? 'transform 0.1s linear' : 'none',
              }}
            >
              {displayItems.map((review, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 w-[260px] bg-cream rounded-lg p-4 shadow-sm"
                  style={{ marginRight: 16 }}
                >
                  <div className="text-lg text-orange mb-2">★★★★★</div>
                  <p className="text-gray-600 text-sm italic line-clamp-2 mb-3">
                    {review.text}
                  </p>
                  <div className="text-xs text-gray-500 font-medium">
                    {review.author}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

