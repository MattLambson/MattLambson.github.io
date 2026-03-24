"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const TOTAL_FRAMES = 192;

function getFramePath(index: number): string {
  const padded = String(index).padStart(3, "0");
  return `/sequence/frame_${padded}_delay-0.04s.webp`;
}

interface ScrollyCanvasProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
}

export default function ScrollyCanvas({ containerRef }: ScrollyCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [loadProgress, setLoadProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const frameIndex = useTransform(
    scrollYProgress,
    [0, 1],
    [0, TOTAL_FRAMES - 1]
  );

  // Draw a frame to canvas with cover-fit logic
  const drawFrame = useCallback((img: HTMLImageElement) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const displayWidth = window.innerWidth;
    const displayHeight = window.innerHeight;

    canvas.width = displayWidth * dpr;
    canvas.height = displayHeight * dpr;
    canvas.style.width = `${displayWidth}px`;
    canvas.style.height = `${displayHeight}px`;

    ctx.scale(dpr, dpr);

    // Cover-fit calculation
    const imgRatio = img.naturalWidth / img.naturalHeight;
    const canvasRatio = displayWidth / displayHeight;

    let drawWidth: number, drawHeight: number, drawX: number, drawY: number;

    if (imgRatio > canvasRatio) {
      drawHeight = displayHeight;
      drawWidth = displayHeight * imgRatio;
      drawX = (displayWidth - drawWidth) / 2;
      drawY = 0;
    } else {
      drawWidth = displayWidth;
      drawHeight = displayWidth / imgRatio;
      drawX = 0;
      drawY = (displayHeight - drawHeight) / 2;
    }

    ctx.clearRect(0, 0, displayWidth, displayHeight);
    ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
  }, []);

  // Preload all images
  useEffect(() => {
    let loaded = 0;
    const images: HTMLImageElement[] = [];

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = getFramePath(i);

      img.onload = () => {
        loaded++;
        setLoadProgress(Math.round((loaded / TOTAL_FRAMES) * 100));

        if (loaded === TOTAL_FRAMES) {
          setIsLoaded(true);
          if (images[0]) {
            drawFrame(images[0]);
          }
        }
      };

      img.onerror = () => {
        loaded++;
        setLoadProgress(Math.round((loaded / TOTAL_FRAMES) * 100));
      };

      images[i] = img;
    }

    imagesRef.current = images;
  }, [drawFrame]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      const currentFrame = Math.round(frameIndex.get());
      const img = imagesRef.current[currentFrame];
      if (img && img.complete) {
        drawFrame(img);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [drawFrame, frameIndex]);

  // Scrub frames on scroll
  useMotionValueEvent(frameIndex, "change", (latest) => {
    const index = Math.round(latest);
    const clampedIndex = Math.max(0, Math.min(index, TOTAL_FRAMES - 1));
    const img = imagesRef.current[clampedIndex];
    if (img && img.complete) {
      drawFrame(img);
    }
  });

  return (
    <>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />

      {/* Loading indicator */}
      {!isLoaded && (
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#121212]">
          <div className="relative w-48 h-1 bg-white/10 rounded-full overflow-hidden">
            <div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${loadProgress}%` }}
            />
          </div>
          <span className="mt-4 text-sm text-white/40 font-light tracking-widest uppercase">
            Loading {loadProgress}%
          </span>
        </div>
      )}
    </>
  );
}
