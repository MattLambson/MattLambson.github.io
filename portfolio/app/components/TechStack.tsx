"use client";

import TerminalCard from "./TerminalCard";

const stackCategories = [
  {
    label: "Intelligence Layer",
    pills: ["Gemini", "Claude", "ChatGPT"],
  },
  {
    label: "Messaging & Channels",
    pills: ["WhatsApp", "RCS", "SMS", "LiveChat", "E-Mail"],
  },
  {
    label: "Logic & Orchestration",
    pills: ["HALO Agentic AI", "Claude Code", "Google Antigravity", "JSON", "REST APIs"],
  },
  {
    label: "The Toolkit",
    pills: ["Postman", "HTML/CSS/JS", "Notion", "GitHub", "Loom"],
  },
];

export default function TechStack() {
  return (
    <TerminalCard filename="tech_stack.sh">
      <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-12">
        The Technical Stack
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-x-24 lg:gap-y-20">
        {stackCategories.map((cat) => (
          <div key={cat.label}>
            <div className="text-sm text-white/50 font-semibold uppercase tracking-widest mb-5">
              {cat.label}
            </div>
            <div className="flex flex-wrap gap-3">
              {cat.pills.map((pill) => (
                <span
                  key={pill}
                  className="px-5 py-2.5 text-base font-mono rounded-lg transition-colors"
                  style={{
                    background: "rgba(0, 122, 255, 0.05)",
                    color: "#3b82f6",
                    border: "1px solid rgba(0, 122, 255, 0.25)",
                  }}
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </TerminalCard>
  );
}
