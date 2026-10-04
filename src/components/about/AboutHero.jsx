"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Home, ChevronRight } from "lucide-react";

export default function AboutHero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-teal-50 via-white to-cyan-50 pt-32 pb-20">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(13,148,136,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(13,148,136,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                <motion.nav
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 flex items-center justify-center gap-2 text-sm text-slate-600"
                >
                    <Link href="/" className="flex items-center gap-1.5 hover:text-teal-700 transition">
                        <Home size={14} /> Home
                    </Link>
                    <ChevronRight size={14} />
                    <span className="text-teal-700 font-medium">About Us</span>
                </motion.nav>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
                >
                    Empowering Businesses with{" "}
                    <span className="text-teal-700">Intelligent Automation</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mt-6 max-w-2xl mx-auto text-lg leading-relaxed text-slate-600"
                >
                    Simplifying asset tracking and business operations through reliable, enterprise-grade RFID technologies.
                </motion.p>
            </div>
        </section>
    );
}