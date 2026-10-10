import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://rfidsmartsystem.com'),
  title: {
    default: "RFID Smart System | Enterprise RFID & IoT Solutions",
    template: "%s | RFID Smart System",
  },
  description:
    "Leading RFID technology company specializing in high-performance RFID hardware, smart tags, readers, antennas, printers, and complete asset tracking solutions for Industry 4.0.",
  keywords: [
    "RFID",
    "IoT",
    "Asset Tracking",
    "Inventory Management",
    "Zebra",
    "Impinj",
    "Industry 4.0",
    "RFID Readers",
    "RFID Tags",
    "RFID Antennas",
    "Warehouse Automation",
  ],
  authors: [{ name: "RFID Smart System", url: "https://rfidsmartsystem.com" }],
  creator: "RFID Smart System",
  publisher: "RFID Smart System",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rfidsmartsystem.com",
    siteName: "RFID Smart System",
    title: "RFID Smart System | Enterprise RFID & IoT Solutions",
    description:
      "Leading RFID technology company specializing in high-performance RFID hardware and complete asset tracking solutions.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "RFID Smart System",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RFID Smart System | Enterprise RFID & IoT Solutions",
    description: "Leading RFID technology company for Industry 4.0",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#1e3a5f",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content="Chennai" />
        <meta name="geo.position" content="12.9716;80.2163" />
        <meta name="ICBM" content="12.9716, 80.2163" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}