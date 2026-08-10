import type { Metadata } from "next";
import { Inter, Poppins, Nunito } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import {
  defaultSocialImage,
  getHotelStructuredData,
  siteName,
  siteUrl,
} from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap", // Better performance
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-nunito",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Luxury Hotel in Bauchi | Nectar Hotels & Suites",
    template: `%s | ${siteName}`,
  },
  description:
    "Book Nectar Hotels & Suites in New GRA, Bauchi for comfortable rooms, direct reservations, dining, parking, Wi-Fi, and warm hospitality.",
  keywords: [
    "hotels in Bauchi",
    "hotel in New GRA Bauchi",
    "Nectar Hotels & Suites",
    "Bauchi accommodation",
    "suites in Bauchi",
    "Presidential Suite Bauchi",
    "Executive Room Bauchi",
    "hotel booking Bauchi",
    "affordable hotel in Bauchi",
    "restaurant in Bauchi",
    "lounge in Bauchi",
    "hotel with parking in Bauchi",
  ],
  alternates: {
    canonical: "/",
  },
  applicationName: siteName,
  category: "hotel",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
  },
  openGraph: {
    title: siteName,
    description:
      "Stay in comfort at Nectar Hotels & Suites in Bauchi. Explore our Presidential Suite, Executive Room, gallery, and direct booking options.",
    url: siteUrl,
    siteName,
    locale: "en_NG",
    type: "website",
    images: [
      {
        url: defaultSocialImage,
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description:
      "Explore Nectar Hotels & Suites in Bauchi, from our room options to our gallery and direct booking page.",
    images: [defaultSocialImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const hotelStructuredData = getHotelStructuredData();

  return (
    <html lang="en">
      <body
        className={`${inter.className} ${inter.variable} ${nunito.variable} ${poppins.variable} antialiased`}
      >
        <Script
          id="hotel-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
        >
          {JSON.stringify(hotelStructuredData)}
        </Script>
        <Header />
        {children}
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
