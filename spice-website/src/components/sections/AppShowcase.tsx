"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PhoneMockup from "@/components/ui/PhoneMockup";
import Reveal from "@/components/ui/Reveal";

const screens = [
  { key: "splash", label: "Splash Screen", src: "/screens/splash.png" },
  { key: "home", label: "Home", src: "/screens/home.png" },
  { key: "chatbot", label: "Chatbot", src: "/screens/chatbot.png" },
  { key: "cart", label: "Cart", src: "/screens/cart.png" },
  { key: "checkout", label: "Checkout", src: "/screens/checkout.png" },
  { key: "register", label: "Register", src: "/screens/register.png" },
  { key: "profile", label: "Profile", src: "/screens/profile.png" },
];

export default function AppShowcase() {
  const [index, setIndex] = useState(1); // start on Home
  const [dir, setDir] = useState(1);

  const go = (next: number) => {
    setDir(next > index ? 1 : -1);
    setIndex((next + screens.length) % screens.length);
  };

  const active = screens[index];

  return (
    <section className="relative overflow-hidden bg-black-permanent py-24 sm:py-32">
      <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-red/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-red/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center text-white">
            <span className="text-sm font-semibold uppercase tracking-widest text-red">
              Inside the App
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
              Every screen, thoughtfully designed
            </h2>
            <p className="mt-4 text-lg text-white/60">
              Take a look through Spice, screen by screen.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 flex flex-col items-center">
          <div className="relative flex h-[620px] w-full max-w-sm items-center justify-center">
            <button
              onClick={() => go(index - 1)}
              aria-label="Previous screen"
              className="absolute -left-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition-colors hover:bg-red sm:-left-16"
            >
              <ChevronLeft size={20} />
            </button>

            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={active.key}
                custom={dir}
                initial={{ opacity: 0, x: dir * 60, rotate: dir * 4 }}
                animate={{ opacity: 1, x: 0, rotate: 0 }}
                exit={{ opacity: 0, x: -dir * 60, rotate: -dir * 4 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <PhoneMockup src={active.src} alt={active.label} label={active.label} size="lg" />
              </motion.div>
            </AnimatePresence>

            <button
              onClick={() => go(index + 1)}
              aria-label="Next screen"
              className="absolute -right-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition-colors hover:bg-red sm:-right-16"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Dots + labels */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {screens.map((s, i) => (
              <button
                key={s.key}
                onClick={() => go(i)}
                className={`rounded-full px-4 py-2 text-xs font-medium transition-all duration-300 ${
                  i === index
                    ? "bg-red text-white"
                    : "bg-white/10 text-white/60 hover:bg-white/20"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
