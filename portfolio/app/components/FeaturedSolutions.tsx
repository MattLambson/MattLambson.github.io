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
      <div className="flex items-center gap-3 mb-10">
        <div className="w-1 h-6 bg-[#d946ef] rounded-full" />
        <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">
          Featured Solutions
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {featured.map((project) => (
          <a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-10 h-64 rounded-[20px] transition-all duration-300 hover:scale-[1.02] group"
            style={{
              background: "#1f1f22", // Clean dark gray matching reference
              border: "1px solid rgba(255, 255, 255, 0.05)",
              boxShadow: "0 10px 40px rgba(0, 0, 0, 0.5)",
            }}
          >
            {/* Centered Bigger Icon Box */}
            <div className="relative w-48 h-32 mb-6 shadow-xl rounded-lg overflow-hidden flex-shrink-0"
              style={{
                boxShadow: "0 0 0 1px rgba(255, 255, 255, 0.1), 0 8px 16px rgba(0,0,0,0.6)",
              }}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="96px"
              />
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-white/95 mb-2 text-center group-hover:text-white transition-colors">
              {project.title}
            </h3>

            {/* Colorful subtext (Replicating the purple text from Mom's Grove) */}
            <p className="text-xs tracking-wide text-center" style={{ color: "rgba(192, 132, 252, 0.85)" }}>
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
