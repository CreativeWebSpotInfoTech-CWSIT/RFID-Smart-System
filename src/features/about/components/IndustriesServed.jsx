"use client";

import { motion } from "framer-motion";
import { industries } from "../data";

export default function IndustriesServed() {
    return (
        <section
            className="relative bg-slate-50 py-14 sm:py-16"
            aria-labelledby="industries-heading"
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
                        INDUSTRIES
                    </div>
                    <h2
                        id="industries-heading"
                        className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
                    >
                        Industries We <span className="text-blue-900">Serve</span>
                    </h2>
                    <p className="mx-auto mt-3 max-w-2xl text-base text-slate-600">
                        Providing enterprise-grade RFID solutions tailored for diverse
                        operational environments.
                    </p>
                </motion.div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {industries.map((industry, i) => (
                        <motion.div
                            key={industry.name}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.04 }}
                            className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100/40"
                        >
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-900 transition-all duration-300 group-hover:bg-blue-900 group-hover:text-white">
                                <industry.icon size={20} aria-hidden="true" />
                            </div>
                            <span className="text-sm font-semibold text-slate-900">
                                {industry.name}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}