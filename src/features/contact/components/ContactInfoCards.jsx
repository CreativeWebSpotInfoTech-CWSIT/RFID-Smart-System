"use client";

import { motion } from "framer-motion";
import { infoCards } from "../data";

export default function ContactInfoCards() {
    return (
        <section className="relative -mt-8 pb-10" aria-label="Contact information">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {infoCards.map((card, i) => (
                        <motion.article
                            key={card.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.45, delay: i * 0.08 }}
                            className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/40"
                        >
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-900 transition-transform duration-300 group-hover:scale-110">
                                <card.icon size={22} aria-hidden="true" />
                            </div>

                            <h3 className="text-base font-bold text-slate-900">
                                {card.title}
                            </h3>
                            <p className="mt-0.5 text-xs font-semibold uppercase tracking-wider text-slate-500">
                                {card.subtitle}
                            </p>
                            <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-slate-600">
                                {card.desc}
                            </p>

                            <div
                                className="absolute -right-5 -top-5 h-16 w-16 rounded-full bg-gradient-to-br from-blue-50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                aria-hidden="true"
                            />
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}