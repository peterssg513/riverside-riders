"use client";

import { useState, useEffect } from "react";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [atRegister, setAtRegister] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero (500px)
      setVisible(window.scrollY > 500);

      // Hide when user is at the registration section
      const registerSection = document.getElementById("register");
      if (registerSection) {
        const rect = registerSection.getBoundingClientRect();
        setAtRegister(rect.top < window.innerHeight && rect.bottom > 0);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible || atRegister) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-[#1A1A1A]/95 backdrop-blur-sm border-t-2 border-[#8B1A1A] px-3 pt-2.5"
      style={{ paddingBottom: "max(0.625rem, env(safe-area-inset-bottom))" }}
    >
      <a
        href="#register"
        className="block w-full bg-[#8B1A1A] text-white font-black text-center py-3.5 uppercase tracking-wider text-sm active:bg-[#6B0F0F] transition-colors"
      >
        Register Your Ride — Free
      </a>
    </div>
  );
}
