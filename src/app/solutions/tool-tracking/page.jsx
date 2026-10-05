import SolutionPageTemplate from "@/components/solutions/SolutionPageTemplate";

export const metadata = {
    title: "Tool Tracking Solution | RFID Smart System",
    description: "Monitor tools, equipment, and maintenance history with RFID technology.",
};

const benefits = [
    { title: "Tool Location Tracking", desc: "Know exactly where every tool is at all times." },
    { title: "Maintenance Scheduling", desc: "Track usage and schedule maintenance automatically." },
    { title: "Loss Prevention", desc: "Prevent tool loss with checkout/check-in tracking." },
    { title: "Usage Analytics", desc: "Analyze tool utilization for better procurement decisions." },
];

const useCases = [
    "Manufacturing facility tool management",
    "Construction site equipment tracking",
    "Aviation maintenance tool control",
    "Hospital surgical instrument tracking",
    "Automotive repair shop tool management",
    "Mining equipment monitoring",
];

export default function ToolTrackingPage() {
    return (
        <SolutionPageTemplate
            title="Tool Tracking"
            subtitle="TOOL MANAGEMENT SOLUTION"
            description="Monitor tools, equipment, and maintenance history to prevent loss and optimize usage. Our RFID tool tracking system provides complete visibility into your tool inventory."
            benefits={benefits}
            useCases={useCases}
        />
    );
}