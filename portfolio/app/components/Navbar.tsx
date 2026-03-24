"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "WHO I AM", href: "/about.html" },
  { label: "SOLUTIONS", href: "/projects.html" },
  { label: "HOW I WORK", href: "/how-i-work.html" },
  { label: "FIELD NOTES", href: "/blog.html" },
  { label: "CONTACT", href: "/contact.html" },
];

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setIsVisible(false);
      setIsMobileOpen(false);
    } else {
      setIsVisible(true);
    }
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setIsMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
    >
      {/* Desktop pill */}
      <div
        className="hidden md:flex items-center gap-6 px-16 py-5 rounded-full w-max mx-auto"
        style={{
          background: "rgba(18, 18, 18, 0.75)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          border: "1px solid rgba(0, 122, 255, 0.25)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.03)",
        }}
      >
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="px-6 py-4 text-[16px] tracking-[0.15em] text-white/45 hover:text-white/90 rounded-full transition-all duration-200 font-medium whitespace-nowrap"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Mobile hamburger */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="flex items-center justify-center w-12 h-12 rounded-full"
          style={{
            background: "rgba(18, 18, 18, 0.75)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            border: "1px solid rgba(0, 122, 255, 0.25)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.5)",
          }}
          aria-label="Toggle Navigation"
        >
          <div className="flex flex-col gap-[5px]">
            <span
              className={`block w-5 h-[1.5px] bg-white/60 transition-all duration-300 ${
                isMobileOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-white/60 transition-all duration-300 ${
                isMobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-white/60 transition-all duration-300 ${
                isMobileOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </div>
        </button>

        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-16 right-0 w-64 py-3 rounded-2xl flex flex-col gap-1 overflow-hidden"
            style={{
              background: "rgba(18, 18, 18, 0.92)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              border: "1px solid rgba(0, 122, 255, 0.2)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.5)",
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block px-6 py-4 text-center text-[14px] tracking-[0.15em] text-white/50 hover:text-white hover:bg-white/5 transition-all duration-200 font-medium"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
