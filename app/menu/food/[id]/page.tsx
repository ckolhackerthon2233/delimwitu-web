"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { menuData } from "@/data/menuData";
import OrderForm from "@/components/OrderForm";

export default function FoodDetailPage() {
  const params = useParams();
  const foodId = params.id as string;

  // Find the food item by matching the ID in food categories
  const foodItem = menuData.find((item) => {
    const itemId = item.id || item.title.toLowerCase().replace(/\s+/g, "-");
    return itemId === foodId && ["breakfast", "lunch", "mains", "sides", "desserts"].includes(item.cat);
  });

  if (!foodItem) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-cream via-white to-warm-white pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-dark-brown mb-4">Food Not Found</h1>
          <p className="text-gray-600 mb-8">The food item you're looking for doesn't exist.</p>
          <Link
            href="/menu/food"
            className="inline-block px-8 py-3 bg-orange text-white font-semibold rounded-lg hover:bg-orange-hover transition-all duration-300"
          >
            Back to Food Menu
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream via-white to-warm-white">
      {/* Back Button */}
      <div className="pt-24 pb-8 px-6">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/menu/food"
            className="inline-flex items-center text-orange font-semibold hover:text-orange-hover transition-colors"
          >
            <span className="mr-2">←</span>
            Back to Food Menu
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Section */}
            <div className="flex flex-col justify-center">
              <div className="relative aspect-square overflow-hidden rounded-2xl shadow-2xl bg-gray-100">
                {foodItem.badge && (
                  <div className="absolute top-4 right-4 bg-orange text-white px-4 py-2 text-sm font-bold rounded-full z-10">
                    {foodItem.badge}
                  </div>
                )}
                <img
                  src={foodItem.img}
                  alt={foodItem.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Category Badge */}
              <div className="mt-6 flex items-center gap-3">
                <span className="inline-block px-4 py-2 bg-orange/10 text-orange font-semibold text-sm rounded-full capitalize">
                  {foodItem.cat}
                </span>
                {foodItem.subcategory && (
                  <span className="inline-block px-4 py-2 bg-gray-200 text-dark-brown font-semibold text-sm rounded-full">
                    {foodItem.subcategory}
                  </span>
                )}
              </div>
            </div>

            {/* Details Section */}
            <div className="flex flex-col justify-center">
              <div className="mb-8">
                <h1 className="text-5xl md:text-6xl font-black text-dark-brown mb-4">
                  {foodItem.title}
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  {foodItem.desc}
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-3 mb-8">
                  <span className="text-4xl font-black text-orange">{foodItem.price}</span>
                  <span className="text-sm text-gray-500">per item</span>
                </div>
              </div>

              {/* Order Form */}
              <OrderForm item={foodItem} />
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl mb-3">📧</div>
              <h3 className="font-bold text-dark-brown mb-2">Email Order</h3>
              <p className="text-gray-600 text-sm">
                Send us your order details and we'll confirm via email. No payment needed online.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl mb-3">✓</div>
              <h3 className="font-bold text-dark-brown mb-2">Quick Response</h3>
              <p className="text-gray-600 text-sm">
                Our team will contact you to confirm your order and arrange payment.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl mb-3">🔐</div>
              <h3 className="font-bold text-dark-brown mb-2">Secure & Safe</h3>
              <p className="text-gray-600 text-sm">
                No sensitive payment data is stored online. Transactions are done securely.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
