/**
 * Map markers for Leaflet: lat/lng, title, subtitle, and image for popup.
 * Used by components/Map.tsx. Position array format: [latitude, longitude].
 */
import type { MapMarkerData } from "@/types";

/** Map marker data: position [lat, lng], title, subtitle, image path */
export const mapMarkers: MapMarkerData[] = [
  {
    position: [34.052235, -118.243683],
    title: "Location 1",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    image: "/map/1.png",
  },
  {
    position: [33.9748, -118.3356],
    title: "Location 2",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    image: "/map/2.png",
  },
  {
    position: [34.0211, -118.2965],
    title: "Location 3",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    image: "/map/3.png",
  },
];
