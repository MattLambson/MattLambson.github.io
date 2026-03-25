import Link from "next/link";

export default function Blog() {
  return (
    <div className="w-full flex justify-center pb-24 md:pb-32 px-6 md:px-12 flex-grow">
      <div className="w-full max-w-[1000px] flex flex-col">

        {/* Physical Spacer for Navbar */}
        <div className="w-full h-32 md:h-48 shrink-0" />

        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-[#FB5A2A] rounded-full" />
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Field Operations Logbook
            </h1>
          </div>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl ml-4">
            Personal thoughts, technical deep-dives, and agentic AI experiments.
          </p>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-4 max-w-2xl">
          <Link
            href="/field-notes/2026/02/001-coming-soon.html"
            className="group flex flex-col p-6 rounded-[20px] transition-all duration-300 hover:scale-[1.02] ring-1 ring-white/10"
            style={{ background: "#1f1f22" }}
          >
            <div className="flex items-center gap-4">
              <span className="text-xs font-mono text-[#007AFF] bg-[#007AFF]/10 px-3 py-1 rounded-full">Coming Soon</span>
              <span className="text-zinc-500 text-sm">--- 2026</span>
            </div>
            <h3 className="text-xl font-bold text-white mt-4 group-hover:text-[#007AFF] transition-colors"></h3>
            <p className="text-zinc-400 mt-2 text-sm leading-relaxed">Check back soon for more updates</p>
          </Link>

          <Link
            href="/field-notes/2026/02/000-introduction.html"
            className="group flex flex-col p-6 rounded-[20px] transition-all duration-300 hover:scale-[1.02] ring-1 ring-white/10"
            style={{ background: "#1f1f22" }}
          >
            <div className="flex items-center gap-4">
              <span className="text-zinc-500 text-sm">Feb 2026</span>
            </div>
            <h3 className="text-xl font-bold text-white mt-4 group-hover:text-[#007AFF] transition-colors">000_Introduction</h3>
            <p className="text-zinc-400 mt-2 text-sm leading-relaxed">Establishment of the Field Operations Logbook and initial directives.</p>
          </Link>
        </div>

      </div>
    </div>
  );
}
