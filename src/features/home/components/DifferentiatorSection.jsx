"use client";

import { motion } from "framer-motion";
import { Sparkles, TrendingUp, Shield, Zap, Brain } from "lucide-react";
import { memo } from "react";

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

const FeatureCard = memo(({ feature, index }) => {
    const Icon = feature.icon;

    return (
        <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            itemScope
            itemType="https://schema.org/Service"
        >
            <meta itemProp="name" content={feature.title} />
            <meta itemProp="description" content={feature.desc} />

            <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${feature.color} text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                <Icon className="h-6 w-6" aria-hidden="true" />
            </div>

            <h3 className="text-lg font-bold text-slate-900">{feature.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {feature.desc}
            </p>

            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-slate-50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </motion.article>
    );
});

FeatureCard.displayName = "FeatureCard";

export default function DifferentiatorSection() {
    return (
        <section
            className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 py-24 sm:py-32"
            aria-labelledby="differentiator-heading"
        >
            <div
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(13,148,136,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(13,148,136,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"
                aria-hidden="true"
            />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.header
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto max-w-3xl text-center"
                >
                    <div className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-4 py-1.5 text-xs font-semibold text-purple-800">
                        <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>OUR DIFFERENTIATOR</span>
                    </div>

                    <h2
                        id="differentiator-heading"
                        className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
                    >
                        Waveconnect – AI driven Insights to achieve{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-teal-600">
                            sustainable success
                        </span>
                    </h2>

                    <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
                        In the ever-evolving world of commerce, staying competitive and achieving sustainable success requires more than intuition; it requires insights, analysis, and strategic decisions. Waveconnect.ai is here to provide exactly that, offering you a competitive edge in the retail landscape.
                    </p>
                </motion.header>

                {/* Features Grid */}
                <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={feature.title}
                            feature={feature}
                            index={index}
                        />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="mt-16 text-center"
                >
                </motion.div>
            </div>
        </section>
    );
}