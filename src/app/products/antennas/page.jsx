import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Navbar from "@/src/shared/components/Navbar";
import Footer from "@/src/shared/components/Footer";
import { antennasProducts } from "@/src/features/products/data";

export const metadata = {
    title: "RFID Antennas | RFID Smart System",
    description: "Circular, linear, indoor, outdoor and long-range RFID antennas.",
};

export default function AntennasPage() {
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
                            Precision <span className="text-gradient-navy">RFID Antennas</span>
                        </h1>
                        <p className="mt-4 max-w-xl text-base text-slate-600">
                            Right polarization and gain for every read zone.
                        </p>
                    </div>
                </section>

                <section className="pb-16">
                    <div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8">
                        {antennasProducts.map((item, i) => {
                            const reverse = i % 2 === 1;
                            return (
                                <article
                                    key={item.title}
                                    className={`flex flex-col gap-8 lg:flex-row lg:items-center ${reverse ? "lg:flex-row-reverse" : ""}`}
                                >
                                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-slate-100 lg:w-1/2">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 1024px) 100vw, 50vw"
                                            loading={i < 2 ? "eager" : "lazy"}
                                            quality={80}
                                        />
                                    </div>
                                    <div className="lg:w-1/2">
                                        <h2 className="text-2xl font-bold text-slate-900">{item.title}</h2>
                                        <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.desc}</p>
                                        <ul className="mt-5 space-y-2">
                                            {item.features.map((f) => (
                                                <li key={f} className="flex items-center gap-2 text-sm text-slate-700">
                                                    <CheckCircle2 size={14} className="text-blue-700" />
                                                    {f}
                                                </li>
                                            ))}
                                        </ul>
                                        <Link
                                            href="/contacts"
                                            className="mt-6 inline-flex items-center gap-2 rounded-full bg-blue-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-800"
                                        >
                                            Request Quote <ArrowRight size={14} />
                                        </Link>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </section>

                <section className="bg-slate-900 py-14">
                    <div className="mx-auto max-w-3xl px-4 text-center">
                        <h2 className="text-2xl font-bold text-white">Need antenna consultation?</h2>
                        <p className="mt-2 text-slate-400">We&apos;ll help pick polarization and gain for your setup.</p>
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