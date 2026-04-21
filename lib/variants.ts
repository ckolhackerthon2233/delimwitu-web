/**
 * Framer Motion animation variants used site-wide (Hero, Menu, About, Footer, Map, Reservation).
 * hidden = starting state (offset by direction, opacity 0); show = final state (opacity 1, no offset).
 */
import type { Variants } from "framer-motion";
import type { FadeDirection } from "@/types";

/**
 * Framer Motion fade-in variants.
 * @param direction - 'up' | 'down' | 'left' | 'right'
 * @param delay - delay in seconds
 */
export function fadeIn(direction: FadeDirection, delay: number): Variants {
  return {
    hidden: {
      y: direction === "up" ? 80 : direction === "down" ? -80 : 0,
      opacity: 0,
      x: direction === "left" ? 80 : direction === "right" ? -80 : 0,
      transition: {
        type: "tween",
        duration: 1.5,
        delay,
        ease: [0.25, 0.6, 0.3, 0.8],
      },
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1.4,
        delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
}
