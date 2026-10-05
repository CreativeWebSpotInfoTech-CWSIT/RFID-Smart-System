import SolutionPageTemplate from "@/components/solutions/SolutionPageTemplate";

export const metadata = {
    title: "WIP Tracking Solution | RFID Smart System",
    description: "Monitor production status and material flow across manufacturing assembly lines.",
};

const benefits = [
    { title: "Real-Time Production Visibility", desc: "Track work-in-progress items across all production stages." },
    { title: "Bottleneck Identification", desc: "Identify and resolve production bottlenecks quickly." },
    { title: "Quality Control", desc: "Track quality checks and ensure compliance." },
    { title: "Efficiency Optimization", desc: "Optimize production flow and reduce cycle times." },
];

const useCases = [
    "Automotive assembly line tracking",
    "Electronics manufacturing WIP",
    "Pharmaceutical production tracking",
    "Food and beverage production",
    "Textile manufacturing",
    "Aerospace component tracking",
];

export default function WipTrackingPage() {
    return (
        <SolutionPageTemplate
            title="WIP Tracking"
            subtitle="MANUFACTURING SOLUTION"
            description="Monitor production status and material flow across manufacturing assembly lines. Our WIP tracking solution provides complete visibility into your production process."
            benefits={benefits}
            useCases={useCases}
        />
    );
}