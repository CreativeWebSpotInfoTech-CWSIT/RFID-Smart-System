import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Navbar from "@/src/shared/components/Navbar";
import Footer from "@/src/shared/components/Footer";
import { tagsProducts } from "@/src/features/products/data";

export const metadata = {
    title: "RFID Tags & Labels | RFID Smart System",
    description:
        "UHF, On-Metal, Laundry, Vehicle, Cards and Industrial Hard Tags for every environment.",
    openGraph: {
        title: "RFID Tags & Labels | RFID Smart System",
        description: "Durable RFID tags engineered for retail, industrial and laundry use.",
        url: "https://www.rfidsmartsystem.com/products/tags-labels",
    },
};

export default function TagsLabelsPage() {
    const [featured, ...rest] = tagsProducts;

    return (
        <>
            <Navbar />
            <main className="bg-white">
                {/* Hero */}
                <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-32 pb-12">
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(30,58,95,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(30,58,95,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
                    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <Link href="/products" className="mb-4 inline-flex text-sm font-medium text-slate-500 hover:text-blue-900">
                            ← Back to Products
                        </Link>
                        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                            Durable Tags for{" "}
                            <span className="text-gradient-navy">Every Environment</span>
                        </h1>
                        <p className="mt-4 max-w-2xl text-base text-slate-600">
                            From retail shelves to heavy machinery — tags built for real-world conditions.
                        </p>
                    </div>
                </section>

                {/* Featured Product */}
                <section className="pb-12">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg">
                            <div className="grid lg:grid-cols-2">
                                <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[380px]">
                                    <Image
                                        src={featured.image}
                                        alt={featured.title}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                        priority
                                        quality={85}
                                    />
                                </div>
                                <div className="flex flex-col justify-center p-8 sm:p-10">
                                    <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-900">
                                        <featured.icon size={20} />
                                    </div>
                                    <h2 className="text-2xl font-bold text-slate-900">{featured.title}</h2>
                                    <p className="mt-3 text-sm leading-relaxed text-slate-600">{featured.desc}</p>
                                    <div className="mt-4 flex flex-wrap gap-1.5">
                                        {featured.idealFor?.map((u) => (
                                            <span key={u} className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-900">
                                                {u}
                                            </span>
                                        ))}
                                    </div>
                                    <ul className="mt-5 space-y-1.5">
                                        {featured.features.map((f) => (
                                            <li key={f} className="flex items-center gap-2 text-sm text-slate-700">
                                                <CheckCircle2 size={14} className="text-blue-700" />
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                    <Link
                                        href="/contacts"
                                        className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-blue-900 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-800"
                                    >
                                        Request Quote <ArrowRight size={14} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Rest Grid */}
                <section className="pb-16">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <h3 className="mb-6 text-lg font-bold text-slate-900">More Tag Solutions</h3>
                        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                            {rest.map((item) => (
                                <article
                                    key={item.title}
                                    className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition hover:shadow-md"
                                >
                                    <div className="relative aspect-[16/10] bg-slate-100">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover transition duration-500 group-hover:scale-105"
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                            loading="lazy"
                                            quality={80}
                                        />
                                    </div>
                                    <div className="p-5">
                                        <h3 className="font-bold text-slate-900">{item.title}</h3>
                                        <p className="mt-1.5 line-clamp-2 text-sm text-slate-600">{item.desc}</p>
                                        <Link
                                            href="/contacts"
                                            className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-900 hover:underline"
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
                        <h2 className="text-2xl font-bold text-white">Not sure which tag fits?</h2>
                        <p className="mt-2 text-slate-400">We&apos;ll match the right tag to your environment.</p>
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