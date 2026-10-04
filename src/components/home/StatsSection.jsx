"use client";
import { motion } from "framer-motion";
import { Globe, Package, Calendar, Building2 } from "lucide-react";

const stats = [
    {
        icon: Globe,
        value: "250+",
        label: "Global Clients",
        desc: "Trusted by industry leaders across 6 major sectors",
        color: "text-teal-700",
        bg: "bg-teal-100",
    },
    {
        icon: Package,
        value: "5,000+",
        label: "Products Delivered",
        desc: "Precision-engineered RFID hardware shipped worldwide",
        color: "text-blue-700",
        bg: "bg-blue-100",
    },
    {
        icon: Calendar,
        value: "17+",
        label: "Years Experience",
        desc: "Deep domain expertise in RFID and operational technology",
        color: "text-purple-700",
        bg: "bg-purple-100",
    },
    {
        icon: Building2,
        value: "5,000",
        label: "Sq.ft Facility",
        desc: "In-house manufacturing and R&D in Chennai",
        color: "text-orange-700",
        bg: "bg-orange-100",
    },
];

export default function StatsSection() {
    return (
        <section className="relative bg-gradient-to-b from-white to-slate-50 py-20 sm:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-xl shadow-slate-200/50">
                    <div className="grid grid-cols-2 divide-x divide-slate-100 lg:grid-cols-4">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="group relative p-8 text-center transition-all duration-300 hover:bg-slate-50/50 sm:p-10"
                            >
                                {/* Icon */}
                                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md">
                                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                                </div>

                                {/* Value */}
                                <p className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                                    {stat.value}
                                </p>

                                {/* Label */}
                                <p className="mt-2 text-sm font-bold text-teal-700 sm:text-base">
                                    {stat.label}
                                </p>

                                {/* Description */}
                                <p className="mt-2 text-xs leading-relaxed text-slate-500 sm:text-sm">
                                    {stat.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}