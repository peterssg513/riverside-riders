"use client";

import {
  FaCar,
  FaWrench,
  FaCarSide,
  FaMotorcycle,
  FaTruck,
  FaTrophy,
  FaTools,
  FaKey,
} from "react-icons/fa";

const entryClasses = [
  { icon: FaCar, name: "Best Classic Stock Car", era: "1900–1970", desc: "Original, unmodified classic cars in pristine condition from the golden era." },
  { icon: FaCar, name: "Best Classic Stock Car", era: "1971–1999", desc: "Factory-original classic cars from the '70s, '80s, and '90s." },
  { icon: FaWrench, name: "Best Modified Classic Car", era: "1900–1970", desc: "Classics with tasteful modifications, custom work, and performance upgrades." },
  { icon: FaWrench, name: "Best Modified Stock Car", era: "1971–1999", desc: "Modified rides from the '70s through the '90s with custom touches." },
  { icon: FaCarSide, name: "Best Modern Car or Truck", era: "2000+", desc: "Standout vehicles from 2000 or above — cars and trucks." },
  { icon: FaTruck, name: "Best Classic Truck", era: "Pre-2000", desc: "Classic trucks showcasing American hauling heritage." },
];

const specialAwards = [
  { icon: FaTrophy, name: "Best of Show", desc: "The ultimate award — judge's top pick from all entries." },
  { icon: FaKey, name: "Gimme Your Keys", desc: "The car the judges all want — the ride everyone wishes they could drive home." },
  { icon: FaTools, name: "Least Likely to Make it Home", desc: "Fan-favorite for the ride with the most character." },
];

export default function Awards() {
  return (
    <section id="awards" className="py-14 sm:py-28 bg-[#1A1A1A]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <span className="section-label border-[#C9A84C] text-[#C9A84C]">
            Trophy Classes
          </span>
          <h2
            className="text-2xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-wider mt-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            7 Classes. 10 Trophies.
            <br />
            <span className="text-[#C9A84C]">All Independently Judged.</span>
          </h2>
        </div>

        {/* Entry Classes Grid — 6 classes in 3x2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#333]">
          {entryClasses.map((cls, idx) => (
            <div
              key={idx}
              className="bg-[#1A1A1A] p-5 sm:p-7 hover:bg-[#222] transition-colors group"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-11 sm:h-11 bg-[#8B1A1A] flex items-center justify-center flex-shrink-0 group-hover:bg-[#C9A84C] transition-colors">
                  <cls.icon className="text-white text-sm sm:text-base" />
                </div>
                <div className="min-w-0">
                  <h3
                    className="font-black text-white uppercase tracking-wide text-xs sm:text-sm"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {cls.name}
                  </h3>
                  <span className="inline-block text-[9px] sm:text-[10px] bg-[#C9A84C] text-[#1A1A1A] font-black px-2 py-px mt-1 uppercase tracking-wide">
                    {cls.era}
                  </span>
                  <p className="text-[#777] text-xs sm:text-sm mt-1.5 sm:mt-2 leading-relaxed">
                    {cls.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Best Motorcycles — centered full-width row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-[#333] mt-px">
          <div className="sm:col-start-2 bg-[#1A1A1A] p-5 sm:p-7 hover:bg-[#222] transition-colors group">
            <div className="flex items-start gap-3 sm:gap-4 justify-center sm:justify-start">
              <div className="w-10 h-10 sm:w-11 sm:h-11 bg-[#8B1A1A] flex items-center justify-center flex-shrink-0 group-hover:bg-[#C9A84C] transition-colors">
                <FaMotorcycle className="text-white text-sm sm:text-base" />
              </div>
              <div className="min-w-0">
                <h3
                  className="font-black text-white uppercase tracking-wide text-xs sm:text-sm"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Best Motorcycles
                </h3>
                <span className="inline-block text-[9px] sm:text-[10px] bg-[#C9A84C] text-[#1A1A1A] font-black px-2 py-px mt-1 uppercase tracking-wide">
                  All Years
                </span>
                <p className="text-[#777] text-xs sm:text-sm mt-1.5 sm:mt-2 leading-relaxed">
                  All years and makes — Harley, Indian, Honda, Kawasaki, Ducati &amp; beyond.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Special Awards */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          {specialAwards.map((award, idx) => (
            <div
              key={idx}
              className="border-2 border-[#C9A84C]/40 p-4 sm:p-6 flex items-center gap-4 sm:gap-5 bg-[#C9A84C]/5"
            >
              <award.icon className="text-[#C9A84C] text-xl sm:text-2xl flex-shrink-0" />
              <div className="min-w-0">
                <h4
                  className="font-black text-white uppercase tracking-wide text-xs sm:text-sm"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  ★ {award.name}
                </h4>
                <p className="text-[#777] text-xs sm:text-sm mt-1">{award.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 sm:mt-14 text-center">
          <p className="text-[#777] mb-4 text-xs sm:text-sm">
            Which class will your ride compete in?
          </p>
          <a
            href="#register"
            className="cta-primary text-sm sm:text-base px-8 sm:px-10 py-3.5 sm:py-4"
          >
            Register Now — It&apos;s Free
          </a>
        </div>
      </div>
    </section>
  );
}
