import SolutionPageTemplate from "@/components/solutions/SolutionPageTemplate";

export const metadata = {
    title: "Access Control Solution | RFID Smart System",
    description: "Secure facility access using RFID cards, tags, and digital credentials.",
};

const benefits = [
    { title: "Secure Access", desc: "Control who enters your facilities with RFID credentials." },
    { title: "Audit Trail", desc: "Maintain complete logs of all access events." },
    { title: "Flexible Credentials", desc: "Use cards, tags, or mobile devices for access." },
    { title: "Integration Ready", desc: "Integrate with existing security systems." },
];

const useCases = [
    "Corporate office building access",
    "Data center security",
    "Manufacturing facility access control",
    "Hotel room key systems",
    "Event venue access management",
    "Residential community access",
];

export default function AccessControlPage() {
    return (
        <SolutionPageTemplate
            title="Access Control"
            subtitle="SECURITY SOLUTION"
            description="Secure facility access using RFID cards, tags, and digital credentials. Our access control solution provides robust security with flexible credential options."
            benefits={benefits}
            useCases={useCases}
        />
    );
}