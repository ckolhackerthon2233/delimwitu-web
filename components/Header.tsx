"use client";

/**
 * Header – Fixed top bar with logo, desktop nav, CTA, and mobile menu.
 * Uses scroll state to switch from transparent to solid background after 100px.
 */
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import Nav from "./Nav";
import NavMobile from "./NavMobile";
import { Button } from "./ui/button";

export default function Header() {
  /** When true, header shows dark background (scrolled past 100px). */
  const [active, setActive] = useState(false);

  /** Subscribe to scroll; set active when scrollY > 100. Cleanup removes listener. */
  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${active ? "bg-black-heavy py-4" : "bg-none py-8"} fixed top-0 w-full z-50 left-0 right-0 transition-all duration-200`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Next.js Link + Image for client-side nav and optimized image */}
          <Link href="/">
            <Image src="/logo.svg" width={75} height={30} alt="W'Food logo" />
          </Link>
          {/* Desktop nav: hidden on small screens, visible from xl. ScrollLink scrolls to #reservation. */}
          <Nav
            containerStyles="hidden xl:flex gap-x-12 text-white"
            linkStyles="capitalize"
          />
          <ScrollLink to="reservation" smooth>
            <Button variant="orange" size="sm">
              Book a table
            </Button>
          </ScrollLink>
          <NavMobile
            containerStyles="xl:hidden"
            iconStyles="text-3xl"
            linkStyles="uppercase"
          />
        </div>
      </div>
    </header>
  );
}
