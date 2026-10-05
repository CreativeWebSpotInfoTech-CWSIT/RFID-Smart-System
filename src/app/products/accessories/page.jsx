import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Package, Cable, Plug, Box } from "lucide-react";

const products = [
    { title: "RFID Encoders", desc: "Desktop and industrial encoders for high-speed tag programming and verification.", icon: Package, features: ["High-speed encoding", "Verification", "Multiple protocols"] },
    { title: "Mounting Kits", desc: "Professional mounting solutions for readers, antennas, and fixed installations.", icon: Package, features: ["Adjustable brackets", "Stainless steel", "Weather-proof"] },
    { title: "Cables & Connectors", desc: "High-quality RFID cables, antenna cables, and connector accessories.", icon: Cable, features: ["Low-loss cables", "SMA connectors", "Various lengths"] },
    { title: "Power Supplies", desc: "Reliable power solutions for fixed readers and industrial RFID equipment.", icon: Plug, features: ["PoE injectors", "AC adapters", "UPS compatible"] },
    { title: "Resin Ribbons", desc: "Premium resin and wax-resin ribbons for durable thermal transfer printing.", icon: Package, features: ["Resin ribbons", "Wax-resin", "Various widths"] },
    { title: "Labels & Tags", desc: "Blank RFID labels, tags, and consumables for continuous operations.", icon: Box, features: ["Various sizes", "Custom printing", "Bulk orders"] },
];

export const metadata = { title: "RFID Accessories | RFID Smart System", description: "RFID encoders, mounting kits, cables, power supplies, and industrial accessories." };

export default function AccessoriesPage() {
    return (
        <>
            <Navbar />
            <main className="bg-white">
                <section className="relative overflow-hidden bg-gradient-to-br from-slate-100 via-white to-slate-50 pt-32 pb-20">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(100,116,139,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(100,116,139,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />
                    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <Link href="/products" className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-teal-700 mb-6">← Back to Products</Link>
                        <div className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/80 px-4 py-1.5 text-xs font-semibold text-slate-800 shadow-sm backdrop-blur-sm mb-6">
                            <span className="h-1.5 w-1.5 rounded-full bg-slate-600" />
                            RFID ACCESSORIES
                        </div>
                        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                            Complete Your <span className="text-slate-700">RFID Setup</span>
                        </h1>
                        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
                            Everything you need to deploy, maintain, and scale your RFID infrastructure.
                        </p>
                    </div>
                </section>

                <section className="py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {products.map((item, i) => (
                                <div key={item.title} className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50">
                                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-700 transition-transform duration-300 group-hover:scale-110">
                                        <item.icon size={28} />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                                    <p className="mt-3 text-base leading-relaxed text-slate-600">{item.desc}</p>
                                    <div className="mt-6 space-y-2">
                                        {item.features.map((feature) => (
                                            <div key={feature} className="flex items-center gap-2 text-sm text-slate-700">
                                                <CheckCircle2 size={16} className="text-slate-600 shrink-0" />
                                                {feature}
                                            </div>
                                        ))}
                                    </div>
                                    <Link href="/contacts" className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-700 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-slate-700/20 transition-all hover:bg-slate-800 hover:shadow-lg">
                                        Request Quote <ArrowRight size={16} />
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-20">
                    <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-white sm:text-4xl">Looking for specific accessories?</h2>
                        <p className="mt-4 text-lg text-slate-300">We stock a wide range of industrial RFID accessories.</p>
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