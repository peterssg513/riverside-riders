"use client";

import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Image from "next/image";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#awards", label: "Awards" },
  { href: "#gallery", label: "Past Shows" },
  { href: "#faq", label: "FAQ" },
  { href: "#location", label: "Location" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#1A1A1A]/98 backdrop-blur-sm shadow-md py-1.5 sm:py-2"
          : "bg-[#1A1A1A] py-2 sm:py-3"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 sm:gap-3">
          <Image
            src="/images/logo.png"
            alt="Riverside Riders Logo"
            width={36}
            height={36}
            className="w-8 h-8 sm:w-10 sm:h-10 object-contain invert"
          />
          <div className="hidden min-[360px]:block">
            <span
              className="text-white font-black text-xs sm:text-sm tracking-[0.1em] sm:tracking-[0.15em] uppercase block leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Riverside Riders
            </span>
            <span className="text-[#C9A84C] text-[8px] sm:text-[9px] font-bold tracking-[0.2em] sm:tracking-[0.3em] uppercase">
              Fall Wheels Show
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] font-bold uppercase tracking-[0.12em] text-[#E8DFD0] hover:text-[#C9A84C] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#register"
            className="text-[13px] font-black uppercase tracking-[0.12em] bg-[#8B1A1A] text-white px-5 py-2 hover:bg-[#6B0F0F] transition-colors ml-2"
          >
            Register Now
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white p-2 -mr-1"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

      {/* Mobile full-screen overlay */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 top-[48px] sm:top-[56px] bg-[#1A1A1A] z-50 overflow-y-auto">
          <div className="px-6 py-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-4 text-base font-bold uppercase tracking-wider text-[#E8DFD0] hover:text-[#C9A84C] active:text-[#C9A84C] border-b border-[#333] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4">
              <a
                href="#register"
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-4 text-base font-black uppercase tracking-wider bg-[#8B1A1A] text-white text-center active:bg-[#6B0F0F] transition-colors"
              >
                Register Now
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
