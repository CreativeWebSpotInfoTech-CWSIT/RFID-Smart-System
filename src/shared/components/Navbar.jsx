"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
    Menu,
    X,
    ArrowUpRight,
    ChevronDown,
    Tag,
    Radio,
    Wifi,
    Printer,
    Package,
    Award,
    Monitor,
    Warehouse,
    Wrench,
    Shirt,
    Truck,
    Lock,
    Factory,
} from "lucide-react";

const mainLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about-us" },
    { name: "Products", href: "/products", hasDropdown: true },
    { name: "Solutions", href: "/solutions", hasDropdown: true },
    { name: "Contact", href: "/contacts" },
];

const productLinks = [
    { name: "Tags & Labels", href: "/products/tags-labels", icon: Tag, desc: "UHF, On-Metal, Laundry & Vehicle tags" },
    { name: "RFID Readers", href: "/products/readers", icon: Radio, desc: "Fixed, Handheld & Desktop readers" },
    { name: "Antennas", href: "/products/antennas", icon: Wifi, desc: "Circular & Linear polarized antennas" },
    { name: "Printers", href: "/products/printers", icon: Printer, desc: "Industrial RFID label printers" },
    { name: "Accessories", href: "/products/accessories", icon: Package, desc: "Encoders, cables, mounting kits" },
    { name: "Authorized Brands", href: "/products/brands", icon: Award, desc: "Zebra, Impinj, Alien, Honeywell" },
];

