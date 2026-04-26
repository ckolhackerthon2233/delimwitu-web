/**
 * Shared TypeScript types: animation directions, menu items, nav config, map markers.
 * FadeDirection used by lib/variants.ts; interfaces used by data/* and components.
 */
import type { ReactNode } from "react";

/** Shared types for the restaurant app */

export type FadeDirection = "up" | "down" | "left" | "right";

export interface MenuItem {
  id?: string;
  cat: "breakfast" | "lunch" | "mains" | "sides" | "desserts" | "drinks";
  badge?: string;
  title: string;
  desc: string;
  price: string;
  img: string;
  subcategory?: string;
}

export interface NavLinkConfig {
  path: string;
  name: string;
  offset: number;
}

export interface MapMarkerData {
  position: [number, number];
  title: string;
  subtitle: string;
  image: string;
}

export interface NavMobileLinkConfig extends NavLinkConfig {
  icon: ReactNode;
  isExternal?: boolean;
}
