import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Book a Table - Deli Mwitu",
  description: "Reserve your table at Deli Mwitu Restaurant",
};

export default function BookTableLayout({
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
