"use client";

const entries = [
  {
    href: "/field-notes/2026/02/001-coming-soon.html",
    title: "Coming Soon",
  },
  {
    href: "/field-notes/2026/02/000-introduction.html",
    title: "Introduction",
  },
];

export default function FieldNotes() {
  return (
    <div className="w-full">
      <div className="flex items-center gap-3 md:gap-4 mb-12">
        <div className="w-1 h-8 md:h-10 bg-[#FB5A2A] rounded-full" />
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
          Field Notes
        </h2>
      </div>

      <div className="flex flex-col gap-2">
        {entries.map((entry) => (
          <a
            key={entry.title}
            href={entry.href}
            className="flex items-center justify-between py-3 border-b border-white/5 group last:border-0"
          >
            <div className="flex items-center gap-4">
              <span className="w-1.5 h-1.5 rounded-full bg-white/30 group-hover:bg-blue-400 transition-colors" />
              <span className="text-lg font-medium text-white/80 group-hover:text-blue-400 transition-colors">
                {entry.title}
              </span>
            </div>
            <span className="text-white/30 group-hover:text-blue-400 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        ))}
      </div>

      {/* View All Logs button */}
      <div className="mt-8 flex justify-end">
        <a
          href="/blog.html"
          className="text-sm font-medium text-white/40 hover:text-white/80 transition-colors duration-200"
        >
          View All Notes →
        </a>
      </div>
    </div>
  );
}
