"use client";

const entries = [
  {
    href: "/field-notes/2026/02/001-coming-soon.html",
    title: "001 - Coming Soon.blog",
  },
  {
    href: "/field-notes/2026/02/000-introduction.html",
    title: "000 - Introduction.blog",
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
        {entries.length === 0 ? (
          <div className="text-center py-12 text-white/60">
            <p>No field notes yet. Check back soon!</p>
          </div>
        ) : (
          entries.map((entry) => (
          <a
            key={entry.title}
            href={entry.href}
            className="no-underline flex items-center justify-between py-3 border-b border-white/5 group last:border-0"
          >
            <div className="flex items-center gap-4">
              <span className="w-1.5 h-1.5 rounded-full bg-white/60 group-hover:bg-blue-400 transition-colors" />
              <span className="text-lg font-medium text-white/90 group-hover:text-blue-400 transition-colors">
                {entry.title}
              </span>
            </div>
            <span className="text-white/60 group-hover:text-blue-400 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
          ))
        )}
      </div>

      {/* View All Logs button */}
      <div className="mt-8 flex justify-end">
        <a
          href="/blog.html"
          className="text-sm font-medium text-white/60 hover:text-white transition-colors duration-200"
        >
          View All Notes →
        </a>
      </div>
    </div>
  );
}
