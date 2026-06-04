/**
 * Root Layout – Wraps every page with fonts, metadata, and global styles.
 * Next.js App Router: layout.tsx is the root shell; children are the current route's page.
 */
import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import { ToastProvider } from "@/components/ToastProvider";
import WhatsAppFloat from "@/components/WhatsAppFloat";

/** Playfair Display (serif) for headings */
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-playfair",
});

/** DM Sans (sans-serif) for body text */
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm-sans",
});

/**
 * SEO & social metadata. Used for <head> (title, description, og:, twitter:).
 * metadataBase: base URL for resolving relative image paths in Open Graph.
 */
export const metadata: Metadata = {
  metadataBase: new URL("https://delimwitu.co.ke"),
  title: {
    default: "Delimwitu Restaurant & Hotel Stay Near Nairobi | Maralal Oasis Dining, Fast Food & More",
    template: "%s | Delimwitu Restaurant",
  },
  description:
    "Discover Delimwitu Restaurant near Nairobi with hotel-style comfort, Maralal Oasis location vibes, deli food, fast food, coffee, pastries, and local dining experiences.",
  keywords: [
    "Delimwitu Restaurant",
    "hotel near Nairobi",
    "hotels near Nairobi",
    "Maralal Oasis",
    "Maralal Oasis hotel",
    "Maralal Oasis location",
    "deli near Nairobi",
    "fast food near Nairobi",
    "Kenyan coffee",
    "specialty coffee",
    "Restaurant Nairobi",
    "restaurant near Nairobi",
    "local food",
    "pastries",
    "hotel stay",
    "guest house",
    "lodging",
    "travel stop",
    "food and accommodation",
    "Nairobi dining",
    "coffee shop",
    "breakfast spot",
    "deli",
    "fast food",
    "outdoor dining",
    "hotel amenities",
  ],
  authors: [
    {
      name: "Arnob Mahmud",
      url: "https://www.arnobmahmud.com",
    },
  ],
  other: {
    "application-name": "Delimwitu Restaurant",
    "apple-mobile-web-app-title": "Delimwitu Restaurant",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "mobile-web-app-capable": "yes",
    "theme-color": "#ea580c",
    "color-scheme": "light",
    "viewport": "width=device-width, initial-scale=1, viewport-fit=cover",
    "format-detection": "telephone=no",
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
    url: "https://delimwitu.co.ke",
    siteName: "Delimwitu Restaurant & Hotel Stay",
    title: "Delimwitu Restaurant & Hotel Stay Near Nairobi | Maralal Oasis Dining, Fast Food & More",
    description:
      "Enjoy Delimwitu Restaurant near Nairobi with hotel-style comfort, deli bites, fast food, coffee, pastries, and a welcoming Maralal Oasis experience.",
    images: [
      {
        url: "/hero/plate.png",
        width: 756,
        height: 682,
        alt: "Delimwitu Restaurant - Premium Coffee in Nairobi",
      },
      {
        url: "/logo.svg",
        width: 90,
        height: 36,
        alt: "Delimwitu Restaurant Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Delimwitu Restaurant & Hotel Stay Near Nairobi | Maralal Oasis Dining, Fast Food & More",
    description:
      "Enjoy Delimwitu Restaurant near Nairobi with hotel-style comfort, deli bites, fast food, coffee, pastries, and a welcoming Maralal Oasis experience.",
    images: ["/hero/plate.png"],
    creator: "@delimwitu_cafe",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  alternates: {
    canonical: "https://delimwitu.co.ke",
  },
  manifest: "/manifest.json",
  category: "restaurant",
};

/** Root layout: html/body get font CSS vars and background so first paint avoids white flash. */
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" style={{ backgroundColor: "#FDFAF5" }}>
      <body className={`${playfair.variable} ${dmSans.variable}`} style={{ backgroundColor: "#FDFAF5" }}>
        <ToastProvider>{children}</ToastProvider>
        <WhatsAppFloat />
      </body>
    </html>
  );
}
