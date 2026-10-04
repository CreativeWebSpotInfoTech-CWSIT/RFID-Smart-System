"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Radio, Cpu, Layers } from "lucide-react";

export default function WhatWeDoSection() {
    return (
        <section className="relative bg-gradient-to-b from-slate-50 to-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* What We Do - Left Content with Right Image */}
                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-4 py-1.5 text-xs font-semibold text-teal-800">
                            <span className="h-1.5 w-1.5 rounded-full bg-teal-600" />
                            WHAT WE DO
                        </div>
                        <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                            Smart Solutions,{" "}
                            <span className="text-teal-700">Seamless Integration</span>
                        </h2>
                        <p className="mt-6 text-lg leading-relaxed text-slate-600">
                            We are at the forefront of revolutionizing industries through RFID (Radio-Frequency Identification) technology. Our mission is to empower businesses and organizations with cutting-edge solutions that harness the power of RFID to streamline operations, enhance security, and drive unprecedented efficiency.
                        </p>
                        <p className="mt-4 text-base leading-relaxed text-slate-600">
                            Trusted by businesses across diverse sectors such as logistics, healthcare, retail, manufacturing, and more, our team of experts are dedicated to designing, implementing, and managing RFID solutions tailored to meet the unique needs of our clients.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="relative"
                    >
                        <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-teal-100/50 to-cyan-100/50 blur-2xl" />
                        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">
                            <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-teal-500 to-cyan-600">
                                {/* Main Image */}
                                <img
                                    src="/EntryImg.jpeg"
                                    alt="RFID Smart System - Smart Solutions"
                                    className="h-full w-full object-cover"
                                />
                                {/* Subtle Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" />
                            </div>

                            {/* Bottom Badge Overlay */}
                            <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/60 bg-white/90 p-4 shadow-lg backdrop-blur-sm">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-100">
                                        <Radio className="h-5 w-5 text-teal-700" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-slate-900">RFID Technology</p>
                                        <p className="text-xs text-slate-600">Smarter • Faster • Reliable</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Three Cards Section */}
                <div className="mt-24 grid gap-8 lg:grid-cols-3">
                    {/* Card 1: RFID Products */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-teal-200/50"
                    >
                        {/* Image Header */}
                        <div className="relative h-48 overflow-hidden rounded-t-3xl bg-gradient-to-br from-teal-500 to-teal-700">
                            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white">
                                <Radio className="h-14 w-14 mb-3 opacity-90" />
                                <p className="text-center text-sm font-medium">RFID Readers and Antennas</p>
                            </div>
                            {/* Decorative circles */}
                            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
                            <div className="absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-white/10 blur-xl" />
                        </div>

                        {/* Content */}
                        <div className="p-8">
                            {/* Floating Icon */}
                            <div className="-mt-14 mb-4 flex justify-center">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-lg ring-4 ring-white">
                                    <Radio className="h-6 w-6 text-teal-700" />
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-slate-900">Our RFID Products</h3>
                            <p className="mt-4 text-base leading-relaxed text-slate-600">
                                Complementing our RFID tags, we offer a selection of high-performance RFID readers and antennas. These devices provide the crucial link between your RFID tags and your software systems, ensuring data captures.
                            </p>
                            <Link
                                href="/products"
                                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal-700 transition-all duration-300 hover:gap-3"
                            >
                                Read More
                                <ArrowRight size={16} />
                            </Link>
                        </div>
                    </motion.div>

                    {/* Card 2: Our Innovations */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-200/50"
                    >
                        {/* Image Header */}
                        <div className="relative h-48 overflow-hidden rounded-t-3xl bg-gradient-to-br from-cyan-500 to-blue-600">
                            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white">
                                <Cpu className="h-14 w-14 mb-3 opacity-90" />
                                <p className="text-center text-sm font-medium">RFID Self Checkout and AMR</p>
                            </div>
                            {/* Decorative circles */}
                            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
                            <div className="absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-white/10 blur-xl" />
                        </div>

                        {/* Content */}
                        <div className="p-8">
                            {/* Floating Icon */}
                            <div className="-mt-14 mb-4 flex justify-center">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-lg ring-4 ring-white">
                                    <Cpu className="h-6 w-6 text-cyan-700" />
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-slate-900">Our Innovations</h3>
                            <p className="mt-4 text-base leading-relaxed text-slate-600">
                                Whether you need rugged tags for industrial environments, tamper-evident tags for supply chain security, or discreet tags for retail applications, we have you covered with everything through custom made applications.
                            </p>
                            <Link
                                href="/innovations"
                                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-700 transition-all duration-300 hover:gap-3"
                            >
                                Read More
                                <ArrowRight size={16} />
                            </Link>
                        </div>
                    </motion.div>

                    {/* Card 3: Our Solutions */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-200/50"
                    >
                        {/* Image Header */}
                        <div className="relative h-48 overflow-hidden rounded-t-3xl bg-gradient-to-br from-purple-500 to-indigo-600">
                            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white">
                                <Layers className="h-14 w-14 mb-3 opacity-90" />
                                <p className="text-center text-sm font-medium">Enterprise RFID Solutions</p>
                            </div>
                            {/* Decorative circles */}
                            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
                            <div className="absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-white/10 blur-xl" />
                        </div>

                        {/* Content */}
                        <div className="p-8">
                            {/* Floating Icon */}
                            <div className="-mt-14 mb-4 flex justify-center">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-lg ring-4 ring-white">
                                    <Layers className="h-6 w-6 text-purple-700" />
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-slate-900">Our Solutions</h3>
                            <p className="mt-4 text-base leading-relaxed text-slate-600">
                                Our experienced team of RFID experts will work closely with you to design, develop, and implement RFID systems that seamlessly integrate into your existing infrastructure, solving your most complex challenges.
                            </p>
                            <Link
                                href="/solutions"
                                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-purple-700 transition-all duration-300 hover:gap-3"
                            >
                                Read More
                                <ArrowRight size={16} />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}