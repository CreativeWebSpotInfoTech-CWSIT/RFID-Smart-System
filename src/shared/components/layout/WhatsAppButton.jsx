"use client";

import { useState, useEffect } from "react";

// WhatsApp number - update with your actual number (country code + number, no + or spaces)
const WHATSAPP_NUMBER = "918056077416";

// Pre filled message when user clicks
const DEFAULT_MESSAGE =
    "Hi RFID Smart System! I'm interested in your RFID solutions. Can you share more details?";

export default function WhatsAppButton() {
    const [isVisible, setIsVisible] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);

    // Show button after 1.5s for smooth
    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 1500);
        return () => clearTimeout(timer);
    }, []);

    // Show tooltip on first visit (auto-hide after 5s)
    useEffect(() => {
        if (isVisible) {
            const tooltipTimer = setTimeout(() => setShowTooltip(true), 2500);
            const hideTimer = setTimeout(() => setShowTooltip(false), 7500);
            return () => {
                clearTimeout(tooltipTimer);
                clearTimeout(hideTimer);
            };
        }
    }, [isVisible]);

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        DEFAULT_MESSAGE
    )}`;

    return (
        <>
            {/* WhatsApp Button */}
            <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with us on WhatsApp"
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
                className={`fixed bottom-6 right-6 z-[100] flex items-center gap-3 transition-all duration-500 ${isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-20 opacity-0"
                    }`}
            >
                <div
                    className={`pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-xl bg-white px-4 py-2.5 text-sm font-medium text-slate-700 shadow-xl ring-1 ring-slate-200 transition-all duration-300 ${showTooltip
                        ? "translate-x-0 opacity-100"
                        : "translate-x-2 opacity-0"
                        }`}
                >
                    <span className="flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                        </span>
                        Chat with us!
                    </span>
                    <div className="absolute -right-1.5 top-1/2 h-3 w-3 -translate-y-1/2 rotate-45 bg-white ring-1 ring-slate-200"></div>
                </div>

                {/* Main Button */}
                <div className="group relative">
                    <span className="absolute inset-0 animate-ping rounded-full bg-green-500/40 opacity-75"></span>
                    <span className="absolute -inset-1 animate-pulse rounded-full bg-green-400/30"></span>

                    {/* Button */}
                    <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-green-600 shadow-lg shadow-green-500/40 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-green-500/50 sm:h-16 sm:w-16">
                        <svg
                            className="h-7 w-7 text-white transition-transform duration-300 group-hover:scale-110 sm:h-8 sm:w-8"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                    </div>
                </div>
            </a>

            <div className="fixed bottom-0 left-0 right-0 z-[99] border-t border-slate-200 bg-white/95 p-3 backdrop-blur-lg md:hidden">
                <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-green-500 to-green-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-green-500/30 transition-all active:scale-95"
                >
                    <svg
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Chat on WhatsApp
                </a>
            </div>

            <style jsx global>{`
        @media (max-width: 768px) {
          body {
            padding-bottom: 70px;
          }
        }
      `}</style>
        </>
    );
}