"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    ArrowRight,
    Brain,
    TrendingUp,
    Shield,
    Zap,
    BarChart3,
    Target,
    Sparkles,
    CheckCircle2,
    LineChart,
    Database,
    Cpu,
    Eye,
    Lightbulb,
} from "lucide-react";

const insights = [
    {
        icon: Brain,
        title: "AI-Powered Analytics",
        desc: "Machine learning algorithms analyze your RFID data in real-time to uncover hidden patterns and predict future trends.",
        features: ["Predictive modeling", "Pattern recognition", "Auto-alerts"],
    },
    {
        icon: BarChart3,
        title: "Real-Time Dashboards",
        desc: "Live operational dashboards give you complete visibility into assets, inventory, and workflow performance.",
        features: ["Live metrics", "Custom reports", "Export options"],
    },
    {
        icon: Target,
        title: "Actionable Recommendations",
        desc: "Transform raw data into clear, prioritized actions that drive measurable business outcomes.",
        features: ["Smart suggestions", "Priority scoring", "ROI tracking"],
    },
    {
        icon: Shield,
        title: "Data Security",
        desc: "Enterprise-grade encryption and compliance ensure your operational data stays protected at all times.",
        features: ["End-to-end encryption", "GDPR compliant", "Role-based access"],
    },
];

const metrics = [
    { value: "40%", label: "Faster Decision Making", icon: Zap },
    { value: "65%", label: "Reduction in Manual Effort", icon: TrendingUp },
    { value: "3x", label: "ROI in First Year", icon: LineChart },
    { value: "99.9%", label: "Data Accuracy", icon: Database },
];

const industries = [
    { name: "Manufacturing", icon: Cpu },
    { name: "Retail", icon: Eye },
    { name: "Healthcare", icon: Shield },
    { name: "Logistics", icon: TrendingUp },
    { name: "Automotive", icon: Zap },
    { name: "Pharmaceuticals", icon: Brain },
];

export default function InsightsSection() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white py-24 sm:py-32">
            {/* Background Effects */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-100/40 blur-3xl" />
                <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-cyan-100/30 blur-3xl" />
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage:
                            "linear-gradient(#1e3a5f 1px, transparent 1px), linear-gradient(90deg, #1e3a5f 1px, transparent 1px)",
                        backgroundSize: "40px 40px",
                    }}
                />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mx-auto max-w-3xl text-center"
                >
                    <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold text-blue-900">
                        <Sparkles className="h-3.5 w-3.5" />
                        WAVECONNECT.AI PLATFORM
                    </div>
                    <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                        Insights to Achieve{" "}
                        <span className="relative inline-block">
                            <span className="relative z-10 text-blue-900">Sustainable Success</span>
                            <span className="absolute bottom-1 left-0 right-0 h-3 bg-blue-100/60 -z-0" />
                        </span>
                    </h2>
                    <p className="mt-6 text-lg leading-relaxed text-slate-600">
                        In the ever-evolving world of commerce, staying competitive requires more than intuition —
                        it requires insights, analysis, and strategic decisions. Waveconnect.ai transforms your
                        RFID data into a powerful intelligence engine.
                    </p>
                </motion.div>

                {/* Metrics Row */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4"
                >
                    {metrics.map((metric, i) => (
                        <motion.div
                            key={metric.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
                        >
                            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-900 transition-transform duration-300 group-hover:scale-110">
                                <metric.icon size={22} />
                            </div>
                            <p className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                                {metric.value}
                            </p>
                            <p className="mt-2 text-xs font-medium text-slate-600 sm:text-sm">
                                {metric.label}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Insights Grid */}
                <div className="mt-20 grid gap-6 md:grid-cols-2">
                    {insights.map((item, i) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
                        >
                            {/* Icon */}
                            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-900 to-blue-700 text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                                <item.icon className="h-7 w-7" />
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>

                            {/* Description */}
                            <p className="mt-3 text-sm leading-relaxed text-slate-600">
                                {item.desc}
                            </p>

                            {/* Features */}
                            <ul className="mt-5 space-y-2">
                                {item.features.map((feature) => (
                                    <li
                                        key={feature}
                                        className="flex items-center gap-2 text-sm text-slate-700"
                                    >
                                        <CheckCircle2
                                            size={14}
                                            className="text-blue-700 shrink-0"
                                        />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            {/* Decorative Corner */}
                            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-blue-100/50 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
                        </motion.div>
                    ))}
                </div>

                {/* Industries Served */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-blue-50/30 p-10"
                >
                    <div className="text-center">
                        <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-1.5 text-xs font-semibold text-blue-900">
                            <Lightbulb className="h-3.5 w-3.5" />
                            BUILT FOR EVERY INDUSTRY
                        </div>
                        <h3 className="mt-4 text-2xl font-bold text-slate-900 sm:text-3xl">
                            Industry-Specific Intelligence
                        </h3>
                        <p className="mt-3 text-sm text-slate-600">
                            Tailored insights for your unique operational challenges
                        </p>
                    </div>

                    <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
                        {industries.map((industry, i) => (
                            <motion.div
                                key={industry.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="group flex flex-col items-center gap-2 rounded-2xl border border-slate-200 bg-white p-4 text-center transition-all duration-300 hover:border-blue-200 hover:shadow-md"
                            >
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-900 transition-transform duration-300 group-hover:scale-110">
                                    <industry.icon size={18} />
                                </div>
                                <span className="text-xs font-semibold text-slate-700">
                                    {industry.name}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <Link
                        href="/contacts"
                        className="group inline-flex items-center gap-2 rounded-full bg-blue-900 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-900/25 transition-all duration-300 hover:bg-blue-800 hover:shadow-xl"
                    >
                        Request a Demo
                        <ArrowRight
                            size={18}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </Link>
                    <p className="mt-4 text-sm text-slate-500">
                        See Waveconnect.ai in action — tailored to your business
                    </p>
                </motion.div>
            </div>
        </section>
    );
}