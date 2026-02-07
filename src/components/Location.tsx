"use client";

import { HiLocationMarker } from "react-icons/hi";

export default function Location() {
  return (
    <section id="location" className="py-14 sm:py-28 bg-[#1A1A1A]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <span className="section-label border-[#C9A84C] text-[#C9A84C]">
            Location
          </span>
          <h2
            className="text-2xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-wider mt-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Where To Find Us
          </h2>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-5 gap-0">
          {/* Map — takes 3 cols on desktop, full width on mobile */}
          <div className="lg:col-span-3 h-[250px] sm:h-[350px] lg:h-[420px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2966.8!2d-88.3!3d41.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880f0615b8c3b3d7%3A0x0!2s37W130+Crane+Rd%2C+St+Charles%2C+IL+60175!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Riverside Community Church Location"
            />
          </div>

          {/* Info — takes 2 cols on desktop, stacks under on mobile */}
          <div className="lg:col-span-2 bg-[#222] p-6 sm:p-10 flex flex-col justify-center space-y-5 sm:space-y-6">
            <div>
              <p className="text-[#C9A84C] text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase mb-1">
                Venue
              </p>
              <h3
                className="text-lg sm:text-xl font-black text-white uppercase tracking-wide"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Riverside Community Church
              </h3>
              <p className="text-[#777] mt-1 text-sm">
                37W130 Crane Road
                <br />
                St. Charles, IL 60175
              </p>
            </div>

            <div>
              <p className="text-[#C9A84C] text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase mb-1">
                Date &amp; Time
              </p>
              <p className="text-white font-bold text-sm sm:text-base">
                Saturday, September 19, 2026
              </p>
              <p className="text-[#777] text-sm">
                Registration: 10 AM &nbsp;|&nbsp; Show: 11 AM – 3 PM
              </p>
            </div>

            <div>
              <p className="text-[#C9A84C] text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase mb-1">
                Contact
              </p>
              <a
                href="mailto:allwheelsshow@rccstc.org"
                className="text-white font-bold hover:text-[#C9A84C] transition-colors text-sm sm:text-base break-all"
              >
                allwheelsshow@rccstc.org
              </a>
            </div>

            <a
              href="https://www.google.com/maps/dir//37W130+Crane+Rd,+St+Charles,+IL+60175"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#8B1A1A] hover:bg-[#6B0F0F] text-white font-black px-5 sm:px-6 py-3 uppercase tracking-wider transition-colors w-full sm:w-fit text-xs sm:text-sm"
            >
              <HiLocationMarker />
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
