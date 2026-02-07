"use client";

import { useState } from "react";
import { HiPlus, HiMinus } from "react-icons/hi";

const faqs = [
  {
    q: "Is there an entry fee?",
    a: "No! There is absolutely no entry fee for participants or spectators. Just bring your ride and enjoy the show.",
  },
  {
    q: "What time does the event start?",
    a: "Vehicle registration begins at 10 AM. The show officially runs from 11 AM to 3 PM on Saturday, September 19, 2026.",
  },
  {
    q: "What types of vehicles can I enter?",
    a: "We welcome all types — classic cars, modified classics, modern cars (under 25 years), classic trucks, American motorcycles, and import motorcycles. If it has wheels, bring it!",
  },
  {
    q: "How is judging done?",
    a: "All vehicles are independently judged by impartial judges. This ensures fair and unbiased results across all classes.",
  },
  {
    q: "What are the award classes?",
    a: "Six entry classes: Best Stock Classic, Best Modified Classic, Best Modern Car, Best American Bike, Best Import Bike, and Best Classic Truck. Plus two special judge awards: Best of Show and Least Likely to Make it Home.",
  },
  {
    q: "Where is it held?",
    a: "Riverside Community Church, 37W130 Crane Road, St. Charles, IL 60175. Parking available on-site.",
  },
  {
    q: "Can I register multiple vehicles?",
    a: "Yes! Use the \"Add Another Vehicle\" button on the registration form to enter as many rides as you'd like.",
  },
  {
    q: "Is there food and entertainment?",
    a: "Absolutely! Enjoy free hot dogs, snacks, chips, drinks, and ice cream all day. Live sound and music by 3-D Sound. Plus family fun activities including spacewalks, games, and more!",
  },
  {
    q: "What if it rains?",
    a: "The show is rain or shine. Check our website and your email for updates in case of severe weather.",
  },
  {
    q: "Do I need to stay the entire event?",
    a: "We encourage it — especially for trophy presentations! But you're free to come and go.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-14 sm:py-28 bg-[#F5F0E6]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <span className="section-label">FAQ</span>
          <h2
            className="text-2xl sm:text-4xl md:text-5xl font-black text-[#1A1A1A] uppercase tracking-wider mt-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Got Questions?
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="divide-y-2 divide-[#E8DFD0] border-y-2 border-[#E8DFD0]">
          {faqs.map((faq, idx) => (
            <div key={idx}>
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between py-4 sm:py-5 text-left group"
              >
                <span
                  className="text-[#1A1A1A] font-bold text-sm sm:text-lg pr-3 sm:pr-4 leading-snug"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {faq.q}
                </span>
                <span className="w-8 h-8 sm:w-8 sm:h-8 bg-[#8B1A1A] flex items-center justify-center flex-shrink-0 group-hover:bg-[#6B0F0F] active:bg-[#6B0F0F] transition-colors">
                  {openIndex === idx ? (
                    <HiMinus className="text-white text-sm" />
                  ) : (
                    <HiPlus className="text-white text-sm" />
                  )}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === idx ? "max-h-96 pb-4 sm:pb-5" : "max-h-0"
                }`}
              >
                <p className="text-[#4B5563] text-sm sm:text-base leading-relaxed pr-8 sm:pr-12">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 sm:mt-12 text-center">
          <p className="text-[#4B5563] text-xs sm:text-sm mb-1">
            Still have questions?
          </p>
          <a
            href="mailto:allwheelsshow@rccstc.org"
            className="text-[#8B1A1A] font-bold hover:text-[#6B0F0F] transition-colors text-sm sm:text-base break-all"
          >
            allwheelsshow@rccstc.org
          </a>
        </div>
      </div>
    </section>
  );
}
