"use client";

/**
 * Nav – Desktop navigation with Next.js Link for routing.
 */
import Link from "next/link";
import { navLinks } from "@/data/navLinks";

export interface NavProps {
  containerStyles?: string;
  linkStyles?: string;
}

export default function Nav({ containerStyles = "", linkStyles = "" }: NavProps) {
  return (
    <nav className={containerStyles}>
      {navLinks.map((link) => (
        <Link
          key={link.path}
          href={link.path}
          className={linkStyles}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
