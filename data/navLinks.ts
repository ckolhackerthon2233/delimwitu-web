/**
 * Desktop navigation config: section IDs (path) and scroll offset for react-scroll Link.
 * Used by components/Nav.tsx. offset compensates for fixed header when scrolling.
 */
import type { NavLinkConfig } from "@/types";

/** Desktop nav links: path = section id, offset for fixed header */
export const navLinks: (NavLinkConfig & { isExternal?: boolean })[] = [
  { path: "/", name: "home", offset: -50, isExternal: true },
  { path: "/menu", name: "menu", offset: -50, isExternal: true },
  { path: "/about", name: "about", offset: -150, isExternal: true },
  { path: "/contact", name: "contact", offset: 0, isExternal: true },
];
