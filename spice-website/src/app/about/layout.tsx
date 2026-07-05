import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn the story behind Spice — our mission, our values, and the team building the future of food delivery.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
