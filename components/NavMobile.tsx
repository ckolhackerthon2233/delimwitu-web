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
      {/* Overlay: slides in from right when isOpen. Fixed full viewport. */}
      <aside
        className={`${isOpen ? "right-0" : "-right-full"} bg-black fixed z-20 w-full p-10 top-0 bottom-0 transition-all duration-500`}
      >
        <div className="flex flex-col items-center justify-between h-full">
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="cursor-pointer text-4xl text-white absolute w-10 h-10 left-8 bg-green flex items-center justify-center border-0"
            aria-label="Close menu"
          >
            <IoCloseOutline />
          </button>
          <Link href="/">
            <Image src="/logo.svg" width={90} height={36} alt="Delimwitu Cafe" />
          </Link>
          <div className="flex flex-col gap-y-8">
            {navMobileLinks.map((link) => (
              link.isExternal ? (
                <Link
                  key={link.path}
                  href={link.path}
                  className="flex items-center gap-x-3 cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  <div className={iconStyles}>{link.icon}</div>
                  <div className={linkStyles}>{link.name}</div>
                </Link>
              ) : (
                <ScrollLink
                  key={link.path}
                  to={link.path}
                  offset={link.offset}
                  smooth={false}
                  className="flex items-center gap-x-3 cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  <div className={iconStyles}>{link.icon}</div>
                  <div className={linkStyles}>{link.name}</div>
                </ScrollLink>
              )
            ))}
          </div>
          <ScrollLink to="reservation" smooth offset={-150}>
            <Button variant="orange">Book a table</Button>
          </ScrollLink>
        </div>
      </aside>
    </div>
  );
}
