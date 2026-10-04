"use client";
import { motion } from "framer-motion";
import { Target, Users } from "lucide-react";

export default function OurStory() {
    return (
        <section className="relative bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-3.5 py-1.5 text-xs font-semibold text-teal-800 mb-6">
                            <span className="h-1.5 w-1.5 rounded-full bg-teal-600" />
                            WHO WE ARE
                        </div>
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                            Simplifying Business Automation{" "}
                            <span className="text-teal-700">Since Day One</span>
                        </h2>
                        <p className="mt-6 text-lg leading-relaxed text-slate-600">
                            RFID Smart System was established with a clear mission: to simplify asset tracking and business automation through reliable RFID technologies.
                        </p>
                        <p className="mt-4 text-base leading-relaxed text-slate-600">
                            We partner with globally recognized RFID manufacturers to provide enterprise-grade products. Our experienced team understands that every business has unique operational challenges. We recommend RFID products specifically suited to each customer's environment, ensuring optimal performance and long-term reliability.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-6">
                            <div className="flex items-center gap-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 text-teal-700">
                                    <Target size={20} />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-slate-900">Precision</p>
                                    <p className="text-xs text-slate-600">Tailored Solutions</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 text-teal-700">
                                    <Users size={20} />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-slate-900">Partnership</p>
                                    <p className="text-xs text-slate-600">Long-term Support</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-teal-100/50 to-cyan-100/50 blur-2xl" />
                        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-xl">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-100 text-center">
                                    <p className="text-3xl font-bold text-teal-700">9+</p>
                                    <p className="mt-1 text-sm text-slate-600">Industries Served</p>
                                </div>
                                <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-100 text-center">
                                    <p className="text-3xl font-bold text-teal-700">100%</p>
                                    <p className="mt-1 text-sm text-slate-600">Customized</p>
                                </div>
                                <div className="col-span-2 rounded-2xl bg-teal-700 p-6 text-center text-white">
                                    <p className="text-lg font-semibold">Globally Recognized Partners</p>
                                    <p className="mt-1 text-sm text-teal-100">Enterprise-grade hardware sourcing</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}