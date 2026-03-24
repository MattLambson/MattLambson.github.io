"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface OverlayProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
}

export default function Overlay({ containerRef }: OverlayProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Section 1: 0% - 20% scroll (center)
  const opacity1 = useTransform(scrollYProgress, [0, 0.05, 0.15, 0.22], [0, 1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.05, 0.15, 0.22], [60, 0, 0, -80]);

  // Section 2: 25% - 50% scroll (left)
  const opacity2 = useTransform(scrollYProgress, [0.25, 0.32, 0.42, 0.5], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.25, 0.32, 0.42, 0.5], [60, 0, 0, -80]);

  // Section 3: 55% - 80% scroll (right)
  const opacity3 = useTransform(scrollYProgress, [0.55, 0.62, 0.72, 0.8], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.55, 0.62, 0.72, 0.8], [60, 0, 0, -80]);

  return (
    <div
      ref={sectionRef}
      className="absolute inset-0 z-10 pointer-events-none"
      style={{ height: "500vh" }}
    >
      {/* Section 1: Hero - Center */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center">
        <motion.div
          style={{ opacity: opacity1, y: y1 }}
          className="text-center px-6 max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none mb-6">
            <span className="block">Matt Lambson</span>
            <span
              className="block mt-2 text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #007AFF 0%, #22d3ee 50%, #a855f7 100%)",
              }}
            >
              Technical Consultant
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/40 font-light tracking-wide">
            Building trust and solving complex CX problems with AI and global messaging
          </p>
        </motion.div>
      </div>

      {/* Section 2: What I Do - Left */}
      <div className="sticky top-0 h-screen w-full flex items-center">
        <motion.div
          style={{ opacity: opacity2, y: y2 }}
          className="px-8 md:px-16 lg:px-24 max-w-3xl"
        >
          <div className="mb-4">
            <span className="inline-block w-12 h-[2px] bg-gradient-to-r from-blue-500 to-cyan-400 mb-6" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight mb-6">
            Demo environments.
            <br />
            <span className="text-white/50">AI workflows. Internal tools.</span>
          </h2>
          <p className="text-base md:text-lg text-white/35 font-light max-w-md leading-relaxed">
            Turning complex platforms into intuitive, high-impact
            experiences that resonate with real buyers.
          </p>
        </motion.div>
      </div>

      {/* Section 3: Philosophy - Right */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-end">
        <motion.div
          style={{ opacity: opacity3, y: y3 }}
          className="px-8 md:px-16 lg:px-24 max-w-3xl text-right"
        >
          <div className="mb-4 flex justify-end">
            <span className="inline-block w-12 h-[2px] bg-gradient-to-r from-purple-500 to-blue-500 mb-6" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight mb-6">
            The art of
            <br />
            <span className="text-white/50">the possible.</span>
          </h2>
          <p className="text-base md:text-lg text-white/35 font-light max-w-md leading-relaxed ml-auto">
            I don&apos;t just demo the feature list — I stretch platform capabilities
            to show clients a future they didn&apos;t think was possible.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
