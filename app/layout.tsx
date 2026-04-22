/**
 * Root Layout – Wraps every page with fonts, metadata, and global styles.
 * Next.js App Router: layout.tsx is the root shell; children are the current route's page.
 */
import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import { ToastProvider } from "@/components/ToastProvider";

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
  metadataBase: new URL("https://restaurant-wfood.vercel.app"),
  title: {
    default: "Delimwitu Cafe - Nairobi's Premium Coffee & Food Destination",
    template: "%s | Delimwitu Cafe",
  },
  description:
    "Experience authentic Kenyan coffee and cuisine at Delimwitu Cafe in Kileleshua, Nairobi. Premium roasted beans, fresh pastries, and a vibrant community space.",
  keywords: [
    "coffee",
    "cafe",
    "Nairobi",
    "Kileleshua",
    "Delimwitu Cafe",
    "specialty coffee",
    "third-wave roastery",
    "local food",
    "pastries",
    "dining",
    "restaurant",
    "community space",
    "Kenyan coffee",
    "artisan coffee",
    "cafe nairobi",
    "specialty drinks",
    "book table",
    "cafe reservation",
    "WiFi cafe",
  ],
  authors: [
    {
      name: "Arnob Mahmud",
      url: "https://www.arnobmahmud.com",
    },
  ],
  other: {
    "application-name": "Delimwitu Cafe",
    "apple-mobile-web-app-title": "Delimwitu Cafe",
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
    siteName: "Delimwitu Cafe",
    title: "Delimwitu Cafe - Nairobi's Premium Coffee & Food Destination",
    description:
      "Experience authentic Kenyan coffee and cuisine at Delimwitu Cafe in Kileleshua, Nairobi. Book a table online.",
    images: [
      {
        url: "/hero/plate.png",
        width: 756,
        height: 682,
        alt: "Delimwitu Cafe - Premium Coffee in Nairobi",
      },
      {
        url: "/logo.svg",
        width: 90,
        height: 36,
        alt: "Delimwitu Cafe Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Delimwitu Cafe - Nairobi's Premium Coffee & Food Destination",
    description:
      "Experience authentic Kenyan coffee and cuisine at Delimwitu Cafe in Kileleshua, Nairobi. Book a table online.",
    images: ["/hero/plate.png"],
    creator: "@delimwitu_cafe",
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
    <html lang="en" style={{ backgroundColor: "#FDFAF5" }}>
      <body className={`${playfair.variable} ${dmSans.variable}`} style={{ backgroundColor: "#FDFAF5" }}>
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}
