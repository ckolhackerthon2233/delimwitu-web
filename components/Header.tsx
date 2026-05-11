"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileNav = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (!mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/menu", label: "Menu" },
    { href: "/order", label: "Order" },
    { href: "/testimonials", label: "Reviews" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* Mobile nav backdrop */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-[998] bg-black/20 transition-opacity duration-300"
          onClick={toggleMobileNav}
          aria-label="Close menu"
        />
      )}

      {/* Mobile nav — compact floating card anchored top-right */}
      <div
        className={`fixed top-[68px] right-4 z-[999] w-auto min-w-[160px] max-w-[220px] bg-cream rounded-xl shadow-xl border border-black/5 transition-all duration-200 origin-top-right ${
          mobileMenuOpen
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col py-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={toggleMobileNav}
              className="group relative px-5 py-2.5 text-sm font-medium text-dark-brown hover:text-orange hover:bg-orange/5 transition-colors duration-150 overflow-hidden"
            >
              {link.label}
              <span className="absolute bottom-1.5 left-5 w-0 h-[1.5px] bg-orange transition-all duration-250 group-hover:w-[calc(100%-40px)]" />
            </Link>
          ))}
        </nav>
      </div>

      {/* Header */}
      <header
        id="header"
        className={`fixed top-0 left-0 right-0 z-[1000] px-0 py-4.8 transition-all duration-300 ${
          scrolled ? "bg-cream shadow-sm" : "bg-cream"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex items-center justify-between gap-4">
            <Link
              href="/"
              className="font-playfair text-2xl font-black italic text-dark-brown whitespace-nowrap bg-transparent border-0 cursor-pointer hover:text-orange transition-colors"
            >
              Delimwitu
            </Link>
            <nav className="hidden lg:flex gap-8 items-center ml-auto">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-dark-brown relative pb-0.75 tracking-wide transition-colors hover:text-orange group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.375 bg-orange transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>
            <button
              className="lg:hidden flex flex-col gap-1.25 cursor-pointer bg-transparent border-0 p-1 ml-auto"
              onClick={toggleMobileNav}
              aria-label="Open menu"
            >
              <span className={`block w-6 h-0.5 bg-dark-brown transition-all duration-300 rounded ${mobileMenuOpen ? "rotate-45 translate-y-1.75" : ""}`} />
              <span className={`block w-6 h-0.5 bg-dark-brown transition-all duration-300 rounded ${mobileMenuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-6 h-0.5 bg-dark-brown transition-all duration-300 rounded ${mobileMenuOpen ? "-rotate-45 -translate-y-1.75" : ""}`} />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}