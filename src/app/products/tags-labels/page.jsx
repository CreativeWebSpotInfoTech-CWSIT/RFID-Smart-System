import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Tag, Shield, Droplets, Truck, CreditCard } from "lucide-react";

const products = [
    {
        title: "UHF RFID Labels",
        desc: "Ideal for Retail, Logistics, Warehousing, Supply Chain, and Inventory Management.",
        icon: Tag,
        features: ["High read range", "Custom printable", "Cost-effective", "Bulk production"],
    },
    {
        title: "On-Metal RFID Tags",
        desc: "Designed for Metal assets, Industrial equipment, Tool tracking, Oil & Gas, and Manufacturing.",
        icon: Shield,
        features: ["Metal-mount optimized", "Rugged ABS casing", "Long lifecycle", "IP68 rated"],
    },
    {
        title: "Laundry RFID Tags",
        desc: "Specially engineered for Hotels, Hospitals, Uniform Management, Textile Rental, and Industrial Laundry.",
        icon: Droplets,
        features: ["Waterproof", "Heat Resistant", "Chemical Resistant", "Washable (200+ cycles)"],
    },
    {
        title: "Windshield & Vehicle Tags",
        desc: "Designed for Parking Management, Toll Systems, Fleet Tracking, and Vehicle Identification.",
        icon: Truck,
        features: ["Tamper-evident", "Long-range UHF", "Easy installation", "Weather resistant"],
    },
    {
        title: "RFID Cards & Key Fobs",
        desc: "Applications include Access Control, Employee ID, Membership Cards, Hospitality, and Parking.",
        icon: CreditCard,
        features: ["LF/HF/UHF options", "Custom printing", "Durable PVC", "Multiple form factors"],
    },
];

export const metadata = {
    title: "RFID Tags & Labels | RFID Smart System",
    description: "High-performance UHF, On-Metal, Laundry, and Vehicle RFID tags engineered for diverse environments.",
};

export default function TagsLabelsPage() {
    return (
        <>
            <Navbar />
            <main className="bg-white">
                {/* Hero */}
                <section className="relative overflow-hidden bg-gradient-to-br from-teal-50 via-white to-cyan-50 pt-32 pb-20">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(13,148,136,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(13,148,136,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />
                    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <Link href="/products" className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-teal-700 mb-6">
                            ← Back to Products
                        </Link>
                        <div className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white/80 px-4 py-1.5 text-xs font-semibold text-teal-800 shadow-sm backdrop-blur-sm mb-6">
                            <span className="h-1.5 w-1.5 rounded-full bg-teal-600" />
                            RFID TAGS & LABELS
                        </div>
                        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                            Durable Tags for <span className="text-teal-700">Every Environment</span>
                        </h1>
                        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
                            From retail shelves to heavy industrial machinery — our RFID tags are engineered to perform reliably in the toughest conditions.
                        </p>
                    </div>
                </section>

                {/* Products Grid */}
                <section className="py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid gap-8 md:grid-cols-2">
                            {products.map((item, i) => (
                                <div key={item.title} className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50">
                                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-100 text-teal-700 transition-transform duration-300 group-hover:scale-110">
                                        <item.icon size={28} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900">{item.title}</h3>
                                    <p className="mt-3 text-base leading-relaxed text-slate-600">{item.desc}</p>
                                    <div className="mt-6 space-y-2">
                                        {item.features.map((feature) => (
                                            <div key={feature} className="flex items-center gap-2 text-sm text-slate-700">
                                                <CheckCircle2 size={16} className="text-teal-600 shrink-0" />
                                                {feature}
                                            </div>
                                        ))}
                                    </div>
                                    <Link href="/contacts" className="mt-8 inline-flex items-center gap-2 rounded-full bg-teal-700 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-teal-700/20 transition-all hover:bg-teal-800 hover:shadow-lg">
                                        Request Quote <ArrowRight size={16} />
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-gradient-to-br from-slate-900 to-teal-900 py-20">
                    <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-white sm:text-4xl">Not sure which tag is right for you?</h2>
                        <p className="mt-4 text-lg text-slate-300">Our RFID experts will analyze your environment and recommend the perfect solution.</p>
                        <Link href="/contacts" className="mt-8 inline-flex items-center gap-2 rounded-full bg-teal-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-teal-600/30 transition-all hover:bg-teal-500 hover:shadow-xl">
                            Talk to an Expert <ArrowRight size={18} />
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}