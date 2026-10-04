"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
    Mail,
    Phone,
    MapPin,
    Download,
    ArrowUpRight,
    Send,
} from "lucide-react";

const currentYear = new Date().getFullYear();

// LinkedIn Icon
const LinkedinIcon = ({ className }) => (
    <svg
        className={className}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM3.54 20.45h3.56V9H3.54v11.45z" />
    </svg>
);

// Facebook Icon
const FacebookIcon = ({ className }) => (
    <svg
        className={className}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
);

// Instagram Icon
const InstagramIcon = ({ className }) => (
    <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        xmlns="http://www.w3.org/2000/svg"
    >
        <rect
            width="20"
            height="20"
            x="2"
            y="2"
            rx="5"
            ry="5"
        />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
);

// YouTube Icon
const YoutubeIcon = ({ className }) => (
    <svg
        className={className}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
);

// Twitter / X Icon
const TwitterIcon = ({ className }) => (
    <svg
        className={className}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
);

const products = [
    { name: "RFID Readers", href: "/products/readers" },
    { name: "RFID Antenna", href: "/products/antenna" },
    { name: "RFID Tags", href: "/products/tags" },
    { name: "RFID Security", href: "/products/security" },
    { name: "RFID Barcode", href: "/products/barcode" },
];

const quickLinks = [
    { name: "About", href: "/about-us" },
    { name: "Innovations", href: "/innovations" },
    { name: "Services", href: "/services" },
    { name: "Solutions", href: "/solutions" },
    { name: "Contact", href: "/contacts" },
];

const socials = [
    {
        icon: LinkedinIcon,
        href: "#",
        label: "LinkedIn",
    },
    {
        icon: FacebookIcon,
        href: "#",
        label: "Facebook",
    },
    {
        icon: InstagramIcon,
        href: "#",
        label: "Instagram",
    },
    {
        icon: YoutubeIcon,
        href: "#",
        label: "YouTube",
    },
    {
        icon: TwitterIcon,
        href: "#",
        label: "Twitter",
    },
];

