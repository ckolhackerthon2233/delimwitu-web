/**
 * Home Page (route: /) – Single-page layout composing all sections.
 * No API calls; all content is static. MapDynamic loads the map only on the client (Leaflet needs window).
 */
import About from "@/components/About";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MapDynamic from "@/components/MapDynamic";
import Menu from "@/components/Menu";
import Reservation from "@/components/Reservation";

export default function Home() {
  return (
    <main className="w-full max-w-[1440px] bg-white mx-auto overflow-hidden">
      <Header />
      <Hero />
      <Menu />
      <Reservation />
      <About />
      <MapDynamic />
      <Footer />
    </main>
  );
}
