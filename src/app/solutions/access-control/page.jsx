import SolutionPageTemplate from "@/src/features/solutions/components/SolutionPageTemplate";
import { accessControlContent } from "@/src/features/solutions/data";

export const metadata = {
    title: "Access Control Solution | RFID Smart System",
    description: accessControlContent.description,
    openGraph: {
        title: "Access Control Solution | RFID Smart System",
        description: accessControlContent.description,
        url: "https://www.rfidsmartsystem.com/solutions/access-control",
        images: [{ url: accessControlContent.image }],
    },
    robots: { index: true, follow: true },
};

export default function AccessControlPage() {
    return (
        <SolutionPageTemplate
            title={accessControlContent.title}
            subtitle={accessControlContent.subtitle}
            description={accessControlContent.description}
            image={accessControlContent.image}
            benefits={accessControlContent.benefits}
            useCases={accessControlContent.useCases}
            howItWorks={accessControlContent.howItWorks}
        />
    );
}