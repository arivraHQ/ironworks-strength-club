"use client";

import React, { useRef } from "react";
import { PROGRAMS, SITE_CONFIG } from "@/content/site";

const programImageBriefs = [
  "Lifter performing heavy low-bar back squat inside competition power cage, chalked upper back, intense strain, dark warehouse background, high contrast monochrome, no smiling fitness models.",
  "Athlete on high-resistance air bike, head down, sweat dripping onto rubber floor, gritty industrial side light, black and white athletic editorial.",
  "Powerlifter setting grip on knurled deadlift bar, calibrated red 25kg iron plates, chalk cloud hanging in stark light, raw focused gaze.",
  "Women's strength cohort warming up with heavy kettlebell clean and presses, synchronized discipline, Kanpur warehouse gym, zero glamour.",
  "Head coach assessing lifter's squat depth and bar speed, technical biomechanics clipboard, gritty industrial setting, serious athletic focus.",
];

export default function Programs() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const offset = direction === "left" ? -440 : 440;
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <section id="programs" className="relative bg-bg border-b-2 border-hairline overflow-hidden">
      {/* Section Header with Industrial Grid */}
      <div className="border-b-2 border-hairline bg-surface">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-8 md:py-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-2 h-2 bg-primary" />
              <span className="font-body text-xs font-bold tracking-[0.2em] text-muted uppercase">
                COACH-LED BATCHES & PROTOCOLS
              </span>
            </div>
            <h2 className="font-heading text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-text leading-none">
              DISCIPLINES.
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden sm:inline font-body text-xs font-bold tracking-widest text-muted uppercase">
              SCROLL HORIZONTALLY (01 - 05)
            </span>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => scroll("left")}
                className="w-12 h-12 flex items-center justify-center bg-bg border-2 border-hairline text-text hover:bg-primary hover:text-bg hover:border-primary transition-colors cursor-pointer"
                aria-label="Scroll left"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => scroll("right")}
                className="w-12 h-12 flex items-center justify-center bg-bg border-2 border-hairline text-text hover:bg-primary hover:text-bg hover:border-primary transition-colors cursor-pointer"
                aria-label="Scroll right"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Scroll Track: 5 Full-Height Program Blades */}
      <div
        ref={scrollRef}
        className="flex flex-nowrap overflow-x-auto divide-x-2 divide-hairline scrollbar-none snap-x snap-mandatory select-none"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {PROGRAMS.map((program, index) => (
          <div
            key={program.id}
            className="w-[88vw] sm:w-[460px] lg:w-[420px] shrink-0 snap-start flex flex-col justify-between bg-bg hover:bg-[#141412] transition-colors group p-6 md:p-8 relative"
          >
            {/* Top Indicator & Duration */}
            <div>
              <div className="flex items-center justify-between pb-6 border-b-2 border-hairline">
                <span className="font-heading text-5xl md:text-6xl font-black text-muted group-hover:text-primary transition-colors">
                  {program.number}
                </span>
                <span className="px-3 py-1 bg-surface border border-hairline font-body text-xs font-bold tracking-widest text-text uppercase">
                  {program.duration}
                </span>
              </div>

              {/* Grayscale Placeholder Block with Image Brief */}
              {/* 
                IMAGE BRIEF:
                {programImageBriefs[index]}
              */}
              <div className="mt-6 aspect-[16/9] w-full bg-[#1A1A18] border-2 border-hairline relative overflow-hidden group-hover:border-primary/50 transition-colors">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center bg-surface/80">
                  <div className="w-8 h-8 border border-muted/50 mb-2 flex items-center justify-center text-muted text-xs">
                    {program.number}
                  </div>
                  <span className="font-body text-[11px] font-bold tracking-wider text-muted uppercase">
                    BARBELL ARCHIVE {program.number}
                  </span>
                  <span className="font-body text-[9px] text-muted/60 mt-1 max-w-[240px] line-clamp-2">
                    {programImageBriefs[index]}
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3 className="font-heading text-2xl md:text-3xl font-black tracking-tight text-text uppercase mt-6 group-hover:text-primary transition-colors leading-tight">
                {program.name}
              </h3>

              {/* Target / Who it is for */}
              <div className="mt-4 p-3 bg-surface border-l-2 border-primary">
                <span className="block font-body text-[10px] font-bold tracking-widest text-muted uppercase">
                  WHO IT IS FOR
                </span>
                <p className="font-body text-xs text-text/90 mt-1 leading-relaxed">
                  {program.target}
                </p>
              </div>

              {/* Description */}
              <p className="font-body text-sm text-text/80 mt-4 leading-relaxed">
                {program.description}
              </p>

              {/* Key Focus Points */}
              <div className="mt-6 pt-4 border-t border-hairline space-y-2">
                <span className="font-body text-[10px] font-bold tracking-widest text-muted uppercase">
                  CURRICULUM SPECIFICATIONS
                </span>
                {program.focus.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary" />
                    <span className="font-body text-xs text-text/90 font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Inverted CTA */}
            <div className="mt-8 pt-6 border-t-2 border-hairline">
              <a
                href={`https://wa.me/919000000000?text=Hi%20IRONWORKS%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(program.name)}%20program.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center py-4 bg-surface text-text font-heading text-xl font-black tracking-wider uppercase border-2 border-hairline group-hover:bg-primary group-hover:text-bg group-hover:border-primary transition-colors cursor-pointer"
              >
                ENQUIRE PROGRAM →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
