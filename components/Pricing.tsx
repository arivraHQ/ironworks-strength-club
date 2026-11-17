"use client";

import React from "react";
import { PRICING_PLANS } from "@/content/site";

export default function Pricing() {
  return (
    <section id="pricing" className="relative bg-bg border-b-2 border-hairline overflow-hidden">
      {/* Section Header */}
      <div className="border-b-2 border-hairline bg-surface">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-8 md:py-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-2 h-2 bg-primary" />
              <span className="font-body text-xs font-bold tracking-[0.2em] text-muted uppercase">
                DIRECT FLOOR MEMBERSHIPS • NO SIGNUP FEES
              </span>
            </div>
            <h2 className="font-heading text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-text leading-none">
              PRICING.
            </h2>
          </div>
          <p className="font-body text-xs md:text-sm text-muted max-w-md font-medium leading-relaxed">
            No sales desks harassing you to renew. No fine-print locker locker maintenance fees. Pay for floor time, train with discipline.
          </p>
        </div>
      </div>

      {/* Horizontal Table / Rows Ledger (NOT 3 cards) */}
      <div className="max-w-[1440px] mx-auto divide-y-2 divide-hairline">
        {PRICING_PLANS.map((plan) => (
          <div
            key={plan.name}
            className={`p-6 md:p-8 transition-colors group relative flex flex-col lg:flex-row lg:items-center justify-between gap-6 ${
              plan.isPopular
                ? "bg-[#181815] border-l-4 border-l-primary"
                : "bg-bg hover:bg-[#141412] border-l-4 border-l-transparent hover:border-l-hairline"
            }`}
          >
            {/* Column 1: Plan Title & Duration */}
            <div className="lg:w-1/4">
              <div className="flex items-center gap-3">
                <span className="font-body text-xs font-bold px-2 py-0.5 bg-surface border border-hairline text-muted uppercase tracking-wider">
                  {plan.duration}
                </span>
                {plan.isPopular && (
                  <span className="font-body text-[11px] font-black px-2.5 py-0.5 bg-primary text-bg uppercase tracking-widest">
                    BEST VALUE (SAVE 33%)
                  </span>
                )}
              </div>
              <h3 className="font-heading text-2xl md:text-3xl font-black uppercase tracking-tight text-text mt-2 group-hover:text-primary transition-colors">
                {plan.name}
              </h3>
              <p className="font-body text-xs text-muted mt-1">
                {plan.note}
              </p>
            </div>

            {/* Column 2: Price & Cadence */}
            <div className="lg:w-1/4 lg:text-left">
              <div className="flex items-baseline gap-2">
                <span className="font-heading text-4xl sm:text-5xl md:text-6xl font-black text-text tracking-tight group-hover:text-primary transition-colors">
                  {plan.price}
                </span>
              </div>
              <span className="font-body text-xs font-bold text-muted uppercase tracking-wider block mt-1">
                {plan.cadence}
              </span>
            </div>

            {/* Column 3: Features Checklist */}
            <div className="lg:w-2/5">
              <ul className="space-y-2">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 bg-primary mt-1.5 shrink-0" />
                    <span className="font-body text-xs md:text-sm text-text/85">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: WhatsApp Action CTA */}
            <div className="lg:w-1/6 flex justify-end">
              <a
                href={`https://wa.me/919000000000?text=Hi%20IRONWORKS%2C%20I%20want%20to%20enroll%20for%20the%20${encodeURIComponent(plan.name)}%20(${encodeURIComponent(plan.price)}).`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full lg:w-auto px-6 py-4 font-heading text-lg font-black tracking-wider uppercase border-2 text-center transition-all cursor-pointer ${
                  plan.isPopular
                    ? "bg-primary text-bg border-primary hover:bg-text hover:text-bg hover:border-text shadow-hard-lime"
                    : "bg-surface text-text border-hairline group-hover:bg-primary group-hover:text-bg group-hover:border-primary"
                }`}
              >
                SELECT PASS →
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Transparency Bar */}
      <div className="border-t-2 border-hairline bg-surface p-4 md:p-6 text-center">
        <p className="font-body text-xs text-muted uppercase tracking-widest font-bold">
          STUDENT & DEFENCE REBATE: 15% OFF UPON VALID ID VERIFICATION AT DESK
        </p>
      </div>
    </section>
  );
}