const solutionLinks = [
    { name: "Asset Tracking", href: "/solutions/asset-tracking", icon: Package, desc: "Real-time valuable asset identification" },
    { name: "Inventory Management", href: "/solutions/inventory-management", icon: Monitor, desc: "99.9% accuracy, reduced manual effort" },
    { name: "Warehouse Automation", href: "/solutions/warehouse-automation", icon: Warehouse, desc: "Automate inbound, outbound processes" },
    { name: "Tool Tracking", href: "/solutions/tool-tracking", icon: Wrench, desc: "Monitor equipment & maintenance history" },
    { name: "Laundry Management", href: "/solutions/laundry-management", icon: Shirt, desc: "Automate linen counting & lifecycle" },
    { name: "Vehicle Management", href: "/solutions/vehicle-management", icon: Truck, desc: "RFID-based parking & fleet identification" },
    { name: "Access Control", href: "/solutions/access-control", icon: Lock, desc: "Secure access using RFID credentials" },
    { name: "WIP Tracking", href: "/solutions/wip-tracking", icon: Factory, desc: "Monitor production status across lines" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const pathname = usePathname();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Reset scroll to top on every route change
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
    }, [pathname]);

    const isActive = (href) => {
        if (href === "/") return pathname === "/";
        return pathname.startsWith(href);
    };

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled
                ? "bg-white/90 border-b border-slate-200/80 shadow-sm backdrop-blur-xl"
                : "bg-transparent"
                }`}
        >
            <div className="mx-auto flex h-[80px] max-w-[1400px] items-center justify-between px-5 sm:px-8 lg:px-10">

                {/* Logo - Bigger & Clearer */}
                <Link href="/" className="group flex shrink-0 items-center gap-3.5">
                    <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-200 transition-all duration-300 group-hover:ring-blue-500/50 group-hover:shadow-md">
                        <Image
                            src="/images/logo.png"
                            alt="RFID Smart System"
                            width={48}
                            height={48}
                            priority
                            className="object-contain p-1"
                        />
                    </div>
                    <div className="hidden sm:flex flex-col leading-none">
                        <span className="text-[20px] font-bold tracking-[-0.03em] text-slate-900">
                            RFID <span className="text-blue-900">Smart System</span>
                        </span>
                        <span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.28em] text-slate-500">
                            IoT Solutions
                        </span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-1 rounded-full border border-slate-200 bg-white/80 px-2 py-2 shadow-sm backdrop-blur-md">
                    {mainLinks.map((link) => {
                        const active = isActive(link.href);
                        return link.hasDropdown ? (
                            <div
                                key={link.name}
                                className="relative"
                                onMouseEnter={() => setActiveDropdown(link.name)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <button
                                    className={`flex items-center gap-1 rounded-full px-4 py-2.5 text-[14px] font-medium transition-all duration-300 ${active
                                        ? "bg-blue-900 text-white shadow-sm"
                                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                                        }`}
                                >
                                    {link.name}
                                    <ChevronDown
                                        size={14}
                                        className={`transition-transform duration-300 ${activeDropdown === link.name ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>

                                <div
                                    className={`absolute top-full left-0 mt-2 w-80 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl shadow-slate-200/50 transition-all duration-200 origin-top ${activeDropdown === link.name
                                        ? "opacity-100 scale-100 visible"
                                        : "opacity-0 scale-95 invisible"
                                        }`}
                                >
                                    {(link.name === "Products" ? productLinks : solutionLinks).map(
                                        (item) => (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                className="flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-blue-50"
                                            >
                                                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-900">
                                                    <item.icon size={16} />
                                                </div>
                                                <div>
                                                    <p className="text-sm font-semibold text-slate-900">
                                                        {item.name}
                                                    </p>
                                                    <p className="text-xs text-slate-500 leading-relaxed">
                                                        {item.desc}
                                                    </p>
                                                </div>
                                            </Link>
                                        )
                                    )}
                                </div>
                            </div>
                        ) : (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`rounded-full px-4 py-2.5 text-[14px] font-medium transition-all duration-300 ${active
                                    ? "bg-blue-900 text-white shadow-sm"
                                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </nav>

                {/* CTA */}
                <div className="hidden md:flex items-center gap-3">
                    <Link
                        href="/contacts"
                        className="btn-shimmer group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-blue-900 px-5 py-2.5 text-[13px] font-semibold text-white shadow-md shadow-blue-900/20 transition-all duration-300 hover:bg-blue-800 hover:shadow-lg"
                    >
                        <span className="relative z-10">Get a Quote</span>
                        <ArrowUpRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    type="button"
                    aria-label="Toggle menu"
                    onClick={() => setOpen(!open)}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-50 md:hidden"
                >
                    {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`overflow-hidden border-t border-slate-200 bg-white/95 backdrop-blur-xl transition-all duration-300 md:hidden ${open ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <nav className="mx-auto flex max-w-[1400px] flex-col gap-1 px-5 py-5 sm:px-8">
                    {mainLinks.map((link) => {
                        const active = isActive(link.href);
                        return link.hasDropdown ? (
                            <div
                                key={link.name}
                                className="mt-2 rounded-xl border border-slate-100 bg-slate-50/50 overflow-hidden"
                            >
                                <button
                                    onClick={() =>
                                        setActiveDropdown(
                                            activeDropdown === link.name ? null : link.name
                                        )
                                    }
                                    className="flex w-full items-center justify-between px-4 py-3 text-[15px] font-medium text-slate-700"
                                >
                                    {link.name}
                                    <ChevronDown
                                        size={16}
                                        className={`transition-transform ${activeDropdown === link.name ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>
                                {activeDropdown === link.name && (
                                    <div className="border-t border-slate-100 px-2 pb-2 pt-1">
                                        {(link.name === "Products"
                                            ? productLinks
                                            : solutionLinks
                                        ).map((item) => (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                onClick={() => setOpen(false)}
                                                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-600 transition hover:bg-blue-50 hover:text-blue-900"
                                            >
                                                <item.icon size={16} className="text-blue-900" />
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ) : (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className={`rounded-xl px-4 py-3 text-[15px] font-medium transition ${active
                                    ? "bg-blue-900 text-white"
                                    : "text-slate-700 hover:bg-slate-50 hover:text-blue-900"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                    <Link
                        href="/contacts"
                        onClick={() => setOpen(false)}
                        className="mt-4 flex items-center justify-center gap-2 rounded-full bg-blue-900 px-6 py-3 text-sm font-semibold text-white shadow-md"
                    >
                        Get a Quote <ArrowUpRight className="h-4 w-4" />
                    </Link>
                </nav>
            </div>
        </header>
    );
}