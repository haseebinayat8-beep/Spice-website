"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, Package, CreditCard, Truck, UserCog } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/ui/StaggerReveal";
import FAQ from "@/components/sections/FAQ";
import ChatbotDemo from "@/components/sections/ChatbotDemo";

const helpTopics = [
  { icon: Package, title: "Orders", desc: "Track, edit, or cancel an order." },
  { icon: CreditCard, title: "Payments", desc: "Manage cards, wallets, and refunds." },
  { icon: Truck, title: "Delivery", desc: "Delivery times, areas, and riders." },
  { icon: UserCog, title: "Account", desc: "Profile, password, and privacy." },
];

export default function SupportPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Support"
        title="We're here to help"
        subtitle="Chat with our assistant, browse the help center, or reach a real human — whatever's fastest for you."
      />

      {/* Chatbot */}
      <section className="bg-surface py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <Reveal>
            <div className="mx-auto max-w-xl text-center">
              <span className="text-sm font-semibold uppercase tracking-widest text-red">
                AI Chatbot
              </span>
              <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
                Ask, and get answers instantly
              </h2>
            </div>
          </Reveal>
          <div className="mt-14">
            <Reveal direction="scale">
              <ChatbotDemo />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Help Center */}
      <section className="bg-cloud py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-sm font-semibold uppercase tracking-widest text-red">
                Help Center
              </span>
              <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
                Browse by topic
              </h2>
            </div>
          </Reveal>
          <StaggerContainer className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {helpTopics.map((t) => (
              <StaggerItem key={t.title}>
                <button className="group h-full w-full rounded-3xl bg-surface p-7 text-left shadow-premium transition-all duration-400 hover:-translate-y-2 hover:shadow-red-glow">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-light text-red transition-colors duration-400 group-hover:bg-red group-hover:text-white">
                    <t.icon size={22} />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold">{t.title}</h3>
                  <p className="mt-2 text-sm text-gray">{t.desc}</p>
                </button>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* FAQ (reused component) */}
      <FAQ />

      {/* Contact */}
      <section id="contact" className="bg-cloud py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-sm font-semibold uppercase tracking-widest text-red">
                Contact Us
              </span>
              <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
                Send us a message
              </h2>
            </div>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-5">
            {/* Form */}
            <Reveal direction="right" className="lg:col-span-3">
              <div className="rounded-3xl bg-surface p-8 shadow-premium sm:p-10">
                {submitted ? (
                  <div className="flex flex-col items-center py-10 text-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-light text-red">
                      <Send size={22} />
                    </div>
                    <h3 className="mt-5 font-display text-xl font-semibold">
                      Message sent!
                    </h3>
                    <p className="mt-2 text-sm text-gray">
                      We&apos;ll get back to you within one business day.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div>
                        <label className="text-sm font-medium text-ink/70">Name</label>
                        <input
                          required
                          type="text"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="mt-2 w-full rounded-xl border border-ink/10 bg-surface px-4 py-3 text-sm outline-none transition-colors focus:border-red"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-ink/70">Email</label>
                        <input
                          required
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="mt-2 w-full rounded-xl border border-ink/10 bg-surface px-4 py-3 text-sm outline-none transition-colors focus:border-red"
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-ink/70">Message</label>
                      <textarea
                        required
                        rows={5}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="mt-2 w-full resize-none rounded-xl border border-ink/10 bg-surface px-4 py-3 text-sm outline-none transition-colors focus:border-red"
                        placeholder="How can we help?"
                      />
                    </div>
                    <button
                      type="submit"
                      className="flex items-center justify-center gap-2 rounded-full bg-red px-6 py-3.5 text-sm font-semibold text-white shadow-red-glow transition-transform hover:scale-[1.02] active:scale-95"
                    >
                      Send Message
                      <Send size={14} />
                    </button>
                  </form>
                )}
              </div>
            </Reveal>

            {/* Contact info + map */}
            <Reveal direction="left" className="lg:col-span-2">
              <div className="flex h-full flex-col gap-5">
                <div className="rounded-3xl bg-surface p-6 shadow-premium">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-light text-red">
                      <Mail size={18} />
                    </div>
                    <div>
                      <p className="text-xs text-gray">Email us</p>
                      <p className="text-sm font-semibold">support@spice.app</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-3xl bg-surface p-6 shadow-premium">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-light text-red">
                      <Phone size={18} />
                    </div>
                    <div>
                      <p className="text-xs text-gray">Call us</p>
                      <p className="text-sm font-semibold">+1 (123) 456-7890</p>
                    </div>
                  </div>
                </div>

                {/* Map placeholder - swap iframe src for real Google Maps embed */}
                <div className="relative flex flex-1 min-h-[220px] items-center justify-center overflow-hidden rounded-3xl bg-cloud">
                  <div className="flex flex-col items-center gap-2 text-center text-gray">
                    <MapPin size={28} className="text-red" />
                    <p className="text-sm font-medium">Google Map goes here</p>
                    <p className="max-w-[220px] text-xs">
                      Swap this block for a real embedded Google Maps iframe with your office address.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
