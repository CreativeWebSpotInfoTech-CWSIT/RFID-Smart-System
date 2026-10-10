"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Radio } from "lucide-react";
import { memo } from "react";

const WaveconnectSection = memo(function WaveconnectSection() {
    return (
        <section
            className="relative overflow-hidden bg-slate-900 py-20 sm:py-24"
            aria-labelledby="waveconnect-heading"
        >
            {/* Background Effects */}
            <div className="absolute inset-0" aria-hidden="true">
                <div className="absolute left-1/4 top-0 h-[400px] w-[400px] rounded-full bg-blue-900/30 blur-[120px]" />
                <div className="absolute right-1/4 bottom-0 h-[300px] w-[300px] rounded-full bg-blue-800/20 blur-[100px]" />
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)`,
                        backgroundSize: "30px 30px",
                    }}
                />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center justify-between gap-8 lg:flex-row"
                >
                    <div className="text-center lg:text-left">
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold text-blue-400">
                            <Radio size={12} aria-hidden="true" />
                            Ready to Transform?
                        </div>
                        <h2
                            id="waveconnect-heading"
                            className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
                        >
                            Let's Build a Smarter,{" "}
                            <span className="text-gradient-dark">Connected World</span>
                        </h2>
                        <p className="mt-4 max-w-xl text-base text-slate-400 sm:text-lg">
                            Innovative RFID & IoT solutions for a more efficient future.
                        </p>
                    </div>
                    <Link
                        href="/contacts"
                        className="btn-shimmer group inline-flex items-center gap-2 rounded-full bg-blue-900 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-900/30 transition-all duration-300 hover:bg-blue-800 hover:shadow-xl hover:shadow-blue-900/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
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
});

WaveconnectSection.displayName = "WaveconnectSection";

export default WaveconnectSection;