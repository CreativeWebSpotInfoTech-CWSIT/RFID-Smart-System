import SolutionPageTemplate from "@/src/features/solutions/components/SolutionPageTemplate";
import { toolTrackingContent } from "@/src/features/solutions/data";

export const metadata = {
    title: "Tool Tracking Solution | RFID Smart System",
    description: toolTrackingContent.description,
    openGraph: {
        title: "Tool Tracking Solution | RFID Smart System",
        description: toolTrackingContent.description,
        url: "https://www.rfidsmartsystem.com/solutions/tool-tracking",
        images: [{ url: toolTrackingContent.image }],
    },
    robots: { index: true, follow: true },
};

export default function ToolTrackingPage() {
    return (
        <SolutionPageTemplate
            title={toolTrackingContent.title}
            subtitle={toolTrackingContent.subtitle}
            description={toolTrackingContent.description}
            image={toolTrackingContent.image}
            benefits={toolTrackingContent.benefits}
            useCases={toolTrackingContent.useCases}
            howItWorks={toolTrackingContent.howItWorks}
        />
    );
}