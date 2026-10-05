import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Radio, Smartphone, Monitor } from "lucide-react";

const products = [
    {
        title: "Fixed RFID Readers",
        desc: "Ideal for Warehouse Portals, Conveyor Systems, Dock Doors, and Automated Checkpoints.",
        icon: Radio,
        features: ["Multi-antenna support", "High read range", "PoE capable", "Industrial grade"],
    },
    {
        title: "Handheld RFID Readers",
        desc: "Android-based mobile readers for Inventory Audits, Stock Verification, Asset Tracking, and Cycle Counting.",
        icon: Smartphone,
        features: ["Android OS", "Long battery life", "Rugged design", "Built-in barcode"],
    },
    {
        title: "Desktop RFID Readers",
        desc: "Suitable for Encoding, Testing, Healthcare, Library Management, and Laboratory Applications.",
        icon: Monitor,
        features: ["USB connectivity", "Compact design", "High precision", "SDK included"],
    },
];

export const metadata = {
    title: "RFID Readers | RFID Smart System",
    description: "Fixed, handheld, and desktop RFID readers for every industrial application.",
};

export default function ReadersPage() {
    return (
        <>
            <Navbar />
            <main className="bg-white">
                <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50 pt-32 pb-20">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />
                    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <Link href="/products" className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-teal-700 mb-6">← Back to Products</Link>
                        <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-1.5 text-xs font-semibold text-blue-800 shadow-sm backdrop-blur-sm mb-6">
                            <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                            RFID READERS
                        </div>
                        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                            Intelligent <span className="text-blue-700">Data Capture</span> Devices
                        </h1>
                        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
                            From fixed portal readers to rugged handhelds — capture RFID data accurately in any environment.
                        </p>
                    </div>
                </section>

                <section className="py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid gap-8 md:grid-cols-3">
                            {products.map((item, i) => (
                                <div key={item.title} className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50">
                                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-700 transition-transform duration-300 group-hover:scale-110">
                                        <item.icon size={28} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900">{item.title}</h3>
                                    <p className="mt-3 text-base leading-relaxed text-slate-600">{item.desc}</p>
                                    <div className="mt-6 space-y-2">
                                        {item.features.map((feature) => (
                                            <div key={feature} className="flex items-center gap-2 text-sm text-slate-700">
                                                <CheckCircle2 size={16} className="text-blue-600 shrink-0" />
                                                {feature}
                                            </div>
                                        ))}
                                    </div>
                                    <Link href="/contacts" className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-blue-700/20 transition-all hover:bg-blue-800 hover:shadow-lg">
                                        Request Quote <ArrowRight size={16} />
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="bg-gradient-to-br from-slate-900 to-blue-900 py-20">
                    <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-white sm:text-4xl">Need a reader recommendation?</h2>
                        <p className="mt-4 text-lg text-slate-300">Tell us your use case and we'll suggest the perfect reader.</p>
                        <Link href="/contacts" className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-600/30 transition-all hover:bg-blue-500 hover:shadow-xl">
                            Talk to an Expert <ArrowRight size={18} />
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}