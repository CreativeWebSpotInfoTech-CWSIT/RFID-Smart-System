import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Package, ClipboardList, Warehouse, Wrench, Shirt, Car, ShieldCheck, Factory, ArrowRight } from "lucide-react";

const solutions = [
    { id: "asset-tracking", icon: Package, title: "Asset Tracking", desc: "Track valuable assets in real-time with automated identification and location monitoring.", href: "/solutions/asset-tracking", color: "from-teal-500 to-teal-700" },
    { id: "inventory-management", icon: ClipboardList, title: "Inventory Management", desc: "Achieve inventory accuracy of up to 99.9% while drastically reducing manual counting effort.", href: "/solutions/inventory-management", color: "from-blue-500 to-blue-700" },
    { id: "warehouse-automation", icon: Warehouse, title: "Warehouse Automation", desc: "Automate inbound, outbound, and inventory processes for seamless logistics operations.", href: "/solutions/warehouse-automation", color: "from-purple-500 to-purple-700" },
    { id: "tool-tracking", icon: Wrench, title: "Tool Tracking", desc: "Monitor tools, equipment, and maintenance history to prevent loss and optimize usage.", href: "/solutions/tool-tracking", color: "from-orange-500 to-orange-700" },
    { id: "laundry-management", icon: Shirt, title: "Laundry Management", desc: "Automate linen counting, distribution, and lifecycle management for hotels and hospitals.", href: "/solutions/laundry-management", color: "from-pink-500 to-pink-700" },
    { id: "vehicle-management", icon: Car, title: "Vehicle Management", desc: "RFID-based parking access control and automated fleet identification systems.", href: "/solutions/vehicle-management", color: "from-indigo-500 to-indigo-700" },
    { id: "access-control", icon: ShieldCheck, title: "Access Control", desc: "Secure facility access using RFID cards, tags, and digital credentials.", href: "/solutions/access-control", color: "from-emerald-500 to-emerald-700" },
    { id: "wip-tracking", icon: Factory, title: "WIP Tracking", desc: "Monitor production status and material flow across manufacturing assembly lines.", href: "/solutions/wip-tracking", color: "from-slate-600 to-slate-800" },
];

export const metadata = {
    title: "RFID Solutions | RFID Smart System",
    description: "Complete RFID-based business solutions including asset tracking, inventory management, warehouse automation, and more.",
};

export default function SolutionsPage() {
    return (
        <>
            <Navbar />
            <main className="bg-white">
                <section className="relative overflow-hidden bg-gradient-to-br from-teal-50 via-white to-cyan-50 pt-32 pb-20">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(13,148,136,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(13,148,136,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />
                    <div className="pointer-events-none absolute inset-0">
                        <div className="absolute -left-32 top-20 h-[400px] w-[400px] rounded-full bg-teal-200/30 blur-[120px]" />
                        <div className="absolute -right-20 bottom-10 h-[300px] w-[300px] rounded-full bg-cyan-200/20 blur-[100px]" />
                    </div>
                    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                        <div className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white/80 px-4 py-1.5 text-xs font-semibold text-teal-800 shadow-sm backdrop-blur-sm mb-6">
                            <span className="h-1.5 w-1.5 rounded-full bg-teal-600" />
                            END-TO-END SOLUTIONS
                        </div>
                        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                            Complete RFID-Based{" "}
                            <span className="text-teal-700">Business Solutions</span>
                        </h1>
                        <p className="mt-6 max-w-2xl mx-auto text-lg leading-relaxed text-slate-600">
                            From asset tracking to warehouse automation, we design and deploy intelligent RFID ecosystems tailored to your unique operational challenges.
                        </p>
                    </div>
                </section>

                <section className="py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                            {solutions.map((sol) => (
                                <Link key={sol.id} href={sol.href} className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-xl hover:shadow-slate-200/50">
                                    <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${sol.color} text-white transition-transform duration-300 group-hover:scale-110`}>
                                        <sol.icon size={24} />
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-700 transition-colors">{sol.title}</h3>
                                    <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{sol.desc}</p>
                                    <div className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-teal-700">
                                        Learn More <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="bg-gradient-to-br from-slate-900 to-teal-900 py-20">
                    <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-white sm:text-4xl">Need help choosing the right solution?</h2>
                        <p className="mt-4 text-lg text-slate-300">Our RFID experts will analyze your requirements and recommend the perfect solution.</p>
                        <Link href="/contacts" className="mt-8 inline-flex items-center gap-2 rounded-full bg-teal-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-teal-600/30 transition-all hover:bg-teal-500 hover:shadow-xl">
                            Talk to an Expert <ArrowRight size={18} />
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}