import SolutionPageTemplate from "@/src/features/solutions/components/SolutionPageTemplate";
import { wipTrackingContent } from "@/src/features/solutions/data";

export const metadata = {
    title: "WIP Tracking Solution | RFID Smart System",
    description: wipTrackingContent.description,
    openGraph: {
        title: "WIP Tracking Solution | RFID Smart System",
        description: wipTrackingContent.description,
        url: "https://www.rfidsmartsystem.com/solutions/wip-tracking",
        images: [{ url: wipTrackingContent.image }],
    },
    robots: { index: true, follow: true },
};

export default function WipTrackingPage() {
    return (
        <SolutionPageTemplate
            title={wipTrackingContent.title}
            subtitle={wipTrackingContent.subtitle}
            description={wipTrackingContent.description}
            image={wipTrackingContent.image}
            benefits={wipTrackingContent.benefits}
            useCases={wipTrackingContent.useCases}
            howItWorks={wipTrackingContent.howItWorks}
        />
    );
}