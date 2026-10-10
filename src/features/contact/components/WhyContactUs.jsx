"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { features } from "../data";

export default function WhyContactUs() {
    return (
        <section
            className="relative bg-gradient-to-b from-slate-50 to-white py-14 sm:py-16"
            aria-labelledby="why-contact-heading"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mx-auto max-w-2xl text-center"
                >
                    <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1.5 text-xs font-semibold text-blue-900">
                        <span
                            className="h-1.5 w-1.5 rounded-full bg-blue-900"
                            aria-hidden="true"
                        />
                        WHY CHOOSE US
                    </div>
                    <h2
                        id="why-contact-heading"
                        className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
                    >
                        Why contact{" "}
                        <span className="text-blue-900">RFID Smart System</span>?
                    </h2>
                    <p className="mt-3 text-sm text-slate-600">
                        We&apos;re not just another vendor — we&apos;re your long-term
                        technology partner.
                    </p>
                </motion.div>

                <div className="mt-10 grid gap-6 md:grid-cols-3">
                    {features.map((feature, i) => (
                        <motion.article
                            key={feature.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.45, delay: i * 0.08 }}
                            className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/40"
                        >
                            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-900 transition-transform duration-300 group-hover:scale-110">
                                <feature.icon size={22} aria-hidden="true" />
                            </div>

                            <h3 className="text-lg font-bold text-slate-900">
                                {feature.title}
                            </h3>
                            <p className="mt-2 text-sm leading-relaxed text-slate-600">
                                {feature.desc}
                            </p>

                            <ul className="mt-4 space-y-2">
                                {feature.points.map((point) => (
                                    <li
                                        key={point}
                                        className="flex items-center gap-2 text-sm text-slate-700"
                                    >
                                        <CheckCircle2
                                            size={14}
                                            className="shrink-0 text-blue-700"
                                            aria-hidden="true"
                                        />
                                        {point}
                                    </li>
                                ))}
                            </ul>

                            <div
                                className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-gradient-to-br from-blue-50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                aria-hidden="true"
                            />
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}