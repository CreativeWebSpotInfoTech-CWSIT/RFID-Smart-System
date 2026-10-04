"use client";
import { motion } from "framer-motion";
import { Zap, Globe, Users, CheckCircle2 } from "lucide-react";

const features = [
    {
        icon: Zap,
        title: "Quick Response",
        desc: "We respond to all inquiries within 24 hours. For urgent matters, call our direct line.",
        color: "from-teal-500 to-teal-600",
        points: ["24-hour response time", "Dedicated support team", "Priority handling"],
    },
    {
        icon: Globe,
        title: "Global Support",
        desc: "With offices in USA and India, we provide round-the-clock support across time zones.",
        color: "from-blue-500 to-blue-600",
        points: ["USA & India offices", "Multi-timezone coverage", "Local language support"],
    },
    {
        icon: Users,
        title: "Expert Team",
        desc: "17+ years of RFID expertise. Our engineers and consultants are here to help.",
        color: "from-purple-500 to-purple-600",
        points: ["17+ years experience", "Certified engineers", "Industry specialists"],
    },
];

export default function WhyContactUs() {
    return (
        <section className="relative bg-gradient-to-b from-slate-50 to-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mx-auto max-w-2xl text-center"
                >
                    <div className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-3.5 py-1.5 text-xs font-semibold text-teal-800">
                        <span className="h-1.5 w-1.5 rounded-full bg-teal-600" />
                        WHY CHOOSE US
                    </div>
                    <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                        Why contact{" "}
                        <span className="text-teal-700">RFID Smart System</span>?
                    </h2>
                    <p className="mt-4 text-base text-slate-600">
                        We're not just another vendor — we're your long-term technology partner.
                    </p>
                </motion.div>

                {/* Cards */}
                <div className="mt-16 grid gap-8 md:grid-cols-3">
                    {features.map((feature, i) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                        >
                            {/* Icon */}
                            <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.color} text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                                <feature.icon size={26} />
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold text-slate-900">{feature.title}</h3>
                            <p className="mt-3 text-sm leading-relaxed text-slate-600">{feature.desc}</p>

                            {/* Points */}
                            <ul className="mt-5 space-y-2">
                                {feature.points.map((point) => (
                                    <li key={point} className="flex items-center gap-2 text-sm text-slate-700">
                                        <CheckCircle2 size={14} className="text-teal-600 shrink-0" />
                                        {point}
                                    </li>
                                ))}
                            </ul>

                            {/* Decorative */}
                            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-slate-100 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}