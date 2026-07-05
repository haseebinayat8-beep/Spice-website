"use client";

import { useState } from "react";
import { Search, Flame, Clock } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/ui/StaggerReveal";

const categories = [
  { emoji: "🍔", name: "Burgers" },
  { emoji: "🌯", name: "Wraps" },
  { emoji: "🍟", name: "Sides" },
  { emoji: "🥤", name: "Drinks" },
  { emoji: "🍱", name: "Combos" },
  { emoji: "🍰", name: "Desserts" },
];

const menuItems = [
  { name: "Scorching Bite", category: "Burgers", desc: "Double patty, melted cheese, our signature scorch sauce.", price: "Rs. 1,199", spice: 3, time: "12-15 min", tag: "Best Seller" },
  { name: "Flame Beast", category: "Burgers", desc: "Char-grilled beef, smoked jalapeños, flame-roasted onions.", price: "Rs. 1,299", spice: 4, time: "12-15 min", tag: "Spiciest" },
  { name: "Classic Smash", category: "Burgers", desc: "Smashed beef patty, American cheese, house pickles.", price: "Rs. 899", spice: 1, time: "10-12 min", tag: "Classic" },
  { name: "Spice Wrap", category: "Wraps", desc: "Grilled chicken, chipotle mayo, crisp lettuce, tortilla.", price: "Rs. 749", spice: 2, time: "8-10 min", tag: "New" },
  { name: "Peri Peri Wrap", category: "Wraps", desc: "Peri-marinated chicken, garlic sauce, fresh veggies.", price: "Rs. 799", spice: 3, time: "8-10 min" },
  { name: "Loaded Fries", category: "Sides", desc: "Crispy fries topped with cheese sauce and jalapeños.", price: "Rs. 549", spice: 2, time: "6-8 min", tag: "Popular" },
  { name: "Spicy Wings (6pc)", category: "Sides", desc: "Double-fried wings tossed in Spice's signature hot glaze.", price: "Rs. 699", spice: 4, time: "10-12 min" },
  { name: "Onion Rings", category: "Sides", desc: "Golden battered rings, served with smoky dip.", price: "Rs. 449", spice: 0, time: "6-8 min" },
  { name: "Iced Spice Tea", category: "Drinks", desc: "House-brewed iced tea with a citrus kick.", price: "Rs. 299", spice: 0, time: "2-3 min" },
  { name: "Classic Cola", category: "Drinks", desc: "Ice-cold cola, served straight from the tap.", price: "Rs. 199", spice: 0, time: "1-2 min" },
  { name: "Scorching Bite Combo", category: "Combos", desc: "Scorching Bite, loaded fries, and a drink of your choice.", price: "Rs. 1,799", spice: 3, time: "12-15 min", tag: "Best Value" },
  { name: "Chocolate Lava Cake", category: "Desserts", desc: "Warm molten chocolate cake with a scoop of vanilla.", price: "Rs. 549", spice: 0, time: "5-6 min" },
];

export default function MenuPage() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = menuItems.filter((item) => {
    const matchesQuery = item.name.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = !activeCategory || item.category === activeCategory;
    return matchesQuery && matchesCategory;
  });

  return (
    <>
      {/* Search hero */}
      <section className="relative overflow-hidden bg-black-permanent pb-16 pt-40">
        <div className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-red/30 blur-[100px]" />
        <div className="relative mx-auto max-w-3xl px-6 text-center text-white sm:px-8">
          <span className="text-sm font-semibold uppercase tracking-widest text-red">
            Our Menu
          </span>
          <h1 className="mt-3 font-display text-4xl font-bold sm:text-6xl">
            What are you craving?
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-white/70">
            Every item on this menu is made fresh in our own Spice kitchens —
            no third-party restaurants, just our food, delivered by us.
          </p>
          <div className="mx-auto mt-8 flex max-w-xl items-center gap-3 rounded-full bg-surface p-2 pl-5 shadow-premium-lg">
            <Search size={18} className="shrink-0 text-gray" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              placeholder="Search the menu..."
              className="w-full bg-transparent py-2.5 text-sm text-ink outline-none placeholder:text-gray"
            />
            <button className="shrink-0 rounded-full bg-red px-6 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-105">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-surface py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <Reveal>
            <h2 className="font-display text-2xl font-bold">Browse by category</h2>
          </Reveal>
          <div className="mt-8 flex gap-4 overflow-x-auto pb-2">
            <button
              onClick={() => setActiveCategory(null)}
              className={`flex shrink-0 flex-col items-center gap-2 rounded-2xl px-6 py-4 transition-colors ${
                !activeCategory ? "bg-red text-white" : "bg-cloud text-ink hover:bg-cloud-dark"
              }`}
            >
              <span className="text-2xl">🍽️</span>
              <span className="text-xs font-medium">All</span>
            </button>
            {categories.map((c) => (
              <button
                key={c.name}
                onClick={() => setActiveCategory(c.name)}
                className={`flex shrink-0 flex-col items-center gap-2 rounded-2xl px-6 py-4 transition-colors ${
                  activeCategory === c.name ? "bg-red text-white" : "bg-cloud text-ink hover:bg-cloud-dark"
                }`}
              >
                <span className="text-2xl">{c.emoji}</span>
                <span className="text-xs font-medium">{c.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu items */}
      <section className="bg-cloud py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <Reveal>
            <div className="flex items-end justify-between">
              <h2 className="font-display text-3xl font-bold">
                {activeCategory ? activeCategory : "Full menu"}
              </h2>
              <span className="text-sm text-gray">{filtered.length} items</span>
            </div>
          </Reveal>

          {filtered.length === 0 ? (
            <p className="mt-10 text-center text-gray">
              No items match your search. Try a different term or category.
            </p>
          ) : (
            <StaggerContainer className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((item) => (
                <StaggerItem key={item.name}>
                  <div className="group overflow-hidden rounded-3xl bg-surface shadow-premium transition-all duration-400 hover:-translate-y-2 hover:shadow-premium-lg">
                    <div className="relative flex h-40 items-center justify-center bg-gradient-to-br from-red-light to-cloud">
                      <span className="text-5xl transition-transform duration-500 group-hover:scale-110">🍽️</span>
                      {item.tag && (
                        <span className="absolute left-4 top-4 rounded-full bg-surface px-3 py-1 text-xs font-semibold text-red shadow-sm">
                          {item.tag}
                        </span>
                      )}
                    </div>
                    <div className="p-6">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="font-display text-lg font-semibold">{item.name}</h3>
                        <span className="shrink-0 font-display text-base font-bold text-red">{item.price}</span>
                      </div>
                      <p className="mt-2 text-sm text-gray">{item.desc}</p>
                      <div className="mt-4 flex items-center justify-between text-xs text-gray">
                        <span className="flex items-center gap-1">
                          <Clock size={13} /> {item.time}
                        </span>
                        {item.spice > 0 && (
                          <span className="flex items-center gap-0.5">
                            {Array.from({ length: item.spice }).map((_, i) => (
                              <Flame key={i} size={13} className="fill-red text-red" />
                            ))}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          )}
        </div>
      </section>
    </>
  );
}
