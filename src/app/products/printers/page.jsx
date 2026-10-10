import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Navbar from "@/src/shared/components/Navbar";
import Footer from "@/src/shared/components/Footer";
import { printersProducts } from "@/src/features/products/data";

export const metadata = {
    title: "RFID Printers | RFID Smart System",
    description: "Industrial, desktop and mobile RFID printers for print and encode.",
};

export default function PrintersPage() {
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
                            Print, Encode, <span className="text-gradient-navy">Automate</span>
                        </h1>
                        <p className="mt-4 max-w-xl text-base text-slate-600">
                            Simultaneous printing and encoding for high-volume operations.
                        </p>
                    </div>
                </section>

                <section className="pb-16">
                    <div className="mx-auto max-w-5xl space-y-6 px-4 sm:px-6 lg:px-8">
                        {printersProducts.map((item, i) => (
                            <article
                                key={item.title}
                                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition hover:shadow-lg sm:flex-row"
                            >
                                <div className="relative aspect-[16/10] w-full shrink-0 sm:aspect-auto sm:w-72 sm:min-h-[200px]">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition duration-500 group-hover:scale-105"
                                        sizes="(max-width: 640px) 100vw, 288px"
                                        priority={i === 0}
                                        quality={80}
                                    />
                                </div>
                                <div className="flex flex-1 flex-col justify-center p-6">
                                    <h2 className="text-xl font-bold text-slate-900">{item.title}</h2>
                                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.desc}</p>
                                    <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1">
                                        {item.features.map((f) => (
                                            <span key={f} className="flex items-center gap-1.5 text-sm text-slate-700">
                                                <CheckCircle2 size={13} className="text-blue-700" />
                                                {f}
                                            </span>
                                        ))}
                                    </div>
                                    <Link
                                        href="/contacts"
                                        className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-blue-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-800"
                                    >
                                        Request Quote <ArrowRight size={14} />
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="bg-slate-900 py-14">
                    <div className="mx-auto max-w-3xl px-4 text-center">
                        <h2 className="text-2xl font-bold text-white">Need printer recommendations?</h2>
                        <p className="mt-2 text-slate-400">Thermal Transfer & Direct Thermal compatible.</p>
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