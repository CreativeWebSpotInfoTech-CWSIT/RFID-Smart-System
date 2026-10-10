"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home, ChevronRight } from "lucide-react";

export default function ContactHero() {
    return (
        <section
            className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-32 pb-16"
            aria-labelledby="contact-heading"
        >
            <div
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(30,58,95,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(30,58,95,0.04)_1px,transparent_1px)] bg-[size:40px_40px]"
                aria-hidden="true"
            />
            <div className="pointer-events-none absolute inset-0" aria-hidden="true">
                <div className="absolute -left-32 top-20 h-[400px] w-[400px] rounded-full bg-blue-200/30 blur-[120px]" />
                <div className="absolute -right-20 bottom-10 h-[300px] w-[300px] rounded-full bg-indigo-200/20 blur-[100px]" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.nav
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 flex items-center gap-2 text-sm text-slate-600"
                    aria-label="Breadcrumb"
                >
                    <Link
                        href="/"
                        className="flex items-center gap-1.5 transition hover:text-blue-900"
                    >
                        <Home size={14} aria-hidden="true" />
                        Home
                    </Link>
                    <ChevronRight size={14} aria-hidden="true" />
                    <span className="font-medium text-blue-900">Contact</span>
                </motion.nav>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="max-w-3xl"
                >
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-1.5 text-xs font-semibold text-blue-900 shadow-sm backdrop-blur-sm">
                        <span
                            className="h-1.5 w-1.5 rounded-full bg-blue-900"
                            aria-hidden="true"
                        />
                        GET IN TOUCH
                    </div>

                    <h1
                        id="contact-heading"
                        className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
                    >
                        Let&apos;s Build Something{" "}
                        <span className="text-gradient-navy">Amazing</span> Together
                    </h1>

                    <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
                        We&apos;d love to hear from you. Whether you have a question about
                        our products, pricing, or anything else, our team is ready to answer
                        all your questions.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mt-10 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4"
                >
                    {[
                        { value: "24h", label: "Response Time" },
                        { value: "250+", label: "Happy Clients" },
                        { value: "9+", label: "Industries" },
                        { value: "1", label: "Chennai Office" },
                    ].map((stat) => (
                        <div
                            key={stat.label}
                            className="rounded-2xl border border-slate-200 bg-white/70 p-4 backdrop-blur-sm"
                        >
                            <p className="text-2xl font-bold text-blue-900">{stat.value}</p>
                            <p className="mt-1 text-xs text-slate-600">{stat.label}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}