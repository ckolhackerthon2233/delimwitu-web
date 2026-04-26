"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { MenuItem } from "@/types";
import { menuData } from "@/data/menuData";
import OrderForm from "@/components/OrderForm";

interface ItemDetailPageProps {
  itemId: string;
  category: string;
  backHref: string;
  backLabel: string;
}

/* ── Lazy image with shimmer skeleton ─────────────────────────────── */
function LazyImage({ src, alt }: { src: string; alt: string }) {
  const [loaded, setLoaded] = useState(false);
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative w-full h-full">
      {/* Shimmer skeleton */}
      {!loaded && (
        <div className="absolute inset-0 rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-100 via-amber-50 to-orange-100 animate-shimmer bg-[length:200%_100%]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex flex-col items-center gap-3 opacity-40">
              <div className="w-16 h-16 rounded-full border-4 border-orange border-t-transparent animate-spin" />
              <span className="text-orange text-sm font-semibold tracking-widest uppercase">Loading</span>
            </div>
          </div>
        </div>
      )}
      {inView && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          className={`w-full h-full object-cover rounded-3xl transition-all duration-700 ease-out ${
            loaded ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-105 blur-sm"
          }`}
        />
      )}
    </div>
  );
}

/* ── Animated info card ───────────────────────────────────────────── */
function InfoCard({
  icon,
  title,
  desc,
  delay,
}: {
  icon: string;
  title: string;
  desc: string;
  delay: string;
}) {
  return (
    <div
      className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-7 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 overflow-hidden border border-orange/10"
      style={{ animationDelay: delay }}
    >
      {/* Hover glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange/5 to-amber-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
      {/* Icon bubble */}
      <div className="relative z-10 w-14 h-14 rounded-2xl bg-gradient-to-br from-orange to-red-500 flex items-center justify-center text-2xl mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="relative z-10 font-black text-dark-brown text-lg mb-2">{title}</h3>
      <p className="relative z-10 text-gray-500 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

/* ── Main page ────────────────────────────────────────────────────── */
export default function ItemDetailPage({
  itemId,
  category,
  backHref,
  backLabel,
}: ItemDetailPageProps) {
  const [imageReady, setImageReady] = useState(false);

  const item = menuData.find((menuItem) => {
    const id = menuItem.id || menuItem.title.toLowerCase().replace(/\s+/g, "-");
    return id === itemId && menuItem.cat === category;
  });

  /* ── Not found ── */
  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-cream via-white to-warm-white px-6">
        <div className="text-center animate-fade-in-up">
          <div className="text-8xl mb-6">🍽️</div>
          <h1 className="text-5xl font-black text-dark-brown mb-4">Item Not Found</h1>
          <p className="text-gray-500 mb-10 text-lg">The dish you're looking for seems to have disappeared.</p>
          <Link
            href={backHref}
            className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-orange to-red-500 text-white font-bold rounded-2xl hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
          >
            <span>←</span> {backLabel}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* ── Global animation keyframes injected once ── */}
      <style>{`
        @keyframes shimmer { 0%{background-position:200% 0} 100%{background-position:-200% 0} }
        @keyframes fadeInUp { from{opacity:0;transform:translateY(32px)} to{opacity:1;transform:translateY(0)} }
        @keyframes fadeInLeft { from{opacity:0;transform:translateX(-32px)} to{opacity:1;transform:translateX(0)} }
        @keyframes fadeInRight { from{opacity:0;transform:translateX(32px)} to{opacity:1;transform:translateX(0)} }
        @keyframes floatBlob { 0%,100%{transform:translate(0,0) scale(1)} 33%{transform:translate(20px,-15px) scale(1.05)} 66%{transform:translate(-10px,10px) scale(0.97)} }
        @keyframes pulseRing { 0%{transform:scale(1);opacity:.6} 100%{transform:scale(1.5);opacity:0} }
        @keyframes rotateSlow { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }

        .animate-shimmer { animation: shimmer 1.8s linear infinite; }
        .animate-fade-in-up { animation: fadeInUp .6s ease both; }
        .animate-fade-in-left { animation: fadeInLeft .7s ease both; }
        .animate-fade-in-right { animation: fadeInRight .7s ease both; }
        .animate-float-blob { animation: floatBlob 8s ease-in-out infinite; }
        .animate-pulse-ring { animation: pulseRing 1.5s ease-out infinite; }
        .animate-rotate-slow { animation: rotateSlow 12s linear infinite; }

        .stagger-1 { animation-delay: .1s; }
        .stagger-2 { animation-delay: .2s; }
        .stagger-3 { animation-delay: .3s; }
        .stagger-4 { animation-delay: .5s; }
        .stagger-5 { animation-delay: .65s; }
        .stagger-6 { animation-delay: .8s; }
      `}</style>

      <div className="min-h-screen bg-gradient-to-b from-[#fff8f2] via-white to-[#fff4ec] overflow-x-hidden">

        {/* ── Decorative ambient blobs ── */}
        <div className="pointer-events-none fixed inset-0 overflow-hidden -z-0">
          <div className="animate-float-blob absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-orange/15 to-amber-300/10 blur-3xl" />
          <div className="animate-float-blob absolute bottom-0 -left-32 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-red-400/10 to-orange/10 blur-3xl" style={{animationDelay:"-3s"}} />
          <div className="animate-rotate-slow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-orange/5" />
        </div>

        {/* ── Back button ── */}
        <div className="relative z-10 pt-28 pb-6 px-6 max-w-screen-xl mx-auto">
          <Link
            href={backHref}
            className="inline-flex items-center gap-2 text-orange font-bold text-sm uppercase tracking-wider hover:gap-3 transition-all duration-300 group"
          >
            <span className="w-8 h-8 rounded-full bg-orange/10 flex items-center justify-center group-hover:bg-orange/20 transition-colors">←</span>
            {backLabel}
          </Link>
        </div>

        {/* ── Hero content ── */}
        <div className="relative z-10 pb-24 px-6 max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* ── IMAGE COLUMN ── */}
            <div className="animate-fade-in-left stagger-1">
              {/* Outer glow ring */}
              <div className="relative">
                <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-orange/25 via-amber-300/20 to-red-400/20 blur-2xl animate-pulse" />

                {/* Main image frame */}
                <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white">
                  {/* Badge */}
                  {item.badge && (
                    <div className="absolute top-5 right-5 z-20 bg-gradient-to-r from-orange to-red-500 text-white px-4 py-2 text-xs font-black rounded-full shadow-lg uppercase tracking-wider">
                      {item.badge}
                    </div>
                  )}

                  {/* Lazy image */}
                  <LazyImage src={item.img} alt={item.title} />

                  {/* Bottom colour wash */}
                  <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent rounded-b-3xl" />
                </div>

                {/* Floating category pill */}
                <div className="absolute -bottom-5 left-8 flex items-center gap-2 bg-white shadow-xl rounded-full px-5 py-3 border border-orange/10">
                  <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-orange to-red-500 animate-pulse" />
                  <span className="text-dark-brown font-bold text-sm capitalize">{item.cat}</span>
                  {item.subcategory && (
                    <>
                      <span className="text-gray-300">·</span>
                      <span className="text-gray-500 text-sm">{item.subcategory}</span>
                    </>
                  )}
                </div>
              </div>

              {/* Decorative dots grid below image */}
              <div className="mt-12 ml-4 grid grid-cols-5 gap-2 w-fit opacity-30">
                {Array.from({length: 20}).map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-orange" />
                ))}
              </div>
            </div>

            {/* ── DETAILS COLUMN ── */}
            <div className="flex flex-col gap-6">

              {/* Title */}
              <div className="animate-fade-in-right stagger-2">
                <span className="text-xs font-black uppercase tracking-[0.3em] text-orange mb-3 block">
                  Delimwitu Kitchen
                </span>
                <h1 className="text-5xl md:text-6xl font-black text-dark-brown leading-none tracking-tight mb-5">
                  {item.title}
                </h1>
                <p className="text-gray-500 text-lg leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Price strip */}
              <div className="animate-fade-in-right stagger-3">
                <div className="inline-flex items-center gap-4 bg-gradient-to-r from-orange/10 to-amber-400/10 rounded-2xl px-6 py-4 border border-orange/15">
                  <div>
                    <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-0.5">Price</p>
                    <p className="text-4xl font-black text-orange leading-none">{item.price}</p>
                  </div>
                  <div className="w-px h-10 bg-orange/20" />
                  <div>
                    <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-0.5">Per</p>
                    <p className="text-lg font-bold text-dark-brown">Item</p>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="animate-fade-in-right stagger-4">
                <div className="h-px bg-gradient-to-r from-orange/30 via-amber-300/30 to-transparent" />
              </div>

              {/* Order form — receives loading state from inside OrderForm,
                  but we wrap it to show a global loading overlay */}
              <div className="animate-fade-in-right stagger-5">
                <OrderFormWrapper item={item} />
              </div>
            </div>
          </div>

          {/* ── Info cards ── */}
          <div className="mt-28 animate-fade-in-up stagger-6">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-orange mb-8 text-center">
              How it works
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <InfoCard
                icon="📧"
                title="Email Order"
                desc="Send us your order details and we'll confirm via email. No payment needed online."
                delay=".1s"
              />
              <InfoCard
                icon="⚡"
                title="Quick Response"
                desc="Our team contacts you within minutes to confirm your order and arrange payment."
                delay=".2s"
              />
              <InfoCard
                icon="🔐"
                title="Secure & Safe"
                desc="No sensitive payment data is stored online. All transactions are handled securely."
                delay=".3s"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ── OrderFormWrapper — adds loading overlay around OrderForm ─────── */
