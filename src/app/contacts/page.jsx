import dynamic from "next/dynamic";
import Navbar from "@/src/shared/components/Navbar";
import Footer from "@/src/shared/components/Footer";
import ContactHero from "@/src/features/contact/components/ContactHero";

const ContactInfoCards = dynamic(
    () => import("@/src/features/contact/components/ContactInfoCards"),
    {
        loading: () => <div className="h-48 w-full animate-pulse bg-slate-50" />,
        ssr: true,
    }
);

const ContactFormSection = dynamic(
    () => import("@/src/features/contact/components/ContactFormSection"),
    {
        loading: () => <div className="h-[600px] w-full animate-pulse bg-white" />,
        ssr: true,
    }
);

const WhyContactUs = dynamic(
    () => import("@/src/features/contact/components/WhyContactUs"),
    {
        loading: () => <div className="h-80 w-full animate-pulse bg-slate-50" />,
        ssr: true,
    }
);

const FAQSection = dynamic(
    () => import("@/src/features/contact/components/FAQSection"),
    {
        loading: () => <div className="h-96 w-full animate-pulse bg-white" />,
        ssr: true,
    }
);

const SocialStrip = dynamic(
    () => import("@/src/features/contact/components/SocialStrip"),
    {
        loading: () => <div className="h-48 w-full animate-pulse bg-slate-900" />,
        ssr: true,
    }
);

export const metadata = {
    title: "Contact Us | RFID Smart System",
    description:
        "Get in touch with RFID Smart System. Reach our Chennai office for enterprise RFID & IoT solutions. We respond within 24 hours.",
    keywords: [
        "RFID contact",
        "RFID Smart System Chennai",
        "RFID support",
        "RFID quote",
        "RFID demo",
    ],
    openGraph: {
        title: "Contact Us | RFID Smart System",
        description:
            "Reach our Chennai office for enterprise RFID & IoT solutions. Response within 24 hours.",
        url: "https://www.rfidsmartsystem.com/contacts",
        siteName: "RFID Smart System",
        type: "website",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function ContactPage() {
    return (
        <>
            <Navbar />
            <main className="bg-white">
                <ContactHero />
                <ContactInfoCards />
                <ContactFormSection />
                <WhyContactUs />
                <FAQSection />
                <SocialStrip />
            </main>
            <Footer />
        </>
    );
}