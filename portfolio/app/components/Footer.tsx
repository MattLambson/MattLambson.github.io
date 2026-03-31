"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  if (pathname === "/welcome") return null;

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
      className="pb-12 pt-16 w-full"
    >
      <div className="w-full flex flex-col items-center justify-center text-center">

        {/* Main large heading */}
        <div className="mb-24 text-center max-w-4xl px-4">
          <h2 className="text-5xl md:text-6xl lg:text-[72px] font-bold text-white tracking-tight leading-[1.1] mb-8">
            Let's Build Something<br />That Works.
          </h2>
          <p className="text-lg md:text-xl text-white/70 mb-12 max-w-2xl mx-auto">
            If you're building in AI, SaaS, or creative tech, let's collaborate.
            From MVPs to full-scale products.
          </p>

          <div className="flex justify-center">
            {/* White pill button */}
            <a
              href="/contact.html"
              className="px-10 py-4 bg-white text-black rounded-full font-bold text-[17px] transition-transform hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.15)]"
            >
              Let's Collaborate
            </a>
          </div>
        </div>

        {/* Bottom socials - minimalist text links as shown in image */}
        <div className="flex items-center justify-center gap-8 md:gap-12 w-full pt-12 pb-8">
          <a
            href="https://www.linkedin.com/in/mattlambson/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-white/60 hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/MattLambson"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-white/60 hover:text-white transition-colors"
          >
            GitHub
          </a>
        </div>

        {/* Copyright */}
        <div className="text-xs text-white/50 font-light mt-4">
          © 2026 Matt Lambson. Built with Next.js, Framer Motion, very late nights and way too much caffeine.
        </div>
      </div>
    </motion.footer>
  );
}
