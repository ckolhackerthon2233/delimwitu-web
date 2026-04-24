import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Menu - delimwitu",
  description: "Explore our delicious menu at Delimwitu Cafe",
};

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
