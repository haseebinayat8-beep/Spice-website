"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Send, Bot, User } from "lucide-react";

type Msg = { from: "bot" | "user"; text: string };

const canned: Record<string, string> = {
  order: "You can track your order live from the Orders tab in the app — tap any active order to see your rider on the map.",
  refund: "Refunds are processed within 3-5 business days back to your original payment method. Go to Orders > Help with this order to start one.",
  payment: "We accept credit/debit cards, digital wallets, and cash on delivery in select cities. You can manage payment methods in Profile > Payments.",
  delivery: "Average delivery time is 25-35 minutes depending on distance and how busy our kitchen is. You'll see a live estimate before you check out.",
  default: "Thanks for the message! For anything specific, try asking about your order, refunds, payment methods, or delivery times — or reach our human team below.",
};

function getReply(input: string) {
  const q = input.toLowerCase();
  if (q.includes("order") || q.includes("track")) return canned.order;
  if (q.includes("refund") || q.includes("cancel")) return canned.refund;
  if (q.includes("pay")) return canned.payment;
  if (q.includes("deliver") || q.includes("time") || q.includes("long")) return canned.delivery;
  return canned.default;
}

export default function ChatbotDemo() {
  const [messages, setMessages] = useState<Msg[]>([
    { from: "bot", text: "Hi! I'm the Spice assistant. Ask me about your order, refunds, payments, or delivery times." },
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const send = () => {
    if (!input.trim()) return;
    const userMsg: Msg = { from: "user", text: input };
    const reply: Msg = { from: "bot", text: getReply(input) };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setTimeout(() => setMessages((m) => [...m, reply]), 500);
  };

  return (
    <div className="mx-auto flex w-full max-w-xl flex-col overflow-hidden rounded-3xl bg-surface shadow-premium-lg">
      <div className="flex items-center gap-3 bg-black-permanent px-6 py-5 text-white">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-red">
          <Bot size={16} />
        </div>
        <div>
          <p className="font-display text-sm font-semibold">Spice Assistant</p>
          <p className="text-xs text-white/50">Usually replies instantly</p>
        </div>
      </div>

      <div ref={scrollRef} className="flex h-80 flex-col gap-3 overflow-y-auto bg-cloud px-5 py-5">
        {messages.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex items-end gap-2 ${m.from === "user" ? "flex-row-reverse self-end" : "self-start"}`}
          >
            <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${m.from === "user" ? "bg-black-permanent text-white" : "bg-red text-white"}`}>
              {m.from === "user" ? <User size={12} /> : <Bot size={12} />}
            </div>
            <div
              className={`max-w-[240px] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                m.from === "user" ? "bg-red text-white" : "bg-surface text-ink shadow-premium"
              }`}
            >
              {m.text}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex items-center gap-2 border-t border-ink/5 bg-surface px-4 py-3">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
          placeholder="Type your question..."
          className="w-full bg-transparent px-2 py-2 text-sm outline-none placeholder:text-gray"
        />
        <button
          onClick={send}
          aria-label="Send message"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red text-white transition-transform hover:scale-105 active:scale-95"
        >
          <Send size={14} />
        </button>
      </div>
    </div>
  );
}
