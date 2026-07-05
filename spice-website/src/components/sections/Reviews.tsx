"use client";

import { Star } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const reviews = [
  {
    name: "Amina Raza",
    role: "Regular customer",
    rating: 5,
    quote: "Spice has completely changed how my family orders dinner. The tracking is scarily accurate — I know exactly when to set the table.",
    initials: "AR",
  },
  {
    name: "Hassan Malik",
    role: "Food blogger",
    rating: 5,
    quote: "Fast, reliable, and the food always arrives hot. I've tried every app in the city and Spice is the only one I've kept.",
    initials: "HM",
  },
  {
    name: "Sara Khan",
    role: "Busy parent",
    rating: 4,
    quote: "The chatbot support saved me during a delivery mix-up — resolved in minutes, no waiting on hold. Genuinely impressed.",
    initials: "SK",
  },
];

export default function Reviews() {
  return (
    <section className="bg-cloud py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-red">
              Customer Reviews
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
              Loved by people who love food
            </h2>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={r.name} direction="up" delay={i * 0.1}>
              <div className="flex h-full flex-col rounded-3xl bg-surface p-8 shadow-premium">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star
                      key={s}
                      size={16}
                      className={s < r.rating ? "fill-red text-red" : "fill-cloud-dark text-cloud-dark"}
                    />
                  ))}
                </div>
                <p className="mt-5 flex-1 text-[15px] leading-relaxed text-ink/80">
                  &ldquo;{r.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-red-light font-display text-sm font-semibold text-red">
                    {r.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{r.name}</p>
                    <p className="text-xs text-gray">{r.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
