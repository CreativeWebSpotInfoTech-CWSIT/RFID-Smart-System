"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home, ChevronRight } from "lucide-react";

export default function AboutHero() {
    return (
        <section
            className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-32 pb-20"
            aria-labelledby="about-heading"
        >
            <div
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(30,58,95,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(30,58,95,0.04)_1px,transparent_1px)] bg-[size:40px_40px]"
                aria-hidden="true"
            />
            <div className="pointer-events-none absolute inset-0" aria-hidden="true">
                <div className="absolute -left-40 top-10 h-[400px] w-[400px] rounded-full bg-blue-200/40 blur-[120px]" />
                <div className="absolute -right-32 bottom-0 h-[350px] w-[350px] rounded-full bg-indigo-200/30 blur-[100px]" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                <motion.nav
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8 flex items-center justify-center gap-2 text-sm text-slate-600"
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
                    <span className="font-medium text-blue-900">About Us</span>
                </motion.nav>

                <motion.h1
                    id="about-heading"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
                >
                    Empowering Businesses with{" "}
                    <span className="text-gradient-navy">Intelligent Automation</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600"
                >
                    Simplifying asset tracking and business operations through reliable,
                    enterprise-grade RFID technologies.
                </motion.p>
            </div>
        </section>
    );
}