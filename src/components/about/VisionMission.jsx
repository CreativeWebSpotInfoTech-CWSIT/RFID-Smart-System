"use client";
import { motion } from "framer-motion";
import { Eye, Rocket } from "lucide-react";

export default function VisionMission() {
    return (
        <section className="relative bg-slate-50 py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid gap-8 md:grid-cols-2">
                    {/* Vision */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="group relative overflow-hidden rounded-3xl border border-teal-200/50 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-teal-100/50"
                    >
                        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-100 text-teal-700 transition-transform duration-300 group-hover:scale-110">
                            <Eye size={28} />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900">Our Vision</h3>
                        <p className="mt-4 text-lg leading-relaxed text-slate-600">
                            To become India's most trusted RFID technology provider, delivering intelligent automation solutions that transform business operations.
                        </p>
                    </motion.div>

                    {/* Mission */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="group relative overflow-hidden rounded-3xl border border-teal-200/50 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-teal-100/50"
                    >
                        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-100 text-teal-700 transition-transform duration-300 group-hover:scale-110">
                            <Rocket size={28} />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900">Our Mission</h3>
                        <ul className="mt-4 space-y-3">
                            {[
                                "Deliver world-class RFID products",
                                "Simplify business automation",
                                "Improve operational efficiency",
                                "Enable real-time asset visibility",
                                "Build long-term customer partnerships through innovation and support",
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-slate-600">
                                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
                                    <span className="text-base">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}