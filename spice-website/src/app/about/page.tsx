"use client";

import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/ui/StaggerReveal";
import { Target, Sparkles, ShieldCheck, HeartHandshake, Mail, Phone } from "lucide-react";

const values = [
  { icon: Sparkles, title: "Quality First", desc: "Every item is made fresh in our own kitchens to the same standard, every time." },
  { icon: ShieldCheck, title: "Trust & Safety", desc: "Every order, payment, and delivery is protected end to end." },
  { icon: HeartHandshake, title: "People Over Process", desc: "Riders, kitchen staff, and customers — we build for all three, not just one." },
  { icon: Target, title: "Relentless Speed", desc: "We obsess over shaving minutes off every delivery, without cutting corners." },
];

const team = [
  { name: "Zainab Ahmed", role: "Founder & CEO", initials: "ZA" },
  { name: "Bilal Tariq", role: "Head of Product", initials: "BT" },
  { name: "Mariam Yousuf", role: "Head of Operations", initials: "MY" },
  { name: "Omar Farooq", role: "Head of Engineering", initials: "OF" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Spice"
        title="Delivering more than food"
        subtitle="We started Spice with one question: why does getting a great meal delivered still feel complicated? Here's what we've built since."
      />

      {/* Our Story */}
      <section className="bg-surface py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 sm:px-8 lg:grid-cols-2 lg:px-12">
          <Reveal direction="right">
            <span className="text-sm font-semibold uppercase tracking-widest text-red">
              Our Story
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
              Built by people tired of cold food and cold apps
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray">
              Spice began in a small kitchen in 2021, when our founder
              noticed the same problem across every delivery app she tried:
              slow updates, hidden fees, and food that arrived lukewarm.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray">
              So we built something different — live tracking that&apos;s
              actually live, pricing that&apos;s actually transparent, and a
              rider network trained to treat every bag like it&apos;s their
              own dinner. Today, Spice delivers over 500,000 meals a month
              across the country.
            </p>
          </Reveal>
          <Reveal direction="left">
            <div className="grid grid-cols-2 gap-5">
              {[
                { stat: "2021", label: "Founded" },
                { stat: "25+", label: "Kitchen locations" },
                { stat: "500K+", label: "Monthly orders" },
                { stat: "30 min", label: "Average delivery" },
              ].map((s) => (
                <div key={s.label} className="rounded-3xl bg-cloud p-8 text-center">
                  <p className="font-display text-3xl font-bold text-red">{s.stat}</p>
                  <p className="mt-2 text-sm text-gray">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-cloud py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center sm:px-8">
          <Reveal direction="scale">
            <span className="text-sm font-semibold uppercase tracking-widest text-red">
              Our Mission
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
              To make great food effortlessly accessible, everywhere
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray">
              We believe good food shouldn&apos;t require a compromise on
              speed, price, or trust. Every decision we make, from routing
              algorithms to rider training, serves that single goal.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="bg-surface py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-sm font-semibold uppercase tracking-widest text-red">
                Our Values
              </span>
              <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
                What we won&apos;t compromise on
              </h2>
            </div>
          </Reveal>

          <StaggerContainer className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <div className="h-full rounded-3xl border border-ink/5 bg-surface p-7 shadow-premium transition-all duration-400 hover:-translate-y-2 hover:shadow-red-glow">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-light text-red">
                    <v.icon size={22} />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray">{v.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Team */}
      <section className="bg-cloud py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-sm font-semibold uppercase tracking-widest text-red">
                Our Team
              </span>
              <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
                The people behind Spice
              </h2>
            </div>
          </Reveal>

          <StaggerContainer className="mt-16 grid grid-cols-2 gap-6 lg:grid-cols-4">
            {team.map((m) => (
              <StaggerItem key={m.name}>
                <div className="flex flex-col items-center rounded-3xl bg-surface p-8 text-center shadow-premium">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-red-light font-display text-xl font-bold text-red">
                    {m.initials}
                  </div>
                  <h3 className="mt-4 font-display text-base font-semibold">{m.name}</h3>
                  <p className="mt-1 text-sm text-gray">{m.role}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Contact strip */}
      <section id="contact" className="bg-surface py-20">
        <div className="mx-auto max-w-4xl px-6 sm:px-8">
          <Reveal>
            <div className="flex flex-col items-center justify-center gap-8 rounded-3xl bg-red p-10 text-center text-white sm:flex-row sm:justify-between sm:text-left">
              <div>
                <h3 className="font-display text-2xl font-bold">
                  Want to talk to us directly?
                </h3>
                <p className="mt-2 text-white/80">
                  We reply within one business day.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <a href="mailto:hello@spice.app" className="flex items-center gap-2 text-sm font-medium">
                  <Mail size={16} /> hello@spice.app
                </a>
                <a href="tel:+11234567890" className="flex items-center gap-2 text-sm font-medium">
                  <Phone size={16} /> +1 (123) 456-7890
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
