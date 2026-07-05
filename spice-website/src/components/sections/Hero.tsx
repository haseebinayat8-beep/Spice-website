"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Smartphone, Star } from "lucide-react";
import PhoneMockup from "@/components/ui/PhoneMockup";

const floatingFoods = [
  { emoji: "🍕", top: "8%", left: "8%", size: "text-4xl", delay: 0.4, r: -8 },
  { emoji: "🍔", top: "58%", left: "5%", size: "text-5xl", delay: 0.9, r: 6 },
  { emoji: "🍟", top: "20%", left: "88%", size: "text-4xl", delay: 0.6, r: 10 },
  { emoji: "🥤", top: "64%", left: "90%", size: "text-4xl", delay: 1.1, r: -6 },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface pb-20 pt-36 sm:pt-44">
      {/* Soft ambient accents - restrained, not full-bleed */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-red-light blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-40 -z-10 h-72 w-72 rounded-full bg-red/5 blur-3xl" />

      {/* Floating food emojis (ambient motion, subtle) */}
      <div className="pointer-events-none absolute inset-0 -z-10 hidden lg:block">
        {floatingFoods.map((f, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.7, scale: 1 }}
            transition={{ delay: f.delay, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`animate-float-slow absolute drop-shadow-lg ${f.size}`}
            style={{ top: f.top, left: f.left, ["--r" as string]: `${f.r}deg` }}
          >
            {f.emoji}
          </motion.span>
        ))}
      </div>

      <div className="mx-auto max-w-4xl px-6 text-center sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full bg-red-light px-4 py-2 text-sm font-medium text-red"
        >
          <Star size={14} className="fill-red" />
          Rated 4.9 by 50,000+ happy eaters
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 font-display text-5xl font-bold leading-[1.05] text-ink sm:text-6xl lg:text-7xl"
        >
          Your Favorite
          <br />
          Food Delivered{" "}
          <span className="relative inline-block whitespace-nowrap">
            Fast.
            <motion.svg
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
              viewBox="0 0 220 24"
              className="absolute -bottom-2 left-0 w-full text-red"
              fill="none"
              preserveAspectRatio="none"
            >
              <motion.path
                d="M2 16C50 8 160 6 218 15"
                stroke="currentColor"
                strokeWidth="7"
                strokeLinecap="round"
              />
            </motion.svg>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-6 max-w-md text-lg text-gray"
        >
          Bold flavors, made fresh in our own kitchens, delivered
          straight to your door. No middleman, just Spice.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#download"
            className="group flex w-full items-center justify-center gap-2 rounded-full bg-black-permanent px-7 py-4 text-sm font-semibold text-white shadow-premium-lg transition-transform duration-300 hover:scale-105 active:scale-95 sm:w-auto"
          >
            <Smartphone size={16} />
            Download App
          </a>
          <Link
            href="/menu"
            className="group flex w-full items-center justify-center gap-2 rounded-full bg-red px-7 py-4 text-sm font-semibold text-white shadow-red-glow transition-transform duration-300 hover:scale-105 active:scale-95 sm:w-auto"
          >
            Order Now
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Phone mockup - centered, the visual anchor below the copy */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto mt-16 flex justify-center"
        >
          <div className="absolute -inset-10 -z-10 rounded-full bg-red-light/60 blur-3xl" />
          <PhoneMockup src="/screens/home.png" alt="Spice app home screen" label="Home" size="lg" />
        </motion.div>
      </div>
    </section>
  );
}
