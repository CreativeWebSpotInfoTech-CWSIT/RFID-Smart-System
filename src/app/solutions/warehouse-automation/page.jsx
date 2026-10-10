import SolutionPageTemplate from "@/src/features/solutions/components/SolutionPageTemplate";
import { warehouseContent } from "@/src/features/solutions/data";

export const metadata = {
    title: "Warehouse Automation Solution | RFID Smart System",
    description: warehouseContent.description,
    openGraph: {
        title: "Warehouse Automation Solution | RFID Smart System",
        description: warehouseContent.description,
        url: "https://www.rfidsmartsystem.com/solutions/warehouse-automation",
        images: [{ url: warehouseContent.image }],
    },
    robots: { index: true, follow: true },
};

export default function WarehouseAutomationPage() {
    return (
        <SolutionPageTemplate
            title={warehouseContent.title}
            subtitle={warehouseContent.subtitle}
            description={warehouseContent.description}
            image={warehouseContent.image}
            benefits={warehouseContent.benefits}
            useCases={warehouseContent.useCases}
            howItWorks={warehouseContent.howItWorks}
        />
    );
}