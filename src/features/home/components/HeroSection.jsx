"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
    ArrowRight,
    Radio,
    Wifi,
    Signal,
    Cpu,
    Tag,
    Cloud,
    Zap,
    Activity,
    Database,
} from "lucide-react";
import { useMouseParallax } from "../hooks/useMouseParallax";

const PARTICLES_COUNT = 26;
const particlesData = Array.from({ length: PARTICLES_COUNT }, (_, i) => {
    const angle = (i * 360) / PARTICLES_COUNT;
    const distance = 85 + (i % 5) * 22;
    const duration = 2.7 + (i % 4) * 0.4;
    return { i, angle, distance, duration };
});

const orbitAngles = [0, 90, 180, 270];
const radarDelays = [0, 0.5, 1.0, 1.5, 2.0];

export default function HeroSection() {
    const { ref, rotateX, rotateY, handleMouseMove, handleMouseLeave } =
        useMouseParallax();

    return (
        <section
            className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-28 pb-20"
            aria-labelledby="hero-heading"
        >
            <div className="rfid-grid-pattern absolute inset-0" aria-hidden="true" />

            <div className="pointer-events-none absolute inset-0" aria-hidden="true">
                <div className="absolute -left-40 top-10 h-[560px] w-[560px] rounded-full bg-blue-200/45 blur-[140px]" />
                <div className="absolute -right-32 bottom-0 h-[480px] w-[480px] rounded-full bg-indigo-200/35 blur-[130px]" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid min-h-[calc(100vh-7rem)] items-center gap-12 lg:grid-cols-2 lg:gap-16">
                    {/* LEFT CONTENT */}
                    <div className="py-12 lg:py-0">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-5 py-2.5 text-sm font-medium text-blue-900 shadow-sm"
                        >
                            <span className="relative flex h-2 w-2" aria-hidden="true">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-600 opacity-75"></span>
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600"></span>
                            </span>
                            Smart Tracking • Better Tomorrow
                        </motion.div>

                        <motion.h1
                            id="hero-heading"
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl xl:text-7xl"
                        >
                            RFID & IoT Solutions{" "}
                            <span className="block text-gradient-navy">Worldwide</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="mt-6 max-w-lg text-base leading-relaxed text-slate-600 sm:text-lg"
                        >
                            RFID Smart System is a leading RFID technology company specializing
                            in supplying high-performance RFID hardware, smart tags, labels,
                            readers, antennas, printers, and complete asset tracking solutions
                            for industrial and commercial applications.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="mt-10 flex flex-wrap gap-4"
                        >
                            <Link
                                href="/products"
                                className="btn-shimmer group inline-flex items-center gap-2 rounded-full bg-blue-900 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-900/30 transition-all hover:bg-blue-800 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            >
                                Explore Products
                                <ArrowRight
                                    size={18}
                                    className="transition-transform group-hover:translate-x-1"
                                    aria-hidden="true"
                                />
                            </Link>
                            <Link
                                href="/about-us"
                                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-8 py-4 text-base font-semibold text-slate-700 shadow-sm transition-all hover:border-blue-200 hover:bg-blue-50 hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            >
                                Learn More
                            </Link>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative hidden lg:flex items-center justify-center"
                        style={{ perspective: "1400px" }}
                    >
                        <motion.div
                            ref={ref}
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                            style={{
                                rotateX,
                                rotateY,
                                transformStyle: "preserve-3d",
                                willChange: "transform",
                            }}
                            className="relative w-full max-w-xl"
                        >
                            <div className="relative flex min-h-[580px] w-full items-center justify-center overflow-hidden rounded-[2rem] border border-slate-200/80 bg-gradient-to-br from-slate-50 via-white to-blue-50/80 p-6 shadow-2xl shadow-blue-900/20">
                                {/* Background Glow */}
                                <div
                                    className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-300/40 blur-[100px]"
                                    aria-hidden="true"
                                />
                                <div
                                    className="pointer-events-none absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-200/30 blur-[80px]"
                                    aria-hidden="true"
                                />

                                {/* Radar Rings */}
                                <div
                                    className="absolute inset-0 flex items-center justify-center"
                                    aria-hidden="true"
                                >
                                    {radarDelays.map((delay, i) => (
                                        <motion.div
                                            key={i}
                                            className="absolute rounded-full border-2"
                                            style={{
                                                width: `${140 + i * 55}px`,
                                                height: `${140 + i * 55}px`,
                                                borderColor: `rgba(59, 130, 246, ${0.48 - i * 0.07})`,
                                            }}
                                            initial={{ scale: 0.6, opacity: 0.65 }}
                                            animate={{ scale: [0.65, 1.4], opacity: [0.6, 0] }}
                                            transition={{
                                                duration: 3.5,
                                                repeat: Infinity,
                                                delay,
                                                ease: "easeOut",
                                            }}
                                        />
                                    ))}
                                </div>

                                {/* Center Reader */}
                                <div
                                    className="relative z-30 flex h-40 w-40 items-center justify-center"
                                    aria-hidden="true"
                                >
                                    <motion.div
                                        animate={{ scale: [1, 1.07, 1] }}
                                        transition={{
                                            duration: 3.2,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}
                                        className="relative flex h-36 w-36 items-center justify-center rounded-[1.7rem] bg-white shadow-2xl shadow-blue-900/25 ring-2 ring-blue-200/60"
                                        style={{ transform: "translateZ(40px)" }}
                                    >
                                        <Radio className="h-14 w-14 text-blue-900" />
                                        <motion.div
                                            className="absolute inset-0 rounded-[1.7rem] bg-blue-500/15"
                                            animate={{ opacity: [0.2, 0.5, 0.2] }}
                                            transition={{ duration: 2.3, repeat: Infinity }}
                                        />
                                    </motion.div>
                                </div>

                                {/* Orbiting Tags */}
                                <div className="absolute inset-0 z-20" aria-hidden="true">
                                    {orbitAngles.map((angle, i) => (
                                        <motion.div
                                            key={i}
                                            className="absolute"
                                            style={{ transform: "translateZ(20px)" }}
                                            animate={{ rotate: 360 }}
                                            transition={{
                                                duration: 17 + i * 1.8,
                                                repeat: Infinity,
                                                ease: "linear",
                                            }}
                                        >
                                            <motion.div
                                                style={{
                                                    transform: `rotate(${angle}deg) translateX(125px) rotate(-${angle}deg)`,
                                                }}
                                                animate={{ y: [0, -7, 0] }}
                                                transition={{
                                                    duration: 2.5 + i * 0.3,
                                                    repeat: Infinity,
                                                    ease: "easeInOut",
                                                }}
                                                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-lg border border-blue-100"
                                            >
                                                <Tag className="h-4 w-4 text-blue-700" />
                                            </motion.div>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Particles */}
                                <div className="absolute inset-0 z-10" aria-hidden="true">
                                    {particlesData.map(({ i, angle, distance, duration }) => (
                                        <motion.div
                                            key={i}
                                            className="absolute h-[5px] w-[5px] rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.85)]"
                                            style={{ left: "50%", top: "50%" }}
                                            initial={{ x: 0, y: 0, opacity: 0, scale: 0.2 }}
                                            animate={{
                                                x: Math.cos((angle * Math.PI) / 180) * distance,
                                                y: Math.sin((angle * Math.PI) / 180) * distance,
                                                opacity: [0, 0.95, 0],
                                                scale: [0.2, 1.3, 0.15],
                                            }}
                                            transition={{
                                                duration,
                                                repeat: Infinity,
                                                delay: i * 0.1,
                                                ease: "easeOut",
                                            }}
                                        />
                                    ))}
                                </div>

                                {/* Scanning Beam */}
                                <motion.div
                                    className="pointer-events-none absolute left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-blue-500 to-transparent shadow-[0_0_12px_rgba(59,130,246,0.85)]"
                                    animate={{ top: ["12%", "88%", "12%"] }}
                                    transition={{
                                        duration: 4.8,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                    aria-hidden="true"
                                />

                                <div className="absolute inset-0 z-30" aria-hidden="true">
                                    {/* Top Left */}
                                    <motion.div
                                        className="absolute left-5 top-6 rounded-2xl border border-white/90 bg-white/95 px-3.5 py-2.5 shadow-lg backdrop-blur-md"
                                        style={{ transform: "translateZ(50px)" }}
                                        animate={{ y: [0, -6, 0] }}
                                        transition={{
                                            duration: 4,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}
                                    >
                                        <div className="flex items-center gap-2.5">
                                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100">
                                                <Cpu className="h-4 w-4 text-blue-800" />
                                            </div>
                                            <div>
                                                <p className="text-[11px] font-bold text-slate-900">
                                                    Active Tags
                                                </p>
                                                <p className="text-[10px] font-medium text-blue-600">
                                                    2,847 Online
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* Top Right */}
                                    <motion.div
                                        className="absolute right-5 top-6 rounded-2xl border border-white/90 bg-white/95 px-3.5 py-2.5 shadow-lg backdrop-blur-md"
                                        style={{ transform: "translateZ(50px)" }}
                                        animate={{ y: [0, 6, 0] }}
                                        transition={{
                                            duration: 3.7,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                            delay: 0.3,
                                        }}
                                    >
                                        <div className="flex items-center gap-2.5">
                                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100">
                                                <Signal className="h-4 w-4 text-emerald-700" />
                                            </div>
                                            <div>
                                                <p className="text-[11px] font-bold text-slate-900">
                                                    Signal Strength
                                                </p>
                                                <p className="text-[10px] font-medium text-emerald-600">
                                                    98% Excellent
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* Middle Left */}
                                    <motion.div
                                        className="absolute left-5 top-[38%] rounded-2xl border border-white/90 bg-white/95 px-3.5 py-2.5 shadow-lg backdrop-blur-md"
                                        style={{ transform: "translateZ(40px)" }}
                                        animate={{ y: [0, -5, 0] }}
                                        transition={{
                                            duration: 3.6,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                            delay: 0.6,
                                        }}
                                    >
                                        <div className="flex items-center gap-2.5">
                                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-100">
                                                <Zap className="h-4 w-4 text-violet-700" />
                                            </div>
                                            <div>
                                                <p className="text-[11px] font-bold text-slate-900">
                                                    Read Rate
                                                </p>
                                                <p className="text-[10px] font-medium text-violet-600">
                                                    420 tags/sec
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* Middle Right */}
                                    <motion.div
                                        className="absolute right-5 top-[42%] rounded-2xl border border-white/90 bg-white/95 px-3.5 py-2.5 shadow-lg backdrop-blur-md"
                                        style={{ transform: "translateZ(40px)" }}
                                        animate={{ y: [0, 5, 0] }}
                                        transition={{
                                            duration: 3.9,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                            delay: 0.8,
                                        }}
                                    >
                                        <div className="flex items-center gap-2.5">
                                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-100">
                                                <Activity className="h-4 w-4 text-amber-700" />
                                            </div>
                                            <div>
                                                <p className="text-[11px] font-bold text-slate-900">
                                                    Uptime
                                                </p>
                                                <p className="text-[10px] font-medium text-amber-600">
                                                    99.98%
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* Bottom Left */}
                                    <motion.div
                                        className="absolute left-5 bottom-20 rounded-2xl border border-white/90 bg-white/95 px-3.5 py-2.5 shadow-lg backdrop-blur-md"
                                        style={{ transform: "translateZ(35px)" }}
                                        animate={{ y: [0, -5, 0] }}
                                        transition={{
                                            duration: 3.5,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                            delay: 1,
                                        }}
                                    >
                                        <div className="flex items-center gap-2.5">
                                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-100">
                                                <Cloud className="h-4 w-4 text-indigo-700" />
                                            </div>
                                            <div>
                                                <p className="text-[11px] font-bold text-slate-900">
                                                    Cloud Sync
                                                </p>
                                                <p className="text-[10px] font-medium text-indigo-600">
                                                    Real-time
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* Bottom Right */}
                                    <motion.div
                                        className="absolute right-5 bottom-20 rounded-2xl border border-white/90 bg-white/95 px-3.5 py-2.5 shadow-lg backdrop-blur-md"
                                        style={{ transform: "translateZ(35px)" }}
                                        animate={{ y: [0, 5, 0] }}
                                        transition={{
                                            duration: 3.8,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                            delay: 1.2,
                                        }}
                                    >
                                        <div className="flex items-center gap-2.5">
                                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-rose-100">
                                                <Database className="h-4 w-4 text-rose-700" />
                                            </div>
                                            <div>
                                                <p className="text-[11px] font-bold text-slate-900">
                                                    Data Processed
                                                </p>
                                                <p className="text-[10px] font-medium text-rose-600">
                                                    1.2M / day
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Main Process Card */}
                                <div
                                    className="scanning-card absolute bottom-4 left-4 right-4 z-40 rounded-2xl border border-white/90 bg-white/95 px-4 py-3 shadow-xl backdrop-blur-md"
                                    style={{ transform: "translateZ(45px)" }}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100">
                                            <Wifi
                                                className="h-5 w-5 text-blue-900"
                                                aria-hidden="true"
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm font-bold text-slate-900">
                                                RFID Live Process
                                            </p>
                                            <p className="text-xs text-slate-600">
                                                Tag → Reader → Cloud → Dashboard
                                            </p>
                                        </div>
                                        <div
                                            className="flex items-end gap-[3px] h-6"
                                            aria-hidden="true"
                                        >
                                            {[0.35, 0.55, 0.75, 1].map((h, i) => (
                                                <motion.span
                                                    key={i}
                                                    className="w-1.5 rounded-sm bg-blue-600"
                                                    animate={{
                                                        height: [`${h * 45}%`, `${h * 100}%`, `${h * 45}%`],
                                                        opacity: [0.5, 1, 0.5],
                                                    }}
                                                    transition={{
                                                        duration: 1.2,
                                                        repeat: Infinity,
                                                        delay: i * 0.12,
                                                        ease: "easeInOut",
                                                    }}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}