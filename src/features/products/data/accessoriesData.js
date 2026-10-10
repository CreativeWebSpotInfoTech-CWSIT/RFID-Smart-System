import { Package, Cable, Plug, Box } from "lucide-react";

export const accessoriesProducts = [
    {
        title: "RFID Encoders",
        desc: "Desktop and industrial encoders for high-speed tag programming and verification.",
        icon: Package,
        image: "/images/products/encoder.jpeg",
        features: ["High-speed encoding", "Verification", "Multiple protocols"],
    },
    {
        title: "Mounting Kits",
        desc: "Professional mounting solutions for readers, antennas and fixed installations.",
        icon: Package,
        image: "/images/products/mounting-kits.jpeg",
        features: ["Adjustable brackets", "Stainless steel", "Weather-proof"],
    },
    {
        title: "Cables & Connectors",
        desc: "High-quality RFID cables, antenna cables and connector accessories.",
        icon: Cable,
        image: "/images/products/cables.jpeg",
        features: ["Low-loss cables", "SMA connectors", "Various lengths"],
    },
    {
        title: "Power Supplies",
        desc: "Reliable power solutions for fixed readers and industrial RFID equipment.",
        icon: Plug,
        image: "/images/products/power-supplies.jpeg",
        features: ["PoE injectors", "AC adapters", "UPS compatible"],
    },
    {
        title: "Resin Ribbons",
        desc: "Premium resin and wax-resin ribbons for durable thermal transfer printing.",
        icon: Package,
        image: "/images/products/resin-ribbons.jpeg",
        features: ["Resin ribbons", "Wax-resin", "Various widths"],
    },
    {
        title: "Labels & Consumables",
        desc: "Blank RFID labels, tags and consumables for continuous operations.",
        icon: Box,
        image: "/images/products/labels-consumables.jpeg",
        features: ["Various sizes", "Custom printing", "Bulk orders"],
    },
];