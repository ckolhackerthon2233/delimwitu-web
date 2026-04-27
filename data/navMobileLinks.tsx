/**
 * Mobile nav config: same section paths as navLinks plus ReactNode icons (react-icons).
 * Used by components/NavMobile.tsx for the overlay menu.
 */
import { RiHomeFill } from "react-icons/ri";
import { BiSolidFoodMenu } from "react-icons/bi";
import { FaUsers, FaEnvelope, FaCalendarAlt } from "react-icons/fa";
import type { NavMobileLinkConfig } from "@/types";

/** Mobile nav links with icons */
export const navMobileLinks: NavMobileLinkConfig[] = [
  { icon: <RiHomeFill />, path: "hero", name: "home", offset: 0 },
  { icon: <BiSolidFoodMenu />, path: "/menu", name: "menu", offset: 0, isExternal: true },
  { icon: <FaCalendarAlt />, path: "reservation", name: "book table", offset: -150 },
  { icon: <FaUsers />, path: "about", name: "about", offset: -50 },
  { icon: <FaEnvelope />, path: "contact", name: "contact", offset: 0 },
];
