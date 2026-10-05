import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Wifi } from "lucide-react";

const products = [
    { title: "Circular Polarized Antennas", desc: "Ideal for applications where tag orientation varies — portals, retail, and general-purpose reading.", icon: Wifi, features: ["Wide coverage", "Orientation independent", "Indoor/Outdoor"] },
    { title: "Linear Polarized Antennas", desc: "Perfect for controlled environments where tag orientation is consistent — conveyor systems and fixed portals.", icon: Wifi, features: ["Longer range", "Directional", "High precision"] },
    { title: "Indoor Antennas", desc: "Optimized for warehouse, retail, and office environments with aesthetic and performance balance.", icon: Wifi, features: ["Compact design", "Ceiling mount", "Low profile"] },
    { title: "Outdoor Antennas", desc: "Weather-sealed antennas for dock doors, parking, and outdoor asset tracking applications.", icon: Wifi, features: ["IP67 rated", "UV resistant", "Wide temperature range"] },
    { title: "Long Range Antennas", desc: "High-gain antennas for extended read range up to 12+ meters for vehicle and large area tracking.", icon: Wifi, features: ["12m+ range", "High gain", "Directional beam"] },
    { title: "Near Field Antennas", desc: "Precision antennas for item-level identification, library systems, and close-proximity applications.", icon: Wifi, features: ["Short range", "High precision", "Low interference"] },
];

export const metadata = { title: "RFID Antennas | RFID Smart System", description: "Circular and linear polarized RFID antennas for indoor and outdoor applications." };

export default function AntennasPage() {
    return (
        <>
            <Navbar />
            <main className="bg-white">
                <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-pink-50 pt-32 pb-20">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />
                    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <Link href="/products" className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-teal-700 mb-6">← Back to Products</Link>
                        <div className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white/80 px-4 py-1.5 text-xs font-semibold text-purple-800 shadow-sm backdrop-blur-sm mb-6">
                            <span className="h-1.5 w-1.5 rounded-full bg-purple-600" />
                            RFID ANTENNAS
                        </div>
                        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                            Precision <span className="text-purple-700">RFID Antennas</span>
                        </h1>
                        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
                            Circular and linear polarized antennas engineered for maximum read performance in any environment.
                        </p>
                    </div>
                </section>

                <section className="py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {products.map((item, i) => (
                                <div key={item.title} className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50">
                                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-100 text-purple-700 transition-transform duration-300 group-hover:scale-110">
                                        <item.icon size={28} />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                                    <p className="mt-3 text-base leading-relaxed text-slate-600">{item.desc}</p>
                                    <div className="mt-6 space-y-2">
                                        {item.features.map((feature) => (
                                            <div key={feature} className="flex items-center gap-2 text-sm text-slate-700">
                                                <CheckCircle2 size={16} className="text-purple-600 shrink-0" />
                                                {feature}
                                            </div>
                                        ))}
                                    </div>
                                    <Link href="/contacts" className="mt-8 inline-flex items-center gap-2 rounded-full bg-purple-700 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-purple-700/20 transition-all hover:bg-purple-800 hover:shadow-lg">
                                        Request Quote <ArrowRight size={16} />
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="bg-gradient-to-br from-slate-900 to-purple-900 py-20">
                    <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-white sm:text-4xl">Need antenna consultation?</h2>
                        <p className="mt-4 text-lg text-slate-300">We'll help you choose the right polarization and gain for your setup.</p>
                        <Link href="/contacts" className="mt-8 inline-flex items-center gap-2 rounded-full bg-purple-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-purple-600/30 transition-all hover:bg-purple-500 hover:shadow-xl">
                            Talk to an Expert <ArrowRight size={18} />
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}