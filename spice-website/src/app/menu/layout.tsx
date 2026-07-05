import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Browse Spice's full menu — burgers, wraps, sides, drinks, and combos, all made fresh in our own kitchens.",
};

export default function MenuLayout({ children }: { children: React.ReactNode }) {
  return children;
}
