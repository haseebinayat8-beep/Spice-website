import { ReactNode } from "react";

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-black-permanent pb-20 pt-40">
      <div className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-red/30 blur-[100px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-red/10 blur-[100px]" />
      <div className="relative mx-auto max-w-4xl px-6 text-center text-white sm:px-8">
        <span className="text-sm font-semibold uppercase tracking-widest text-red">
          {eyebrow}
        </span>
        <h1 className="mt-3 font-display text-4xl font-bold leading-tight sm:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/70">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
