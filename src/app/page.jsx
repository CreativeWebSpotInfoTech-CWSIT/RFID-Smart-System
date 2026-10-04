import Navbar from "@/components/Navbar";
import HeroSection from "@/components/home/HeroSection";
import ExcellenceSection from "@/components/home/ExcellenceSection";
import StatsSection from "@/components/home/StatsSection";
import WhatWeDoSection from "@/components/home/WhatWeDoSection";
import WaveconnectSection from "@/components/home/WaveconnectSection";
import Footer from "@/components/Footer";

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
        <Footer />
      </main>
    </>
  );
}