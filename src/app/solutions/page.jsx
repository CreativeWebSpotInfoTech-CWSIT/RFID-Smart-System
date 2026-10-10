import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/src/shared/components/Navbar";
import Footer from "@/src/shared/components/Footer";
import { solutions } from "@/src/features/solutions/data";

export const metadata = {
    title: "RFID Solutions | RFID Smart System",
    description:
        "Complete RFID-based business solutions — asset tracking, inventory management, warehouse automation, laundry, vehicle and access control.",
    keywords: [
        "RFID solutions",
        "asset tracking",
        "inventory management",
        "warehouse automation",
        "RFID Smart System",
    ],
    openGraph: {
        title: "RFID Solutions | RFID Smart System",
        description:
            "End-to-end RFID solutions tailored to your operational challenges.",
        url: "https://www.rfidsmartsystem.com/solutions",
        siteName: "RFID Smart System",
        type: "website",
    },
    robots: { index: true, follow: true },
};

export default function SolutionsPage() {
    return (
        <>
            <Navbar />
            <main className="bg-white">
                <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-32 pb-14">
                    <div
                        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(30,58,95,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(30,58,95,0.04)_1px,transparent_1px)] bg-[size:40px_40px]"
                        aria-hidden="true"
                    />
                    <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-1.5 text-xs font-semibold text-blue-900 shadow-sm backdrop-blur-sm">
                            <span
                                className="h-1.5 w-1.5 rounded-full bg-blue-900"
                                aria-hidden="true"
                            />
                            END-TO-END SOLUTIONS
                        </div>
                        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                            Complete RFID-Based{" "}
                            <span className="text-gradient-navy">Business Solutions</span>
                        </h1>
                        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
                            From asset tracking to warehouse automation, we design and deploy
                            intelligent RFID ecosystems tailored to your unique operational
                            challenges.
                        </p>
                    </div>
                </section>

                <section className="py-14 sm:py-16">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                            {solutions.map((sol) => (
                                <Link
                                    key={sol.id}
                                    href={sol.href}
                                    className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/40"
                                >
                                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                                        {sol.image ? (
                                            <Image
                                                src={sol.image}
                                                alt={sol.title}
                                                fill
                                                className="object-cover transition duration-500 group-hover:scale-105"
                                                sizes="(max-width: 768px) 100vw, 25vw"
                                                loading="lazy"
                                                quality={80}
                                            />
                                        ) : (
                                            <div className="flex h-full items-center justify-center">
                                                <sol.icon size={32} className="text-slate-300" />
                                            </div>
                                        )}
                                    </div>
                                    <div className="p-5">
                                        <div
                                            className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${sol.color} text-white`}
                                        >
                                            <sol.icon size={18} aria-hidden="true" />
                                        </div>
                                        <h2 className="text-base font-bold text-slate-900 transition-colors group-hover:text-blue-900">
                                            {sol.title}
                                        </h2>
                                        <p className="mt-2 text-sm leading-relaxed text-slate-600">
                                            {sol.desc}
                                        </p>
                                        <div className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-blue-900">
                                            Learn More
                                            <ArrowRight
                                                size={14}
                                                className="transition-transform group-hover:translate-x-1"
                                            />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="bg-slate-900 py-14 sm:py-16">
                    <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
                        <h2 className="text-2xl font-bold text-white sm:text-3xl">
                            Need help choosing the right solution?
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