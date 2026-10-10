import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Navbar from "@/src/shared/components/Navbar";
import Footer from "@/src/shared/components/Footer";
import { accessoriesProducts } from "@/src/features/products/data";

export const metadata = {
    title: "RFID Accessories | RFID Smart System",
    description: "Encoders, mounting kits, cables, power supplies and consumables.",
};

export default function AccessoriesPage() {
    return (
        <>
            <Navbar />
            <main className="bg-white">
                <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-32 pb-12">
                    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <Link href="/products" className="mb-4 inline-flex text-sm font-medium text-slate-500 hover:text-blue-900">
                            ← Back to Products
                        </Link>
                        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                            Complete Your <span className="text-gradient-navy">RFID Setup</span>
                        </h1>
                        <p className="mt-4 max-w-xl text-base text-slate-600">
                            Encoders, kits, cables, power and consumables for full deployments.
                        </p>
                    </div>
                </section>

                <section className="pb-16">
                    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                        <div className="divide-y divide-slate-100 rounded-2xl border border-slate-100 bg-white">
                            {accessoriesProducts.map((item, i) => (
                                <div
                                    key={item.title}
                                    className="flex flex-col gap-4 p-5 transition hover:bg-slate-50/80 sm:flex-row sm:items-center sm:gap-6"
                                >
                                    <div className="relative h-20 w-full shrink-0 overflow-hidden rounded-xl bg-slate-100 sm:h-24 sm:w-32">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover"
                                            sizes="128px"
                                            loading={i < 3 ? "eager" : "lazy"}
                                            quality={75}
                                        />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <h2 className="font-bold text-slate-900">{item.title}</h2>
                                        <p className="mt-1 text-sm text-slate-600">{item.desc}</p>
                                        <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
                                            {item.features.map((f) => (
                                                <span key={f} className="flex items-center gap-1 text-xs text-slate-500">
                                                    <CheckCircle2 size={11} className="text-blue-700" />
                                                    {f}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <Link
                                        href="/contacts"
                                        className="shrink-0 text-sm font-semibold text-blue-900 hover:underline sm:text-right"
                                    >
                                        Quote →
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="bg-slate-900 py-14">
                    <div className="mx-auto max-w-3xl px-4 text-center">
                        <h2 className="text-2xl font-bold text-white">Looking for specific accessories?</h2>
                        <p className="mt-2 text-slate-400">We stock industrial RFID accessories.</p>
                        <Link href="/contacts" className="mt-5 inline-flex items-center gap-2 rounded-full bg-blue-900 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-800">
                            Talk to an Expert <ArrowRight size={14} />
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}