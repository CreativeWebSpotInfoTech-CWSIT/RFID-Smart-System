"use client";
import { motion } from "framer-motion";
import { Factory, Warehouse, Truck, Store, HeartPulse, Bed, Building2, GraduationCap, Shirt } from "lucide-react";

const industries = [
    { name: "Manufacturing Plants", icon: Factory },
    { name: "Warehouses", icon: Warehouse },
    { name: "Distribution Centers", icon: Truck },
    { name: "Retail Stores", icon: Store },
    { name: "Hospitals", icon: HeartPulse },
    { name: "Hotels", icon: Bed },
    { name: "Government Organizations", icon: Building2 },
    { name: "Educational Institutions", icon: GraduationCap },
    { name: "Textile & Laundry Facilities", icon: Shirt },
];

export default function IndustriesServed() {
    return (
        <section className="relative bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        Industries We <span className="text-teal-700">Serve</span>
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
                        Providing enterprise-grade RFID solutions tailored for diverse operational environments.
                    </p>
                </motion.div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {industries.map((industry, i) => (
                        <motion.div
                            key={industry.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-lg hover:shadow-teal-100/50"
                        >
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-700 transition-colors group-hover:bg-teal-700 group-hover:text-white">
                                <industry.icon size={24} />
                            </div>
                            <span className="text-base font-semibold text-slate-900">{industry.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}