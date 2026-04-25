/**
 * Map markers for Leaflet: lat/lng, title, subtitle, and image for popup.
 * Used by components/Map.tsx. Position array format: [latitude, longitude].
 */
import type { MapMarkerData } from "@/types";

/** Map marker data: position [lat, lng], title, subtitle, image path */
export const mapMarkers: MapMarkerData[] = [
  {
    position: [-1.2921, 36.8219],
    title: "Kileleshwa Branch",
    subtitle: "Our main location in the heart of Nairobi",
    image: "/map/1.png",
  },
  {
    position: [-1.2625, 36.7974],
    title: "Westlands Branch",
    subtitle: "Conveniently located in the Westlands area",
    image: "/map/2.png",
  },
  {
    position: [-1.3125, 36.7044],
    title: "Karen Branch",
    subtitle: "Visit us in the serene Karen neighborhood",
    image: "/map/3.png",
  },
];
