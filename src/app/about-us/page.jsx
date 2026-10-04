import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import VisionMission from "@/components/about/VisionMission";
import IndustriesServed from "@/components/about/IndustriesServed";
import WhyChooseUs from "@/components/about/WhyChooseUs";

export const metadata = {
    title: "About Us | RFID Smart System",
    description: "Learn about RFID Smart System's mission, vision, and why we are India's most trusted RFID technology provider.",
};

export default function AboutPage() {
    return (
        <>
            <Navbar />
            <main className="bg-white">
                <AboutHero />
                <OurStory />
                <VisionMission />
                <IndustriesServed />
                <WhyChooseUs />
            </main>
            <Footer />
        </>
    );
}