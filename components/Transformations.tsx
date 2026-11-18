"use client";

import React, { useState } from "react";
import Image from "next/image";
import { TRANSFORMATIONS } from "@/content/site";

const caseImages = [
  "/images/case-rahul.jpg",
  "/images/case-ananya.jpg",
  "/images/case-kunal.jpg",
];

const caseImageBriefs = [
  {
    before: "Lifter performing 40kg squat with visible lumbar flexion and tight ankle dorsiflexion, side angle biomechanical video audit frame, technical hairline grid overlay, monochrome.",
    after: "Lifter locking out 150kg low-bar squat inside competition power cage, clean hip crease below parallel, heavy chalked upper back, intense strain, raw monochrome.",
  },
  {
    before: "Female lifter with forward head posture and weak scapular retraction during light dumbbell bench, clinical biomechanical baseline, high-contrast dark film grain.",
    after: "Female lifter locking out 115kg conventional deadlift from floor, neutral spine, knurled Texas power bar bending slightly, chalk cloud, raw athletic pride.",
  },
  {
    before: "Lifter standing on scale showing high visceral adiposity, poor core bracing posture, soft lighting, raw clinic intake photograph, monochrome.",
    after: "Lifter executing 60kg sandbag bear-hug carry across gym turf floor, dense muscularity, defined posterior chain, grit, monochrome high contrast.",
  },
];

