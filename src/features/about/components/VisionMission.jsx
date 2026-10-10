"use client";

import { motion } from "framer-motion";
import { Eye, Rocket, CheckCircle2 } from "lucide-react";
import { vision, missionItems } from "../data";

export default function VisionMission() {
    return (
        <section
            className="relative bg-slate-50 py-14 sm:py-16"
            aria-labelledby="vision-mission-heading"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-10 text-center"
                >
                    <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold text-blue-900">
                        <span
                            className="h-1.5 w-1.5 rounded-full bg-blue-900"
                            aria-hidden="true"
                        />
                        PURPOSE
                    </div>
                    <h2
                        id="vision-mission-heading"
                        className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
                    >
                        Vision & <span className="text-blue-900">Mission</span>
                    </h2>
                    <p className="mx-auto mt-3 max-w-2xl text-base text-slate-600">
                        Guided by a clear vision and a focused mission, we work every day to
                        make RFID technology simpler, more reliable and more valuable for
                        businesses across India.
                    </p>
                </motion.div>

                <div className="grid gap-6 md:grid-cols-2">
                    {/* Vision */}
                    <motion.article
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/40"
                    >
                        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-900 transition-transform duration-300 group-hover:scale-110">
                            <Eye size={24} aria-hidden="true" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900">
                            {vision.title}
                        </h3>
                        <p className="mt-3 text-base leading-relaxed text-slate-600">
                            {vision.desc}
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-slate-500">
                            We aim to set the benchmark for trust, quality and innovation in
                            the RFID industry — helping organizations of every size unlock the
                            full potential of real-time asset visibility.
                        </p>
                        <div
                            className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-blue-100/50 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
                            aria-hidden="true"
                        />
                    </motion.article>

                    {/* Mission */}
                    <motion.article
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/40"
                    >
                        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-900 transition-transform duration-300 group-hover:scale-110">
                            <Rocket size={24} aria-hidden="true" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900">Our Mission</h3>
                        <p className="mt-3 text-sm leading-relaxed text-slate-500">
                            Everything we do is driven by these commitments:
                        </p>
                        <ul className="mt-4 space-y-2.5">
                            {missionItems.map((item) => (
                                <li
                                    key={item}
                                    className="flex items-start gap-2.5 text-slate-600"
                                >
                                    <CheckCircle2
                                        size={15}
                                        className="mt-0.5 shrink-0 text-blue-700"
                                        aria-hidden="true"
                                    />
                                    <span className="text-sm">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <div
                            className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-blue-100/50 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
                            aria-hidden="true"
                        />
                    </motion.article>
                </div>
            </div>
        </section>
    );
}