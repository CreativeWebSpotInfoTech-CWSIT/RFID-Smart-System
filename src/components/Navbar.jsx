"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, Search, X, ArrowRight, Users } from "lucide-react";

const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about-us" },
    { name: "Products", href: "/products" },
    { name: "Solutions", href: "/solutions" },
    { name: "Contact", href: "/contacts" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const isActive = (href) => {
        if (href === "/") return pathname === "/";
        return pathname.startsWith(href);
    };

    return (
        <header
            className={`
        fixed inset-x-0 top-0 z-50
        transition-all duration-500
        ${scrolled
                    ? "bg-white/90 border-b border-slate-200/80 shadow-sm backdrop-blur-xl"
                    : "bg-transparent"
                }
      `}
        >
            {/* Grid Pattern Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(13,148,136,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(13,148,136,0.04)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

            <div className="relative mx-auto flex h-[80px] max-w-[1400px] items-center justify-between px-5 sm:px-8 lg:px-10">
                {/* LOGO */}
                <Link href="/" className="group flex shrink-0 items-center gap-3">
                    {/* Circular Teal Icon */}
                    <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-teal-600 to-teal-700 shadow-md shadow-teal-700/30 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-teal-700/40">
                        <Users className="h-6 w-6 text-white" />
                    </div>
                    {/* Brand Text */}
                    <div className="hidden sm:flex flex-col leading-tight">
                        <span className="font-serif-display text-[22px] font-bold tracking-tight text-slate-900">
                            RFID Smart System
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-teal-700">
                            IoT Solutions
                        </span>
                    </div>
                </Link>

                {/* DESKTOP NAV - Pill Container */}
                <nav className="hidden md:flex items-center gap-1 rounded-full border border-slate-200 bg-white/80 px-2 py-2 shadow-sm backdrop-blur-md">
                    {links.map((link) => {
                        const active = isActive(link.href);
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`
                  relative rounded-full px-5 py-2.5 text-[14px] font-medium transition-all duration-300
                  ${active
                                        ? "bg-teal-700 text-white shadow-md shadow-teal-700/25"
                                        : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                                    }
                `}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </nav>

                {/* RIGHT ACTIONS */}
                <div className="hidden md:flex items-center gap-3">
                    {/* Search Button */}
                    <button
                        type="button"
                        aria-label="Search"
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-all duration-300 hover:border-teal-300 hover:bg-teal-50 hover:text-teal-700"
                    >
                        <Search className="h-[18px] w-[18px]" />
                    </button>

                    {/* Get a Quote Button */}
                    <Link
                        href="/contacts"
                        className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-teal-700 px-6 py-3 text-[14px] font-semibold text-white shadow-lg shadow-teal-700/25 transition-all duration-300 hover:bg-teal-800 hover:shadow-xl hover:shadow-teal-700/30"
                    >
                        <span className="relative z-10">Get a Quote</span>
                        <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </Link>
                </div>

                {/* MOBILE BUTTON */}
                <button
                    type="button"
                    aria-label="Toggle menu"
                    onClick={() => setOpen(!open)}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-50 md:hidden"
                >
                    {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
            </div>

            {/* MOBILE MENU */}
            <div
                className={`
          overflow-hidden border-t border-slate-200 bg-white/95 backdrop-blur-xl
          transition-all duration-300 md:hidden
          ${open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
        `}
            >
                <nav className="mx-auto flex max-w-[1400px] flex-col gap-1 px-5 py-5 sm:px-8">
                    {links.map((link) => {
                        const active = isActive(link.href);
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className={`
                  rounded-xl px-4 py-3 text-[15px] font-medium transition
                  ${active
                                        ? "bg-teal-700 text-white"
                                        : "text-slate-700 hover:bg-slate-50 hover:text-teal-700"
                                    }
                `}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                    <Link
                        href="/contacts"
                        onClick={() => setOpen(false)}
                        className="mt-3 flex items-center justify-center gap-2 rounded-full bg-teal-700 px-6 py-3 text-sm font-semibold text-white shadow-md"
                    >
                        Get a Quote
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </nav>
            </div>
        </header>
    );
}