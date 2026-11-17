"use client";

import React from "react";
import { SITE_CONFIG } from "@/content/site";

export default function Footer() {
  return (
    <footer className="relative bg-bg border-t-2 border-hairline overflow-hidden select-none">
      {/* Oversized Giant CTA Block: "START MONDAY." */}
      <div className="border-b-2 border-hairline bg-[#10100E] p-6 sm:p-10 md:p-16 text-center group relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto flex flex-col items-center">
          <span className="font-body text-xs md:text-sm font-bold tracking-[0.3em] text-muted uppercase mb-2">
            NO MORE EXCUSES • REPORT TO CIVIL LINES
          </span>

          <a
            href={SITE_CONFIG.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full"
          >
            <h2 className="font-heading text-6xl sm:text-9xl md:text-[140px] lg:text-[180px] xl:text-[210px] font-black uppercase tracking-tight text-primary hover:text-text transition-colors leading-[0.85] cursor-pointer">
              START MONDAY.
            </h2>
          </a>

          <div className="mt-8">
            <a
              href={SITE_CONFIG.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 md:px-12 py-5 bg-primary text-bg font-heading text-2xl md:text-3xl font-black tracking-wider uppercase border-2 border-primary hover:bg-text hover:text-bg transition-colors shadow-hard-lime"
            >
              BOOK FREE TRIAL VIA WHATSAPP →
            </a>
          </div>
        </div>
      </div>

      {/* 4-Column Architectural Ledger */}
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y-2 md:divide-y-0 md:divide-x-2 divide-hairline">
        {/* Col 1: Brand & Doctrine */}
        <div className="p-6 md:p-8 flex flex-col justify-between">
          <div>
            <span className="font-heading text-3xl font-black tracking-tight text-text block">
              IRONWORKS
            </span>
            <span className="font-body text-xs font-bold tracking-widest text-muted uppercase block mt-1">
              STRENGTH CLUB • KANPUR
            </span>
            <p className="font-body text-xs text-text/75 mt-4 leading-relaxed">
              Raw, disciplined barbell strength and conditioning. Zero mirror selfies, zero generic fitness slop. Calibrated plates and real coaches.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-hairline">
            <span className="font-body text-[11px] font-black text-primary uppercase tracking-widest">
              BUILT, NOT GIVEN.
            </span>
          </div>
        </div>

        {/* Col 2: Physical Headquarters */}
        <div className="p-6 md:p-8 flex flex-col justify-between">
          <div>
            <span className="font-body text-xs font-black tracking-widest text-muted uppercase block mb-3">
              FACILITY HEADQUARTERS
            </span>
            <p className="font-body text-sm font-bold text-text">
              Plot 14/112, Mall Road
            </p>
            <p className="font-body text-xs text-text/80 mt-1">
              Opp. Green Park Stadium Gate 3
            </p>
            <p className="font-body text-xs text-muted mt-1">
              Civil Lines, Kanpur, UP 208001
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-hairline">
            <span className="font-body text-[11px] text-muted uppercase tracking-wider">
              Landmark: Green Park Gate 3
            </span>
          </div>
        </div>

        {/* Col 3: Hours & Operations */}
        <div className="p-6 md:p-8 flex flex-col justify-between">
          <div>
            <span className="font-body text-xs font-black tracking-widest text-muted uppercase block mb-3">
              OPERATING HOURS
            </span>
            <div className="space-y-1.5 font-body text-xs">
              <p className="flex justify-between">
                <span className="text-muted">MON – SAT:</span>
                <span className="font-bold text-text">05:00 – 23:00</span>
              </p>
              <p className="flex justify-between">
                <span className="text-muted">SUNDAY:</span>
                <span className="font-bold text-text">07:00 – 12:00</span>
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-hairline space-y-1 font-body text-xs">
              <p className="text-muted">Direct Line: <span className="text-text font-bold">{SITE_CONFIG.phone}</span></p>
              <p className="text-muted">WhatsApp Desk: <span className="text-primary font-bold">{SITE_CONFIG.whatsapp}</span></p>
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-hairline">
            <span className="font-body text-[11px] text-primary uppercase font-bold tracking-wider">
              Direct Coach Escalation Available
            </span>
          </div>
        </div>

        {/* Col 4: Map Placeholder & Coordinates */}
        <div className="p-6 md:p-8 flex flex-col justify-between bg-[#141412]">
          <div>
            <span className="font-body text-xs font-black tracking-widest text-muted uppercase block mb-3">
              GEO-COORDINATES & MAP
            </span>

            {/* Dark Brutalist Map Placeholder with Crosshairs */}
            <div className="aspect-[16/10] w-full bg-[#0C0C0B] border-2 border-hairline relative flex flex-col items-center justify-center p-3 text-center overflow-hidden">
              {/* Crosshair lines */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                <div className="w-full h-px bg-primary" />
                <div className="h-full w-px bg-primary absolute" />
              </div>
              <span className="font-body text-[11px] font-bold text-primary tracking-widest uppercase">
                26.4716° N, 80.3508° E
              </span>
              <span className="font-body text-[10px] text-muted uppercase mt-1">
                CIVIL LINES • GREEN PARK
              </span>
              <span className="mt-2 px-2 py-0.5 bg-surface border border-hairline font-body text-[9px] text-text font-bold uppercase">
                MAP PIN LOCATOR
              </span>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-hairline">
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-xs text-text hover:text-primary transition-colors font-bold uppercase tracking-wider flex items-center justify-between"
            >
              <span>OPEN GOOGLE MAPS</span>
              <span>↗</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright & Disclaimer */}
      <div className="border-t-2 border-hairline bg-[#080807] px-6 py-4">
        <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 font-body text-[11px] text-muted">
          <span>© {new Date().getFullYear()} IRONWORKS STRENGTH CLUB. ALL RIGHTS RESERVED.</span>
          <span className="uppercase tracking-wider">CIVIL LINES, KANPUR, UTTAR PRADESH • NO FLUFF, NO COMPROMISE.</span>
        </div>
      </div>
    </footer>
  );
}
