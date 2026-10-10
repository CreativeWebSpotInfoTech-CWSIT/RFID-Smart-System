"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Radio } from "lucide-react";

export default function AboutCTA() {
    return (
        <section
            className="relative overflow-hidden bg-slate-900 py-14 sm:py-16"
            aria-labelledby="about-cta-heading"
        >
            <div className="absolute inset-0" aria-hidden="true">
                <div className="absolute left-1/4 top-0 h-[300px] w-[300px] rounded-full bg-blue-900/30 blur-[100px]" />
                <div className="absolute right-1/4 bottom-0 h-[250px] w-[250px] rounded-full bg-blue-800/20 blur-[80px]" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center justify-between gap-6 lg:flex-row"
                >
                    <div className="text-center lg:text-left">
                        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold text-blue-400">
                            <Radio size={12} aria-hidden="true" />
                            Ready to Transform?
                        </div>
                        <h2
                            id="about-cta-heading"
                            className="text-2xl font-bold tracking-tight text-white sm:text-3xl"
                        >
                            Let&apos;s Build Smarter{" "}
                            <span className="text-blue-400">Tracking Systems</span>
                        </h2>
                        <p className="mt-3 max-w-xl text-sm text-slate-400 sm:text-base">
                            From consultation to deployment — we help you gain real-time
                            visibility and operational control.
                        </p>
                    </div>

                    <Link
                        href="/contacts"
                        className="btn-shimmer group inline-flex items-center gap-2 rounded-full bg-blue-900 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-900/30 transition-all duration-300 hover:bg-blue-800 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
                    >
                        Get in Touch
                        <ArrowRight
                            size={16}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                            aria-hidden="true"
                        />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}