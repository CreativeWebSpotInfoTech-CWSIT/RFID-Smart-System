import { Tag, Radio, Wifi, Printer, Package, Award } from "lucide-react";

export const categories = [
    {
        title: "RFID Tags & Labels",
        desc: "UHF, On-Metal, Laundry, Vehicle, Cards & Custom tags engineered for every environment.",
        icon: Tag,
        href: "/products/tags-labels",
        color: "from-blue-600 to-blue-800",
    },
    {
        title: "RFID Readers",
        desc: "Fixed, Handheld & Desktop readers for accurate, high-speed data capture.",
        icon: Radio,
        href: "/products/readers",
        color: "from-indigo-600 to-indigo-800",
    },
    {
        title: "RFID Antennas",
        desc: "Circular & Linear polarized antennas for indoor, outdoor and long-range use.",
        icon: Wifi,
        href: "/products/antennas",
        color: "from-cyan-600 to-blue-700",
    },
    {
        title: "RFID Printers",
        desc: "Industrial printers for simultaneous printing and encoding at high volume.",
        icon: Printer,
        href: "/products/printers",
        color: "from-slate-600 to-slate-800",
    },
    {
        title: "Accessories",
        desc: "Encoders, mounting kits, cables, power supplies and industrial consumables.",
        icon: Package,
        href: "/products/accessories",
        color: "from-blue-700 to-slate-800",
    },
    {
        title: "Authorized Brands",
        desc: "Zebra, Impinj, Alien, Honeywell, Confidex, Xerafy and more.",
        icon: Award,
        href: "/products/brands",
        color: "from-blue-800 to-indigo-900",
    },
];