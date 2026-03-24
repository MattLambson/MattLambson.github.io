import { motion } from "framer-motion";

const steps = [
  {
    num: "1",
    title: "Discovery",
    desc: "Understand your goals, challenges, and creative direction.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    num: "2",
    title: "Strategy & Blueprint",
    desc: "Design the roadmap — technologies, deliverables, and growth plan.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
  },
  {
    num: "3",
    title: "Execution & Integration",
    desc: "Code, deploy, and scale — with transparency and measurable impact.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

export default function HowIWork() {
  return (
    <div className="w-full flex flex-col items-center py-20 px-6">
      {/* Header */}
      <div className="text-center mb-24 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
          How I Work
        </h2>
        <p className="text-white/40 text-sm md:text-base">
          From concept to high-impact reality.
        </p>
      </div>

      {/* Timeline Wrapper */}
      <div className="relative w-full max-w-5xl">
        {/* The connecting horizontal line */}
        <div className="hidden md:block absolute top-[40px] left-0 w-full h-[1px] bg-white/10" />

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 relative z-10">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              {/* Icon Circle */}
              <div className="relative mb-8">
                <div 
                  className="w-20 h-20 rounded-full flex items-center justify-center relative z-10"
                  style={{
                    background: "#161616",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    boxShadow: "0 0 0 8px #121212", // creates a gap look if sitting on line
                  }}
                >
                  {step.icon}
                </div>
                {/* Purple number badge */}
                <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[#a855f7] text-white text-xs font-bold flex items-center justify-center z-20 shadow-lg">
                  {step.num}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-white/95 mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-white/40 leading-relaxed max-w-[260px]">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
