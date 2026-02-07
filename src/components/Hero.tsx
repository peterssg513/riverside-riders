"use client";

import { useState, useEffect } from "react";

const EVENT_DATE = new Date("2026-09-19T11:00:00-05:00");

function getTimeLeft() {
  const now = new Date();
  const diff = EVENT_DATE.getTime() - now.getTime();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative pt-[52px] sm:pt-14 overflow-guard">
      {/* ── MAIN HERO ── */}
      <div className="bg-[#1A1A1A] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, #fff 0px, #fff 1px, transparent 1px, transparent 12px)`,
          }}
        />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-24 text-center">
          {/* Badge */}
          <div className="inline-block border-2 border-[#C9A84C] px-3 sm:px-5 py-1.5 mb-6 sm:mb-8">
            <span className="text-[#C9A84C] text-[10px] sm:text-sm font-black tracking-[0.2em] sm:tracking-[0.25em] uppercase">
              5th Annual&nbsp;&nbsp;•&nbsp;&nbsp;Sept 19, 2026
            </span>
          </div>

          {/* Title Stack — scaled for all screens */}
          <h1
            className="text-[2rem] sm:text-6xl md:text-7xl font-black text-white tracking-wider uppercase leading-[0.95]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Riverside Riders
          </h1>
          <h2
            className="text-[3rem] sm:text-[5.5rem] md:text-[7rem] text-[#8B1A1A] leading-[0.85] -mt-1"
            style={{ fontFamily: "var(--font-dancing)" }}
          >
            Fall Wheels
          </h2>
          <h3
            className="text-[2rem] sm:text-6xl md:text-7xl font-black text-white tracking-[0.1em] sm:tracking-[0.15em] uppercase leading-[0.95] -mt-2"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Show 2026
          </h3>

          {/* Tagline */}
          <p className="text-[#E8DFD0] text-sm sm:text-lg mt-4 sm:mt-6 tracking-wide">
            A Completely Independent{" "}
            <span className="underline-accent text-white font-black">
              Judged
            </span>{" "}
            Award Show
          </p>

          {/* Countdown */}
          <div className="mt-8 sm:mt-10 flex items-center justify-center gap-1.5 sm:gap-3">
            <CountdownUnit value={timeLeft.days} label="Days" />
            <Separator />
            <CountdownUnit value={timeLeft.hours} label="Hrs" />
            <Separator />
            <CountdownUnit value={timeLeft.minutes} label="Min" />
            <Separator />
            <CountdownUnit value={timeLeft.seconds} label="Sec" />
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-2 sm:px-0">
            <a
              href="#register"
              className="cta-primary text-sm sm:text-lg px-8 sm:px-10 py-3.5 sm:py-4"
            >
              Register Your Ride — Free
            </a>
            <a
              href="#about"
              className="cta-outline text-xs sm:text-sm px-6 sm:px-8 py-3 sm:py-3.5 border-white/30 text-white/80 hover:bg-white/10 hover:text-white"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* ── INFO BAR ── */}
      <div className="bg-[#8B1A1A]">
        <div className="max-w-5xl mx-auto px-3 sm:px-6 py-3 sm:py-5">
          <div className="flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 gap-y-1.5 sm:gap-y-2 text-xs sm:text-base font-bold tracking-wide text-white">
            <span>📍 St. Charles, IL</span>
            <span className="hidden sm:inline text-white/30">|</span>
            <span>🕐 11 AM – 3 PM</span>
            <span className="hidden sm:inline text-white/30">|</span>
            <span>🏆 Trophies</span>
            <span className="hidden sm:inline text-white/30">|</span>
            <span>🌭 Free Food</span>
            <span className="hidden sm:inline text-white/30">|</span>
            <span>🎵 Live Music</span>
          </div>
        </div>
      </div>

      {/* ── NO ENTRY FEE BANNER ── */}
      <div className="bg-[#C9A84C]">
        <div className="max-w-5xl mx-auto px-3 sm:px-4 py-2.5 sm:py-3 flex items-center justify-center">
          <span className="text-[#1A1A1A] font-black text-[10px] sm:text-base tracking-[0.1em] sm:tracking-[0.15em] uppercase text-center">
            ★ No Entry Fee ★ Limited Space ★ Register Today ★
          </span>
        </div>
      </div>
    </section>
  );
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="text-center">
      <div className="countdown-block w-14 h-14 sm:w-20 sm:h-20">
        <span
          className="text-white text-xl sm:text-3xl font-black tabular-nums"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span className="text-[#9CA3AF] text-[9px] sm:text-xs font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase mt-1 sm:mt-1.5 block">
        {label}
      </span>
    </div>
  );
}

function Separator() {
  return (
    <span className="text-[#8B1A1A] text-xl sm:text-3xl font-black select-none -mt-4 sm:-mt-5">
      :
    </span>
  );
}
