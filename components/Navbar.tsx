"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SITE_CONFIG } from "@/content/site";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "PROGRAMS", href: "#programs" },
    { label: "COACHES", href: "#coaches" },
    { label: "TRANSFORMATIONS", href: "#transformations" },
    { label: "SCHEDULE", href: "#timetable" },
    { label: "PRICING", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0C0C0B] border-b-2 border-hairline">
      <div className="max-w-[1440px] mx-auto flex items-stretch justify-between h-16 md:h-20">
        {/* Wordmark Left with Official Emblem */}
        <Link
          href="/"
          className="flex items-center gap-3 px-4 md:px-8 border-r-2 border-hairline group hover:bg-[#161614] transition-colors"
        >
          {/* <img
            src="/logo.jpg"
            alt="IRONWORKS Logo"
            className="w-9 h-9 md:w-11 md:h-11 object-contain border border-hairline group-hover:border-primary transition-colors"
          /> */}
          <div className="flex flex-col">
            <span className="font-heading text-2xl md:text-3xl font-black tracking-tight text-text leading-none group-hover:text-primary transition-colors">
              IRONWORKS
            </span>
            <span className="font-body text-[10px] md:text-[11px] font-bold tracking-[0.25em] text-muted uppercase mt-0.5">
              STRENGTH CLUB • KANPUR
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-stretch divide-x-2 divide-hairline">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="flex items-center px-6 font-body text-xs font-bold tracking-widest text-muted hover:text-text hover:bg-[#161614] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-stretch">
          {/* Desktop WhatsApp Trial CTA */}
          <a
            href={SITE_CONFIG.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center px-6 md:px-8 bg-primary text-bg font-heading text-lg md:text-xl font-black tracking-wider uppercase border-l-2 border-hairline hover:bg-text hover:text-bg transition-colors shadow-hard-lime"
          >
            FREE TRIAL
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex items-center justify-center px-5 border-l-2 border-hairline bg-[#161614] text-text hover:bg-surface-raised transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            <div className="w-6 h-4 flex flex-col justify-between">
              <span
                className={`block h-0.5 w-full bg-text transition-transform duration-300 ${
                  mobileMenuOpen ? "rotate-45 translate-y-1.5 bg-primary" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-text transition-opacity duration-300 ${
                  mobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-text transition-transform duration-300 ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-1.5 bg-primary" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0C0C0B] border-b-2 border-hairline px-6 py-8 space-y-6">
          <div className="flex flex-col divide-y-2 divide-hairline">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-4 font-heading text-3xl font-black tracking-tight text-text hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="pt-4 border-t-2 border-hairline flex flex-col space-y-4">
            <a
              href={SITE_CONFIG.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-4 text-center bg-primary text-bg font-heading text-2xl font-black tracking-wider uppercase shadow-hard-lime"
            >
              BOOK FREE TRIAL VIA WHATSAPP
            </a>
            <div className="text-xs text-muted space-y-1 pt-2">
              <p className="font-bold text-text">CIVIL LINES, KANPUR</p>
              <p>Mon – Sat: 05:00 – 23:00</p>
              <p>Direct: {SITE_CONFIG.phone}</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
