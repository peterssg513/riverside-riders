"use client";

export default function CTABanner() {
  return (
    <section className="bg-[#8B1A1A] py-10 sm:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2
          className="text-2xl sm:text-4xl font-black text-white uppercase tracking-wider leading-tight"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Don&apos;t Miss Out.
        </h2>
        <p className="text-white/70 mt-2 sm:mt-3 text-sm sm:text-lg">
          Space is limited. Registration is free. Secure your spot today.
        </p>
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <a
            href="#register"
            className="inline-block bg-white text-[#8B1A1A] font-black text-sm sm:text-base uppercase tracking-wider px-8 sm:px-10 py-3.5 sm:py-4 hover:bg-[#F5F0E6] active:bg-[#F5F0E6] transition-colors w-full sm:w-auto text-center"
          >
            Register Your Ride — Free
          </a>
          <a
            href="#awards"
            className="inline-block border-2 border-white/40 text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-6 sm:px-8 py-3 sm:py-3.5 hover:bg-white/10 active:bg-white/10 transition-colors w-full sm:w-auto text-center"
          >
            View Trophy Classes
          </a>
        </div>
      </div>
    </section>
  );
}
