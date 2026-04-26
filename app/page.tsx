import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import About from "@/components/About";
import Reviews from "@/components/Reviews";
import Team from "@/components/Team";
import SpecialsBanner from "@/components/SpecialsBanner";
import ReservationCard from "@/components/ReservationCard";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      <Header />
      <Hero />
      <Menu />
      <SpecialsBanner />
      <About />
      <Reviews />
      <Footer />
    </main>
  );
}
