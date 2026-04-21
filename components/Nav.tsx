"use client";

/**
 * Nav – Desktop navigation: react-scroll Links that smooth-scroll to section IDs (home, menu, about, contact).
 * Props allow parent to pass container and link class names (e.g. from Header).
 */
import { Link } from "react-scroll";
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
          to={link.path}
          spy
          smooth
          offset={link.offset}
          duration={500}
          className={linkStyles}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
