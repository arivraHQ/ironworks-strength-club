"use client";

import React from "react";
import Image from "next/image";
import { COACHES } from "@/content/site";

export default function Coaches() {
  const [headCoach, coachPriya, coachAmit, coachDevendra] = COACHES;

  return (
    <section id="coaches" className="relative bg-bg border-b-2 border-hairline overflow-hidden">
      {/* Section Header with Industrial Bar */}
      <div className="border-b-2 border-hairline bg-surface">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-8 md:py-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-2 h-2 bg-primary" />
              <span className="font-body text-xs font-bold tracking-[0.2em] text-muted uppercase">
                COACHING ROSTER • NO APPRENTICES
              </span>
            </div>
            <h2 className="font-heading text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-text leading-none">
              COACHES.
            </h2>
          </div>
          <p className="font-body text-xs md:text-sm text-muted max-w-md font-medium leading-relaxed">
            Every coach on our floor holds tested national competition medals or accredited clinical degrees. No weekend certificate trainers.
          </p>
        </div>
      </div>

      {/* Asymmetric Architectural Grid */}
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-hairline">
        {/* Left Dominant Tile: Head Coach Vikram (7 Cols) */}
        <div className="lg:col-span-7 p-6 md:p-10 flex flex-col justify-between bg-bg group hover:bg-[#141412] transition-colors relative">
          <div>
            {/* Tag bar */}
            <div className="flex items-center justify-between pb-4 border-b border-hairline">
              <span className="px-3 py-1 bg-primary text-bg font-body text-xs font-black tracking-widest uppercase">
                {headCoach.experience}
              </span>
              <span className="font-body text-xs font-bold tracking-widest text-muted uppercase">
                FOUNDER & HEAD COACH
              </span>
            </div>

            {/* Grayscale to Color Image Slot */}
            <div className="mt-6 aspect-[16/10] w-full bg-[#181816] border-2 border-hairline relative overflow-hidden group-hover:border-primary transition-all duration-500">
              <Image
                src="/images/coach-vikram.jpg"
                alt="Head Coach Vikram Rathore"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-top grayscale contrast-125 brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between pointer-events-none">
                <span className="font-heading text-2xl md:text-3xl font-black tracking-tight text-text">
                  VIKRAM RATHORE
                </span>
                <span className="px-2 py-0.5 bg-primary text-bg font-body text-[10px] font-black uppercase tracking-widest">
                  IPF GOLD
                </span>
              </div>
            </div>

            {/* Coach Details */}
            <div className="mt-8">
              <h3 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-text group-hover:text-primary transition-colors leading-none">
                {headCoach.name}
              </h3>
              <p className="font-body text-xs md:text-sm font-bold tracking-widest text-accent uppercase mt-2">
                {headCoach.role}
              </p>
              <p className="font-body text-sm md:text-base text-text/85 mt-4 leading-relaxed max-w-xl">
                {headCoach.bio}
              </p>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-hairline flex items-center justify-between">
            <span className="font-body text-xs text-muted font-bold tracking-wider uppercase">
              SPECIALITY: POWERLIFTING PEAKING & BARBELL BIOMECHANICS
            </span>
            <span className="text-primary text-sm font-bold">→</span>
          </div>
        </div>

        {/* Right Stack: Split Rows (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col divide-y-2 divide-hairline">
          {/* Coach Priya Kannojia */}
          <div className="p-6 md:p-8 bg-surface group hover:bg-[#181816] transition-colors">
            <div className="flex items-center justify-between pb-3 border-b border-hairline">
              <span className="px-2.5 py-0.5 bg-bg border border-hairline text-text font-body text-[11px] font-bold tracking-widest uppercase">
                {coachPriya.experience}
              </span>
              <span className="font-body text-[11px] font-bold tracking-widest text-primary uppercase">
                WOMEN'S STRENGTH LEAD
              </span>
            </div>

            {/* Image Slot */}
            <div className="mt-4 aspect-[21/9] w-full bg-[#1F1F1D] border-2 border-hairline relative overflow-hidden group-hover:border-primary transition-all duration-500">
              <Image
                src="/images/coach-priya.jpg"
                alt="Coach Priya Kannojia"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-top grayscale contrast-125 brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-80" />
            </div>

            <h3 className="font-heading text-2xl md:text-3xl font-black uppercase tracking-tight text-text mt-4 group-hover:text-primary transition-colors leading-tight">
              {coachPriya.name}
            </h3>
            <p className="font-body text-xs text-text/80 mt-2 leading-relaxed">
              {coachPriya.bio}
            </p>
          </div>

          {/* Bottom Split: Amit Shukla & Devendra Yadav */}
          <div className="grid grid-cols-1 sm:grid-cols-2 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-hairline flex-1">
            {/* Coach Amit 'Tank' Shukla */}
            <div className="p-6 bg-bg group hover:bg-[#141412] transition-colors flex flex-col justify-between">
              <div>
                <span className="block px-2 py-0.5 bg-surface text-muted font-body text-[10px] font-bold tracking-widest uppercase w-fit">
                  {coachAmit.experience}
                </span>

                <div className="mt-3 aspect-video w-full bg-[#181816] border border-hairline relative overflow-hidden group-hover:border-primary transition-all duration-500">
                  <Image
                    src="/images/coach-amit.jpg"
                    alt="Coach Amit Shukla"
                    fill
                    sizes="(max-width: 640px) 100vw, 20vw"
                    className="object-cover object-top grayscale contrast-125 brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-80" />
                </div>

                <h3 className="font-heading text-xl md:text-2xl font-black uppercase tracking-tight text-text mt-3 group-hover:text-primary transition-colors leading-tight">
                  {coachAmit.name}
                </h3>
                <span className="font-body text-[10px] text-muted block mt-1 font-bold">
                  {coachAmit.credentials}
                </span>
                <p className="font-body text-xs text-text/75 mt-2 leading-relaxed">
                  {coachAmit.bio}
                </p>
              </div>
            </div>

            {/* Coach Devendra Yadav */}
            <div className="p-6 bg-surface group hover:bg-[#181816] transition-colors flex flex-col justify-between">
              <div>
                <span className="block px-2 py-0.5 bg-bg text-muted font-body text-[10px] font-bold tracking-widest uppercase w-fit">
                  {coachDevendra.experience}
                </span>

                <div className="mt-3 aspect-video w-full bg-[#141412] border border-hairline relative overflow-hidden group-hover:border-primary transition-all duration-500">
                  <Image
                    src="/images/coach-devendra.jpg"
                    alt="Coach Devendra Yadav"
                    fill
                    sizes="(max-width: 640px) 100vw, 20vw"
                    className="object-cover object-top grayscale contrast-125 brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-80" />
                </div>

                <h3 className="font-heading text-xl md:text-2xl font-black uppercase tracking-tight text-text mt-3 group-hover:text-primary transition-colors leading-tight">
                  {coachDevendra.name}
                </h3>
                <span className="font-body text-[10px] text-muted block mt-1 font-bold">
                  {coachDevendra.credentials}
                </span>
                <p className="font-body text-xs text-text/75 mt-2 leading-relaxed">
                  {coachDevendra.bio}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