export default function Transformations() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [sliderPos, setSliderPos] = useState(50);

  const activeCase = TRANSFORMATIONS[activeIdx];
  const activeBrief = caseImageBriefs[activeIdx];

  return (
    <section id="transformations" className="relative bg-bg border-b-2 border-hairline overflow-hidden">
      {/* Section Header */}
      <div className="border-b-2 border-hairline bg-surface">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-8 md:py-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-2 h-2 bg-primary" />
              <span className="font-body text-xs font-bold tracking-[0.2em] text-muted uppercase">
                TESTED OUTCOMES • REAL HUMAN TIMEFRAMES
              </span>
            </div>
            <h2 className="font-heading text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-text leading-none">
              RESULTS.
            </h2>
          </div>
          <p className="font-body text-xs md:text-sm text-muted max-w-md font-medium leading-relaxed">
            Real physiological adaptations take months of progressive overload, not 10-day marketing detoxes. Every number below was tested on competition iron.
          </p>
        </div>
      </div>

      {/* Case Selector Tabs */}
      <div className="border-b-2 border-hairline bg-[#10100E]">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 divide-y-2 md:divide-y-0 md:divide-x-2 divide-hairline">
          {TRANSFORMATIONS.map((item, idx) => (
            <button
              key={item.name}
              type="button"
              onClick={() => {
                setActiveIdx(idx);
                setSliderPos(50);
              }}
              className={`p-4 md:p-6 text-left transition-colors cursor-pointer flex flex-col justify-between ${
                activeIdx === idx
                  ? "bg-bg border-b-4 md:border-b-0 md:border-t-4 border-primary"
                  : "bg-surface/50 hover:bg-surface text-muted"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-body text-[11px] font-black tracking-widest text-muted uppercase">
                  CASE FILE 0{idx + 1}
                </span>
                <span className="font-body text-[11px] font-bold text-primary tracking-widest">
                  {item.timeframe}
                </span>
              </div>
              <div className="mt-2">
                <span className={`font-heading text-2xl md:text-3xl font-black uppercase tracking-tight block ${
                  activeIdx === idx ? "text-text" : "text-muted"
                }`}>
                  {item.name}
                </span>
                <span className="font-body text-xs font-bold text-accent tracking-wider uppercase">
                  {item.metric}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Active Case Dossier */}
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-hairline">
        {/* Left: Interactive Before/After Comparison Visual */}
        <div className="lg:col-span-7 p-6 md:p-10 flex flex-col justify-between bg-bg">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-hairline">
              <span className="font-body text-xs font-bold tracking-widest text-text uppercase">
                BIOMECHANICAL PROGRESSION SLIDER
              </span>
              <span className="px-2.5 py-0.5 bg-surface border border-hairline font-body text-[11px] font-bold text-primary uppercase">
                {sliderPos < 50 ? "PHASE 0: INTAKE BASELINE" : "PHASE 1: LOADED CAPACITY"}
              </span>
            </div>

            {/* Interactive Before / After Image Slider */}
            {/* 
              IMAGE BRIEF (BEFORE):
              {activeBrief.before}

              IMAGE BRIEF (AFTER):
              {activeBrief.after}
            */}
            <div className="relative mt-6 aspect-[4/3] w-full bg-[#121210] border-2 border-hairline overflow-hidden select-none">
              {/* "AFTER" Underneath */}
              <div className="absolute inset-0 bg-[#1A1A17] flex flex-col items-center justify-center p-6 text-center">
                <Image
                  src={caseImages[activeIdx]}
                  alt={`${activeCase.name} loaded strength capacity`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover grayscale contrast-125 brightness-75 scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-bg/80" />
                <div className="relative z-10">
                  <span className="px-3 py-1 bg-primary text-bg font-body text-xs font-black tracking-widest uppercase mb-3 inline-block shadow-hard-lime">
                    TESTED AFTER ({activeCase.timeframe})
                  </span>
                  <h4 className="font-heading text-4xl sm:text-5xl font-black text-text uppercase tracking-tight">
                    {activeCase.metric}
                  </h4>
                  <p className="font-body text-xs text-text max-w-sm mt-3 leading-relaxed drop-shadow">
                    {activeCase.resultState}
                  </p>
                </div>
              </div>

              {/* "BEFORE" Clipped on top */}
              <div
                className="absolute inset-0 bg-[#141412] flex flex-col items-center justify-center p-6 text-center border-r-2 border-primary overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
              >
                <Image
                  src={caseImages[activeIdx]}
                  alt={`${activeCase.name} intake baseline`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover grayscale blur-[2px] brightness-50 scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/70 to-bg/90" />
                <div className="relative z-10">
                  <span className="px-3 py-1 bg-surface border border-hairline text-accent font-body text-xs font-black tracking-widest uppercase mb-3 inline-block">
                    INTAKE BASELINE (DAY 1)
                  </span>
                  <h4 className="font-heading text-4xl sm:text-5xl font-black text-muted uppercase tracking-tight">
                    INITIAL STATE
                  </h4>
                  <p className="font-body text-xs text-text/70 max-w-sm mt-3 leading-relaxed">
                    {activeCase.startingState}
                  </p>
                </div>
              </div>

              {/* Slider Divider Line & Knob */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-primary pointer-events-none"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-primary text-bg flex items-center justify-center text-xs font-black shadow-hard-lime border-2 border-bg">
                  ↔
                </div>
              </div>
            </div>

            {/* Slider Control */}
            <div className="mt-4 flex items-center gap-4">
              <span className="font-body text-xs font-bold text-muted uppercase tracking-wider">
                BEFORE
              </span>
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPos}
                onChange={(e) => setSliderPos(Number(e.target.value))}
                className="w-full h-2 bg-surface appearance-none cursor-ew-resize accent-primary"
                aria-label="Before and after comparison slider"
              />
              <span className="font-body text-xs font-bold text-primary uppercase tracking-wider">
                AFTER
              </span>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-hairline text-[11px] text-muted font-body">
            DRAG SLIDER HORIZONTALLY TO COMPARE BIOMECHANICAL AUDIT FRAMES
          </div>
        </div>

        {/* Right: Technical Notes & Coach's Honest Audit */}
        <div className="lg:col-span-5 p-6 md:p-10 flex flex-col justify-between bg-surface">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-hairline">
              <div>
                <h3 className="font-heading text-3xl md:text-4xl font-black uppercase tracking-tight text-text">
                  {activeCase.name}
                </h3>
                <span className="font-body text-xs font-bold text-muted uppercase">
                  {activeCase.age} YRS • {activeCase.profession}
                </span>
              </div>
              <div className="text-right">
                <span className="block font-body text-[10px] font-bold text-muted uppercase">
                  TIMELINE
                </span>
                <span className="font-heading text-2xl font-black text-text">
                  {activeCase.timeframe}
                </span>
              </div>
            </div>

            {/* Big Metric Display */}
            <div className="my-6 p-4 bg-bg border-2 border-hairline">
              <span className="block font-body text-[10px] font-bold tracking-widest text-muted uppercase">
                TESTED COMPOUND ADAPTATION
              </span>
              <span className="font-heading text-5xl sm:text-6xl font-black text-primary tracking-tight block mt-1">
                {activeCase.metric}
              </span>
            </div>

            {/* Before vs After Raw Values */}
            <div className="space-y-4">
              <div className="p-3 bg-bg border-l-2 border-hairline">
                <span className="font-body text-[10px] font-bold text-muted uppercase tracking-wider block">
                  STARTING CONDITION
                </span>
                <p className="font-body text-xs text-text/85 mt-1 leading-relaxed">
                  {activeCase.startingState}
                </p>
              </div>

              <div className="p-3 bg-bg border-l-2 border-primary">
                <span className="font-body text-[10px] font-bold text-primary uppercase tracking-wider block">
                  MEASURED RE-TEST RESULT
                </span>
                <p className="font-body text-xs text-text mt-1 leading-relaxed">
                  {activeCase.resultState}
                </p>
              </div>
            </div>

            {/* Honest Coach Audit Note */}
            <div className="mt-6 p-4 bg-[#1A1A17] border-2 border-accent/40 relative">
              <span className="font-body text-[10px] font-black tracking-widest text-accent uppercase block">
                COACH'S HONEST AUDIT NOTE
              </span>
              <p className="font-body text-xs md:text-sm text-text/90 mt-2 leading-relaxed italic">
                "{activeCase.honestNote}"
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-hairline">
            <a
              href={`https://wa.me/919000000000?text=Hi%20IRONWORKS%2C%20I%20saw%20${encodeURIComponent(activeCase.name)}'s%20case%20file%20and%20want%20to%20audit%20my%20strength%20baseline.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center py-4 bg-bg text-text font-heading text-xl font-black tracking-wider uppercase border-2 border-hairline hover:bg-primary hover:text-bg hover:border-primary transition-colors cursor-pointer"
            >
              BOOK STRENGTH AUDIT →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
