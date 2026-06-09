"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Reviews() {
  const reviews = [
    {
      rating: 5,
      text: '"I eat at Delimwitu Monday to Saturday. Breakfast and lunch feel just like home, and the food is affordable, healthy, and always fresh. I order kebabs, sausages, chips, grilled chicken, and wet fry fish for the family all the time."',
      author: 'Kimutai',
      role: 'Regular Guest · Nairobi',
      avatar: 'https://i.pravatar.cc/80?img=68',
    },
    // {
    //   rating: 5,
    //   text: '"Delimwitu is our go-to place for a hearty lunch. The nyama choma, ugali, and fresh juices are always on point, and the service feels warm and welcoming every time."',
    //   author: 'Kevin Mwaura',
    //   role: 'Guest · Westlands, Nairobi',
    //   avatar: 'https://i.pravatar.cc/80?img=47',
    // },
    // {
    //   rating: 5,
    //   text: '"The variety on the menu keeps us coming back. From breakfast to dinner, every meal is tasty, filling, and priced fairly for a family meal out."',
    //   author: 'Wanjiku Njeri',
    //   role: 'Regular Guest · Kilimani, Nairobi',
    //   avatar: 'https://i.pravatar.cc/80?img=25',
    // },
    // {
    //   rating: 5,
    //   text: '"I always bring my team here for lunch because the food is consistently great, the portions are generous, and the place feels relaxed and comfortable."',
    //   author: 'Daniel Otieno',
    //   role: 'Office Lunch Guest · Ngong Road, Nairobi',
    //   avatar: 'https://i.pravatar.cc/80?img=12',
    // },
    {
      rating: 5,
      text: '"Delimwitu never disappoints. The food quality is excellent, the menu has something for everyone, and the prices are very fair for what you get."',
      author: 'Njeri Wambui',
      role: 'Weekend Guest · South B, Nairobi',
      avatar: 'https://i.pravatar.cc/80?img=31',
    },
    {
      rating: 5,
      text: '"⭐⭐⭐⭐⭐ Delimwitu has been our go-to and they never disappoint! The food quality is consistently excellent, the variety keeps things interesting, and the prices are very fair for what you get. Whether you\'re ordering for one or a group, there\'s always something for everyone. Highly recommend — you won\'t regret it!"',
      author: 'Moses Mwangi',
      role: 'Family Guest · Rongai, Nairobi',
      avatar: 'https://i.pravatar.cc/80?img=55',
    },
    {
      rating: 5,
      text: '"I grab breakfast here regularly, and it\'s always on point, fresh, tasty, and exactly what I need to start the day right."',
      author: 'Julia',
      role: 'Breakfast Guest · Nairobi',
      avatar: 'https://i.pravatar.cc/80?img=20',
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

  const displayItems = reviews;

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

