"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Award, Settings, DollarSign, Headphones, TrendingUp } from "lucide-react";

const reasons = [
    {
        icon: ShieldCheck,
        title: "Industry Expertise",
        desc: "Deep knowledge of RFID technologies across LF, HF, NFC, and UHF platforms.",
    },
    {
        icon: Award,
        title: "Quality Products",
        desc: "Enterprise-grade RFID hardware sourced from trusted global manufacturers.",
    },
    {
        icon: Settings,
        title: "Customized Solutions",
        desc: "Every solution is tailored according to customer requirements, operating environment, and industry standards.",
    },
    {
        icon: DollarSign,
        title: "Competitive Pricing",
        desc: "Cost-effective products without compromising quality or performance.",
    },
    {
        icon: Headphones,
        title: "Technical Support",
        desc: "Pre-sales consultation, deployment guidance, testing assistance, and after-sales support.",
    },
    {
        icon: TrendingUp,
        title: "Scalable Solutions",
        desc: "From pilot projects to enterprise-wide deployments, we scale with your business.",
    },
];

export default function WhyChooseUs() {
    return (
        <section className="relative bg-gradient-to-b from-slate-50 to-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        Why Choose <span className="text-teal-700">RFID Smart System?</span>
                    </h2>
                </motion.div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {reasons.map((reason, i) => (
                        <motion.div
                            key={reason.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                        >
                            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-100 text-teal-700 transition-transform duration-300 group-hover:scale-110">
                                <reason.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">{reason.title}</h3>
                            <p className="mt-3 text-base leading-relaxed text-slate-600">{reason.desc}</p>

                            {/* Decorative corner */}
                            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-teal-50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}