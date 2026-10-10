import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ArrowLeft } from "lucide-react";
import Navbar from "@/src/shared/components/Navbar";
import Footer from "@/src/shared/components/Footer";

export default function SolutionPageTemplate({
    title,
    subtitle,
    description,
    image,
    benefits,
    useCases,
    howItWorks,
    ctaTitle = "Ready to get started?",
    ctaDesc = "Let's discuss how this solution can transform your operations.",
}) {
    return (
        <>
            <Navbar />
            <main className="bg-white">
                {/* Hero */}
                <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-32 pb-14">
                    <div
                        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(30,58,95,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(30,58,95,0.04)_1px,transparent_1px)] bg-[size:40px_40px]"
                        aria-hidden="true"
                    />
                    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <Link
                            href="/solutions"
                            className="mb-5 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-blue-900"
                        >
                            <ArrowLeft size={16} aria-hidden="true" />
                            Back to Solutions
                        </Link>
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-1.5 text-xs font-semibold text-blue-900 shadow-sm backdrop-blur-sm">
                            <span
                                className="h-1.5 w-1.5 rounded-full bg-blue-900"
                                aria-hidden="true"
                            />
                            {subtitle}
                        </div>
                        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                            {title}
                        </h1>
                        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
                            {description}
                        </p>
                    </div>
                </section>

                {/* Image + How it works */}
                {(image || howItWorks) && (
                    <section className="pb-10">
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
                                {image && (
                                    <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-slate-100 shadow-lg">
                                        <Image
                                            src={image}
                                            alt={title}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 1024px) 100vw, 50vw"
                                            priority
                                            quality={85}
                                        />
                                    </div>
                                )}
                                {howItWorks && (
                                    <div>
                                        <h2 className="mb-4 text-xl font-bold text-slate-900">
                                            How It Works
                                        </h2>
                                        <ol className="space-y-3">
                                            {howItWorks.map((step, i) => (
                                                <li key={step} className="flex items-start gap-3">
                                                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-900">
                                                        {i + 1}
                                                    </span>
                                                    <span className="text-sm leading-relaxed text-slate-700">
                                                        {step}
                                                    </span>
                                                </li>
                                            ))}
                                        </ol>
                                    </div>
                                )}
                            </div>
                        </div>
                    </section>
                )}

                {/* Benefits + Use Cases */}
                <section className="py-14 sm:py-16">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
                            <div>
                                <h2 className="mb-5 text-xl font-bold text-slate-900">
                                    Key Benefits
                                </h2>
                                <div className="space-y-3">
                                    {benefits.map((benefit) => (
                                        <div
                                            key={benefit.title}
                                            className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 transition hover:border-blue-200 hover:shadow-md"
                                        >
                                            <CheckCircle2
                                                className="mt-0.5 h-5 w-5 shrink-0 text-blue-700"
                                                aria-hidden="true"
                                            />
                                            <div>
                                                <h3 className="font-semibold text-slate-900">
                                                    {benefit.title}
                                                </h3>
                                                <p className="mt-1 text-sm text-slate-600">
                                                    {benefit.desc}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h2 className="mb-5 text-xl font-bold text-slate-900">
                                    Use Cases
                                </h2>
                                <div className="space-y-2.5">
                                    {useCases.map((useCase, i) => (
                                        <div
                                            key={useCase}
                                            className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 p-3.5"
                                        >
                                            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-900">
                                                {i + 1}
                                            </div>
                                            <span className="text-sm font-medium text-slate-800">
                                                {useCase}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-slate-900 py-14 sm:py-16">
                    <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
                        <h2 className="text-2xl font-bold text-white sm:text-3xl">
                            {ctaTitle}
                        </h2>
                        <p className="mt-3 text-base text-slate-400">{ctaDesc}</p>
                        <Link
                            href="/contacts"
                            className="btn-shimmer mt-6 inline-flex items-center gap-2 rounded-full bg-blue-900 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-900/30 transition-all hover:bg-blue-800 hover:shadow-xl"
                        >
                            Talk to an Expert
                            <ArrowRight size={16} />
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}