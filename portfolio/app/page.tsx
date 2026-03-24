"use client";

import { useRef } from "react";
import Navbar from "./components/Navbar";
import ScrollyCanvas from "./components/ScrollyCanvas";
import Overlay from "./components/Overlay";
import CoreDirectives from "./components/CoreDirectives";
import TechStack from "./components/TechStack";
import FieldNotes from "./components/FieldNotes";
import FeaturedSolutions from "./components/FeaturedSolutions";
import Footer from "./components/Footer";

export default function Home() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <main className="w-full">
      {/* Fixed Navigation */}
      <Navbar />

      {/* Scrollytelling Section — shared container for canvas + overlay */}
      <div ref={scrollContainerRef} className="relative w-full" style={{ height: "500vh" }}>
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <ScrollyCanvas containerRef={scrollContainerRef} />
        </div>
        <Overlay containerRef={scrollContainerRef} />
      </div>

      {/* Content Sections */}
      <div className="relative w-full py-24 px-6 md:px-12 flex justify-center">
        <div className="w-full max-w-[1000px] flex flex-col gap-20">

          {/* Core Directives & Tech Stack - Horizontal Split on Desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 w-full border-b border-white/5 pb-16">
            <CoreDirectives />
            <TechStack />
          </div>

          {/* Featured Solutions */}
          <FeaturedSolutions />

          {/* Field Notes */}
          <FieldNotes />

          {/* Footer */}
          <div className="pt-20 mt-32 border-t border-white/5 w-full flex justify-center">
            <div className="w-full">
               <Footer />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
