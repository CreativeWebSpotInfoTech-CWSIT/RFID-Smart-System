import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Printer } from "lucide-react";

const products = [
    { title: "Industrial RFID Printers", desc: "Heavy-duty printers for high-volume label production with simultaneous printing and encoding.", icon: Printer, features: ["Thermal Transfer", "Direct Thermal", "High-speed", "Industrial duty"] },
    { title: "Desktop RFID Printers", desc: "Compact printers for office environments, small-scale encoding, and label verification.", icon: Printer, features: ["Compact design", "USB/Ethernet", "Easy setup", "Cost-effective"] },
    { title: "Mobile RFID Printers", desc: "Portable printers for on-the-go label printing in warehouse and field operations.", icon: Printer, features: ["Battery powered", "Bluetooth/WiFi", "Rugged build", "Lightweight"] },
];

export const metadata = { title: "RFID Printers | RFID Smart System", description: "Industrial RFID printers for high-volume encoding and printing." };

export default function PrintersPage() {
    return (
        <>
            <Navbar />
            <main className="bg-white">
                <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-red-50 pt-32 pb-20">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(249,115,22,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(249,115,22,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />
                    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <Link href="/products" className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-teal-700 mb-6">← Back to Products</Link>
                        <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/80 px-4 py-1.5 text-xs font-semibold text-orange-800 shadow-sm backdrop-blur-sm mb-6">
                            <span className="h-1.5 w-1.5 rounded-full bg-orange-600" />
                            RFID PRINTERS
                        </div>
                        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                            Print, Encode, <span className="text-orange-700">Automate</span>
                        </h1>
                        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
                            Industrial-grade RFID printers capable of simultaneous printing and encoding for high-volume operations.
                        </p>
                    </div>
                </section>

                <section className="py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid gap-8 md:grid-cols-3">
                            {products.map((item, i) => (
                                <div key={item.title} className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50">
                                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-orange-700 transition-transform duration-300 group-hover:scale-110">
                                        <item.icon size={28} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900">{item.title}</h3>
                                    <p className="mt-3 text-base leading-relaxed text-slate-600">{item.desc}</p>
                                    <div className="mt-6 space-y-2">
                                        {item.features.map((feature) => (
                                            <div key={feature} className="flex items-center gap-2 text-sm text-slate-700">
                                                <CheckCircle2 size={16} className="text-orange-600 shrink-0" />
                                                {feature}
                                            </div>
                                        ))}
                                    </div>
                                    <Link href="/contacts" className="mt-8 inline-flex items-center gap-2 rounded-full bg-orange-700 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-orange-700/20 transition-all hover:bg-orange-800 hover:shadow-lg">
                                        Request Quote <ArrowRight size={16} />
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="bg-gradient-to-br from-slate-900 to-orange-900 py-20">
                    <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-white sm:text-4xl">Need printer recommendations?</h2>
                        <p className="mt-4 text-lg text-slate-300">Compatible with Thermal Transfer and Direct Thermal labels.</p>
                        <Link href="/contacts" className="mt-8 inline-flex items-center gap-2 rounded-full bg-orange-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-orange-600/30 transition-all hover:bg-orange-500 hover:shadow-xl">
                            Talk to an Expert <ArrowRight size={18} />
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}