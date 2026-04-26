/**
 * Desktop navigation config for Next.js routing.
 * Used by components/Nav.tsx.
 */
import type { NavLinkConfig } from "@/types";

export const navLinks: (NavLinkConfig & { isExternal?: boolean })[] = [
  { path: "/", name: "home", offset: -50, isExternal: true },
  { path: "/menu", name: "menu", offset: -50, isExternal: true },
  { path: "/#about", name: "about", offset: -150, isExternal: false },
  { path: "/#contact", name: "contact", offset: 0, isExternal: false },
];

