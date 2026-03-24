"use client";

import TerminalCard from "./TerminalCard";

const entries = [
  {
    href: "/field-notes/2026/02/001-coming-soon.html",
    filename: "001_coming_soon.log",
  },
  {
    href: "/field-notes/2026/02/000-introduction.html",
    filename: "000_Introduction.log",
  },
];

export default function FieldNotes() {
  return (
    <TerminalCard filename="field_notes.sh">
      <div className="text-xs text-white/30 font-mono uppercase tracking-widest mb-5">
        Field Notes
      </div>

      <div className="space-y-2">
        {entries.map((entry) => (
          <a
            key={entry.filename}
            href={entry.href}
            className="flex items-center gap-2 py-2 px-3 rounded-lg hover:bg-white/5 transition-colors duration-200 group"
          >
            <span className="text-blue-400/60 font-mono text-sm">&gt;</span>
            <span className="text-sm font-mono text-white/50 group-hover:text-blue-400 transition-colors duration-200">
              {entry.filename}
            </span>
          </a>
        ))}

        {/* Terminal cursor line */}
        <div className="flex items-center gap-2 py-2 px-3">
          <span className="text-white/20 font-mono text-sm">&gt;</span>
          <span className="text-xs font-mono text-white/20 tracking-wider">
            AWAITING_FURTHER_INPUT_
            <span className="inline-block w-2 h-4 bg-white/20 ml-1 animate-pulse" />
          </span>
        </div>
      </div>

      {/* View All Logs button */}
      <div className="mt-6 pt-4" style={{ borderTop: "1px solid rgba(255, 255, 255, 0.06)" }}>
        <a
          href="/blog.html"
          className="inline-flex items-center gap-2 text-xs font-mono text-blue-400/60 hover:text-blue-400 transition-colors duration-200"
        >
          View All Logs →
        </a>
      </div>
    </TerminalCard>
  );
}
