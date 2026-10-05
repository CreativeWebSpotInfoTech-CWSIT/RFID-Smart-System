import SolutionPageTemplate from "@/components/solutions/SolutionPageTemplate";

export const metadata = {
    title: "Laundry Management Solution | RFID Smart System",
    description: "Automate linen counting, distribution, and lifecycle management with RFID.",
};

const benefits = [
    { title: "Automated Counting", desc: "Count hundreds of linen items in seconds with RFID." },
    { title: "Lifecycle Tracking", desc: "Track wash cycles and monitor linen lifespan." },
    { title: "Loss Prevention", desc: "Reduce linen loss with automated tracking." },
    { title: "Distribution Accuracy", desc: "Ensure correct linen distribution to departments." },
];

const useCases = [
    "Hotel linen management",
    "Hospital textile tracking",
    "Commercial laundry facilities",
    "Uniform management for corporations",
    "Restaurant tablecloth and napkin tracking",
    "Spa and wellness center linen management",
];

export default function LaundryManagementPage() {
    return (
        <SolutionPageTemplate
            title="Laundry Management"
            subtitle="LAUNDRY SOLUTION"
            description="Automate linen counting, distribution, and lifecycle management for hotels and hospitals. Our RFID laundry management system reduces loss and improves operational efficiency."
            benefits={benefits}
            useCases={useCases}
        />
    );
}