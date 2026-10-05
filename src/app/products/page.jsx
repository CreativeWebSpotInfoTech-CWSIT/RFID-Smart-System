import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Tag, Radio, Wifi, Printer, Package, Award, ArrowRight } from "lucide-react";

const categories = [
    { title: "RFID Tags & Labels", desc: "UHF, On-Metal, Laundry, Vehicle & Custom tags for every environment.", icon: Tag, href: "/products/tags-labels", color: "from-teal-500 to-teal-700" },
    { title: "RFID Readers", desc: "Fixed, Handheld & Desktop readers for seamless data capture.", icon: Radio, href: "/products/readers", color: "from-blue-500 to-blue-700" },
    { title: "RFID Antennas", desc: "Circular & Linear polarized antennas for indoor and outdoor use.", icon: Wifi, href: "/products/antennas", color: "from-purple-500 to-purple-700" },
    { title: "RFID Printers", desc: "Industrial-grade printers for high-volume encoding and printing.", icon: Printer, href: "/products/printers", color: "from-orange-500 to-orange-700" },
    { title: "Accessories", desc: "Encoders, mounting kits, cables, and power supplies.", icon: Package, href: "/products/accessories", color: "from-slate-500 to-slate-700" },
    { title: "Authorized Brands", desc: "Partnered with Zebra, Impinj, Alien, Honeywell & more.", icon: Award, href: "/products/brands", color: "from-emerald-500 to-emerald-700" },
];

export const metadata = {
    title: "Products | RFID Smart System",
    description: "Explore our comprehensive range of enterprise-grade RFID hardware, tags, readers, and accessories.",
};

export default function ProductsPage() {
    return (
        <>
            <Navbar />
            <main className="bg-white">
                {/* Hero Section */}
                <section className="relative overflow-hidden bg-gradient-to-br from-teal-50 via-white to-cyan-50 pt-32 pb-20">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(13,148,136,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(13,148,136,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />
                    <div className="pointer-events-none absolute inset-0">
                        <div className="absolute -left-32 top-20 h-[400px] w-[400px] rounded-full bg-teal-200/30 blur-[120px]" />
                        <div className="absolute -right-20 bottom-10 h-[300px] w-[300px] rounded-full bg-cyan-200/20 blur-[100px]" />
                    </div>

                    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                        <div className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white/80 px-4 py-1.5 text-xs font-semibold text-teal-800 shadow-sm backdrop-blur-sm mb-6">
                            <span className="h-1.5 w-1.5 rounded-full bg-teal-600" />
                            OUR PRODUCT PORTFOLIO
                        </div>
                        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                            Enterprise-Grade <span className="text-teal-700">RFID Hardware</span>
                        </h1>
                        <p className="mt-6 max-w-2xl mx-auto text-lg leading-relaxed text-slate-600">
                            From tags to readers, antennas to printers — we provide the complete RFID ecosystem engineered for reliability in the toughest environments.
                        </p>
                    </div>
                </section>

                {/* Categories Grid */}
                <section className="py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {categories.map((cat, i) => (
                                <Link key={cat.title} href={cat.href} className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-slate-200/50">
                                    <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${cat.color} text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                                        <cat.icon size={26} />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-700 transition-colors">{cat.title}</h3>
                                    <p className="mt-3 text-base leading-relaxed text-slate-600">{cat.desc}</p>
                                    <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-teal-700">
                                        Explore Category <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="bg-gradient-to-br from-slate-900 to-teal-900 py-20">
                    <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-white sm:text-4xl">Need help choosing the right products?</h2>
                        <p className="mt-4 text-lg text-slate-300">Our RFID experts will analyze your requirements and recommend the perfect solution.</p>
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