"use client";

export default function Footer() {
  return (
    <footer className="bg-[#111] border-t-4 border-[#8B1A1A]">
      {/* Extra padding at bottom on mobile for floating CTA */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-14 pb-24 sm:pb-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 sm:gap-10">
          {/* Brand — 5 cols */}
          <div className="sm:col-span-2 md:col-span-5">
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#8B1A1A] flex items-center justify-center text-white font-black text-[10px] sm:text-xs tracking-wider">
                RR
              </div>
              <div>
                <p
                  className="text-white font-black text-sm sm:text-base tracking-wider uppercase"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Riverside Riders
                </p>
                <p className="text-[#C9A84C] text-[8px] sm:text-[9px] font-bold tracking-[0.3em] uppercase">
                  Authentic — Est. 2022
                </p>
              </div>
            </div>
            <p className="text-[#666] text-xs sm:text-sm leading-relaxed max-w-xs">
              RCC Fall Wheels Show — bringing car, truck, and bike enthusiasts
              together since 2022. A completely independent judged award show.
            </p>
          </div>

          {/* Links — 3 cols */}
          <div className="md:col-span-3">
            <h4
              className="text-white font-black text-[10px] sm:text-xs tracking-[0.2em] uppercase mb-3 sm:mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Quick Links
            </h4>
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-x-4 gap-y-2 sm:space-y-2.5">
              {[
                { href: "#about", label: "About" },
                { href: "#awards", label: "Award Classes" },
                { href: "#gallery", label: "Past Shows" },
                { href: "#faq", label: "FAQ" },
                { href: "#location", label: "Location" },
                { href: "#register", label: "Register" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#888] hover:text-[#C9A84C] text-xs sm:text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Event Info — 4 cols */}
          <div className="md:col-span-4">
            <h4
              className="text-white font-black text-[10px] sm:text-xs tracking-[0.2em] uppercase mb-3 sm:mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Event Info
            </h4>
            <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-[#888]">
              <p>Saturday, September 19, 2026</p>
              <p>11 AM – 3 PM (Registration at 10 AM)</p>
              <p>
                Riverside Community Church
                <br />
                37W130 Crane Rd, St. Charles, IL 60175
              </p>
              <p>
                <a
                  href="mailto:allwheelsshow@rccstc.org"
                  className="text-[#C9A84C] hover:text-[#C9A84C]/80 transition-colors break-all"
                >
                  allwheelsshow@rccstc.org
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 pt-4 sm:pt-6 border-t border-[#333] flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3">
          <p className="text-[#555] text-[10px] sm:text-xs">
            © 2026 Riverside Riders. All rights reserved.
          </p>
          <p className="text-[#444] text-[10px] sm:text-xs tracking-wider">
            riversideriderscarshow.com
          </p>
        </div>
      </div>
    </footer>
  );
}
