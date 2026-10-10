import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Navbar from "@/src/shared/components/Navbar";
import Footer from "@/src/shared/components/Footer";
import { readersProducts } from "@/src/features/products/data";

export const metadata = {
    title: "RFID Readers | RFID Smart System",
    description: "Fixed, handheld and desktop RFID readers for industrial data capture.",
};

export default function ReadersPage() {
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
                            Intelligent <span className="text-gradient-navy">Data Capture</span>
                        </h1>
                        <p className="mt-4 max-w-xl text-base text-slate-600">
                            Fixed portals, rugged handhelds and precision desktop readers.
                        </p>
                    </div>
                </section>

                <section className="pb-16">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid gap-6 md:grid-cols-3">
                            {readersProducts.map((item, i) => (
                                <article
                                    key={item.title}
                                    className="group flex flex-col overflow-hidden rounded-2xl bg-slate-50 transition hover:bg-white hover:shadow-xl hover:shadow-blue-100/30"
                                >
                                    <div className="relative aspect-[3/4] overflow-hidden">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover transition duration-700 group-hover:scale-105"
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                            priority={i === 0}
                                            quality={85}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent" />
                                        <div className="absolute bottom-0 left-0 right-0 p-5">
                                            <h2 className="text-xl font-bold text-white">{item.title}</h2>
                                        </div>
                                    </div>
                                    <div className="flex flex-1 flex-col p-5">
                                        <p className="text-sm leading-relaxed text-slate-600">{item.desc}</p>
                                        <ul className="mt-4 space-y-1.5">
                                            {item.features.map((f) => (
                                                <li key={f} className="flex items-center gap-2 text-sm text-slate-700">
                                                    <CheckCircle2 size={13} className="text-blue-700" />
                                                    {f}
                                                </li>
                                            ))}
                                        </ul>
                                        <Link
                                            href="/contacts"
                                            className="mt-auto pt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-900 hover:underline"
                                        >
                                            Request Quote <ArrowRight size={13} />
                                        </Link>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="bg-slate-900 py-14">
                    <div className="mx-auto max-w-3xl px-4 text-center">
                        <h2 className="text-2xl font-bold text-white">Need a reader recommendation?</h2>
                        <p className="mt-2 text-slate-400">Tell us your use case — we&apos;ll suggest the right device.</p>
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