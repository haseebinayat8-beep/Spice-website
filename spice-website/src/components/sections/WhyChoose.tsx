"use client";

import { Leaf, Clock, Tag, Headphones, Users } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const reasons = [
  { icon: Leaf, title: "Fresh Food", desc: "Every dish made to order, never sitting under a heat lamp." },
  { icon: Clock, title: "Quick Delivery", desc: "Average delivery time under 30 minutes, city-wide." },
  { icon: Tag, title: "Affordable Prices", desc: "No hidden markups. What you see is what you pay." },
  { icon: Headphones, title: "24/7 Support", desc: "Real help, any hour, through chat or call." },
  { icon: Users, title: "Trusted by Thousands", desc: "Over 500,000 orders delivered and counting." },
];

export default function WhyChoose() {
  return (
    <section className="bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-red">
              Why Choose Spice
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
              The details that make the difference
            </h2>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {reasons.map((r, i) => (
            <Reveal key={r.title} direction="up" delay={i * 0.08} className="h-full">
              <div className="flex h-full flex-col items-center rounded-3xl bg-cloud p-7 text-center transition-all duration-400 hover:bg-red hover:text-white hover:shadow-red-glow">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-surface text-red transition-colors duration-400 group-hover:bg-surface">
                  <r.icon size={22} />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold">
                  {r.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed opacity-70">
                  {r.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
