"use client";

const directives = [
  {
    icon: <svg className="w-7 h-7 text-[#3b82f6]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/></svg>,
    title: "Building Trust",
    description:
      "Reliability is everything. I build confidence by mastering the details, constraints, and edge cases.",
  },
  {
    icon: <svg className="w-7 h-7 text-[#3b82f6]" fill="currentColor" viewBox="0 0 24 24"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z"/></svg>,
    title: "Technical Storytelling",
    description:
      "Making sense of complex systems so everyone in the room actually understands the value.",
  },
  {
    icon: <svg className="w-7 h-7 text-[#3b82f6]" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" /></svg>,
    title: "Closing the Gap",
    description:
      "Working at the intersection of product, engineering, and the customer's real problems.",
  },
  {
    icon: <svg className="w-7 h-7 text-[#3b82f6]" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>,
    title: "Focus on Outcomes",
    description:
      'Demos aren\'t about features; they\'re about the "Aha!" moment where the solution clicks.',
  },
];

export default function CoreDirectives() {
  return (
    <div className="w-full">
      <div className="flex items-center gap-3 mb-10">
        <div className="w-1 h-6 bg-[#FB5A2A] rounded-full" />
        <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">
          Core Directives
        </h2>
      </div>

      <div className="flex flex-col gap-12">
        {directives.map((d) => (
          <div key={d.title} className="flex items-start gap-6">
            <span className="mt-1 shrink-0">{d.icon}</span>
            <div>
              <div className="text-lg md:text-xl font-bold text-white/95 mb-2">
                {d.title}
              </div>
              <div className="text-base text-white/50 leading-relaxed font-light">
                {d.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
