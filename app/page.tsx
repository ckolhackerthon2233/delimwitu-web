import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Reviews from "@/components/Reviews";
import SpecialsBanner from "@/components/SpecialsBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      <Header />
      <Hero />
      <Menu />
      <SpecialsBanner />
      <Reviews />
      <Footer />
    </main>
  );
}
