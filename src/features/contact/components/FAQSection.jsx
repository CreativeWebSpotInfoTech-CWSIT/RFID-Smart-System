"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, MessageCircleQuestion } from "lucide-react";
import { faqs } from "../data";

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section
            className="relative bg-white py-14 sm:py-16"
            aria-labelledby="faq-heading"
        >
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1.5 text-xs font-semibold text-blue-900">
                        <MessageCircleQuestion size={14} aria-hidden="true" />
                        FAQ
                    </div>
                    <h2
                        id="faq-heading"
                        className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
                    >
                        Frequently Asked{" "}
                        <span className="text-blue-900">Questions</span>
                    </h2>
                    <p className="mt-3 text-sm text-slate-600">
                        Can&apos;t find what you&apos;re looking for? Contact us directly.
                    </p>
                </motion.div>

                <div className="mt-8 space-y-2.5">
                    {faqs.map((faq, i) => {
                        const isOpen = openIndex === i;
                        return (
                            <motion.div
                                key={faq.question}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.04 }}
                                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${isOpen
                                        ? "border-blue-200 bg-blue-50/40 shadow-md"
                                        : "border-slate-200 bg-white hover:border-slate-300"
                                    }`}
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                                    aria-expanded={isOpen}
                                >
                                    <span
                                        className={`text-sm font-semibold transition ${isOpen ? "text-blue-900" : "text-slate-900"
                                            }`}
                                    >
                                        {faq.question}
                                    </span>
                                    <motion.div
                                        animate={{ rotate: isOpen ? 180 : 0 }}
                                        transition={{ duration: 0.25 }}
                                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition ${isOpen
                                                ? "bg-blue-900 text-white"
                                                : "bg-slate-100 text-slate-600"
                                            }`}
                                    >
                                        <ChevronDown size={14} />
                                    </motion.div>
                                </button>

                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.25 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-5 pb-4 text-sm leading-relaxed text-slate-600">
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