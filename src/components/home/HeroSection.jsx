"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    ArrowRight,
    Play,
    Radio,
    Globe,
    Shield,
} from "lucide-react";

export default function HeroSection() {
    return (
        <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-teal-50/40 to-white pt-28 pb-20">
            {/* Grid Pattern Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(13,148,136,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(13,148,136,0.04)_1px,transparent_1px)] bg-[size:32px_32px]" />

            {/* Soft Glows */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-32 top-20 h-[500px] w-[500px] rounded-full bg-teal-100/40 blur-[120px]" />
                <div className="absolute -right-20 bottom-20 h-[400px] w-[400px] rounded-full bg-cyan-100/30 blur-[100px]" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid min-h-[calc(100vh-7rem)] items-center gap-12 lg:grid-cols-2 lg:gap-16">

                    {/* LEFT - Content */}
                    <div className="py-12 lg:py-0">

                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="mb-8 inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white px-5 py-2.5 text-sm font-medium text-teal-800 shadow-sm"
                        >
                            <span className="h-2 w-2 rounded-full bg-teal-600" />
                            Smart Tracking • Better Tomorrow
                        </motion.div>

                        {/* Heading */}
                        <motion.h1
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-5xl font-bold leading-[1.05] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl"
                        >
                            RFID & IoT Solutions{" "}
                            <span className="block text-teal-700">
                                Worldwide
                            </span>
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="mt-6 max-w-lg text-lg leading-relaxed text-slate-600"
                        >
                            We design, manufacture and deploy enterprise-grade
                            RFID hardware and intelligent IoT platforms that
                            give businesses real-time visibility, automation
                            and control across every asset.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="mt-10 flex flex-wrap gap-4"
                        >
                            <Link
                                href="/products"
                                className="group inline-flex items-center gap-2 rounded-full bg-teal-700 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-teal-700/25 transition-all hover:bg-teal-800 hover:shadow-xl"
                            >
                                Explore Products

                                <ArrowRight
                                    size={18}
                                    className="transition-transform group-hover:translate-x-1"
                                />
                            </Link>

                            <Link
                                href="/about-us"
                                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-8 py-4 text-base font-semibold text-slate-700 shadow-sm transition-all hover:border-teal-200 hover:bg-teal-50 hover:text-teal-700"
                            >
                                <Play
                                    size={16}
                                    className="fill-teal-700 text-teal-700"
                                />

                                Watch Video
                            </Link>
                        </motion.div>
                    </div>

                    {/* RIGHT - Hero Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative hidden lg:flex items-center justify-center"
                    >
                        <div className="relative w-full max-w-xl">

                            {/* Main Image Card */}
                            <div className="relative flex min-h-[500px] w-full items-center justify-center overflow-hidden rounded-[2rem] border border-slate-200/60 bg-gradient-to-br from-slate-50 via-white to-teal-50/60 p-8 shadow-2xl shadow-slate-200/50">

                                {/* Background Glow */}
                                <div className="pointer-events-none absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-100/50 blur-[90px]" />

                                {/* Image */}
                                <div className="relative z-10 flex h-[420px] w-full items-center justify-center">
                                    <Image
                                        src="/EntryImg.jpeg"
                                        alt="RFID Smart System"
                                        width={700}
                                        height={800}
                                        priority
                                        className="h-full w-full object-contain"
                                    />
                                </div>

                                {/* Decorative Card */}
                                <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full border border-teal-200/50 bg-teal-100/20 blur-sm" />

                                <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full border border-cyan-200/50 bg-cyan-100/20 blur-sm" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
