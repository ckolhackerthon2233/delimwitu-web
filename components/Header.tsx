"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
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

  const handleBookTable = () => {
    const win = typeof window !== 'undefined' ? (window as unknown as {showToast?: (msg: string, type: string) => void}) : null;
    if (win?.showToast) {
      win.showToast("Navigating to booking page...", "info");
    }
    router.push("/book-table");
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/menu", label: "Menu" },
    { href: "/#about", label: "About" },
    { href: "/#contact", label: "Contact" },
  ];

  const handleNavClick = (href: string) => {
    const isBookTablePage = pathname === "/book-table";
    if (isBookTablePage) {
      // Navigate to home page with anchor
      router.push(`/${href}`);
    } else {
      // Use regular hash navigation for same page
      window.location.hash = href;
    }
  };

  return (
    <>
      {/* Mobile nav overlay */}
      <div
        className={`fixed inset-0 z-[999] bg-cream flex-col items-center justify-center gap-8 ${
          mobileMenuOpen ? "flex" : "hidden"
        }`}
      >
        <button
          className="absolute top-6 right-6 text-dark-brown text-2xl cursor-pointer bg-transparent border-0"
          onClick={toggleMobileNav}
          aria-label="Close"
        >
          ✕
        </button>
        {navLinks.map((link) => (
          <button
            key={link.href}
            onClick={() => {
              handleNavClick(link.href);
              toggleMobileNav();
            }}
            className="font-playfair text-4xl font-bold text-dark-brown hover:text-orange transition-colors bg-transparent border-0 cursor-pointer"
          >
            {link.label}
          </button>
        ))}
      </div>

      {/* Header */}
      <header
        id="header"
        className={`fixed top-0 left-0 right-0 z-[1000] px-0 py-4.8 transition-all duration-300 ${
          scrolled
            ? "bg-cream/97 backdrop-blur-lg shadow-sm"
            : "bg-cream/80 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex items-center justify-between gap-4">
            <button
              onClick={() => handleNavClick("#hero")}
              className="font-playfair text-2xl font-black italic text-dark-brown whitespace-nowrap bg-transparent border-0 cursor-pointer hover:text-orange transition-colors"
            >
              Delimwitu
            </button>
            <nav className="hidden lg:flex gap-8 items-center">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-sm font-medium text-dark-brown relative pb-0.75 tracking-wide transition-colors hover:text-orange group bg-transparent border-0 cursor-pointer"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.375 bg-orange transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </nav>
            <div className="flex items-center gap-4">
              <button onClick={handleBookTable} className="hidden md:inline-flex items-center gap-2 px-8 py-3 bg-orange text-white text-xs font-semibold uppercase tracking-wider rounded cursor-pointer border-0 transition-all duration-250 hover:bg-orange-hover hover:shadow-lg">
                Book a Table
              </button>
              <button
                className="lg:hidden flex flex-col gap-1.25 cursor-pointer bg-transparent border-0 p-1"
                onClick={toggleMobileNav}
                aria-label="Open menu"
              >
                <span className="block w-6 h-0.5 bg-dark-brown transition-all duration-300 rounded"></span>
                <span className="block w-6 h-0.5 bg-dark-brown transition-all duration-300 rounded"></span>
                <span className="block w-6 h-0.5 bg-dark-brown transition-all duration-300 rounded"></span>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
