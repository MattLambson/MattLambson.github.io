"use client";

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
    <div className="flex flex-col mb-8">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-1 h-6 bg-[#FB5A2A] rounded-full" />
        <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">
          The Technical Stack
        </h2>
      </div>

      <div className="flex flex-col gap-12">
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
                    border: "1px solid rgba(0, 122, 255, 0.2)",
                  }}
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
