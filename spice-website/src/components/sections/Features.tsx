"use client";

import {
  Zap, MapPin, ShieldCheck, MessageCircle, UserPlus, CreditCard, Heart,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/ui/StaggerReveal";

const features = [
  { icon: Zap, title: "Fast Delivery", desc: "Hot food at your door in 30 minutes or less, guaranteed." },
  { icon: MapPin, title: "Live Order Tracking", desc: "Watch your order move in real time, from kitchen to doorstep." },
  { icon: ShieldCheck, title: "Secure Payments", desc: "Bank-level encryption on every transaction, every time." },
  { icon: MessageCircle, title: "AI Chatbot Support", desc: "Get instant answers, 24/7, from our smart in-app assistant." },
  { icon: UserPlus, title: "Easy Registration", desc: "Sign up and place your first order in under a minute." },
  { icon: CreditCard, title: "Multiple Payment Methods", desc: "Cards, wallets, or cash — pay however works for you." },
  { icon: Heart, title: "Favorite Orders", desc: "Save your go-to meals and reorder them in a single tap." },
];

export default function Features() {
  return (
    <section id="features" className="bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-red">
              Why Spice
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
              Everything you need, nothing you don&apos;t
            </h2>
            <p className="mt-4 text-lg text-gray">
              Built for people who don&apos;t want to think twice about
              dinner.
            </p>
          </div>
        </Reveal>

        <StaggerContainer className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <StaggerItem key={f.title}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-ink/5 bg-surface p-8 shadow-premium transition-all duration-400 hover:-translate-y-2 hover:shadow-red-glow">
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-red-light opacity-0 transition-opacity duration-400 group-hover:opacity-100" />
                <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-red-light text-red transition-colors duration-400 group-hover:bg-red group-hover:text-white">
                  <f.icon size={22} />
                </div>
                <h3 className="relative mt-5 font-display text-lg font-semibold">
                  {f.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-gray">
                  {f.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
