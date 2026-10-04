"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Search } from "lucide-react";

const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Solutions", href: "/solutions" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
            <div className="container mx-auto flex h-20 items-center justify-between px-6">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="text-2xl font-bold text-green-600 flex items-center">
                        <span className="text-blue-700">Green</span>Futurz
                    </div>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-gray-700 hover:text-green-600 transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                    <button className="text-gray-700 hover:text-green-600">
                        <Search className="h-5 w-5" />
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-gray-700" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden border-t bg-white p-4 space-y-4">
                    {navItems.map((item) => (
                        <Link key={item.name} href={item.href} className="block text-gray-700 hover:text-green-600 font-medium">
                            {item.name}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
}