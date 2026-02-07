"use client";

import {
  FaTrophy,
  FaMusic,
  FaTicketAlt,
  FaBalanceScale,
  FaHotdog,
  FaChild,
} from "react-icons/fa";

const features = [
  {
    icon: FaBalanceScale,
    title: "Independent Judging",
    desc: "Impartial judges evaluate every vehicle — fair results across all classes.",
  },
  {
    icon: FaTrophy,
    title: "Top Quality Trophies",
    desc: "Premium trophies for each winning class. Bring your best.",
  },
  {
    icon: FaTicketAlt,
    title: "No Entry Fee",
    desc: "Free for participants and spectators. Just show up with your ride.",
  },
  {
    icon: FaMusic,
    title: "Live Music",
    desc: "Sound and music by 3-D Sound throughout the entire event.",
  },
  {
    icon: FaHotdog,
    title: "Free Food & Drinks",
    desc: "Enjoy free hot dogs, snacks, chips, drinks, and ice cream all day long.",
  },
  {
    icon: FaChild,
    title: "Family Fun Activities",
    desc: "Spacewalks, games, and more — fun for the whole family!",
  },
];

export default function About() {
  return (
    <section id="about" className="py-14 sm:py-28 bg-[#F5F0E6]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <span className="section-label">About The Show</span>
          <h2
            className="text-2xl sm:text-4xl md:text-5xl font-black text-[#1A1A1A] uppercase tracking-wider mt-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Cars. Bikes. Trucks.
            <br />
            <span className="text-[#8B1A1A]">One Epic Day.</span>
          </h2>
          <p className="text-[#4B5563] text-base sm:text-lg max-w-2xl mx-auto mt-4 sm:mt-6 leading-relaxed">
            Now in its 5th year, the Riverside Riders Fall Wheels Show brings
            together classic cars, modified rides, modern vehicles, trucks, and
            motorcycles for a day of community, competition, and celebration in
            St.&nbsp;Charles — plus free food, live music, and family fun
            activities.
          </p>
        </div>

        {/* Timelapse Video */}
        <div className="mb-10 sm:mb-14 relative overflow-hidden bg-[#1A1A1A]">
          <video
            className="w-full h-[200px] sm:h-[400px] lg:h-[480px] object-cover"
            src="/images/timelapse.mov"
            muted
            loop
            playsInline
            autoPlay
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1A1A1A]/80 to-transparent p-4 sm:p-8">
            <p className="text-white/80 text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase">
              Aerial View — 2025 Fall Wheels Show
            </p>
          </div>
        </div>

        {/* Features — 1 col on tiny phones, 2 col on small+, 3 col on large */}
        <div className="grid grid-cols-1 min-[400px]:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white border-2 border-[#E8DFD0] p-4 sm:p-6 text-center hover:border-[#8B1A1A] transition-colors group"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#8B1A1A] flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-[#6B0F0F] transition-colors">
                <f.icon className="text-white text-sm sm:text-lg" />
              </div>
              <h3
                className="font-black text-[#1A1A1A] uppercase tracking-wide text-xs sm:text-base mb-1.5 sm:mb-2"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {f.title}
              </h3>
              <p className="text-[#4B5563] text-[11px] sm:text-sm leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Event Info + CTA */}
        <div className="mt-10 sm:mt-14 bg-[#1A1A1A] flex flex-col md:flex-row">
          <div className="flex-1 p-6 sm:p-10">
            <p className="text-[#C9A84C] text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase mb-2">
              Event Details
            </p>
            <h3
              className="text-xl sm:text-3xl font-black text-white uppercase tracking-wide leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Saturday, September 19
            </h3>
            <p className="text-[#9CA3AF] mt-3 leading-relaxed text-sm sm:text-base">
              Vehicle registration begins at{" "}
              <strong className="text-white">10 AM</strong>. Show runs{" "}
              <strong className="text-white">11 AM – 3 PM</strong>. Vehicles
              sorted by trophy classes. Free hot dogs, snacks, chips, drinks
              &amp; ice cream. Spacewalks and games for the kids!
            </p>
          </div>
          <div className="bg-[#8B1A1A] p-6 sm:p-10 flex items-center justify-center md:w-72">
            <a
              href="#register"
              className="text-white font-black text-base sm:text-lg uppercase tracking-wider hover:text-[#C9A84C] transition-colors text-center leading-tight"
            >
              Secure Your Spot
              <span className="text-[#C9A84C] text-sm block mt-2">
                → Register Free
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
