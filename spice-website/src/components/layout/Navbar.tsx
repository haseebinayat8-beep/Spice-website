"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import Logo from "@/components/ui/Logo";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/menu", label: "Menu" },
  { href: "/support", label: "Support" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Initialize from saved preference, falling back to system preference.
  useEffect(() => {
    const saved = localStorage.getItem("spice-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialDark = saved ? saved === "dark" : prefersDark;
    setDark(initialDark);
    document.documentElement.classList.toggle("dark-mode", initialDark);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark-mode", dark);
    localStorage.setItem("spice-theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled ? "py-3" : "py-5"
        )}
      >
        <div
          className={cn(
            "mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-5 transition-all duration-300 sm:px-6",
            scrolled ? "glass shadow-premium py-2.5" : "py-1"
          )}
        >
          <Link href="/" className="flex items-center gap-2.5 group">
            <Logo className="h-8 w-24 transition-transform duration-300 group-hover:scale-105" />
            <span className="sr-only">Spice</span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="relative text-sm font-medium text-ink/80 transition-colors hover:text-red after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-red after:transition-all after:duration-300 hover:after:w-full"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <button
              aria-label="Toggle dark mode"
              onClick={() => setDark((d) => !d)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/10 text-ink/70 transition-colors hover:border-red hover:text-red"
            >
              {dark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <Link
              href="#download"
              className="rounded-full bg-red px-5 py-2.5 text-sm font-semibold text-white shadow-red-glow transition-transform duration-300 hover:scale-105 active:scale-95"
            >
              Download App
            </Link>
          </div>

          <button
            className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/10 md:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={18} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] glass-dark md:hidden"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="absolute right-0 top-0 flex h-full w-[80%] max-w-sm flex-col bg-surface px-6 py-6 shadow-premium-lg"
            >
              <div className="flex items-center justify-between">
                <Logo className="h-7 w-20" />
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/10"
                >
                  <X size={18} />
                </button>
              </div>
              <nav className="mt-10 flex flex-col gap-6">
                {links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-2xl font-semibold text-ink"
                  >
                    {l.label}
                  </Link>
                ))}
              </nav>
              <Link
                href="#download"
                onClick={() => setOpen(false)}
                className="mt-auto rounded-full bg-red px-5 py-3.5 text-center text-sm font-semibold text-white shadow-red-glow"
              >
                Download App
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
