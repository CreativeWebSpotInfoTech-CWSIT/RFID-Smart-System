"use client";

import { motion } from "framer-motion";
import { reasons } from "../data";

export default function WhyChooseUs() {
    return (
        <section
            className="relative bg-gradient-to-b from-white to-slate-50 py-14 sm:py-16"
            aria-labelledby="why-choose-heading"
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
                        OUR STRENGTHS
                    </div>
                    <h2
                        id="why-choose-heading"
                        className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
                    >
                        Why Choose{" "}
                        <span className="text-blue-900">RFID Smart System?</span>
                    </h2>
                </motion.div>

                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {reasons.map((reason, i) => (
                        <motion.article
                            key={reason.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.07 }}
                            className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/40"
                        >
                            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-900 transition-transform duration-300 group-hover:scale-110">
                                <reason.icon size={20} aria-hidden="true" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900">
                                {reason.title}
                            </h3>
                            <p className="mt-2 text-sm leading-relaxed text-slate-600">
                                {reason.desc}
                            </p>
                            <div
                                className="absolute -right-5 -top-5 h-20 w-20 rounded-full bg-gradient-to-br from-blue-50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                aria-hidden="true"
                            />
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}