"use client";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const infoCards = [
    {
        icon: MapPin,
        title: "Visit Us",
        subtitle: "Chennai, India",
        desc: "Plot No. 1-A, Sai Illam, Maruthi Nagar Road, Tambaram, Chennai – 600073,Tamil Nadu, India",
        color: "bg-teal-100 text-teal-700",
        hoverColor: "hover:border-teal-300 hover:shadow-teal-100/50",
    },
    {
        icon: Phone,
        title: "Call Us",
        subtitle: "Mon-Fri 9am-6pm",
        desc: "+91 80560 77416",
        color: "bg-purple-100 text-purple-700",
        hoverColor: "hover:border-purple-300 hover:shadow-purple-100/50",
    },
    {
        icon: Mail,
        title: "Email Us",
        subtitle: "24/7 Support",
        desc: "+91 80560 77416",
        color: "bg-orange-100 text-orange-700",
        hoverColor: "hover:border-orange-300 hover:shadow-orange-100/50",
    },
];

export default function ContactInfoCards() {
    return (
        <section className="relative -mt-10 pb-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {infoCards.map((card, i) => (
                        <motion.div
                            key={card.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className={`group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${card.hoverColor}`}
                        >
                            {/* Icon */}
                            <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${card.color} transition-transform duration-300 group-hover:scale-110`}>
                                <card.icon size={24} />
                            </div>

                            {/* Content */}
                            <h3 className="text-lg font-bold text-slate-900">{card.title}</h3>
                            <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-500">
                                {card.subtitle}
                            </p>
                            <p className="mt-3 text-sm leading-relaxed text-slate-600 whitespace-pre-line">
                                {card.desc}
                            </p>

                            {/* Decorative corner */}
                            <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-gradient-to-br from-slate-100 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}