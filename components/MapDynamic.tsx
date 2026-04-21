"use client";

/**
 * MapDynamic – Client-only wrapper for the Leaflet map.
 * next/dynamic with ssr: false prevents "window is not defined" during SSR (Leaflet needs browser APIs).
 */
import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/components/Map"), { ssr: false });

export default function MapDynamic() {
  return <Map />;
}
