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
      <div className="relative w-full py-28 px-6 md:px-12 lg:px-16 flex justify-center">
        <div className="w-full max-w-6xl flex flex-col gap-12">

          {/* Core Directives */}
          <CoreDirectives />
          
          {/* Tech Stack */}
          <TechStack />

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
