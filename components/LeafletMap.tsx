"use client";

import { useEffect } from "react";
import "leaflet/dist/leaflet.css";

// Fix default Leaflet marker icons when bundled with webpack/Next.js
function fixLeafletIcons() {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const L = require("leaflet");
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  delete (L.Icon.Default.prototype as Record<string, unknown>)._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    iconUrl:       "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl:     "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  });
}

// Branch locations in Nairobi — update coordinates to match your real branches
const BRANCHES = [
  {
    name: "Delimwitu Kileleshua",
    address: "Kileleshua, Nairobi",
    lat: -1.2611,
    lng: 36.8219,
    phone: "+254 701 234 567",
    hours: "10:00 AM – 10:00 PM",
  },
  {
    name: "Delimwitu Downtown",
    address: "CBD, Nairobi",
    lat: -1.2841,
    lng: 36.8155,
    phone: "+254 701 234 568",
    hours: "10:00 AM – 10:00 PM",
  },
  {
    name: "Delimwitu Westlands",
    address: "Westlands, Nairobi",
    lat: -1.2637,
    lng: 36.8025,
    phone: "+254 701 234 569",
    hours: "10:00 AM – 11:00 PM",
  },
];

export default function LeafletMap() {
  useEffect(() => {
    // Dynamically import Leaflet only on the client
    import("leaflet").then((L) => {
      fixLeafletIcons();

      // Prevent double-init if component re-renders
      const container = document.getElementById("delimwitu-map") as HTMLElement & {
        _leaflet_id?: number;
      };
      if (!container || container._leaflet_id) return;

      const map = L.map(container, {
        center: [-1.272, 36.812],
        zoom: 13,
        zoomControl: true,
        scrollWheelZoom: false,
      });

      // OpenStreetMap tiles (free, no API key needed)
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }).addTo(map);

      // Custom orange marker icon
      const orangeIcon = L.divIcon({
        className: "",
        html: `
          <div style="
            width: 36px; height: 36px;
            background: linear-gradient(135deg, #f97316, #ef4444);
            border-radius: 50% 50% 50% 0;
            transform: rotate(-45deg);
            border: 3px solid white;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
          "></div>
        `,
        iconSize: [36, 36],
        iconAnchor: [18, 36],
        popupAnchor: [0, -38],
      });

      // Add a marker for each branch
      BRANCHES.forEach((branch) => {
        const popup = L.popup({ maxWidth: 240, className: "delimwitu-popup" }).setContent(`
          <div style="font-family: sans-serif; padding: 4px;">
            <h3 style="margin: 0 0 6px; font-size: 15px; font-weight: 800; color: #1a0a00;">
              ${branch.name}
            </h3>
            <p style="margin: 0 0 4px; font-size: 13px; color: #555;">📍 ${branch.address}</p>
            <p style="margin: 0 0 4px; font-size: 13px; color: #555;">🕐 ${branch.hours}</p>
            <a href="tel:${branch.phone}"
               style="display:inline-block; margin-top:8px; padding: 6px 14px;
                      background: linear-gradient(to right, #f97316, #ef4444);
                      color: white; border-radius: 8px; font-weight: 700;
                      font-size: 13px; text-decoration: none;">
              📞 Call Now
            </a>
          </div>
        `);

        L.marker([branch.lat, branch.lng], { icon: orangeIcon })
          .addTo(map)
          .bindPopup(popup);
      });
    });
  }, []);

  return (
    <div
      id="delimwitu-map"
      style={{ width: "100%", height: "100%", minHeight: "500px" }}
    />
  );
}