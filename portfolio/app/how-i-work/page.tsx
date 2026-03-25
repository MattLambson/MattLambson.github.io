import Link from "next/link";

export default function HowIWorkPage() {
  return (
    <div className="w-full flex justify-center pb-24 md:pb-32 px-6 md:px-12 flex-grow">
      <div className="w-full max-w-[1000px] flex flex-col">
        {/* Physical Spacer for Navbar */}
        <div className="w-full h-32 md:h-36 shrink-0" />

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-[#FB5A2A] rounded-full" />
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              How I Work
            </h1>
          </div>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl ml-4">
            My methodology for building AI-driven solutions that move the needle.
          </p>
        </div>

        {/* Cinematic Gap */}
        <div className="w-full h-32 md:h-36 shrink-0" />

        {/* 1. The Process (Loop) */}
        <div className="flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">The Process</h2>

          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 mb-16">
            {["Discovery", "Prompt", "Iterate", "Repeat"].map((step, i, arr) => (
              <div key={step} className="flex items-center gap-4 md:gap-8">
                <span className="text-[#007AFF] font-mono font-bold text-lg md:text-2xl px-8 py-4 rounded-full bg-[#007AFF]/10 ring-1 ring-[#007AFF]/30 shadow-[0_0_30px_rgba(0,122,255,0.15)]">
                  {step}
                </span>
                {i < arr.length - 1 && (
                  <svg className="w-6 h-6 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                )}
              </div>
            ))}
          </div>

          <p className="text-zinc-400 text-center max-w-3xl leading-relaxed text-lg md:text-xl">
            This flow powers how I build. Not just agentic AI, but everything from demo environments to workflow automations. It&apos;s my mental model for moving fast, learning quickly, and building with clarity at every step.
          </p>
        </div>

        {/* Cinematic Gap */}
        <div className="w-full h-32 md36 shrink-0" />

        {/* 2. My Approach */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 border-b border-white/10 pb-8">My Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">

            <div className="flex flex-col gap-2">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#007AFF] mb-4">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Build-first mindset</h3>
              <p className="text-zinc-400 leading-relaxed text-base">I turn ideas into working prototypes early so teams can react to something real, not a slide deck.</p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#007AFF] mb-4">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Clarity over cleverness</h3>
              <p className="text-zinc-400 leading-relaxed text-base">If it&apos;s not intuitive, it&apos;s not done. I design for impact, not complexity.</p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#007AFF] mb-4">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Iterate with purpose</h3>
              <p className="text-zinc-400 leading-relaxed text-base">I build in feedback loops so I can test small, improve quickly, and show off what actually works.</p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#007AFF] mb-4">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Systems over silos</h3>
              <p className="text-zinc-400 leading-relaxed text-base">Everything I build connects across teams, tools, and workflows. No one-off efforts here.</p>
            </div>

          </div>
        </div>

        {/* Cinematic Gap */}
        <div className="w-full h-32 md:h-36 shrink-0" />

        {/* 3. Tools I Reach For */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 border-b border-white/10 pb-8">Tools I Reach For</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            <div className="flex flex-col gap-6">
              <h3 className="text-2xl font-bold text-white">AI & Automation</h3>
              <div className="flex flex-wrap gap-2">
                {["ChatGPT", "Claude", "Gemini", "CM.com HALO", "Hugging Face Open Source LLMs"].map(t => (
                  <span key={t} className="px-4 py-2 bg-white/5 ring-1 ring-white/10 rounded-full text-xs font-medium text-zinc-300">{t}</span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <h3 className="text-2xl font-bold text-white">Development</h3>
              <div className="flex flex-wrap gap-2">
                {["API Integrations", "JSON", "Python", "HTML / CSS / JavaScript"].map(t => (
                  <span key={t} className="px-4 py-2 bg-white/5 ring-1 ring-white/10 rounded-full text-xs font-medium text-zinc-300">{t}</span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <h3 className="text-2xl font-bold text-white">Productivity</h3>
              <div className="flex flex-wrap gap-2">
                {["Postman", "Notion", "Confluence", "Loom"].map(t => (
                  <span key={t} className="px-4 py-2 bg-white/5 ring-1 ring-white/10 rounded-full text-xs font-medium text-zinc-300">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Cinematic Gap */}
        <div className="w-full h-32 md:h-36 shrink-0" />

        {/* 4. In Practice */}
        <div className="mb-24 md:mb-32">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 border-b border-white/10 pb-8">In Practice</h2>
          <p className="text-zinc-400 mb-12 text-xl max-w-2xl">Here&apos;s how this approach plays out in my projects:</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mb-24">
            <div className="flex flex-col gap-4">
              <div className="text-[#007AFF] bg-white/5 w-max p-4 rounded-xl mb-2"><svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg></div>
              <h4 className="text-xl font-bold text-white">Trade Show Experiences</h4>
              <p className="text-base text-zinc-400 leading-relaxed">Touchscreen character selectors to explain AI at trade shows.</p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="text-[#007AFF] bg-white/5 w-max p-4 rounded-xl mb-2"><svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg></div>
              <h4 className="text-xl font-bold text-white">Data Integration Demos</h4>
              <p className="text-base text-zinc-400 leading-relaxed">CRM mockups that simulate data flowing into CM.com&apos;s CDP.</p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="text-[#007AFF] bg-white/5 w-max p-4 rounded-xl mb-2"><svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg></div>
              <h4 className="text-xl font-bold text-white">Team Enablement Tools</h4>
              <p className="text-base text-zinc-400 leading-relaxed">Demo hubs for team-wide HALO testing and personalization.</p>
            </div>
            <div className="w-full h-32 md:h-12 shrink-0" />
          </div>

          <div className="bg-[#007AFF]/10 ring-1 ring-[#007AFF]/30 rounded-[28px] p-10 text-center">
            <p className="text-zinc-300">
              Want to see more? Head over to <Link href="/projects" className="text-white font-bold hover:text-[#007AFF] underline underline-offset-4 decoration-[#007AFF]/50 transition-colors">What I&apos;ve Done</Link>.
            </p>
          </div>
        </div>

        {/* Cinematic Gap */}
        <div className="w-full h-32 md:h-48 shrink-0" />
      </div>
    </div>
  );
}
