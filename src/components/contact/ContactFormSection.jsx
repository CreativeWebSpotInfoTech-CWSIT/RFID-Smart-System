"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Send, CheckCircle2, Loader2, Clock, User, Mail, Phone, MessageSquare, Building2 } from "lucide-react";

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
    const [status, setStatus] = useState("idle"); // idle | loading | success | error

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus("loading");
        setTimeout(() => {
            setStatus("success");
            setTimeout(() => {
                setStatus("idle");
                setFormData({ name: "", email: "", phone: "", company: "", subject: "", message: "" });
            }, 3000);
        }, 1500);
    };

    return (
        <section className="relative bg-white py-24 sm:py-32">
            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(13,148,136,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(13,148,136,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                    {/* LEFT - Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="mb-8">
                            <div className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-3.5 py-1.5 text-xs font-semibold text-teal-800">
                                <span className="h-1.5 w-1.5 rounded-full bg-teal-600" />
                                SEND A MESSAGE
                            </div>
                            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                                Fill out the form and we'll{" "}
                                <span className="text-teal-700">get back</span> to you
                            </h2>
                            <p className="mt-3 text-base text-slate-600">
                                Our team typically responds within 24 hours.
                            </p>
                        </div>

                        {status === "success" ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="rounded-3xl border border-teal-200 bg-gradient-to-br from-teal-50 to-cyan-50 p-10 text-center"
                            >
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: "spring", stiffness: 200 }}
                                    className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-teal-100"
                                >
                                    <CheckCircle2 className="h-10 w-10 text-teal-700" />
                                </motion.div>
                                <h3 className="text-2xl font-bold text-slate-900">Message Sent!</h3>
                                <p className="mt-2 text-slate-600">
                                    Thank you for reaching out. We'll get back to you within 24 hours.
                                </p>
                            </motion.div>
                        ) : (
                            <form
                                onSubmit={handleSubmit}
                                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/50"
                            >
                                <div className="grid gap-5 sm:grid-cols-2">
                                    {/* Name */}
                                    <div className="relative">
                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                                        <input
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            placeholder="Full Name"
                                            className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-4 text-sm text-slate-900 placeholder-slate-400 transition focus:border-teal-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500/20"
                                        />
                                    </div>

                                    {/* Email */}
                                    <div className="relative">
                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                                        <input
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            placeholder="Email Address"
                                            className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-4 text-sm text-slate-900 placeholder-slate-400 transition focus:border-teal-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500/20"
                                        />
                                    </div>

                                    {/* Phone */}
                                    <div className="relative">
                                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                                        <input
                                            type="tel"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            placeholder="Phone Number"
                                            className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-4 text-sm text-slate-900 placeholder-slate-400 transition focus:border-teal-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500/20"
                                        />
                                    </div>

                                    {/* Company */}
                                    <div className="relative">
                                        <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                                        <input
                                            type="text"
                                            value={formData.company}
                                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                            placeholder="Company Name"
                                            className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-4 text-sm text-slate-900 placeholder-slate-400 transition focus:border-teal-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500/20"
                                        />
                                    </div>

                                    {/* Subject */}
                                    <div className="relative sm:col-span-2">
                                        <select
                                            required
                                            value={formData.subject}
                                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                            className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-4 pr-4 text-sm text-slate-900 transition focus:border-teal-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500/20"
                                        >
                                            <option value="">Select Subject</option>
                                            {subjects.map((s) => (
                                                <option key={s} value={s}>{s}</option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* Message */}
                                    <div className="relative sm:col-span-2">
                                        <MessageSquare className="absolute left-4 top-4 h-4 w-4 text-slate-400" />
                                        <textarea
                                            required
                                            rows={5}
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            placeholder="Tell us about your project..."
                                            className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-4 text-sm text-slate-900 placeholder-slate-400 transition focus:border-teal-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500/20 resize-none"
                                        />
                                    </div>
                                </div>

                                {/* Submit */}
                                <button
                                    type="submit"
                                    disabled={status === "loading"}
                                    className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-teal-700 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-teal-700/25 transition-all duration-300 hover:bg-teal-800 hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
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

                    {/* RIGHT - Map + Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col gap-6"
                    >
                        {/* Map */}
                        <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-lg shadow-slate-200/50">
                            <div className="aspect-[4/3] w-full">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.0!2d80.2!3d12.95!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU3JzAwLjAiTiA4MMKwMTInMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    title="Office Location"
                                    className="w-full h-full"
                                />
                            </div>
                        </div>

                        {/* Working Hours Card */}
                        <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-teal-50 to-cyan-50 p-8">
                            <div className="flex items-center gap-3 mb-5">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-100 text-teal-700">
                                    <Clock size={22} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900">Working Hours</h3>
                                    <p className="text-xs text-slate-600">When you can reach us</p>
                                </div>
                            </div>

                            <div className="space-y-3">
                                {[
                                    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM", active: true },
                                    { day: "Saturday", hours: "10:00 AM - 2:00 PM", active: true },
                                    { day: "Sunday", hours: "Closed", active: false },
                                ].map((item) => (
                                    <div
                                        key={item.day}
                                        className="flex items-center justify-between rounded-xl bg-white/70 px-4 py-3 backdrop-blur-sm"
                                    >
                                        <span className="text-sm font-medium text-slate-700">{item.day}</span>
                                        <span className={`text-sm font-semibold ${item.active ? "text-teal-700" : "text-slate-400"}`}>
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