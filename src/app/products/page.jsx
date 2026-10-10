import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/src/shared/components/Navbar";
import Footer from "@/src/shared/components/Footer";
import { categories } from "@/src/features/products/data";

export const metadata = {
    title: "Products | RFID Smart System",
    description:
        "Explore enterprise-grade RFID tags, readers, antennas, printers and accessories. Complete RFID hardware portfolio for industrial and commercial applications.",
    keywords: [
        "RFID products",
        "RFID tags",
        "RFID readers",
        "RFID antennas",
        "RFID printers",
        "RFID Smart System",
    ],
    openGraph: {
        title: "Products | RFID Smart System",
        description:
            "Complete RFID hardware portfolio — tags, readers, antennas, printers and accessories.",
        url: "https://www.rfidsmartsystem.com/products",
        siteName: "RFID Smart System",
        type: "website",
    },
    robots: { index: true, follow: true },
};

export default function ProductsPage() {
    return (
        <>
            <Navbar />
            <main className="bg-white">
                {/* Hero */}
                <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-32 pb-14">
                    <div
                        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(30,58,95,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(30,58,95,0.04)_1px,transparent_1px)] bg-[size:40px_40px]"
                        aria-hidden="true"
                    />
                    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
                        <div className="absolute -left-32 top-20 h-[400px] w-[400px] rounded-full bg-blue-200/30 blur-[120px]" />
                        <div className="absolute -right-20 bottom-10 h-[300px] w-[300px] rounded-full bg-indigo-200/20 blur-[100px]" />
                    </div>

                    <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-1.5 text-xs font-semibold text-blue-900 shadow-sm backdrop-blur-sm">
                            <span className="h-1.5 w-1.5 rounded-full bg-blue-900" aria-hidden="true" />
                            OUR PRODUCT PORTFOLIO
                        </div>
                        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                            Enterprise-Grade{" "}
                            <span className="text-gradient-navy">RFID Hardware</span>
                        </h1>
                        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
                            From tags to readers, antennas to printers — we provide the
                            complete RFID ecosystem engineered for reliability in the toughest
                            environments.
                        </p>
                    </div>
                </section>

                {/* Categories */}
                <section className="py-14 sm:py-16">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {categories.map((cat) => (
                                <Link
                                    key={cat.title}
                                    href={cat.href}
                                    className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/40"
                                >
                                    <div
                                        className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${cat.color} text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}
                                    >
                                        <cat.icon size={22} aria-hidden="true" />
                                    </div>
                                    <h2 className="text-lg font-bold text-slate-900 transition-colors group-hover:text-blue-900">
                                        {cat.title}
                                    </h2>
                                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                                        {cat.desc}
                                    </p>
                                    <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-blue-900">
                                        Explore Category
                                        <ArrowRight
                                            size={15}
                                            className="transition-transform group-hover:translate-x-1"
                                        />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-slate-900 py-14 sm:py-16">
                    <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
                        <h2 className="text-2xl font-bold text-white sm:text-3xl">
                            Need help choosing the right products?
                        </h2>
                        <p className="mt-3 text-base text-slate-400">
                            Our RFID experts will analyze your requirements and recommend the
                            perfect solution.
                        </p>
                        <Link
                            href="/contacts"
                            className="btn-shimmer mt-6 inline-flex items-center gap-2 rounded-full bg-blue-900 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-900/30 transition-all hover:bg-blue-800 hover:shadow-xl"
                        >
                            Talk to an Expert
                            <ArrowRight size={16} />
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}