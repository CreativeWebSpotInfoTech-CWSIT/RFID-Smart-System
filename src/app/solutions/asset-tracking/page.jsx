import SolutionPageTemplate from "@/components/solutions/SolutionPageTemplate";

export const metadata = {
    title: "Asset Tracking Solution | RFID Smart System",
    description: "Track valuable assets in real-time with automated RFID identification and location monitoring.",
};

const benefits = [
    { title: "Real-Time Visibility", desc: "Know the exact location and status of every asset at any given moment." },
    { title: "Automated Identification", desc: "Eliminate manual scanning with automatic RFID tag reading." },
    { title: "Loss Prevention", desc: "Reduce asset loss and theft with instant alerts and tracking." },
    { title: "Cost Reduction", desc: "Minimize replacement costs and optimize asset utilization." },
];

const useCases = [
    "IT equipment tracking in corporate offices",
    "Medical equipment tracking in hospitals",
    "Tool tracking in manufacturing facilities",
    "Furniture and fixture tracking in hotels",
    "Library book and media tracking",
    "Construction equipment monitoring",
];

export default function AssetTrackingPage() {
    return (
        <SolutionPageTemplate
            title="Asset Tracking System"
            subtitle="ASSET TRACKING SOLUTION"
            description="Track valuable assets in real-time with automated RFID identification and location monitoring. Our solution provides complete visibility into your asset inventory, reducing loss and improving operational efficiency."
            benefits={benefits}
            useCases={useCases}
        />
    );
}