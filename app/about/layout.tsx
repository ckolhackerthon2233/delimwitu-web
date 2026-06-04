import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About - Delimwitu Restaurant",
  description: "Learn about Delimwitu Restaurant's story, values, and commitment to quality food and community",
};

export default function AboutLayout({
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