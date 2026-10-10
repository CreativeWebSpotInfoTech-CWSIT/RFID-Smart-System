import { Tag, Shield, Droplets, Truck, CreditCard, Box } from "lucide-react";

export const tagsProducts = [
    {
        title: "UHF RFID Labels",
        desc: "Ideal for Retail, Logistics, Warehousing, Supply Chain and Inventory Management. High read range with custom printable options for bulk production.",
        icon: Tag,
        image: "/images/products/uhf-labels.jpeg",
        features: ["High read range", "Custom printable", "Cost-effective", "Bulk production"],
        idealFor: ["Retail", "Logistics", "Warehousing", "Supply Chain", "Inventory Management"],
    },
    {
        title: "On-Metal RFID Tags",
        desc: "Designed for metal assets, industrial equipment, tool tracking, Oil & Gas and manufacturing environments where standard tags fail.",
        icon: Shield,
        image: "/images/products/on-metal-tags.jpeg",
        features: ["Metal-mount optimized", "Rugged ABS casing", "Long lifecycle", "IP68 rated"],
        idealFor: ["Metal assets", "Industrial equipment", "Tool tracking", "Oil & Gas", "Manufacturing"],
    },
    {
        title: "Industrial Hard Tags",
        desc: "Suitable for heavy machinery, containers, Returnable Transport Items (RTI) and permanent asset identification in harsh conditions.",
        icon: Box,
        image: "/images/products/industrial-hard-tags.jpeg",
        features: ["Heavy-duty housing", "Impact resistant", "Long-range UHF", "Permanent ID"],
        idealFor: ["Heavy machinery", "Containers", "RTI", "Asset identification"],
    },
    {
        title: "Laundry RFID Tags",
        desc: "Specially engineered for hotels, hospitals, uniform management, textile rental and industrial laundry — waterproof, heat and chemical resistant.",
        icon: Droplets,
        image: "/images/products/laundry-tags.jpeg",
        features: ["Waterproof", "Heat resistant", "Chemical resistant", "200+ wash cycles"],
        idealFor: ["Hotels", "Hospitals", "Uniform management", "Textile rental", "Industrial laundry"],
    },
    {
        title: "Windshield & Vehicle Tags",
        desc: "Designed for parking management, toll systems, fleet tracking and vehicle identification with tamper-evident options.",
        icon: Truck,
        image: "/images/products/vehicle-tags.jpeg",
        features: ["Tamper-evident", "Long-range UHF", "Easy installation", "Weather resistant"],
        idealFor: ["Parking", "Toll systems", "Fleet tracking", "Vehicle ID"],
    },
    {
        title: "RFID Cards & Key Fobs",
        desc: "Applications include access control, employee ID, membership cards, hospitality and parking — available in LF, HF and UHF.",
        icon: CreditCard,
        image: "/images/products/rfid-cards.jpeg",
        features: ["LF / HF / UHF options", "Custom printing", "Durable PVC", "Multiple form factors"],
        idealFor: ["Access control", "Employee ID", "Membership", "Hospitality", "Parking"],
    },
];