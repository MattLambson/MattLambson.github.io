"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface TerminalCardProps {
  filename: string;
  children: React.ReactNode;
  className?: string;
}

export default function TerminalCard({ filename, children, className = "" }: TerminalCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
      className={`rounded-2xl overflow-hidden ${className}`}
      style={{
        background: "rgba(255, 255, 255, 0.03)",
        border: "1px solid rgba(255, 255, 255, 0.06)",
        backdropFilter: "blur(40px)",
        WebkitBackdropFilter: "blur(40px)",
      }}
    >
      {/* Terminal header bar */}
      <div
        className="flex items-center gap-3 pl-8 pr-6 py-4"
        style={{
          background: "rgba(255, 255, 255, 0.04)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
        }}
      >
        {/* Traffic lights */}
        <div className="flex items-center gap-[6px]">
          <span className="w-3 h-3 rounded-full" style={{ background: "#FF5F57" }} />
          <span className="w-3 h-3 rounded-full" style={{ background: "#FEBC2E" }} />
          <span className="w-3 h-3 rounded-full" style={{ background: "#28C840" }} />
        </div>
        {/* Filename */}
        <span className="text-xs text-white/30 font-mono tracking-wide">
          {filename}
        </span>
      </div>

      {/* Card content */}
      <div className="py-12 px-8 md:px-20 lg:px-24 lg:py-16">
        {children}
      </div>
    </motion.div>
  );
}
