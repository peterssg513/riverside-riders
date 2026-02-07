"use client";

import Image from "next/image";

const galleryImages = [
  { id: 1, src: "/images/show-1.jpeg", alt: "Classic cars lined up at the 2025 show" },
  { id: 2, src: "/images/show-2.jpeg", alt: "Vehicle showcase at the Fall Wheels Show" },
  { id: 3, src: "/images/show-3.jpeg", alt: "Attendees checking out the rides" },
  { id: 4, src: "/images/show-4.jpeg", alt: "Beautiful rides on display" },
  { id: 5, src: "/images/show-5.jpeg", alt: "Car show crowd and community" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-14 sm:py-28 bg-[#F5F0E6]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <span className="section-label">Past Shows</span>
          <h2
            className="text-2xl sm:text-4xl md:text-5xl font-black text-[#1A1A1A] uppercase tracking-wider mt-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            See What You&apos;re
            <br />
            <span className="text-[#8B1A1A]">Missing Out On.</span>
          </h2>
          <p className="text-[#4B5563] text-sm sm:text-lg max-w-xl mx-auto mt-3 sm:mt-4">
            Highlights from past Fall Wheels Shows. Your ride could be featured
            next year.
          </p>
        </div>

        {/* Gallery Grid — stacked on mobile, grid on tablet+ */}
        <div className="flex flex-col sm:grid sm:grid-cols-2 gap-2.5 sm:gap-4">
          {/* Large feature image — full width */}
          <div className="sm:col-span-2 relative aspect-[16/10] sm:aspect-[21/9] overflow-hidden border-2 border-[#E8DFD0] hover:border-[#8B1A1A] transition-colors group">
            <Image
              src={galleryImages[0].src}
              alt={galleryImages[0].alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 960px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/60 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
              <span className="bg-[#8B1A1A] text-white text-[10px] sm:text-xs font-bold px-2.5 sm:px-3 py-1 uppercase tracking-wider">
                2025 Show
              </span>
            </div>
          </div>

          {/* Remaining images — 2x2 on mobile too */}
          {galleryImages.slice(1).map((img) => (
            <div
              key={img.id}
              className="relative aspect-[4/3] overflow-hidden border-2 border-[#E8DFD0] hover:border-[#8B1A1A] transition-colors group"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 480px"
              />
              <div className="absolute inset-0 bg-[#1A1A1A]/0 group-hover:bg-[#1A1A1A]/10 transition-colors" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 sm:mt-12 text-center">
          <p className="text-[#4B5563] text-xs sm:text-sm mb-3 sm:mb-4">
            Want your ride in next year&apos;s gallery?
          </p>
          <a href="#register" className="cta-primary text-xs sm:text-sm px-6 sm:px-8 py-3">
            Register Your Ride
          </a>
        </div>
      </div>
    </section>
  );
}
