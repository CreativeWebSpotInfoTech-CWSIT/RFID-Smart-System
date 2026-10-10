import { Radio, Cpu, Layers } from "lucide-react";

export const cardsData = [
    {
        id: "products",
        title: "Our RFID Products",
        desc: "Industrial-grade RFID readers, antennas, tags and printers engineered for high accuracy, long range and reliable performance in any environment.",
        extraDesc:
            "\"Best Performance RFID Long Range Reader – Compact & Powerful\". The Fixed RFID Reader uses Advanced RFID Technology for Faster & Accurate Read Rates. Hence, it delivers more Reliable & Consistent Performance even in challenging environments. These Long Range Readers are paired with a more flexible Linux-based network architecture. As a result, the fixed RFID reader delivers Peak Performance at all the times with excellent Read Range and better collision avoidance.",
        image: "/images/rfid-products.jpeg",
        imageAlt: "Industrial RFID Products - Readers, Antennas, and Tags",
        icon: Radio,
        iconColor: "text-blue-700",
        features: [
            "Fixed, Handheld & Desktop Readers",
            "Circular & Linear Polarized Antennas",
            "UHF, On-Metal, Laundry & Vehicle Tags",
            "Industrial Thermal RFID Printers",
        ],
        href: "/products",
    },
    {
        id: "innovations",
        title: "Our Innovations",
        desc: "Advanced solutions including RFID self-checkout systems, autonomous mobile robots (AMR) and intelligent tracking platforms for modern industries.",
        extraDesc:
            "Whether you need rugged tags for industrial environments, tamper-evident tags for supply chain security, or discreet tags for retail applications, we have you covered with everything through custom made applications. Our Waveconnect.ai platform brings AI-driven insights to RFID data, enabling predictive analytics, automated decision-making and real-time operational intelligence for businesses across sectors.",
        image: "/images/rfid-innovations.jpeg",
        imageAlt: "RFID Innovations - AMR and AI Tracking Platforms",
        icon: Cpu,
        iconColor: "text-cyan-700",
        features: [
            "RFID Self-Checkout Systems",
            "Autonomous Mobile Robots (AMR)",
            "AI-Powered Analytics Platform",
            "Custom Application Development",
        ],
        href: "/solutions",
    },
    {
        id: "solutions",
        title: "Our Solutions",
        desc: "Complete end-to-end RFID implementations — from system design and hardware supply to seamless integration with your existing software.",
        extraDesc:
            "Our experienced team of RFID experts will work closely with you to design, develop, and implement RFID systems that seamlessly integrate into your existing infrastructure, solving your most complex challenges. We serve diverse industries including manufacturing, retail, healthcare, logistics, automotive, aerospace and government sectors with tailored solutions that deliver measurable ROI.",
        image: "/images/rfid-solutions.jpeg",
        imageAlt: "Enterprise RFID Solutions for Diverse Industries",
        icon: Layers,
        iconColor: "text-blue-800",
        features: [
            "Asset Tracking & Management",
            "Inventory & Warehouse Automation",
            "Access Control & Vehicle Management",
            "Laundry & Tool Tracking Systems",
        ],
        href: "/solutions",
    },
];