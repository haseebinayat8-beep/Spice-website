"use client";

import Reveal from "@/components/ui/Reveal";

export default function DownloadCTA() {
  return (
    <section id="download" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-red via-red to-red-dark" />
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-black-permanent/20 blur-3xl" />

      <div className="mx-auto max-w-4xl px-6 text-center sm:px-8">
        <Reveal direction="scale">
          <h2 className="font-display text-4xl font-bold text-white sm:text-5xl">
            Get Spice on your phone
          </h2>
          <p className="mx-auto mt-4 max-w-md text-lg text-white/85">
            Download now and get 20% off your first order.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#"
              className="flex items-center gap-3 rounded-2xl bg-black-permanent px-6 py-3.5 text-white shadow-premium-lg transition-transform duration-300 hover:scale-105"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8.79.06 1.35-.36 2.83-.44 2.13.06 3.68.98 4.66 2.35-4.06 2.44-3.03 7.32.43 9.06-.6.16-1.35.5-3 1.2ZM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25Z"/></svg>
              <span className="text-left">
                <span className="block text-[10px] leading-none text-white/60">Download on the</span>
                <span className="block text-base font-semibold leading-tight">App Store</span>
              </span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 rounded-2xl bg-black-permanent px-6 py-3.5 text-white shadow-premium-lg transition-transform duration-300 hover:scale-105"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M3.6 2.6a1 1 0 0 0-.6.92v17a1 1 0 0 0 .6.92l9.9-9.4-9.9-9.44Zm11.4 9.44 2.75-2.6-9.98-5.78 7.23 8.38Zm0 0-7.23 8.38 9.98-5.78-2.75-2.6Zm.98-.98 3.1-1.8a1 1 0 0 0 0-1.72l-3.1-1.8-2.98 2.66 2.98 2.66Z"/></svg>
              <span className="text-left">
                <span className="block text-[10px] leading-none text-white/60">Get it on</span>
                <span className="block text-base font-semibold leading-tight">Google Play</span>
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
