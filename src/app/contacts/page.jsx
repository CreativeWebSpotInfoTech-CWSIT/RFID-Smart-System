import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfoCards from "@/components/contact/ContactInfoCards";
import ContactFormSection from "@/components/contact/ContactFormSection";
import WhyContactUs from "@/components/contact/WhyContactUs";
import FAQSection from "@/components/contact/FAQSection";
import SocialStrip from "@/components/contact/SocialStrip";

export const metadata = {
    title: "Contact Us | RFID Smart System",
    description: "Get in touch with RFID Smart System. Reach our USA and India offices for enterprise RFID & IoT solutions.",
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