import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Get help with your Spice orders. Chat with our AI assistant, browse the help center, read FAQs, or contact our team directly.",
};

export default function SupportLayout({ children }: { children: React.ReactNode }) {
  return children;
}
