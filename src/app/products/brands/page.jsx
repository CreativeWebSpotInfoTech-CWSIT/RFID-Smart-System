import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Award, ShieldCheck } from "lucide-react";

const brands = [
    { name: "Zebra Technologies", category: "RFID Printers, Fixed & Handheld Readers, Mobile Computers" },
    { name: "Impinj", category: "UHF RFID Reader Chips, Reader ICs, Gateway Readers" },
    { name: "Alien Technology", category: "UHF RFID Tags, Readers & Inlays" },
    { name: "Honeywell", category: "Industrial Handheld Readers & Mobile Computers" },
    { name: "Datalogic", category: "Fixed Readers, Industrial Scanners" },
    { name: "Avery Dennison", category: "RFID Inlays, Smart Labels" },
    { name: "Confidex", category: "On-Metal Tags, Industrial & Laundry Tags" },
    { name: "Xerafy", category: "Miniature & Heavy-Duty Metal-Mount Tags" },
    { name: "TSC / Godex", category: "Industrial Thermal & RFID Label Printers" },
    { name: "CipherLab", category: "Handheld RFID & Barcode Terminals" },
];

export const metadata = { title: "Authorized Brands | RFID Smart System", description: "Authorized reseller for Zebra, Impinj, Alien, Honeywell and other leading RFID brands." };

export default function BrandsPage() {
    return (
        <>
            <Navbar />
            <main className="bg-white">
                <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-teal-50 pt-32 pb-20">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />
                    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <Link href="/products" className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-teal-700 mb-6">← Back to Products</Link>
                        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-4 py-1.5 text-xs font-semibold text-emerald-800 shadow-sm backdrop-blur-sm mb-6">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                            AUTHORIZED PARTNERS
                        </div>
                        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                            Trusted <span className="text-emerald-700">Global Brands</span>
                        </h1>
                        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
                            We operate as an authorized reseller and channel partner for globally recognized RFID and Auto-ID brands — delivering genuine, warranty-backed hardware with manufacturer-certified expertise.
                        </p>
                    </div>
                </section>

                {/* Trust Badges */}
                <section className="py-16 border-b border-slate-200">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid gap-6 md:grid-cols-3">
                            <div className="flex items-start gap-4 p-6 rounded-2xl bg-emerald-50/50 border border-emerald-100">
                                <ShieldCheck className="h-10 w-10 text-emerald-700 shrink-0" />
                                <div>
                                    <h3 className="font-bold text-slate-900">Genuine Products</h3>
                                    <p className="mt-1 text-sm text-slate-600">100% authentic, warranty-backed hardware from authorized sources.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-6 rounded-2xl bg-emerald-50/50 border border-emerald-100">
                                <Award className="h-10 w-10 text-emerald-700 shrink-0" />
                                <div>
                                    <h3 className="font-bold text-slate-900">Certified Expertise</h3>
                                    <p className="mt-1 text-sm text-slate-600">Manufacturer-certified technical team for optimal recommendations.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-6 rounded-2xl bg-emerald-50/50 border border-emerald-100">
                                <CheckCircle2 className="h-10 w-10 text-emerald-700 shrink-0" />
                                <div>
                                    <h3 className="font-bold text-slate-900">Brand-Agnostic</h3>
                                    <p className="mt-1 text-sm text-slate-600">We recommend the best-fit solution, not just one brand.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Brands List */}
                <section className="py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid gap-4 md:grid-cols-2">
                            {brands.map((brand, i) => (
                                <div key={brand.name} className="group flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-emerald-200 hover:shadow-md">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                                        <Award size={22} />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">{brand.name}</h3>
                                        <p className="mt-1 text-sm text-slate-600">{brand.category}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p className="mt-8 text-center text-sm text-slate-500 italic">
                            Note: Brand availability may vary by product category and region. Contact us for current partnership status and official pricing.
                        </p>
                    </div>
                </section>

                <section className="bg-gradient-to-br from-slate-900 to-emerald-900 py-20">
                    <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-white sm:text-4xl">Need official pricing or datasheets?</h2>
                        <p className="mt-4 text-lg text-slate-300">Our team can confirm current partnership status and provide detailed specifications.</p>
                        <Link href="/contacts" className="mt-8 inline-flex items-center gap-2 rounded-full bg-emerald-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-emerald-600/30 transition-all hover:bg-emerald-500 hover:shadow-xl">
                            Request Information <ArrowRight size={18} />
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}