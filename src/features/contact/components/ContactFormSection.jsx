"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
    Send,
    CheckCircle2,
    Loader2,
    Clock,
    User,
    Mail,
    Phone,
    MessageSquare,
    Building2,
    AlertCircle,
} from "lucide-react";

const subjects = [
    "Sales Inquiry",
    "Technical Support",
    "Partnership",
    "Product Demo",
    "Other",
];

export default function ContactFormSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
    });
    const [status, setStatus] = useState("idle");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: "YOUR_ACCESS_KEY_HERE",
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone || "Not provided",
                    company: formData.company || "Not provided",
                    subject: formData.subject,
                    message: formData.message,
                    from_name: "RFID Smart System Website",
                    replyto: formData.email,
                }),
            });

            const data = await res.json();

            if (data.success) {
                setStatus("success");
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    company: "",
                    subject: "",
                    message: "",
                });
                setTimeout(() => setStatus("idle"), 5000);
            } else {
                setStatus("error");
                setTimeout(() => setStatus("idle"), 4000);
            }
        } catch (err) {
            setStatus("error");
            setTimeout(() => setStatus("idle"), 4000);
        }
    };

    return (
        <section
            className="relative bg-white py-14 sm:py-16"
            aria-labelledby="form-heading"
        >
            <div
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(30,58,95,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(30,58,95,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"
                aria-hidden="true"
            />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
                    {/* LEFT - Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="mb-6">
                            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1.5 text-xs font-semibold text-blue-900">
                                <span
                                    className="h-1.5 w-1.5 rounded-full bg-blue-900"
                                    aria-hidden="true"
                                />
                                SEND A MESSAGE
                            </div>
                            <h2
                                id="form-heading"
                                className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
                            >
                                Fill out the form and we&apos;ll{" "}
                                <span className="text-blue-900">get back</span> to you
                            </h2>
                            <p className="mt-2 text-sm text-slate-600">
                                Our team typically responds within 24 hours.
                            </p>
                        </div>

                        {status === "success" ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-slate-50 p-10 text-center"
                            >
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: "spring", stiffness: 200 }}
                                    className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100"
                                >
                                    <CheckCircle2 className="h-8 w-8 text-blue-900" />
                                </motion.div>
                                <h3 className="text-xl font-bold text-slate-900">
                                    Message Sent!
                                </h3>
                                <p className="mt-2 text-sm text-slate-600">
                                    Thank you for reaching out. We&apos;ll get back to you within
                                    24 hours.
                                </p>
                            </motion.div>
                        ) : (
                            <form
                                onSubmit={handleSubmit}
                                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/40 sm:p-8"
                            >
                                <div className="grid gap-4 sm:grid-cols-2">
                                    {/* Name */}
                                    <div className="relative">
                                        <User className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                                        <input
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) =>
                                                setFormData({ ...formData, name: e.target.value })
                                            }
                                            placeholder="Full Name"
                                            className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm text-slate-900 placeholder-slate-400 transition focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                                        />
                                    </div>

                                    {/* Email */}
                                    <div className="relative">
                                        <Mail className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                                        <input
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) =>
                                                setFormData({ ...formData, email: e.target.value })
                                            }
                                            placeholder="Email Address"
                                            className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm text-slate-900 placeholder-slate-400 transition focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                                        />
                                    </div>

                                    {/* Phone */}
                                    <div className="relative">
                                        <Phone className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                                        <input
                                            type="tel"
                                            value={formData.phone}
                                            onChange={(e) =>
                                                setFormData({ ...formData, phone: e.target.value })
                                            }
                                            placeholder="Phone Number"
                                            className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm text-slate-900 placeholder-slate-400 transition focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                                        />
                                    </div>

                                    {/* Company */}
                                    <div className="relative">
                                        <Building2 className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                                        <input
                                            type="text"
                                            value={formData.company}
                                            onChange={(e) =>
                                                setFormData({ ...formData, company: e.target.value })
                                            }
                                            placeholder="Company Name"
                                            className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm text-slate-900 placeholder-slate-400 transition focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                                        />
                                    </div>

                                    {/* Subject */}
                                    <div className="relative sm:col-span-2">
                                        <select
                                            required
                                            value={formData.subject}
                                            onChange={(e) =>
                                                setFormData({ ...formData, subject: e.target.value })
                                            }
                                            className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-4 pr-4 text-sm text-slate-900 transition focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                                        >
                                            <option value="">Select Subject</option>
                                            {subjects.map((s) => (
                                                <option key={s} value={s}>
                                                    {s}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* Message */}
                                    <div className="relative sm:col-span-2">
                                        <MessageSquare className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                                        <textarea
                                            required
                                            rows={4}
                                            value={formData.message}
                                            onChange={(e) =>
                                                setFormData({ ...formData, message: e.target.value })
                                            }
                                            placeholder="Tell us about your project..."
                                            className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm text-slate-900 placeholder-slate-400 transition focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                                        />
                                    </div>
                                </div>

                                {/* Error Message */}
                                {status === "error" && (
                                    <div className="mt-4 flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                                        <AlertCircle size={16} className="shrink-0" />
                                        Something went wrong. Please try again or email us at
                                        info@rfidsmartsystem.com
                                    </div>
                                )}

                                {/* Submit */}
                                <button
                                    type="submit"
                                    disabled={status === "loading"}
                                    className="btn-shimmer mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-blue-900 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-900/25 transition-all duration-300 hover:bg-blue-800 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
                                >
                                    {status === "loading" ? (
                                        <>
                                            <Loader2 className="h-4 w-4 animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            Send Message
                                            <Send size={16} />
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </motion.div>

                    {/* Map + Hours */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col gap-5"
                    >
                        {/* Map */}
                        <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-lg shadow-slate-200/40">
                            <div className="aspect-[4/3] w-full">
                                <iframe
                                    src="https://www.google.com/maps?q=Plot+No.+1-A,+Sai+Illam,+Maruthi+Nagar+Road,+Tambaram,+Chennai+600073,+Tamil+Nadu,+India&output=embed"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="RFID Smart System - Chennai Office"
                                    className="h-full w-full"
                                />
                            </div>
                        </div>

                        {/* Working Hours */}
                        <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-blue-50 to-slate-50 p-6">
                            <div className="mb-4 flex items-center gap-3">
                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-900">
                                    <Clock size={20} aria-hidden="true" />
                                </div>
                                <div>
                                    <h3 className="text-base font-bold text-slate-900">
                                        Working Hours
                                    </h3>
                                    <p className="text-xs text-slate-600">When you can reach us</p>
                                </div>
                            </div>

                            <div className="space-y-2.5">
                                {[
                                    {
                                        day: "Monday – Friday",
                                        hours: "9:00 AM – 6:00 PM",
                                        active: true,
                                    },
                                    {
                                        day: "Saturday",
                                        hours: "10:00 AM – 2:00 PM",
                                        active: true,
                                    },
                                    { day: "Sunday", hours: "Closed", active: false },
                                ].map((item) => (
                                    <div
                                        key={item.day}
                                        className="flex items-center justify-between rounded-xl bg-white/80 px-4 py-2.5 backdrop-blur-sm"
                                    >
                                        <span className="text-sm font-medium text-slate-700">
                                            {item.day}
                                        </span>
                                        <span
                                            className={`text-sm font-semibold ${item.active ? "text-blue-900" : "text-slate-400"
                                                }`}
                                        >
                                            {item.hours}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}