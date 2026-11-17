"use client";

import React from "react";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/content/site";

const customEasing = [0.76, 0, 0.24, 1];

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)] flex flex-col justify-between border-b-2 border-hairline overflow-hidden bg-bg">
      {/* 
        IMAGE BRIEF:
        Lifter chalking hands over knurled Eleiko barbell, hard side light, gritty, Indian gym in Civil Lines Kanpur, 
        sweat on forearms, floating magnesium chalk dust, monochrome high-contrast film tone, no models posing, 
        raw unglamorous athletic discipline.
      */}
      <div 
        className="absolute inset-0 z-0 opacity-25 pointer-events-none mix-blend-luminosity overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-bg/80 z-10" />
        <svg
          className="w-full h-full object-cover"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          viewBox="0 0 1440 900"
        >
          <defs>
            <pattern id="knurl" width="16" height="16" patternUnits="userSpaceOnUse">
              <path d="M0 16 L16 0 M0 0 L16 16" stroke="#8B8B84" strokeWidth="0.75" opacity="0.2" />
            </pattern>
            <radialGradient id="heroVignette" cx="50%" cy="50%" r="60%">
              <stop offset="35%" stopColor="#161614" stopOpacity="0" />
              <stop offset="100%" stopColor="#0C0C0B" stopOpacity="0.95" />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="#121210" />
          <rect width="100%" height="100%" fill="url(#knurl)" />
          {/* Heavy Steel Barbell Silhouette on Platforms */}
          <line x1="80" y1="560" x2="1360" y2="560" stroke="#F1EEE6" strokeWidth="8" opacity="0.35" />
          <rect x="220" y="470" width="30" height="180" fill="#242422" stroke="#484842" strokeWidth="2" />
          <rect x="256" y="450" width="40" height="220" fill="#1C1C1A" stroke="#484842" strokeWidth="2" />
          <rect x="1144" y="450" width="40" height="220" fill="#1C1C1A" stroke="#484842" strokeWidth="2" />
          <rect x="1190" y="470" width="30" height="180" fill="#242422" stroke="#484842" strokeWidth="2" />
          <rect width="100%" height="100%" fill="url(#heroVignette)" />
        </svg>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 md:px-8 pt-8 md:pt-14 pb-8 flex-1 flex flex-col justify-center">
        {/* Category Pill with Volt Lime indicator */}
        <div className="inline-flex items-center gap-3 mb-4 md:mb-6">
          <span className="w-2.5 h-2.5 bg-primary" />
          <span className="font-body text-xs md:text-sm font-bold tracking-[0.25em] text-muted uppercase">
            STRENGTH & CONDITIONING CLUB • KANPUR
          </span>
        </div>

        {/* Giant Stacked Headline: Cropped by edges */}
        <div className="select-none py-1">
          {/* Line 1: BUILT, */}
          <div className="overflow-hidden pb-1 pt-1">
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.6, ease: customEasing }}
            >
              <h1 className="font-heading text-[56px] sm:text-[90px] md:text-[115px] lg:text-[140px] xl:text-[155px] leading-[0.88] font-black uppercase tracking-tight text-text -ml-1">
                BUILT,
              </h1>
            </motion.div>
          </div>

          {/* Line 2: NOT GIVEN. */}
          <div className="overflow-hidden pb-1 pt-1">
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.6, ease: customEasing, delay: 0.08 }}
            >
              <h1 className="font-heading text-[56px] sm:text-[90px] md:text-[115px] lg:text-[140px] xl:text-[155px] leading-[0.88] font-black uppercase tracking-tight text-primary -ml-1">
                NOT GIVEN.
              </h1>
            </motion.div>
          </div>
        </div>

        {/* Subcopy & Action Buttons Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6 md:mt-10 items-end">
          <div className="lg:col-span-7">
            <p className="font-body text-base md:text-lg text-text/85 max-w-2xl font-normal leading-relaxed">
              No mirrors for selfies. No cardio dance workouts. Just calibrated Eleiko plates, IPF-spec power cages, and coaches who will not let you cut squat depth. If you want comfort, join a franchise. If you want real physical strength, report here.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col sm:flex-row gap-4">
            <a
              href={SITE_CONFIG.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center px-8 py-4 md:py-5 bg-primary text-bg font-heading text-xl md:text-2xl font-black tracking-wider uppercase border-2 border-bg hover:bg-text hover:text-bg transition-colors shadow-hard-lime text-center active:translate-x-1 active:translate-y-1 active:shadow-none"
            >
              BOOK FREE TRIAL
            </a>
            <a
              href="#programs"
              className="inline-flex items-center justify-center px-8 py-4 md:py-5 bg-transparent text-text font-heading text-xl md:text-2xl font-black tracking-wider uppercase border-2 border-hairline hover:bg-surface hover:border-text transition-colors text-center"
            >
              PROGRAMS
            </a>
          </div>
        </div>
      </div>

      {/* Trust Row: Strict Hairline Grid */}
      <div className="relative z-10 border-t-2 border-hairline bg-surface">
        <div className="max-w-[1440px] mx-auto grid grid-cols-2 md:grid-cols-4 divide-x-2 divide-hairline">
          {SITE_CONFIG.trustMetrics.map((item, index) => (
            <div
              key={item.label}
              className={`p-4 md:p-6 flex flex-col justify-center ${
                index >= 2 ? "border-t-2 md:border-t-0 border-hairline" : ""
              }`}
            >
              <span className="font-heading text-3xl md:text-5xl font-black text-text tracking-tight">
                {item.value}
              </span>
              <span className="font-body text-[11px] md:text-xs font-bold tracking-widest text-muted uppercase mt-1">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
