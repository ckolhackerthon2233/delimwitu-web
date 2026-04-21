"use client";

/**
 * Map – Interactive Leaflet map with markers and popups.
 * Uses react-leaflet; marker data from data/mapMarkers.ts. Only run on client (imported via MapDynamic with ssr: false).
 */
import { fadeIn } from "@/lib/variants";
import { motion } from "framer-motion";
import Image from "next/image";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useMediaQuery } from "react-responsive";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { mapMarkers } from "@/data/mapMarkers";

/** Custom pin icon for markers (replaces default Leaflet marker). */
const customIcon = new Icon({
  iconUrl: "/pin-solid.svg",
  iconSize: [40, 40],
});

export default function Map() {
  /** Responsive: smaller height and zoom on mobile for better UX */
  const isMobile = useMediaQuery({ query: "(max-width:768px)" });

  return (
    <motion.section
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.4 }}
      id="contact"
      className="relative xl:after:w-full xl:after:h-[240px] xl:after:bg-gradient-to-b xl:after:from-white xl:after:via-white/80 xl:after:to-white/20 xl:after:absolute xl:after:top-0 xl:after:z-20"
    >
      <MapContainer
        key={isMobile ? "mobile-map" : "desktop-map"}
        center={[34.052235, -118.243683]}
        zoom={isMobile ? 10 : 12}
        className={`${isMobile ? "h-[300px]" : "h-[900px]"} z-10`}
        zoomControl={false}
      >
        {/* CartoDB light tiles; attribution required by OpenStreetMap */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />
        {mapMarkers.map((marker) => (
          <Marker
            key={marker.title}
            position={marker.position}
            icon={customIcon}
          >
            <Popup>
              <div className="flex gap-x-[30px]">
                <div className="flex-1">
                  <h3>{marker.title}</h3>
                  <p className="leading-snug">{marker.subtitle}</p>
                </div>
                <div className="flex-1">
                  <Image
                    src={marker.image}
                    width={130}
                    height={160}
                    alt={marker.title}
                  />
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </motion.section>
  );
}
