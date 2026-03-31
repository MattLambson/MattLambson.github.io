"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Who I Am", href: "/about" },
  { label: "Solutions", href: "/projects" },
  { label: "How I Work", href: "/how-i-work" },
  { label: "Field Notes", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();

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

  useEffect(() => {
    if (!isMobileOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileOpen(false);
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isMobileOpen]);

  if (pathname === "/welcome") return null;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-6 left-0 w-full z-50 flex justify-center pointer-events-none"
    >
      {/* Desktop pill */}
      <div
        className="hidden md:flex items-center gap-12 p-3.5 rounded-full w-max pointer-events-auto"
        style={{
          background: "rgba(20, 20, 25, 0.6)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          border: "1px solid rgba(255, 255, 255, 0.15)",
        }}
      >
        {navLinks.map((link) => {
          const isActive = link.href === "/" ? pathname === "/" : pathname?.startsWith(link.href);
          return (
            <a
              key={link.label}
              href={link.href}
              className={`no-underline relative px-8 py-3.5 text-lg tracking-wide font-medium rounded-full transition-all duration-300 ${
                isActive
                  ? "text-white bg-white/10 border border-white/20 shadow-sm"
                  : "text-white/60 hover:text-white border border-transparent"
              }`}
            >
              {link.label}
            </a>
          );
        })}
      </div>

      {/* Mobile Menu Overlay */}
      <div className="md:hidden relative pointer-events-auto">
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="flex items-center justify-center w-14 h-14 rounded-full"
          style={{
            background: "rgba(18, 18, 18, 0.75)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            border: "1px solid rgba(0, 122, 255, 0.25)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.5)",
          }}
          aria-label={isMobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMobileOpen}
          aria-controls="mobile-menu"
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
          <div className="absolute top-14 left-1/2 -translate-x-1/2 pt-4 w-max">
            <motion.div
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation menu"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-64 py-3 rounded-2xl flex flex-col gap-1 overflow-hidden"
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
                  className="no-underline block px-6 py-4 text-center text-[14px] tracking-[0.15em] text-white/50 hover:text-white hover:bg-white/5 transition-all duration-200 font-medium"
                >
                  {link.label}
                </a>
              ))}
            </motion.div>
          </div>
        )}
      </div>
    </motion.nav>
  );
}
