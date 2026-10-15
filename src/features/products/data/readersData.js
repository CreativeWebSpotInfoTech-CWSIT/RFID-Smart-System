import { Radio, Smartphone, Monitor } from "lucide-react";

export const readersProducts = [
    {
        title: "Fixed RFID Readers",
        desc: "Ideal for warehouse portals, conveyor systems, dock doors and automated checkpoints. Multi-antenna support with industrial-grade reliability.",
        icon: Radio,
        image: "/images/products/rfid-fixed-readers.png",
        features: ["Multi-antenna support", "High read range", "PoE capable", "Industrial grade"],
        idealFor: ["Warehouse portals", "Conveyor systems", "Dock doors", "Automated checkpoints"],
    },
    {
        title: "Handheld RFID Readers",
        desc: "Android-based mobile readers for inventory audits, stock verification, asset tracking and cycle counting in the field.",
        icon: Smartphone,
        image: "/images/products/rfid-handheld-readers.png",
        features: ["Android OS", "Long battery life", "Rugged design", "Built-in barcode"],
        idealFor: ["Inventory audits", "Stock verification", "Asset tracking", "Cycle counting"],
    },
    {
        title: "Desktop RFID Readers",
        desc: "Suitable for encoding, testing, healthcare, library management and laboratory applications where precision matters.",
        icon: Monitor,
        image: "/images/products/rfid-desktop-readers.png",
        features: ["USB connectivity", "Compact design", "High precision", "SDK included"],
        idealFor: ["Encoding", "Testing", "Healthcare", "Library", "Laboratory"],
    },
];