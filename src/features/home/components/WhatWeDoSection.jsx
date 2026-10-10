"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Radio, CheckCircle2, } from "lucide-react";
import Image from "next/image";
import { memo } from "react";
import { cardsData } from "../data/whatWeDoData";

const WhatWeDoCard = memo(({ card, index }) => {
    const Icon = card.icon;

    return (
        <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            itemScope
            itemType="https://schema.org/Service"
        >
            <meta itemProp="name" content={card.title} />
            <meta itemProp="description" content={card.desc} />

            {/* Static Image */}
            <div className="relative h-56 overflow-hidden">
                <Image
                    src={card.image}
                    alt={card.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" aria-hidden="true" />
            </div>

            <div className="p-7">
                <h3 className="text-xl font-bold text-slate-900">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{card.desc}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{card.extraDesc}</p>

                <ul className="mt-4 space-y-2">
                    {card.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-slate-700">
                            <CheckCircle2 size={14} className={`${card.iconColor} shrink-0`} aria-hidden="true" />
                            <span itemProp="serviceType">{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </motion.article>
    );
});

WhatWeDoCard.displayName = "WhatWeDoCard";

export default function WhatWeDoSection() {
    return (
        <section
            className="relative bg-gradient-to-b from-slate-50 to-white pt-16 pb-20 sm:pt-20 sm:pb-28"
            aria-labelledby="what-we-do-heading"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* TOP SECTION  */}
                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold text-blue-900">
                            <span className="h-1.5 w-1.5 rounded-full bg-blue-900" aria-hidden="true" />
                            WHAT WE DO
                        </div>

                        <h2
                            id="what-we-do-heading"
                            className="mt-5 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl"
                        >
                            Smart Solutions,{" "}
                            <span className="text-blue-900">Seamless Integration</span>
                        </h2>

                        <p className="mt-5 text-lg leading-relaxed text-slate-600">
                            RFID Smart System delivers complete RFID and IoT solutions that help
                            businesses gain real-time visibility, improve accuracy, and optimize
                            operations across the entire supply chain.
                        </p>

                        <p className="mt-3 text-base leading-relaxed text-slate-600">
                            From industrial manufacturing to retail, logistics and healthcare —
                            we design, supply and implement reliable RFID systems that integrate
                            smoothly with your existing infrastructure.
                        </p>

                        <div className="mt-6 flex flex-wrap gap-3">
                            {["Industry 4.0 Ready", "End-to-End Support", "Global Standards"].map((badge) => (
                                <div key={badge} className="flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-900">
                                    <CheckCircle2 size={16} className="text-blue-700 shrink-0" aria-hidden="true" />
                                    {badge}
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.96 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15, duration: 0.6 }}
                        className="relative"
                    >
                        <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-blue-100/50 to-blue-50/40 blur-2xl" aria-hidden="true" />
                        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <Image
                                    src="/EntryImg.jpeg"
                                    alt="RFID Smart System Enterprise Solutions"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw" className="object-cover"
                                    priority
                                    quality={85}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" aria-hidden="true" />
                            </div>

                            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/60 bg-white/90 p-4 shadow-lg backdrop-blur-sm">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100">
                                        <Radio className="h-5 w-5 text-blue-900" aria-hidden="true" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-slate-900">RFID Technology</p>
                                        <p className="text-xs text-slate-600">Smarter • Faster • Reliable</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="mt-16 text-center">
                    <motion.h3
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
                    >
                        Explore Our Expertise
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        className="mx-auto mt-3 max-w-2xl text-base text-slate-600"
                    >
                        Powerful RFID products, innovative applications and complete solutions
                        built to deliver measurable results.
                    </motion.p>
                </div>

                {/* CONTENT CARDS  */}
                <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {cardsData.map((card, index) => (
                        <WhatWeDoCard key={card.id} card={card} index={index} />
                    ))}
                </div>

                {/* BOTTOM CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="mt-16 text-center"
                >
                    <p className="text-base text-slate-600">
                        Not sure which solution fits your business?
                    </p>
                    <Link
                        href="/contacts"
                        className="mt-4 inline-flex items-center gap-2 rounded-full bg-blue-900 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-900/25 transition-all duration-300 hover:bg-blue-800 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Talk to Our Experts
                        <ArrowRight size={18} aria-hidden="true" />
                    </Link>
                </motion.div>

            </div>
        </section>
    );
}