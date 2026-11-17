"use client";

import React, { useState } from "react";
import { TIMETABLE_SLOTS, SITE_CONFIG } from "@/content/site";

export default function Timetable() {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const filterOptions = [
    { id: "all", label: "ALL BATCHES" },
    { id: "strength-hypertrophy", label: "BARBELL STRENGTH" },
    { id: "functional-conditioning", label: "FUNCTIONAL ENGINE" },
    { id: "womens-strength", label: "WOMEN'S BATCH" },
    { id: "powerlifting", label: "COMPETITIVE POWERLIFTING" },
    { id: "personal-coaching", label: "1-ON-1 COACHING" },
  ];

  const filteredSlots = selectedFilter === "all"
    ? TIMETABLE_SLOTS
    : TIMETABLE_SLOTS.filter((slot) => slot.programId === selectedFilter);

  return (
    <section id="timetable" className="relative bg-bg border-b-2 border-hairline overflow-hidden">
      {/* Section Header */}
      <div className="border-b-2 border-hairline bg-surface">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-8 md:py-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-2 h-2 bg-primary" />
              <span className="font-body text-xs font-bold tracking-[0.2em] text-muted uppercase">
                WEEKLY SCHEDULE • CAPACITY CAPPED
              </span>
            </div>
            <h2 className="font-heading text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-text leading-none">
              TIMETABLE.
            </h2>
          </div>
          <p className="font-body text-xs md:text-sm text-muted max-w-md font-medium leading-relaxed">
            Floor capacity is strictly capped at 14 lifters per time block to guarantee platform and barbell availability.
          </p>
        </div>
      </div>

      {/* Program Filter Controls */}
      <div className="border-b-2 border-hairline bg-[#10100E] overflow-x-auto scrollbar-none">
        <div className="max-w-[1440px] mx-auto flex items-stretch divide-x-2 divide-hairline">
          {filterOptions.map((opt) => (
            <button
              key={opt.id}
              type="button"
              onClick={() => setSelectedFilter(opt.id)}
              className={`px-4 sm:px-6 py-4 font-body text-xs font-bold tracking-widest uppercase whitespace-nowrap transition-colors cursor-pointer flex items-center gap-2 ${
                selectedFilter === opt.id
                  ? "bg-primary text-bg font-black"
                  : "bg-surface/30 hover:bg-surface text-muted hover:text-text"
              }`}
            >
              {opt.id === "womens-strength" && (
                <span className="w-2 h-2 bg-accent inline-block" />
              )}
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Schedule Table Grid */}
      <div className="max-w-[1440px] mx-auto overflow-x-auto">
        <div className="min-w-[760px] divide-y-2 divide-hairline">
          {/* Table Column Headers */}
          <div className="grid grid-cols-12 px-6 md:px-8 py-3 bg-[#131311] font-body text-[11px] font-bold tracking-widest text-muted uppercase">
            <div className="col-span-3">TIME WINDOW</div>
            <div className="col-span-4">DISCIPLINE & COHORT</div>
            <div className="col-span-2">DAYS</div>
            <div className="col-span-2">COACH</div>
            <div className="col-span-1 text-right">BOOK</div>
          </div>

          {/* Timetable Rows */}
          {filteredSlots.map((slot) => (
            <div
              key={`${slot.time}-${slot.programName}`}
              className={`grid grid-cols-12 px-6 md:px-8 py-5 items-center transition-colors group ${
                slot.isWomensOnly
                  ? "bg-[#161612] hover:bg-[#1C1C16] border-l-4 border-l-accent"
                  : "bg-bg hover:bg-[#141412] border-l-4 border-l-transparent hover:border-l-primary"
              }`}
            >
              {/* Time Window */}
              <div className="col-span-3 flex items-center gap-2">
                <span className="font-heading text-2xl md:text-3xl font-black text-text tracking-tight group-hover:text-primary transition-colors">
                  {slot.time}
                </span>
              </div>

              {/* Discipline & Batch */}
              <div className="col-span-4 pr-4">
                <div className="flex items-center gap-2">
                  <span className="font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-text">
                    {slot.programName}
                  </span>
                  {slot.isWomensOnly && (
                    <span className="px-2 py-0.5 bg-accent/20 border border-accent text-accent font-body text-[10px] font-bold uppercase tracking-wider">
                      WOMEN'S COHORT
                    </span>
                  )}
                </div>
              </div>

              {/* Operational Days */}
              <div className="col-span-2">
                <span className="font-body text-xs font-bold text-muted uppercase">
                  {slot.days.join(", ")}
                </span>
              </div>

              {/* Lead Coach */}
              <div className="col-span-2">
                <span className="font-body text-xs font-bold text-text/80 uppercase">
                  {slot.coach}
                </span>
              </div>

              {/* WhatsApp Reserve CTA */}
              <div className="col-span-1 text-right">
                <a
                  href={`https://wa.me/919000000000?text=Hi%20IRONWORKS%2C%20I%20want%20to%20reserve%20a%20spot%20in%20the%20${encodeURIComponent(slot.programName)}%20batch%20(${encodeURIComponent(slot.time)}).`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-3 py-1.5 bg-surface text-text border border-hairline font-heading text-sm font-black tracking-wider uppercase group-hover:bg-primary group-hover:text-bg group-hover:border-primary transition-colors"
                >
                  SLOT →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Note */}
      <div className="border-t-2 border-hairline bg-surface p-4 text-center">
        <p className="font-body text-xs text-muted uppercase tracking-widest font-bold">
          OPEN FLOOR TRAINING PERMITTED FOR ANNUAL MEMBERS OUTSIDE COACHED BATCH BLOCKS (5AM – 11PM)
        </p>
      </div>
    </section>
  );
}
