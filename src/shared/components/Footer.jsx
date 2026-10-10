"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, ArrowUpRight } from "lucide-react";

const currentYear = new Date().getFullYear();

const LinkedinIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM3.54 20.45h3.56V9H3.54v11.45z" />
    </svg>
);

const FacebookIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
);

const InstagramIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
);

const YoutubeIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.12 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
);

const TwitterIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
);

const quickLinks = [
    { name: "About Us", href: "/about-us" },
    { name: "Products", href: "/products" },
    { name: "Solutions", href: "/solutions" },
    { name: "Contact", href: "/contacts" },
];

const socials = [
    { icon: LinkedinIcon, href: "#", label: "LinkedIn" },
    { icon: FacebookIcon, href: "#", label: "Facebook" },
    { icon: InstagramIcon, href: "#", label: "Instagram" },
    { icon: YoutubeIcon, href: "#", label: "YouTube" },
    { icon: TwitterIcon, href: "#", label: "Twitter" },
];

export default function Footer() {
    return (
        <footer className="relative mt-20 overflow-hidden bg-white">

            {/* Wave Separator */}
            <div className="relative h-20 w-full overflow-hidden leading-none">
                <svg
                    className="absolute bottom-0 w-full h-full"
                    viewBox="0 0 1440 100"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M0,60 C180,100 360,20 540,50 C720,80 900,30 1080,55 C1260,80 1350,40 1440,60 L1440,100 L0,100 Z"
                        fill="#f8fafc"
                    />
                </svg>
            </div>

            {/* Main Footer */}
            <div className="relative bg-slate-50 pt-12 pb-10">

                {/* Soft Glow */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-blue-900/5 blur-3xl" />
                    <div className="absolute right-10 bottom-10 h-64 w-64 rounded-full bg-blue-800/5 blur-3xl" />
                </div>

                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                    {/* Main Grid */}
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">

                        {/* Brand Column */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-4"
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-900 text-white font-bold text-lg shadow-md">
                                    R
                                </div>
                                <span className="text-xl font-bold text-slate-900">RFID Smart System</span>
                            </div>

                            <p className="text-sm font-medium text-blue-900 mb-3">
                                Intelligent Asset Tracking & Automation Solutions
                            </p>

                            <p className="text-sm leading-relaxed text-slate-600 max-w-sm">
                                Delivering high-performance RFID & IoT solutions that help businesses
                                achieve real-time visibility and operational excellence.
                            </p>

                            {/* Social Icons */}
                            <div className="mt-6 flex gap-2.5">
                                {socials.map((social) => {
                                    const Icon = social.icon;
                                    return (
                                        <a
                                            key={social.label}
                                            href={social.href}
                                            aria-label={social.label}
                                            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 shadow-sm transition-all duration-300 hover:border-blue-900 hover:bg-blue-900 hover:text-white hover:-translate-y-0.5"
                                        >
                                            <Icon className="h-4 w-4" />
                                        </a>
                                    );
                                })}
                            </div>
                        </motion.div>

                        {/* Links Columns */}
                        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8 lg:grid-cols-3">

                            {/* Office */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                            >
                                <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900 mb-5">
                                    Office
                                </h4>
                                <div className="flex items-start gap-2.5 text-sm text-slate-600">
                                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blue-900" />
                                    <p className="leading-relaxed">
                                        Plot No. 1-A, Sai Illam,<br />
                                        Maruthi Nagar Road, Tambaram,<br />
                                        Chennai - 600073,<br />
                                        Tamil Nadu, India
                                    </p>
                                </div>
                            </motion.div>

                            {/* Quick Links */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.15 }}
                            >
                                <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900 mb-5">
                                    Quick Links
                                </h4>
                                <ul className="space-y-3">
                                    {quickLinks.map((item) => (
                                        <li key={item.name}>
                                            <Link
                                                href={item.href}
                                                className="group inline-flex items-center gap-1 text-sm text-slate-600 transition hover:text-blue-900"
                                            >
                                                {item.name}
                                                <ArrowUpRight className="h-3.5 w-3.5 opacity-0 -translate-y-0.5 transition group-hover:opacity-100 group-hover:translate-y-0" />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>

                            {/* Contact */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900 mb-5">
                                    Contact
                                </h4>
                                <div className="space-y-3 text-sm text-slate-600">
                                    <p className="font-medium text-slate-800">Sales Team</p>
                                    <a href="tel:+918056077416" className="flex items-center gap-2.5 transition hover:text-blue-900">
                                        <Phone className="h-4 w-4 text-blue-900" />
                                        +91 80560 77416
                                    </a>
                                    <a href="tel:+919840303796" className="flex items-center gap-2.5 transition hover:text-blue-900">
                                        <Phone className="h-4 w-4 text-blue-900" />
                                        +91 98403 03796
                                    </a>
                                    <a href="mailto:info@rfidsmartsystem.com" className="flex items-center gap-2.5 transition hover:text-blue-900">
                                        <Mail className="h-4 w-4 text-blue-900" />
                                        info@rfidsmartsystem.com
                                    </a>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Newsletter */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.25 }}
                        className="mt-14 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
                    >
                        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <h4 className="text-lg font-semibold text-slate-900">Stay Updated</h4>
                                <p className="mt-1 text-sm text-slate-500">
                                    Get the latest RFID insights and product updates.
                                </p>
                            </div>

                            <form
                                onSubmit={(e) => e.preventDefault()}
                                className="flex w-full max-w-md overflow-hidden rounded-full border border-slate-200 bg-slate-50 focus-within:border-blue-900 focus-within:ring-2 focus-within:ring-blue-900/10"
                            >
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 bg-transparent px-5 py-3 text-sm text-slate-800 placeholder-slate-400 outline-none"
                                />
                                <button
                                    type="submit"
                                    className="flex items-center gap-2 bg-blue-900 px-5 text-sm font-medium text-white transition hover:bg-blue-800"
                                >
                                    Subscribe
                                    <Send className="h-4 w-4" />
                                </button>
                            </form>
                        </div>
                    </motion.div>

                    {/* Bottom Bar */}
                    <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 sm:flex-row">
                        <p className="text-sm text-slate-500">
                            © {currentYear} RFID Smart System. All rights reserved.
                        </p>

                        <div className="flex gap-6 text-sm text-slate-500">
                            <Link href="/privacy" className="transition hover:text-blue-900">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="transition hover:text-blue-900">
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}