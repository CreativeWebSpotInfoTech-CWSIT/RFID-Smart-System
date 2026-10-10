import SolutionPageTemplate from "@/src/features/solutions/components/SolutionPageTemplate";
import { assetTrackingContent } from "@/src/features/solutions/data";

export const metadata = {
    title: "Asset Tracking Solution | RFID Smart System",
    description: assetTrackingContent.description,
    openGraph: {
        title: "Asset Tracking Solution | RFID Smart System",
        description: assetTrackingContent.description,
        url: "https://www.rfidsmartsystem.com/solutions/asset-tracking",
        images: [{ url: assetTrackingContent.image }],
    },
    robots: { index: true, follow: true },
};

export default function AssetTrackingPage() {
    return (
        <SolutionPageTemplate
            title={assetTrackingContent.title}
            subtitle={assetTrackingContent.subtitle}
            description={assetTrackingContent.description}
            image={assetTrackingContent.image}
            benefits={assetTrackingContent.benefits}
            useCases={assetTrackingContent.useCases}
            howItWorks={assetTrackingContent.howItWorks}
        />
    );
}