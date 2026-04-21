/**
 * Root Layout – Wraps every page with fonts, metadata, and global styles.
 * Next.js App Router: layout.tsx is the root shell; children are the current route's page.
 */
import type { Metadata } from "next";
import { Lora, Poppins } from "next/font/google";
import "./globals.css";

/** Google Fonts via next/font: Lora (serif) for headings. Subsets/weights reduce bundle size. */
const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lora",
});

/** Poppins (sans-serif) for body text. Variable exposes --font-poppins for Tailwind. */
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

/**
 * SEO & social metadata. Used for <head> (title, description, og:, twitter:).
 * metadataBase: base URL for resolving relative image paths in Open Graph.
 */
export const metadata: Metadata = {
  metadataBase: new URL("https://restaurant-wfood.vercel.app"),
  title: {
    default: "W'Food - A Taste of Local Flavours | Modern Restaurant Website",
    template: "%s | W'Food Restaurant",
  },
  description:
    "Experience authentic local flavours at W'Food restaurant. Discover our favorite menu featuring Stilton and pancetta penne, Chorizo and avocado spaghetti, and more. Book a table online and enjoy modern dining with us.",
  keywords: [
    "restaurant",
    "local food",
    "dining",
    "W'Food",
    "restaurant website",
    "food menu",
    "book table",
    "restaurant reservation",
    "local flavours",
    "modern restaurant",
    "fine dining",
    "gourmet food",
    "restaurant menu",
    "online reservation",
    "restaurant booking",
    "Next.js",
    "React",
    "TailwindCSS",
    "Framer Motion",
  ],
  authors: [
    {
      name: "Arnob Mahmud",
      url: "https://www.arnobmahmud.com",
    },
  ],
  other: {
    "application-name": "W'Food Restaurant",
    "apple-mobile-web-app-title": "W'Food",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "mobile-web-app-capable": "yes",
    "theme-color": "#e5e5e5",
    "contact": "contact@arnobmahmud.com",
  },
  creator: "Arnob Mahmud",
  publisher: "Arnob Mahmud",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://restaurant-wfood.vercel.app",
    siteName: "W'Food Restaurant",
    title: "W'Food - A Taste of Local Flavours | Modern Restaurant Website",
    description:
      "Experience authentic local flavours at W'Food restaurant. Discover our favorite menu and book a table online.",
    images: [
      {
        url: "/hero/plate.png",
        width: 756,
        height: 682,
        alt: "W'Food Restaurant - A Taste of Local Flavours",
      },
      {
        url: "/logo.svg",
        width: 90,
        height: 36,
        alt: "W'Food Restaurant Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "W'Food - A Taste of Local Flavours | Modern Restaurant Website",
    description:
      "Experience authentic local flavours at W'Food restaurant. Discover our favorite menu and book a table online.",
    images: ["/hero/plate.png"],
    creator: "@arnob_mahmud",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  category: "restaurant",
};

/** Root layout: html/body get font CSS vars and background so first paint avoids white flash. */
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" style={{ backgroundColor: "#e5e5e5" }}>
      <body className={`${lora.variable} ${poppins.variable}`} style={{ backgroundColor: "#e5e5e5" }}>{children}</body>
    </html>
  );
}
