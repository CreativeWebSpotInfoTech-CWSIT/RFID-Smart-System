import SolutionPageTemplate from "@/components/solutions/SolutionPageTemplate";

export const metadata = {
    title: "Warehouse Automation Solution | RFID Smart System",
    description: "Automate inbound, outbound, and inventory processes with RFID technology.",
};

const benefits = [
    { title: "Automated Inbound Processing", desc: "Automatically identify and register incoming shipments." },
    { title: "Streamlined Outbound", desc: "Verify outgoing shipments with zero manual intervention." },
    { title: "Optimized Storage", desc: "Track item locations for faster picking and putaway." },
    { title: "Reduced Errors", desc: "Eliminate shipping and receiving errors with automated verification." },
];

const useCases = [
    "E-commerce fulfillment centers",
    "Third-party logistics (3PL) warehouses",
    "Manufacturing raw material warehouses",
    "Cold storage facilities",
    "Automated distribution centers",
    "Cross-docking operations",
];

export default function WarehouseAutomationPage() {
    return (
        <SolutionPageTemplate
            title="Warehouse Automation"
            subtitle="WAREHOUSE SOLUTION"
            description="Automate inbound, outbound, and inventory processes for seamless logistics operations. Our RFID warehouse automation solution increases throughput and reduces operational costs."
            benefits={benefits}
            useCases={useCases}
        />
    );
}