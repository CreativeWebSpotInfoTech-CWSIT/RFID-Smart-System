"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { memo } from "react";
import { excellenceFeatures as features } from "../data/excellenceData";

const FeatureCard = memo(({ item, index }) => {
    const Icon = item.icon;

    return (
        <motion.article
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.12 + index * 0.07, duration: 0.45 }}
            className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100/40"
            itemScope
            itemType="https://schema.org/Service"
        >
            <meta itemProp="name" content={item.title} />
            <meta itemProp="description" content={item.desc} />

            <div className="flex gap-3">
                <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${item.color} transition-transform duration-300 group-hover:scale-110`}
                    aria-hidden="true"
                >
                    <Icon size={18} strokeWidth={2} />
                </div>
                <div className="min-w-0">
                    <h3 className="text-sm font-bold text-slate-900">
                        {item.title}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-slate-600">
                        {item.desc}
                    </p>
                </div>
            </div>
        </motion.article>
    );
});

FeatureCard.displayName = "FeatureCard";

export default function ExcellenceSection() {
    return (
        <section
            className="relative overflow-hidden bg-white py-16 sm:py-24"
            aria-labelledby="excellence-heading"
        >
            <div className="pointer-events-none absolute inset-0" aria-hidden="true">
                <div className="absolute -left-40 top-16 h-[400px] w-[400px] rounded-full bg-blue-100/50 blur-[120px]" />
                <div className="absolute -right-40 bottom-10 h-[400px] w-[400px] rounded-full bg-slate-100/70 blur-[120px]" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">

                    {/* LEFT - IMAGE CARD  */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="relative lg:-mt-8"
                    >
                        {/* Outer Glow */}
                        <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-blue-100/60 via-white/40 to-slate-100/50 blur-2xl" aria-hidden="true" />

                        {/* Main Card */}
                        <div className="relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-gradient-to-br from-slate-50 via-white to-blue-50/40 p-3 sm:p-4 shadow-2xl shadow-slate-200/60">

                            {/* Image */}
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.5rem]">
                                <Image
                                    src="/images/img1.jpeg"
                                    alt="RFID Smart System - Enterprise RFID and IoT Solutions"
                                    fill
                                    className="object-cover transition-transform duration-700 hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                                    priority
                                    quality={85}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/25 via-transparent to-transparent" aria-hidden="true" />
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT - CONTENT */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        {/* Tag */}
                        <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-blue-900">
                            <span className="h-1.5 w-1.5 rounded-full bg-blue-900" aria-hidden="true" />
                            Why RFID Smart System
                        </div>

                        <h2
                            id="excellence-heading"
                            className="mt-4 text-3xl font-bold leading-[1.15] tracking-tight text-slate-900 sm:mt-5 sm:text-4xl lg:text-5xl"
                        >
                            Built for the next{" "}
                            <span className="relative inline-block">
                                <span className="relative z-10 text-blue-900">decade</span>
                                <span className="absolute bottom-1 left-0 right-0 -z-0 h-3 bg-blue-100/70" aria-hidden="true" />
                            </span>{" "}
                            of{" "}
                            <span className="text-blue-900">automation</span>
                        </h2>

                        {/* Description */}
                        <p className="mt-4 text-base leading-relaxed text-slate-600 sm:mt-5 sm:text-lg">
                            We design complete RFID and IoT ecosystems — from custom tags and
                            industrial readers to AI-powered platforms that turn physical assets
                            into digital intelligence.
                        </p>

                        {/* Features Grid */}
                        <div className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4">
                            {features.map((item, index) => (
                                <FeatureCard
                                    key={item.title}
                                    item={item}
                                    index={index}
                                />
                            ))}
                        </div>

                        <div className="mt-8">
                            <Link
                                href="/about-us"
                                className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-6 py-3 text-sm font-semibold text-blue-900 transition-all duration-300 hover:bg-blue-100 hover:shadow-md"
                            >
                                Discover Our Story
                                <span aria-hidden="true">→</span>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}