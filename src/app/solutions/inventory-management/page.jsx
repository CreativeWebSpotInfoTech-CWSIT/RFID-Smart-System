import SolutionPageTemplate from "@/components/solutions/SolutionPageTemplate";

export const metadata = {
    title: "Inventory Management Solution | RFID Smart System",
    description: "Achieve 99.9% inventory accuracy with RFID-based automated counting and tracking.",
};

const benefits = [
    { title: "99.9% Accuracy", desc: "Eliminate manual counting errors with automated RFID inventory audits." },
    { title: "Faster Audits", desc: "Complete full inventory counts in minutes instead of days." },
    { title: "Real-Time Stock Levels", desc: "Always know exact stock quantities without manual intervention." },
    { title: "Reduced Labor Costs", desc: "Minimize manual counting effort and associated labor costs." },
];

const useCases = [
    "Retail store inventory management",
    "Warehouse stock counting and verification",
    "Pharmacy inventory tracking",
    "Library book inventory audits",
    "Manufacturing raw material tracking",
    "E-commerce fulfillment center management",
];

export default function InventoryManagementPage() {
    return (
        <SolutionPageTemplate
            title="Inventory Management"
            subtitle="INVENTORY SOLUTION"
            description="Achieve inventory accuracy of up to 99.9% while drastically reducing manual counting effort. Our RFID-based inventory management system automates stock tracking and provides real-time visibility."
            benefits={benefits}
            useCases={useCases}
        />
    );
}