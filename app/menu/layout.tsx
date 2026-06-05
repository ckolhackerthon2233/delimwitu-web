import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Menu - Deli Mwitu",
  description: "Explore our delicious menu at Deli Mwitu Restaurant",
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