function OrderFormWrapper({ item }: { item: MenuItem }) {
  const [submitting, setSubmitting] = useState(false);

  return (
    <div className="relative">
      {/* Loading overlay */}
      {submitting && (
        <div className="absolute inset-0 z-30 flex flex-col items-center justify-center rounded-2xl bg-white/90 backdrop-blur-sm border border-orange/20 shadow-xl gap-4">
          {/* Pulsing ring */}
          <div className="relative flex items-center justify-center">
            <div className="absolute w-16 h-16 rounded-full border-4 border-orange/30 animate-pulse-ring" />
            <div className="absolute w-16 h-16 rounded-full border-4 border-orange/20 animate-pulse-ring" style={{animationDelay:".5s"}} />
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange to-red-500 flex items-center justify-center shadow-lg">
              <svg className="animate-spin w-6 h-6 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"/>
              </svg>
            </div>
          </div>
          <div className="text-center">
            <p className="font-black text-dark-brown text-lg">Sending your order…</p>
            <p className="text-gray-400 text-sm mt-1">Please wait a moment</p>
          </div>
        </div>
      )}

      {/* The actual form — pass setSubmitting so it can toggle the overlay */}
      <OrderForm
        item={item}
        onSubmitStart={() => setSubmitting(true)}
        onSubmitEnd={() => setSubmitting(false)}
      />
    </div>
  );
}