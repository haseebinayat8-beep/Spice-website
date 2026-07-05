"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const faqs = [
  { q: "How do I order?", a: "Open the Spice app, browse our menu, add items to your cart, and check out. Your order is confirmed instantly and sent straight to our kitchen." },
  { q: "How long does delivery take?", a: "Most orders arrive within 25-35 minutes, depending on your location and how busy our kitchen is. You'll see a live estimate at checkout." },
  { q: "Can I track my order?", a: "Yes. Once your order is confirmed, you can follow it live on the map — from the kitchen, to pickup, to your door." },
  { q: "Which payment methods are available?", a: "We accept all major credit and debit cards, digital wallets, and cash on delivery in select areas." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 sm:px-8">
        <Reveal>
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-red">
              FAQ
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
              Questions? Answered.
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 flex flex-col gap-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} direction="up" delay={i * 0.06}>
                <div className="overflow-hidden rounded-2xl border border-ink/8 bg-surface">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-base font-semibold">
                      {f.q}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-light text-red"
                    >
                      <Plus size={16} />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <p className="px-6 pb-5 text-sm leading-relaxed text-gray">
                          {f.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
