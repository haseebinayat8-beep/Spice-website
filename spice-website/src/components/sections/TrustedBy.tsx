const cities = [
  "Lahore", "Karachi", "Islamabad", "Faisalabad", "Rawalpindi",
  "Multan", "Peshawar", "Sialkot", "Gujranwala", "Hyderabad",
];

export default function TrustedBy() {
  const loop = [...cities, ...cities];

  return (
    <section className="border-y border-ink/5 bg-cloud py-10">
      <p className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-gray">
        Now delivering fresh from our kitchens in 10+ cities
      </p>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-cloud to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-cloud to-transparent" />
        <div className="animate-marquee flex w-max gap-16">
          {loop.map((n, i) => (
            <span
              key={i}
              className="font-display text-xl font-semibold text-ink/25 whitespace-nowrap"
            >
              {n}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
