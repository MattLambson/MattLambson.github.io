"use client";

import Image from "next/image";

const featured = [
  {
    title: "Statement of Work Builder",
    description: "Custom SoW Generator for Professional Services",
    image: "/projects/SOWBuilder.png",
    link: "https://mattlambson.github.io/HaloDemoPages/DemoPages/sow-builder/index.html",
  },
  {
    title: "HALO Demo Hub",
    description: "A centralized portal for team HALO demos",
    image: "/projects/HALOHub.png",
    link: "https://mattlambson.github.io/HaloDemoPages/",
  },
];

export default function FeaturedSolutions() {
  return (
    <div className="w-full text-left">
      {/* Ecosystem-style section header */}
      <div className="flex items-center gap-3 md:gap-4 mb-12">
        <div className="w-1 h-8 md:h-10 bg-[#FB5A2A] rounded-full" />
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
          Featured Projects
        </h2>
      </div>
      <div className="w-full h-32 md:h-12 shrink-0" />
      <div className="flex flex-wrap gap-12 md:gap-16 justify-center">
        {featured.map((project) => (
          <a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-8 md:gap-10 p-12 md:p-16 h-auto min-h-[400px] md:min-h-[480px] w-full max-w-[700px] rounded-[32px] transition-all duration-300 hover:scale-[1.02] group"
            style={{
              background: "#1f1f22", // Clean dark gray matching reference
              border: "1px solid rgba(255, 255, 255, 0.05)",
              boxShadow: "0 10px 40px rgba(0, 0, 0, 0.5)",
            }}
          >
            {/* Centered Bigger Icon Box */}
            <div className="relative w-full max-w-[480px] aspect-[16/10] shadow-2xl rounded-[16px] overflow-hidden flex-shrink-0 group-hover:shadow-[0_20px_60px_-15px_rgba(0,122,255,0.4)] transition-shadow duration-500"
              style={{
                boxShadow: "0 0 0 1px rgba(255, 255, 255, 0.1), 0 12px 24px rgba(0,0,0,0.6)",
              }}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                sizes="(max-width: 768px) 400px, 480px"
              />
            </div>

            {/* Title */}
            <h3 className="text-2xl md:text-3xl font-bold text-white/95 text-center group-hover:text-white transition-colors tracking-tight">
              {project.title}
            </h3>

            {/* Colorful subtext (Replicating the purple text from Mom's Grove) */}
            <p className="text-base md:text-lg tracking-wide text-center leading-relaxed max-w-[80%]" style={{ color: "rgba(192, 132, 252, 0.85)" }}>
              {project.description}
            </p>
          </a>
        ))}
      </div>

      {/* View Other Projects link at the bottom right */}
      <div className="mt-8 flex justify-end">
        <a
          href="/projects.html"
          className="text-sm font-medium text-white/40 hover:text-white/80 transition-colors duration-200"
        >
          View All Projects →
        </a>
      </div>
    </div>
  );
}
