"use client";

import Image from "next/image";
import TerminalCard from "./TerminalCard";

const featured = [
  {
    title: "Statement of Work Builder",
    description:
      "Custom SoW Generator for Professional Services. Includes export-to-PDF functionality.",
    image: "/projects/SOWBuilder.png",
    tags: ["HTML/CSS/JS", "PDF Export", "Internal Tool"],
    link: "https://mattlambson.github.io/HaloDemoPages/DemoPages/sow-builder/index.html",
  },
  {
    title: "HALO Demo Hub",
    description:
      "A centralized portal for teams to deploy customized HALO demos.",
    image: "/projects/HALOHub.png",
    tags: ["Agentic AI", "HALO", "Demo Platform"],
    link: "https://mattlambson.github.io/HaloDemoPages/",
  },
];

export default function FeaturedSolutions() {
  return (
    <TerminalCard filename="featured_solutions.sh">
      <div className="text-xs text-white/30 font-mono uppercase tracking-widest mb-6">
        Featured Solutions
      </div>

      <div className="space-y-6">
        {featured.map((project) => (
          <a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col sm:flex-row items-start gap-4 p-4 rounded-xl hover:bg-white/[0.03] transition-colors duration-200 group -mx-4"
          >
            {/* Thumbnail */}
            <div className="relative w-full sm:w-40 aspect-[16/10] sm:aspect-[4/3] rounded-lg overflow-hidden shrink-0">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="160px"
              />
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className="text-sm font-semibold text-white/90 mb-1 group-hover:text-blue-400 transition-colors duration-200">
                {project.title}
              </div>
              <div className="text-xs text-white/35 leading-relaxed mb-3 font-light">
                {project.description}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] px-2 py-1 rounded-full font-medium"
                    style={{
                      background: "rgba(0, 122, 255, 0.08)",
                      color: "rgba(0, 122, 255, 0.7)",
                      border: "1px solid rgba(0, 122, 255, 0.1)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* View Other Projects button */}
      <div className="mt-6 pt-4" style={{ borderTop: "1px solid rgba(255, 255, 255, 0.06)" }}>
        <a
          href="/projects.html"
          className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-medium text-blue-400/70 hover:text-blue-400 transition-all duration-200 hover:bg-blue-400/5"
          style={{
            border: "1px solid rgba(0, 122, 255, 0.15)",
          }}
        >
          View Other Projects →
        </a>
      </div>
    </TerminalCard>
  );
}
