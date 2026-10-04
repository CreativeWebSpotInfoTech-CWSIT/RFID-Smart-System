"use client";
import { motion } from "framer-motion";
import { Sparkles, TrendingUp, Shield, Zap, Brain, Target } from "lucide-react";

const features = [
    {
        icon: Brain,
        title: "AI-Driven Insights",
        desc: "Advanced analytics and machine learning to predict trends and optimize operations.",
        color: "from-purple-500 to-purple-600",
    },
    {
        icon: TrendingUp,
        title: "Sustainable Success",
        desc: "Data-driven strategies that ensure long-term growth and competitive advantage.",
        color: "from-teal-500 to-teal-600",
    },
    {
        icon: Shield,
        title: "Competitive Edge",
        desc: "Stay ahead in the retail landscape with real-time market intelligence.",
        color: "from-blue-500 to-blue-600",
    },
    {
        icon: Zap,
        title: "Strategic Decisions",
        desc: "Transform insights into actionable strategies for maximum impact.",
        color: "from-orange-500 to-orange-600",
    },
];

export default function DifferentiatorSection() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 py-24 sm:py-32">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(13,148,136,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(13,148,136,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mx-auto max-w-3xl text-center"
                >
                    <div className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-4 py-1.5 text-xs font-semibold text-purple-800">
                        <Sparkles className="h-3.5 w-3.5" />
                        OUR DIFFERENTIATOR
                    </div>
                    <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                        Waveconnect – AI driven Insights to achieve{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-teal-600">
                            sustainable success
                        </span>
                    </h2>
                    <p className="mt-6 text-lg leading-relaxed text-slate-600">
                        In the ever-evolving world of commerce, staying competitive and achieving sustainable success requires more than intuition; it requires insights, analysis, and strategic decisions. Waveconnect.ai is here to provide exactly that, offering you a competitive edge in the retail landscape.
                    </p>
                </motion.div>

                {/* Features Grid */}
                <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature, i) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                        >
                            <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${feature.color} text-white shadow-lg`}>
                                <feature.icon className="h-6 w-6" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900">{feature.title}</h3>
                            <p className="mt-2 text-sm leading-relaxed text-slate-600">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                </motion.div>
            </div>
        </section>
    );
}