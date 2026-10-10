import dynamic from "next/dynamic";
import Navbar from "@/src/shared/components/Navbar";
import Footer from "@/src/shared/components/Footer";
import AboutHero from "@/src/features/about/components/AboutHero";

// const OurStory = dynamic(
//     () => import("@/src/features/about/components/OurStory"),
//     {
//         loading: () => <div className="h-96 w-full animate-pulse bg-slate-50" />,
//         ssr: true,
//     }
// );

const VisionMission = dynamic(
    () => import("@/src/features/about/components/VisionMission"),
    {
        loading: () => <div className="h-80 w-full animate-pulse bg-slate-100" />,
        ssr: true,
    }
);

const CoreValues = dynamic(
    () => import("@/src/features/about/components/CoreValues"),
    {
        loading: () => <div className="h-72 w-full animate-pulse bg-white" />,
        ssr: true,
    }
);

const IndustriesServed = dynamic(
    () => import("@/src/features/about/components/IndustriesServed"),
    {
        loading: () => <div className="h-96 w-full animate-pulse bg-slate-50" />,
        ssr: true,
    }
);

const WhyChooseUs = dynamic(
    () => import("@/src/features/about/components/WhyChooseUs"),
    {
        loading: () => <div className="h-[500px] w-full animate-pulse bg-slate-50" />,
        ssr: true,
    }
);

const AboutCTA = dynamic(
    () => import("@/src/features/about/components/AboutCTA"),
    {
        loading: () => <div className="h-48 w-full animate-pulse bg-slate-900" />,
        ssr: true,
    }
);

export const metadata = {
    title: "About Us | RFID Smart System",
    description:
        "Learn about RFID Smart System's mission, vision, and why we are India's most trusted RFID technology provider.",
};

export default function AboutPage() {
    return (
        <>
            <Navbar />
            <main className="bg-white">
                <AboutHero />
                {/* <OurStory /> */}
                <VisionMission />
                <CoreValues />
                <IndustriesServed />
                <WhyChooseUs />
                <AboutCTA />
            </main>
            <Footer />
        </>
    );
}