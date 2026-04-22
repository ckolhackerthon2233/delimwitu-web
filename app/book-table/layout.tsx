import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Book a Table - delimwitu",
  description: "Reserve your table at Delimwitu Cafe",
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
