"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Home, ChevronRight } from "lucide-react";

export default function ContactHero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-teal-50 via-white to-cyan-50 pt-32 pb-20">
            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(13,148,136,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(13,148,136,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />

            {/* Soft Glows */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-32 top-20 h-[400px] w-[400px] rounded-full bg-teal-200/30 blur-[120px]" />
                <div className="absolute -right-20 bottom-10 h-[300px] w-[300px] rounded-full bg-cyan-200/20 blur-[100px]" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Breadcrumb */}
                <motion.nav
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 flex items-center gap-2 text-sm text-slate-600"
                >
                    <Link href="/" className="flex items-center gap-1.5 hover:text-teal-700 transition">
                        <Home size={14} />
                        Home
                    </Link>
                    <ChevronRight size={14} />
                    <span className="text-teal-700 font-medium">Contact</span>
                </motion.nav>

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="max-w-3xl"
                >
                    <div className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white/80 px-4 py-1.5 text-xs font-semibold text-teal-800 shadow-sm backdrop-blur-sm mb-6">
                        <span className="h-1.5 w-1.5 rounded-full bg-teal-600" />
                        GET IN TOUCH
                    </div>

                    <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                        Let's Build Something{" "}
                        <span className="text-teal-700">Amazing</span> Together
                    </h1>

                    <p className="mt-6 text-lg leading-relaxed text-slate-600 max-w-2xl">
                        We'd love to hear from you. Whether you have a question about our products,
                        pricing, or anything else, our team is ready to answer all your questions.
                    </p>
                </motion.div>

                {/* Stats Row */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 max-w-3xl"
                >
                    {[
                        { value: "24h", label: "Response Time" },
                        { value: "250+", label: "Happy Clients" },
                        { value: "17+", label: "Years Experience" },
                        { value: "2", label: "Global Offices" },
                    ].map((stat, i) => (
                        <div
                            key={stat.label}
                            className="rounded-2xl border border-slate-200 bg-white/70 p-4 backdrop-blur-sm"
                        >
                            <p className="text-2xl font-bold text-teal-700">{stat.value}</p>
                            <p className="text-xs text-slate-600 mt-1">{stat.label}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}