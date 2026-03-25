"use client";

import Script from "next/script";

export default function Contact() {
  const openCalendly = () => {
    // @ts-ignore
    if (window.Calendly) {
      // @ts-ignore
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/matthew-lambson/60min',
        customColors: { primary: "#007AFF" },
        hideEventTypeDetails: false,
        hideLanding: false,
      });
    }
  };

  return (
    <div className="w-full flex justify-center pb-24 md:pb-32 px-6 md:px-12 flex-grow">
      
      {/* Calendly inject */}
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
      <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />

      <div className="w-full max-w-[1000px] flex flex-col">
        
        {/* Physical Spacer for Navbar */}
        <div className="w-full h-32 md:h-48 shrink-0" />

        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-[#FB5A2A] rounded-full" />
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Let&apos;s Connect
            </h1>
          </div>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl ml-4">
            Ready to explore how AI can transform your workflows? Let&apos;s chat about what&apos;s possible.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_400px] gap-12">
          
          {/* Methods */}
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold text-white mb-2">Get In Touch</h2>
            
            <a href="mailto:matthew.lambson@gmail.com" className="group flex items-center gap-6 p-6 rounded-[20px] transition-all duration-300 hover:scale-[1.02] ring-1 ring-white/10" style={{ background: "#1f1f22" }}>
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#007AFF] group-hover:bg-[#007AFF] group-hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-zinc-500">Email</span>
                <span className="text-white font-medium group-hover:text-[#007AFF] transition-colors">matthew.lambson@gmail.com</span>
              </div>
            </a>

            <a href="https://www.linkedin.com/in/mattlambson/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-6 p-6 rounded-[20px] transition-all duration-300 hover:scale-[1.02] ring-1 ring-white/10" style={{ background: "#1f1f22" }}>
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#007AFF] group-hover:bg-[#007AFF] group-hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-zinc-500">LinkedIn</span>
                <span className="text-white font-medium group-hover:text-[#007AFF] transition-colors">Connect with me professionally</span>
              </div>
            </a>

            <a href="https://github.com/MattLambson" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-6 p-6 rounded-[20px] transition-all duration-300 hover:scale-[1.02] ring-1 ring-white/10" style={{ background: "#1f1f22" }}>
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#007AFF] group-hover:bg-[#007AFF] group-hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-zinc-500">GitHub</span>
                <span className="text-white font-medium group-hover:text-[#007AFF] transition-colors">Check out my code</span>
              </div>
            </a>

            <button onClick={openCalendly} className="group flex items-center justify-between gap-6 p-6 rounded-[20px] transition-all duration-300 hover:scale-[1.02] ring-1 ring-[#007AFF]/30 relative overflow-hidden" style={{ background: "linear-gradient(145deg, #1f1f22 0%, #1a1a1d 100%)" }}>
              <div className="absolute inset-0 bg-[#007AFF]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-center gap-6 relative z-10">
                <div className="w-12 h-12 rounded-full bg-[#007AFF]/10 flex items-center justify-center text-[#007AFF] group-hover:bg-[#007AFF] group-hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-sm text-zinc-500">Schedule a Meeting</span>
                  <span className="text-white font-medium group-hover:text-[#007AFF] transition-colors">Book a time that works for you</span>
                </div>
              </div>
              <span className="text-[#007AFF] text-xl relative z-10 group-hover:translate-x-1 transition-transform">→</span>
            </button>

          </div>

          {/* Topics Sidebar */}
          <div className="flex flex-col pt-8 md:pt-0">
            <h2 className="text-xl font-bold text-white mb-6 md:mt-2">What We Could Discuss</h2>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 ring-1 ring-white/10">
                <span className="text-[#007AFF] mt-1">▹</span>
                <span className="text-zinc-300 text-sm leading-relaxed">AI workflow automation and agentic systems</span>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 ring-1 ring-white/10">
                <span className="text-[#007AFF] mt-1">▹</span>
                <span className="text-zinc-300 text-sm leading-relaxed">Custom demo development and sales enablement tools</span>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 ring-1 ring-white/10">
                <span className="text-[#007AFF] mt-1">▹</span>
                <span className="text-zinc-300 text-sm leading-relaxed">Technical consulting and solution architecture</span>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 ring-1 ring-white/10">
                <span className="text-[#007AFF] mt-1">▹</span>
                <span className="text-zinc-300 text-sm leading-relaxed">Collaboration opportunities and project partnerships</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
