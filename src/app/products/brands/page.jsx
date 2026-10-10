import Link from "next/link";
import { ArrowRight, Award, ShieldCheck, CheckCircle2 } from "lucide-react";
import Navbar from "@/src/shared/components/Navbar";
import Footer from "@/src/shared/components/Footer";
import { brands } from "@/src/features/products/data";

export const metadata = {
    title: "Authorized Brands | RFID Smart System",
    description:
        "Authorized reseller for Zebra, Impinj, Alien, Honeywell, Confidex, Xerafy and other leading RFID brands.",
};

export default function BrandsPage() {
    return (
        <>
            <Navbar />
            <main className="bg-white">
                <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-32 pb-14">
                    <div
                        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(30,58,95,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(30,58,95,0.04)_1px,transparent_1px)] bg-[size:40px_40px]"
                        aria-hidden="true"
                    />
                    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <Link
                            href="/products"
                            className="mb-5 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-blue-900"
                        >
                            ← Back to Products
                        </Link>
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-1.5 text-xs font-semibold text-blue-900 shadow-sm backdrop-blur-sm">
                            <span className="h-1.5 w-1.5 rounded-full bg-blue-900" aria-hidden="true" />
                            AUTHORIZED PARTNERS
                        </div>
                        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                            Trusted{" "}
                            <span className="text-gradient-navy">Global Brands</span>
                        </h1>
                        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
                            We operate as an authorized reseller and channel partner for
                            globally recognized RFID and Auto-ID brands — delivering genuine,
                            warranty-backed hardware with manufacturer-certified expertise.
                        </p>
                    </div>
                </section>

                {/* Trust Badges */}
                <section className="border-b border-slate-200 py-10">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid gap-5 md:grid-cols-3">
                            <div className="flex items-start gap-4 rounded-2xl border border-blue-100 bg-blue-50/50 p-5">
                                <ShieldCheck className="h-9 w-9 shrink-0 text-blue-900" />
                                <div>
                                    <h3 className="font-bold text-slate-900">Genuine Products</h3>
                                    <p className="mt-1 text-sm text-slate-600">
                                        100% authentic, warranty-backed hardware from authorized
                                        sources.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 rounded-2xl border border-blue-100 bg-blue-50/50 p-5">
                                <Award className="h-9 w-9 shrink-0 text-blue-900" />
                                <div>
                                    <h3 className="font-bold text-slate-900">
                                        Certified Expertise
                                    </h3>
                                    <p className="mt-1 text-sm text-slate-600">
                                        Manufacturer-certified technical team for optimal
                                        recommendations.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 rounded-2xl border border-blue-100 bg-blue-50/50 p-5">
                                <CheckCircle2 className="h-9 w-9 shrink-0 text-blue-900" />
                                <div>
                                    <h3 className="font-bold text-slate-900">Brand-Agnostic</h3>
                                    <p className="mt-1 text-sm text-slate-600">
                                        We recommend the best-fit solution, not just one brand.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Brands List */}
                <section className="py-14 sm:py-16">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid gap-4 md:grid-cols-2">
                            {brands.map((brand) => (
                                <div
                                    key={brand.name}
                                    className="group flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:border-blue-200 hover:shadow-md"
                                >
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-900">
                                        <Award size={20} aria-hidden="true" />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <h3 className="text-base font-bold text-slate-900 transition-colors group-hover:text-blue-900">
                                            {brand.name}
                                        </h3>
                                        <p className="mt-1 text-sm text-slate-600">
                                            {brand.category}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p className="mt-8 text-center text-sm italic text-slate-500">
                            Note: Brand availability may vary by product category and region.
                            Contact us for current partnership status and official pricing.
                        </p>
                    </div>
                </section>

                <section className="bg-slate-900 py-14 sm:py-16">
                    <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
                        <h2 className="text-2xl font-bold text-white sm:text-3xl">
                            Need official pricing or datasheets?
                        </h2>
                        <p className="mt-3 text-base text-slate-400">
                            Our team can confirm current partnership status and provide
                            detailed specifications.
                        </p>
                        <Link
                            href="/contacts"
                            className="btn-shimmer mt-6 inline-flex items-center gap-2 rounded-full bg-blue-900 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-900/30 transition-all hover:bg-blue-800 hover:shadow-xl"
                        >
                            Request Information
                            <ArrowRight size={16} />
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}