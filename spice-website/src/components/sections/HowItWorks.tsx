"use client";

import { UserPlus, Search, ShoppingBag, Bike } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const steps = [
  { icon: UserPlus, title: "Create Account", desc: "Sign up in seconds with your email or phone number." },
  { icon: Search, title: "Browse Menu", desc: "Explore Spice's full menu of burgers, wraps, sides, and combos." },
  { icon: ShoppingBag, title: "Order Food", desc: "Pick your favorites, customize, and check out securely." },
  { icon: Bike, title: "Get Delivery", desc: "Track your rider live and enjoy your meal, fresh and hot." },
];

export default function HowItWorks() {
  return (
    <section className="bg-cloud py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-red">
              How It Works
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
              From craving to doorstep in four steps
            </h2>
          </div>
        </Reveal>

        <div className="relative mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Connecting line - desktop only, meaningful because this IS a sequence */}
          <div className="absolute left-0 right-0 top-8 hidden h-[2px] bg-gradient-to-r from-transparent via-red/25 to-transparent lg:block" />

          {steps.map((s, i) => (
            <Reveal key={s.title} direction="up" delay={i * 0.12}>
              <div className="relative flex flex-col items-center text-center">
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-surface text-red shadow-premium">
                  <s.icon size={26} />
                </div>
                <span className="mt-4 font-display text-sm font-bold text-red/60">
                  Step {i + 1}
                </span>
                <h3 className="mt-1 font-display text-xl font-semibold">
                  {s.title}
                </h3>
                <p className="mt-2 max-w-[220px] text-sm leading-relaxed text-gray">
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
