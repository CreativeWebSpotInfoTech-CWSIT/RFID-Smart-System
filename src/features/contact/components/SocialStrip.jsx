"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const LinkedinIcon = ({ size = 20, className = "" }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
        aria-hidden="true"
    >
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM3.54 20.45h3.56V9H3.54v11.45z" />
    </svg>
);

const FacebookIcon = ({ size = 20, className = "" }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
        aria-hidden="true"
    >
        <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.025 4.388 11.017 10.125 11.927v-8.432H7.078v-3.495h3.047V9.406c0-3.025 1.791-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.973h-1.515c-1.491 0-1.956.93-1.956 1.884v2.271h3.328l-.532 3.495h-2.796V24C19.612 23.09 24 18.098 24 12.073z" />
    </svg>
);

const InstagramIcon = ({ size = 20, className = "" }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        aria-hidden="true"
    >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
);

const YoutubeIcon = ({ size = 20, className = "" }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
        aria-hidden="true"
    >
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
);

const TwitterIcon = ({ size = 20, className = "" }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
        aria-hidden="true"
    >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
);

const socials = [
    { icon: LinkedinIcon, label: "LinkedIn", href: "#", color: "hover:bg-blue-600" },
    { icon: FacebookIcon, label: "Facebook", href: "#", color: "hover:bg-blue-700" },
    { icon: InstagramIcon, label: "Instagram", href: "#", color: "hover:bg-pink-600" },
    { icon: YoutubeIcon, label: "YouTube", href: "#", color: "hover:bg-red-600" },
    { icon: TwitterIcon, label: "Twitter", href: "#", color: "hover:bg-sky-500" },
    {
        icon: Mail,
        label: "Email",
        href: "mailto:info@rfidsmartsystem.com",
        color: "hover:bg-blue-900",
    },
];

export default function SocialStrip() {
    return (
        <section
            className="relative overflow-hidden bg-slate-900 py-14 sm:py-16"
            aria-labelledby="social-heading"
        >
            <div className="pointer-events-none absolute inset-0" aria-hidden="true">
                <div className="absolute left-1/4 top-0 h-[280px] w-[280px] rounded-full bg-blue-900/25 blur-[100px]" />
                <div className="absolute right-1/4 bottom-0 h-[250px] w-[250px] rounded-full bg-blue-800/15 blur-[80px]" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h2
                        id="social-heading"
                        className="text-2xl font-bold text-white sm:text-3xl"
                    >
                        Stay Connected with{" "}
                        <span className="text-blue-400">Us</span>
                    </h2>
                    <p className="mx-auto mt-2 max-w-xl text-sm text-slate-400">
                        Follow us on social media for the latest RFID insights, product
                        updates, and industry news.
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-3">
                        {socials.map((social, i) => {
                            const Icon = social.icon;
                            return (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.06 }}
                                    whileHover={{ y: -3, scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`group flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white backdrop-blur-sm transition-all duration-300 ${social.color} hover:border-transparent hover:shadow-lg`}
                                    aria-label={social.label}
                                >
                                    <Icon
                                        size={20}
                                        className="transition-transform duration-300 group-hover:scale-110"
                                    />
                                </motion.a>
                            );
                        })}
                    </div>

                    <div className="mx-auto mt-10 inline-flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm sm:flex-row sm:gap-5">
                        <div className="text-center sm:text-left">
                            <p className="text-sm font-semibold text-white">Prefer email?</p>
                            <p className="text-xs text-slate-400">We respond within 24 hours</p>
                        </div>
                        <a
                            href="mailto:info@rfidsmartsystem.com"
                            className="rounded-full bg-blue-900 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-900/30 transition-all hover:bg-blue-800 hover:shadow-xl"
                        >
                            info@rfidsmartsystem.com
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}