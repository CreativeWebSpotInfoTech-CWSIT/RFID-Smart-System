"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { memo } from "react";
import { capabilities } from "../data/statsData";

const CapabilityCard = memo(({ item, index }) => {
    const Icon = item.icon;

    return (
        <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative"
            itemScope
            itemType="https://schema.org/Service"
        >
            <meta itemProp="name" content={item.title} />
            <meta itemProp="description" content={item.desc} />

            <div className="relative h-full overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-6 shadow-lg shadow-slate-200/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-100/50">
                <div className={`absolute left-0 right-0 top-0 h-1.5 bg-gradient-to-r ${item.gradient}`} />

                <div className="mb-5 flex items-start justify-between">
                    <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-slate-50 transition-all duration-300 group-hover:bg-blue-50 group-hover:scale-110">
                        <Icon className="h-6 w-6 text-blue-900" aria-hidden="true" />
                    </div>

                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-50 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:bg-blue-50">
                        <ArrowUpRight className="h-4 w-4 text-blue-900" aria-hidden="true" />
                    </div>
                </div>

                <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-500">{item.desc}</p>

                <div className="pointer-events-none absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-blue-100/40 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />
            </div>
        </motion.article>
    );
});

CapabilityCard.displayName = "CapabilityCard";

export default function StatsSection() {
    return (
        <section
            className="relative bg-gradient-to-b from-white to-slate-50 pt-10 pb-16 sm:pt-14 sm:pb-20"
            aria-labelledby="capabilities-heading"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-900"
                    >
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-900" aria-hidden="true" />
                        What We Deliver
                    </motion.div>

                    <motion.h2
                        id="capabilities-heading"
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.08 }}
                        className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
                    >
                        Core Capabilities
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.14 }}
                        className="mx-auto mt-3 max-w-2xl text-base text-slate-600"
                    >
                        From hardware design to cloud platforms — we deliver complete RFID solutions
                        that drive efficiency, accuracy and real-time control.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {capabilities.map((item, index) => (
                        <CapabilityCard key={item.title} item={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}