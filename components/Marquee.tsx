"use client";

import React from "react";

export default function Marquee() {
  const rowOneItems = [
    "STRENGTH",
    "POWER",
    "DISCIPLINE",
    "CONSISTENCY",
    "CALIBRATED IRON",
    "NO SHORTCUTS",
  ];

  const rowTwoItems = [
    "IPF SPEC PLATFORMS",
    "ELEIKO BARS",
    "PROVEN PROTOCOLS",
    "CIVIL LINES KANPUR",
    "ZERO GIMMICKS",
    "BUILT NOT GIVEN",
  ];

  return (
    <section className="relative overflow-hidden bg-bg border-b-2 border-hairline py-4 md:py-6 select-none">
      {/* Row 1: Leftward Infinite Marquee */}
      <div className="flex whitespace-nowrap overflow-hidden py-1 border-b border-hairline/50 group">
        <div className="flex animate-marquee-left shrink-0 items-center">
          {rowOneItems.concat(rowOneItems).map((item, idx) => (
            <span
              key={`r1-a-${idx}`}
              className="font-heading text-4xl sm:text-6xl md:text-8xl font-black tracking-tight uppercase px-4 md:px-8 text-text/90 group-hover:text-primary transition-colors flex items-center gap-4 md:gap-8"
            >
              {item}
              <span className="w-2 h-2 md:w-3 md:h-3 bg-primary inline-block" />
            </span>
          ))}
        </div>
        <div className="flex animate-marquee-left shrink-0 items-center" aria-hidden="true">
          {rowOneItems.concat(rowOneItems).map((item, idx) => (
            <span
              key={`r1-b-${idx}`}
              className="font-heading text-4xl sm:text-6xl md:text-8xl font-black tracking-tight uppercase px-4 md:px-8 text-text/90 group-hover:text-primary transition-colors flex items-center gap-4 md:gap-8"
            >
              {item}
              <span className="w-2 h-2 md:w-3 md:h-3 bg-primary inline-block" />
            </span>
          ))}
        </div>
      </div>

      {/* Row 2: Rightward Infinite Marquee */}
      <div className="flex whitespace-nowrap overflow-hidden py-1 pt-3 group">
        <div className="flex animate-marquee-right shrink-0 items-center">
          {rowTwoItems.concat(rowTwoItems).map((item, idx) => (
            <span
              key={`r2-a-${idx}`}
              className="font-heading text-4xl sm:text-6xl md:text-8xl font-black tracking-tight uppercase px-4 md:px-8 text-muted group-hover:text-accent transition-colors flex items-center gap-4 md:gap-8"
            >
              {item}
              <span className="w-2 h-2 md:w-3 md:h-3 bg-accent inline-block" />
            </span>
          ))}
        </div>
        <div className="flex animate-marquee-right shrink-0 items-center" aria-hidden="true">
          {rowTwoItems.concat(rowTwoItems).map((item, idx) => (
            <span
              key={`r2-b-${idx}`}
              className="font-heading text-4xl sm:text-6xl md:text-8xl font-black tracking-tight uppercase px-4 md:px-8 text-muted group-hover:text-accent transition-colors flex items-center gap-4 md:gap-8"
            >
              {item}
              <span className="w-2 h-2 md:w-3 md:h-3 bg-accent inline-block" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
