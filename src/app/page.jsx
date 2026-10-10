import dynamic from "next/dynamic";
import Navbar from "@/src/shared/components/Navbar";
import HeroSection from "@/src/features/home/components/HeroSection";
import Footer from "@/src/shared/components/Footer";

const ExcellenceSection = dynamic(
  () => import("@/src/features/home/components/ExcellenceSection"),
  {
    loading: () => <div className="h-96 w-full animate-pulse bg-slate-100" />,
    ssr: true,
  }
);

const StatsSection = dynamic(
  () => import("@/src/features/home/components/StatsSection"),
  {
    loading: () => <div className="h-64 w-full animate-pulse bg-slate-50" />,
    ssr: true,
  }
);

const WhatWeDoSection = dynamic(
  () => import("@/src/features/home/components/WhatWeDoSection"),
  {
    loading: () => <div className="h-[500px] w-full animate-pulse bg-slate-50" />,
    ssr: true,
  }
);

const WaveconnectSection = dynamic(
  () => import("@/src/features/home/components/WaveconnectSection"),
  {
    loading: () => <div className="h-96 w-full animate-pulse bg-slate-100" />,
    ssr: true,
  }
);

// SEO Metadata
export const metadata = {
  title: "RFID Smart System | Leading RFID Technology Company",
  description:
    "RFID Smart System is a leading RFID technology company specializing in supplying high-performance RFID hardware, smart tags, labels, readers, antennas, printers, and complete asset tracking solutions for industrial and commercial applications.",
  keywords: [
    "RFID",
    "RFID Reader",
    "RFID Tags",
    "RFID Antenna",
    "IoT Solutions",
    "Asset Tracking",
    "Warehouse Automation",
    "RFID Smart System",
    "Industrial RFID",
  ],
  authors: [{ name: "RFID Smart System" }],
  openGraph: {
    title: "RFID Smart System | Leading RFID Technology Company",
    description:
      "High-performance RFID hardware, smart tags, readers, antennas and complete asset tracking solutions for industrial and commercial applications.",
    url: "https://www.rfidsmartsystem.com",
    siteName: "RFID Smart System",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "RFID Smart System | Leading RFID Technology Company",
    description:
      "High-performance RFID hardware and complete asset tracking solutions worldwide.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        <HeroSection />
        <ExcellenceSection />
        <StatsSection />
        <WhatWeDoSection />
        <WaveconnectSection />
      </main>
      <Footer />
    </>
  );
}