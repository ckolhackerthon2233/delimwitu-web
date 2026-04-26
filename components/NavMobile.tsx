"use client";

/**
 * NavMobile – Hamburger menu for small screens. Toggle opens a full-screen overlay with logo, scroll links (with icons), and CTA.
 * Links from data/navMobileLinks.tsx. Closing overlay on link click for better UX.
 */
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { RiMenu2Line } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";
import { Link as ScrollLink } from "react-scroll";
import { Button } from "./ui/button";
import { navMobileLinks } from "@/data/navMobileLinks";

export interface NavMobileProps {
  containerStyles?: string;
  iconStyles?: string;
  linkStyles?: string;
}

export default function NavMobile({
  containerStyles = "",
  iconStyles = "",
  linkStyles = "",
}: NavMobileProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={containerStyles}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer outline-none border-0 bg-transparent p-0"
        aria-label="Toggle menu"
      >
        <RiMenu2Line className="text-3xl text-white transition-all duration-200" />
      </button>
      {/* Overlay backdrop - close menu on click */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-10"
          onClick={() => setIsOpen(false)}
        />
      )}
      {/* Quarter-screen dropdown menu */}
      <aside
        className={`${isOpen ? "top-16" : "-top-full"} bg-gradient-to-b from-black/95 to-black/80 backdrop-blur-sm fixed z-20 w-full max-h-[25vh] overflow-y-auto transition-all duration-300 shadow-2xl`}
      >
        <div className="flex flex-col items-start justify-start py-4 px-6 gap-y-2">
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="cursor-pointer text-3xl text-white absolute top-3 right-6 bg-transparent border-0 hover:text-orange transition-colors duration-200 ml-auto"
            aria-label="Close menu"
          >
            <IoCloseOutline />
          </button>
          <div className="flex flex-col gap-y-1 w-full mt-6">
            {navMobileLinks.map((link) => (
              link.isExternal ? (
                <Link
                  key={link.path}
                  href={link.path}
                  className="flex items-center gap-x-2 cursor-pointer px-3 py-2 rounded-md transition-all duration-200 hover:bg-orange/20 hover:translate-x-1 group w-full text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  <div className={`${iconStyles} text-lg group-hover:text-orange transition-colors duration-200`}>{link.icon}</div>
                  <div className={`${linkStyles} text-white font-medium group-hover:text-orange transition-colors duration-200`}>{link.name}</div>
                </Link>
              ) : (
                <ScrollLink
                  key={link.path}
                  to={link.path}
                  offset={link.offset}
                  smooth={false}
                  className="flex items-center gap-x-2 cursor-pointer px-3 py-2 rounded-md transition-all duration-200 hover:bg-orange/20 hover:translate-x-1 group w-full text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  <div className={`${iconStyles} text-lg group-hover:text-orange transition-colors duration-200`}>{link.icon}</div>
                  <div className={`${linkStyles} text-white font-medium group-hover:text-orange transition-colors duration-200`}>{link.name}</div>
                </ScrollLink>
              )
            ))}
          </div>
          <ScrollLink to="reservation" smooth offset={-150} className="w-full px-3 mt-2">
            <Button variant="orange" className="w-full text-sm py-2 hover:shadow-lg transition-shadow duration-200">Book</Button>
          </ScrollLink>
        </div>
      </aside>
    </div>
  );
}
