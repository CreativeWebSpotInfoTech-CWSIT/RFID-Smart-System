import SolutionPageTemplate from "@/src/features/solutions/components/SolutionPageTemplate";
import { laundryContent } from "@/src/features/solutions/data";

export const metadata = {
    title: "Laundry Management Solution | RFID Smart System",
    description: laundryContent.description,
    openGraph: {
        title: "Laundry Management Solution | RFID Smart System",
        description: laundryContent.description,
        url: "https://www.rfidsmartsystem.com/solutions/laundry-management",
        images: [{ url: laundryContent.image }],
    },
    robots: { index: true, follow: true },
};

export default function LaundryManagementPage() {
    return (
        <SolutionPageTemplate
            title={laundryContent.title}
            subtitle={laundryContent.subtitle}
            description={laundryContent.description}
            image={laundryContent.image}
            benefits={laundryContent.benefits}
            useCases={laundryContent.useCases}
            howItWorks={laundryContent.howItWorks}
        />
    );
}