import SolutionPageTemplate from "@/src/features/solutions/components/SolutionPageTemplate";
import { vehicleContent } from "@/src/features/solutions/data";

export const metadata = {
    title: "Vehicle Management Solution | RFID Smart System",
    description: vehicleContent.description,
    openGraph: {
        title: "Vehicle Management Solution | RFID Smart System",
        description: vehicleContent.description,
        url: "https://www.rfidsmartsystem.com/solutions/vehicle-management",
        images: [{ url: vehicleContent.image }],
    },
    robots: { index: true, follow: true },
};

export default function VehicleManagementPage() {
    return (
        <SolutionPageTemplate
            title={vehicleContent.title}
            subtitle={vehicleContent.subtitle}
            description={vehicleContent.description}
            image={vehicleContent.image}
            benefits={vehicleContent.benefits}
            useCases={vehicleContent.useCases}
            howItWorks={vehicleContent.howItWorks}
        />
    );
}