"use client";

import React, { useState } from "react";
import { FAQS, SITE_CONFIG } from "@/content/site";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative bg-bg border-b-2 border-hairline overflow-hidden">
      {/* Header */}
      <div className="border-b-2 border-hairline bg-surface">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-8 md:py-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-2 h-2 bg-primary" />
              <span className="font-body text-xs font-bold tracking-[0.2em] text-muted uppercase">
                CLARITY • PROTOCOL INQUIRIES
              </span>
            </div>
            <h2 className="font-heading text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-text leading-none">
              FAQ.
            </h2>
          </div>
          <p className="font-body text-xs md:text-sm text-muted max-w-md font-medium leading-relaxed">
            Straight answers to logistical, physical, and medical questions. No ambiguous corporate jargon.
          </p>
        </div>
      </div>

      {/* Main FAQ Layout */}
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-hairline">
        {/* Left Sticky Prompt / Help Box (4 Cols) */}
        <div className="lg:col-span-4 p-6 md:p-8 bg-[#121210] flex flex-col justify-between">
          <div>
            <span className="font-body text-xs font-black tracking-widest text-primary uppercase block">
              COACH DESK DIRECT
            </span>
            <h3 className="font-heading text-2xl md:text-3xl font-black uppercase tracking-tight text-text mt-2 leading-tight">
              HAVE A SPECIFIC INJURY OR SCHEDULE CONSTRAINT?
            </h3>
            <p className="font-body text-xs md:text-sm text-text/80 mt-4 leading-relaxed">
              If your question isn't answered here, send your medical clearance or training history directly to our head coach via WhatsApp.
            </p>

            <div className="mt-8 p-4 bg-surface border-2 border-hairline space-y-2">
              <span className="font-body text-[10px] font-bold text-muted uppercase tracking-wider block">
                LOCATION & DESK
              </span>
              <p className="font-body text-xs text-text font-bold">
                CIVIL LINES, KANPUR
              </p>
              <p className="font-body text-xs text-muted">
                Mall Road, Opp. Green Park Gate 3
              </p>
              <p className="font-body text-xs text-primary font-bold pt-1">
                Mon - Sat: 5:00 AM – 11:00 PM
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-hairline">
            <a
              href={SITE_CONFIG.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center py-4 bg-primary text-bg font-heading text-lg font-black tracking-wider uppercase border-2 border-primary hover:bg-text hover:text-bg transition-colors shadow-hard-lime text-center"
            >
              MESSAGE HEAD COACH →
            </a>
          </div>
        </div>

        {/* Right: 6 Minimalist Accordion Rows (8 Cols) */}
        <div className="lg:col-span-8 divide-y-2 divide-hairline bg-bg">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={faq.question}
                className="transition-colors group"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className={`w-full p-6 md:p-8 text-left flex items-start justify-between gap-4 transition-colors cursor-pointer ${
                    isOpen ? "bg-[#181816]" : "bg-bg hover:bg-[#141412]"
                  }`}
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-4 md:gap-6">
                    <span className={`font-heading text-2xl md:text-3xl font-black ${
                      isOpen ? "text-primary" : "text-muted group-hover:text-text"
                    }`}>
                      0{idx + 1}
                    </span>
                    <h3 className={`font-heading text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tight transition-colors ${
                      isOpen ? "text-primary" : "text-text group-hover:text-primary"
                    }`}>
                      {faq.question}
                    </h3>
                  </div>

                  <span className={`shrink-0 w-8 h-8 flex items-center justify-center border font-heading text-xl font-bold transition-all ${
                    isOpen
                      ? "bg-primary text-bg border-primary rotate-45"
                      : "bg-surface text-text border-hairline group-hover:border-primary"
                  }`}>
                    +
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 md:px-8 pb-8 pt-2 bg-[#181816] pl-14 md:pl-20">
                    <p className="font-body text-sm md:text-base text-text/85 leading-relaxed max-w-2xl">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
