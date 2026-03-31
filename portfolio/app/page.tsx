"use client";

import { useRef } from "react"; // Components
import ScrollyCanvas from "./components/ScrollyCanvas";
import Overlay from "./components/Overlay";
import CoreDirectives from "./components/CoreDirectives";
import TechStack from "./components/TechStack";
import HowIWork from "./components/HowIWork";
import FieldNotes from "./components/FieldNotes";
import FeaturedSolutions from "./components/FeaturedSolutions";


export default function Home() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <main className="w-full">
      {/* Screen reader only h1 for semantic structure */}
      <h1 className="sr-only">Matt Lambson - Technical Consultant Portfolio</h1>

      {/* Scrollytelling Section — shared container for canvas + overlay */}
      <div ref={scrollContainerRef} className="relative w-full" style={{ height: "500vh" }}>
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <ScrollyCanvas containerRef={scrollContainerRef} />
        </div>
        <Overlay containerRef={scrollContainerRef} />
      </div>

      {/* Content Sections */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="w-full h-32 md:h-12 shrink-0" />
        {/* Navigation is now handled globally in layout.tsx */}
        <div className="w-full max-w-[1000px] pt-10 px-6 md:px-12">

          {/* Core Directives & Tech Stack - Horizontal Split on Desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 w-full border-b border-white/5 pb-16">
            <CoreDirectives />
            <TechStack />
          </div>
          <div className="w-full h-32 md:h-24 shrink-0" />
          {/* Featured Solutions */}
          <FeaturedSolutions />
          <div className="w-full h-32 md:h-24 shrink-0" />
          {/* Field Notes */}
          <FieldNotes />

        </div>
        <div className="w-full h-32 md:h-36 shrink-0" />
      </div>
    </main>
  );
}