export default function Footer() {
    return (
        <footer className="relative mt-24 overflow-hidden bg-white">
            {/* Wave Separator */}
            <div className="relative h-32 w-full overflow-hidden bg-white">
                <svg
                    className="absolute bottom-0 h-full w-full"
                    viewBox="0 0 1440 120"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z"
                        fill="#f8fafc"
                    />
                </svg>
            </div>

            {/* Main Footer Background */}
            <div className="relative bg-[#f8fafc] pt-16 pb-8">
                {/* Subtle Teal Background Glow Effects */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <div className="absolute -left-20 top-20 h-64 w-64 rounded-full bg-teal-500/10 blur-3xl" />

                    <div className="absolute right-20 bottom-20 h-64 w-64 rounded-full bg-teal-400/10 blur-3xl" />
                </div>

                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {/* Top Grid */}
                    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5 lg:gap-8">
                        {/* Column 1: Global HQ */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h3 className="mb-5 text-lg font-bold text-teal-700">
                                Global HQ
                            </h3>

                            <div className="flex items-start gap-2 text-sm leading-relaxed text-slate-600">
                                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal-700" />

                                <p>
                                    1201 N Orange St., STE 7445, Wilmington, DE 19801, USA
                                </p>
                            </div>
                        </motion.div>

                        {/* Column 2: Corporate Office */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: 0.05,
                            }}
                        >
                            <h3 className="mb-5 text-lg font-bold text-teal-700">
                                Corporate Office
                            </h3>

                            <div className="flex items-start gap-2 text-sm leading-relaxed text-slate-600">
                                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal-700" />

                                <p>
                                    Second Floor, Plot no.4, Ranga Colony, Rajakilpakkam,
                                    Chennai-600073, Tamilnadu, India
                                </p>
                            </div>
                        </motion.div>

                        {/* Column 3: Products */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: 0.1,
                            }}
                        >
                            <h3 className="mb-5 text-lg font-bold text-teal-700">
                                Products
                            </h3>

                            <ul className="space-y-2.5">
                                {products.map((item) => (
                                    <li key={item.name}>
                                        <Link
                                            href={item.href}
                                            className="group inline-flex items-center gap-1.5 text-sm text-slate-600 transition hover:text-teal-700"
                                        >
                                            <span className="h-1 w-1 rounded-full bg-teal-600 opacity-0 transition group-hover:opacity-100" />

                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Column 4: Quick Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: 0.15,
                            }}
                        >
                            <h3 className="mb-5 text-lg font-bold text-teal-700">
                                Quick Links
                            </h3>

                            <ul className="space-y-2.5">
                                {quickLinks.map((item) => (
                                    <li key={item.name}>
                                        <Link
                                            href={item.href}
                                            className="group inline-flex items-center gap-1.5 text-sm text-slate-600 transition hover:text-teal-700"
                                        >
                                            <span className="h-1 w-1 rounded-full bg-teal-600 opacity-0 transition group-hover:opacity-100" />

                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Column 5: Contact Us */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: 0.2,
                            }}
                        >
                            <h3 className="mb-5 text-lg font-bold text-teal-700">
                                Contact Us
                            </h3>

                            <div className="space-y-4">
                                <div>
                                    <p className="mb-2 text-xs font-bold uppercase tracking-wider text-teal-700">
                                        USA
                                    </p>

                                    <div className="space-y-1 text-sm text-slate-600">
                                        <p className="flex items-center gap-2">
                                            <Phone className="h-3.5 w-3.5 text-teal-700" />
                                            Direct: +1 (484) 907-2135
                                        </p>

                                        <p className="flex items-center gap-2">
                                            <Phone className="h-3.5 w-3.5 text-teal-700" />
                                            Board: +1 (484) 917-1220 ext. 111
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <p className="mb-2 text-xs font-bold uppercase tracking-wider text-teal-700">
                                        INDIA
                                    </p>

                                    <div className="space-y-1 text-sm text-slate-600">
                                        <p className="flex items-center gap-2">
                                            <Phone className="h-3.5 w-3.5 text-teal-700" />
                                            +91 9840303796
                                        </p>

                                        <p className="flex items-center gap-2">
                                            <Phone className="h-3.5 w-3.5 text-teal-700" />
                                            +91 7305058032
                                        </p>

                                        <p className="flex items-center gap-2">
                                            <Phone className="h-3.5 w-3.5 text-teal-700" />
                                            +91 9840303204
                                        </p>

                                        <p className="flex items-center gap-2">
                                            <Phone className="h-3.5 w-3.5 text-teal-700" />
                                            +91 9840336319
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Middle Section */}
                    <div className="mt-14 grid grid-cols-1 gap-10 border-t border-slate-200 pt-10 md:grid-cols-3">
                        {/* Connect With Us */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: 0.25,
                            }}
                        >
                            <h3 className="mb-4 text-lg font-bold text-teal-700">
                                Connect with us
                            </h3>

                            <div className="space-y-2">
                                <a
                                    href="mailto:info@greenfuturz.com"
                                    className="group flex items-center gap-2 text-sm text-slate-600 transition hover:text-teal-700"
                                >
                                    <Mail className="h-4 w-4 text-teal-700" />

                                    info@greenfuturz.com
                                </a>

                                <a
                                    href="mailto:rfid@greenfuturz.com"
                                    className="group flex items-center gap-2 text-sm text-slate-600 transition hover:text-teal-700"
                                >
                                    <Mail className="h-4 w-4 text-teal-700" />

                                    rfid@greenfuturz.com
                                </a>
                            </div>

                            {/* Social Icons */}
                            <div className="mt-5 flex gap-2">
                                {socials.map((social) => {
                                    const Icon = social.icon;

                                    return (
                                        <a
                                            key={social.label}
                                            href={social.href}
                                            aria-label={social.label}
                                            className="group flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 shadow-sm transition-all duration-300 hover:border-teal-600 hover:bg-teal-700 hover:text-white hover:shadow-md hover:shadow-teal-700/20"
                                        >
                                            <Icon className="h-4 w-4" />
                                        </a>
                                    );
                                })}
                            </div>
                        </motion.div>

                        {/* Newsletter */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: 0.3,
                            }}
                        >
                            <h3 className="mb-4 text-lg font-bold text-teal-700">
                                Stay Updated
                            </h3>

                            <p className="mb-4 text-sm text-slate-500">
                                Subscribe to get the latest RFID insights and updates.
                            </p>

                            <form
                                onSubmit={(e) => e.preventDefault()}
                                className="flex overflow-hidden rounded-full border border-slate-200 bg-white shadow-sm transition focus-within:border-teal-500 focus-within:ring-2 focus-within:ring-teal-500/10"
                            >
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="flex-1 bg-transparent px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 outline-none"
                                />

                                <button
                                    type="submit"
                                    aria-label="Subscribe"
                                    className="bg-teal-700 px-4 text-white transition hover:bg-teal-800"
                                >
                                    <Send className="h-4 w-4" />
                                </button>
                            </form>
                        </motion.div>

                        {/* Corporate Brochure */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: 0.35,
                            }}
                        >
                            <h3 className="mb-4 text-lg font-bold text-teal-700">
                                Corporate Brochure
                            </h3>

                            <p className="mb-5 text-sm text-slate-500">
                                Download our complete product catalog and company overview.
                            </p>

                            <a
                                href="#"
                                className="group inline-flex items-center gap-2 rounded-full bg-teal-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-700/25 transition-all duration-300 hover:bg-teal-800 hover:shadow-xl hover:shadow-teal-700/30"
                            >
                                <Download className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />

                                Download

                                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </a>
                        </motion.div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 sm:flex-row">
                        {/* Brand */}
                        <div className="flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-700/10">
                                <div className="h-3 w-3 rounded-full bg-teal-700" />
                            </div>

                            <span className="text-sm font-semibold text-slate-900">
                                RFID Smart System
                            </span>
                        </div>

                        {/* Copyright */}
                        <p className="text-xs text-slate-500">
                            © {currentYear} RFID Smart System. All rights reserved.
                        </p>

                        {/* Legal Links */}
                        <div className="flex gap-6 text-xs text-slate-500">
                            <Link
                                href="/privacy"
                                className="transition hover:text-teal-700"
                            >
                                Privacy Policy
                            </Link>

                            <Link
                                href="/terms"
                                className="transition hover:text-teal-700"
                            >
                                Terms of Service
                            </Link>

                            <Link
                                href="/sitemap"
                                className="transition hover:text-teal-700"
                            >
                                Sitemap
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
