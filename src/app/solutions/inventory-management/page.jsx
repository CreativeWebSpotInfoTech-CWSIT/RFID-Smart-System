import SolutionPageTemplate from "@/src/features/solutions/components/SolutionPageTemplate";
import { inventoryContent } from "@/src/features/solutions/data";

export const metadata = {
  title: "Inventory Management Solution | RFID Smart System",
  description: inventoryContent.description,
  openGraph: {
    title: "Inventory Management Solution | RFID Smart System",
    description: inventoryContent.description,
    url: "https://www.rfidsmartsystem.com/solutions/inventory-management",
    images: [{ url: inventoryContent.image }],
  },
  robots: { index: true, follow: true },
};

export default function InventoryManagementPage() {
  return (
    <SolutionPageTemplate
      title={inventoryContent.title}
      subtitle={inventoryContent.subtitle}
      description={inventoryContent.description}
      image={inventoryContent.image}
      benefits={inventoryContent.benefits}
      useCases={inventoryContent.useCases}
      howItWorks={inventoryContent.howItWorks}
    />
  );
}