/**
 * Map markers for Leaflet: lat/lng, title, subtitle, and image for popup.
 * Used by components/Map.tsx. Position array format: [latitude, longitude].
 */
import type { MapMarkerData } from "@/types";

/** Map marker data: position [lat, lng], title, subtitle, image path */
export const mapMarkers: MapMarkerData[] = [
  {
    position: [-1.2921, 36.8219],
    title: "Delimwitu, Maralal Oasis",
    subtitle: "Ground Floor, Hurlingham, Nairobi",
    image: "/logo.png",
  },
];
