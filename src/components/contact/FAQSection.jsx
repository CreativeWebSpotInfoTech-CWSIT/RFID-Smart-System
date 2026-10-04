"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, MessageCircleQuestion } from "lucide-react";

const faqs = [
    {
        question: "How do I request a quote for RFID products?",
        answer:
            "Simply fill out the contact form above with your requirements, or email us at info@greenfuturz.com. Our sales team will prepare a customized quote within 24 hours based on your specific needs.",
    },
    {
        question: "What is your typical response time?",
        answer:
            "We respond to all inquiries within 24 hours during business days. For urgent technical support, please call our direct line at +91 9840303796 or +1 (484) 907-2135.",
    },
    {
        question: "Do you offer international shipping?",
        answer:
            "Yes! We ship worldwide from our facilities in Chennai, India and Wilmington, USA. We work with trusted logistics partners to ensure safe and timely delivery of all RFID products.",
    },
    {
        question: "Can I schedule a product demo?",
        answer:
            "Absolutely! We offer live product demonstrations both online and at our facilities. Contact us with your preferred date and time, and we'll arrange a demo tailored to your industry needs.",
    },
    {
        question: "Do you provide post-sale support and training?",
        answer:
            "Yes, we provide comprehensive post-sale support including installation assistance, user training, and ongoing technical support. Our team ensures smooth implementation of all RFID solutions.",
    },
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="relative bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <div className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-3.5 py-1.5 text-xs font-semibold text-teal-800">
                        <MessageCircleQuestion size={14} />
                        FAQ
                    </div>
                    <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        Frequently Asked{" "}
                        <span className="text-teal-700">Questions</span>
                    </h2>
                    <p className="mt-4 text-base text-slate-600">
                        Can't find what you're looking for? Contact us directly.
                    </p>
                </motion.div>

                {/* Accordion */}
                <div className="mt-12 space-y-3">
                    {faqs.map((faq, i) => {
                        const isOpen = openIndex === i;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${isOpen
                                        ? "border-teal-200 bg-teal-50/30 shadow-md"
                                        : "border-slate-200 bg-white hover:border-slate-300"
                                    }`}
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                                >
                                    <span className={`text-base font-semibold transition ${isOpen ? "text-teal-800" : "text-slate-900"}`}>
                                        {faq.question}
                                    </span>
                                    <motion.div
                                        animate={{ rotate: isOpen ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition ${isOpen ? "bg-teal-700 text-white" : "bg-slate-100 text-slate-600"
                                            }`}
                                    >
                                        <ChevronDown size={16} />
                                    </motion.div>
                                </button>

                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 pb-5 text-sm leading-relaxed text-slate-600">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}