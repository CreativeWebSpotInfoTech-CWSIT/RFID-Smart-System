import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ArrowLeft } from "lucide-react";

export default function SolutionPageTemplate({ title, subtitle, description, benefits, useCases, ctaTitle = "Ready to get started?", ctaDesc = "Let's discuss how this solution can transform your operations." }) {
    return (
        <>
            <Navbar />
            <main className="bg-white">
                <section className="relative overflow-hidden bg-gradient-to-br from-teal-50 via-white to-cyan-50 pt-32 pb-20">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(13,148,136,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(13,148,136,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />
                    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <Link href="/solutions" className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-teal-700 mb-6 transition">
                            <ArrowLeft size={16} /> Back to Solutions
                        </Link>
                        <div className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white/80 px-4 py-1.5 text-xs font-semibold text-teal-800 shadow-sm backdrop-blur-sm mb-6">
                            <span className="h-1.5 w-1.5 rounded-full bg-teal-600" />
                            {subtitle}
                        </div>
                        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                            {title}
                        </h1>
                        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
                            {description}
                        </p>
                    </div>
                </section>

                <section className="py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid gap-12 lg:grid-cols-2">
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-6">Key Benefits</h2>
                                <div className="space-y-4">
                                    {benefits.map((benefit, i) => (
                                        <div key={i} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-teal-200 hover:shadow-md">
                                            <CheckCircle2 className="h-6 w-6 shrink-0 text-teal-600 mt-0.5" />
                                            <div>
                                                <h3 className="font-semibold text-slate-900">{benefit.title}</h3>
                                                <p className="mt-1 text-sm text-slate-600">{benefit.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-6">Use Cases</h2>
                                <div className="space-y-3">
                                    {useCases.map((useCase, i) => (
                                        <div key={i} className="flex items-center gap-3 rounded-xl bg-slate-50 p-4 border border-slate-100">
                                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-700 text-sm font-bold">
                                                {i + 1}
                                            </div>
                                            <span className="text-sm font-medium text-slate-800">{useCase}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-gradient-to-br from-slate-900 to-teal-900 py-20">
                    <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-white sm:text-4xl">{ctaTitle}</h2>
                        <p className="mt-4 text-lg text-slate-300">{ctaDesc}</p>
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