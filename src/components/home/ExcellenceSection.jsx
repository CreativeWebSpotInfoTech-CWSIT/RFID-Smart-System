"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Shield, Zap, Globe2, Award, Radio } from "lucide-react";

const features = [
    {
        icon: Shield,
        title: "Quality First",
        desc: "Every product engineered and tested in-house to global industrial standards.",
        color: "bg-emerald-100 text-emerald-700",
    },
    {
        icon: Zap,
        title: "Real-time Visibility",
        desc: "Complete end-to-end systems that deliver instant operational data.",
        color: "bg-blue-100 text-blue-700",
    },
    {
        icon: Globe2,
        title: "Global Delivery",
        desc: "Serving logistics, retail, healthcare and manufacturing worldwide.",
        color: "bg-purple-100 text-purple-700",
    },
    {
        icon: Award,
        title: "Certified Partners",
        desc: "Impinj Silver Partner & Zebra Certified Reseller.",
        color: "bg-orange-100 text-orange-700",
    },
];

export default function ExcellenceSection() {
    return (
        <section className="relative bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
                    {/* LEFT - RFID Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-teal-100/50 to-cyan-100/50 blur-2xl" />
                        <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-slate-50 to-teal-50/30 p-12 shadow-xl">
                            {/* Circular RFID Icon with Pulse */}
                            <div className="relative mx-auto flex h-64 w-64 items-center justify-center">
                                {/* Pulse rings */}
                                <div className="absolute inset-0 rounded-full border-2 border-teal-300/40 animate-ping" style={{ animationDuration: '3s' }} />
                                <div className="absolute inset-4 rounded-full border-2 border-teal-300/30 animate-ping" style={{ animationDuration: '3s', animationDelay: '0.5s' }} />
                                <div className="absolute inset-8 rounded-full border-2 border-teal-300/20 animate-ping" style={{ animationDuration: '3s', animationDelay: '1s' }} />

                                {/* Main icon */}
                                <motion.div
                                    animate={{ scale: [1, 1.05, 1] }}
                                    transition={{ duration: 4, repeat: Infinity }}
                                    className="relative z-10 flex h-32 w-32 items-center justify-center rounded-3xl bg-white shadow-xl"
                                >
                                    <Radio className="h-14 w-14 text-teal-700" />
                                </motion.div>
                            </div>

                            {/* Bottom Badge - Fixed & Premium Look */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/80 bg-white/90 p-4 shadow-lg backdrop-blur-sm"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-100">
                                        <Shield className="h-5 w-5 text-teal-700" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-slate-900">RFID Technology</p>
                                        <p className="text-xs text-slate-600">Smarter • Faster • Reliable</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* RIGHT - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
                            Why RFID Smart System
                        </p>
                        <h2 className="mt-4 font-serif-display text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
                            Built for the next decade of{" "}
                            <span className="text-teal-700">automation</span>
                        </h2>
                        <p className="mt-5 text-lg leading-relaxed text-slate-600">
                            We design complete RFID and IoT ecosystems — from custom tags and
                            industrial readers to AI-powered platforms that turn physical
                            assets into digital intelligence.
                        </p>

                        {/* Features Grid */}
                        <div className="mt-8 grid gap-4 sm:grid-cols-2">
                            {features.map((item, i) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all hover:border-teal-200 hover:shadow-md"
                                >
                                    <div className="flex gap-3">
                                        <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${item.color}`}>
                                            <item.icon size={20} />
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-bold text-slate-900">
                                                {item.title}
                                            </h3>
                                            <p className="mt-1 text-xs leading-relaxed text-slate-600">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <Link
                            href="/about-us"
                            className="mt-8 inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-7 py-3.5 text-base font-semibold text-teal-800 transition hover:bg-teal-100"
                        >
                            Discover Our Story →
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}