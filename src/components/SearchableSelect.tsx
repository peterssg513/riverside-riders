"use client";

import { useState, useRef, useEffect } from "react";
import { HiChevronDown, HiSearch, HiX } from "react-icons/hi";

interface SearchableSelectProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  label: string;
  loading?: boolean;
  disabled?: boolean;
  allowCustom?: boolean;
}

export default function SearchableSelect({
  options,
  value,
  onChange,
  placeholder,
  label,
  loading = false,
  disabled = false,
  allowCustom = false,
}: SearchableSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const filtered = options.filter((opt) =>
    opt.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
        setSearch("");
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      // Small delay for mobile keyboards
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  const handleSelect = (opt: string) => {
    onChange(opt);
    setIsOpen(false);
    setSearch("");
  };

  return (
    <div ref={containerRef} className="relative">
      <label className="block text-[10px] sm:text-xs font-bold text-[#1A1A1A] mb-1 sm:mb-1.5 uppercase tracking-wider">
        {label}
      </label>
      <button
        type="button"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        className={`w-full flex items-center justify-between px-3.5 py-3 border-2 text-left text-sm transition-all ${
          disabled
            ? "bg-[#E8DFD0] border-[#E8DFD0] text-[#999] cursor-not-allowed"
            : isOpen
            ? "border-[#8B1A1A] bg-white"
            : "border-[#E8DFD0] bg-white hover:border-[#8B1A1A]/50"
        }`}
      >
        <span
          className={value ? "text-[#1A1A1A] font-medium" : "text-[#999]"}
        >
          {loading ? "Loading..." : value || placeholder}
        </span>
        {value && !disabled ? (
          <HiX
            className="text-[#999] hover:text-[#8B1A1A] cursor-pointer text-sm p-0.5"
            onClick={(e) => {
              e.stopPropagation();
              onChange("");
            }}
          />
        ) : (
          <HiChevronDown
            className={`text-[#999] transition-transform text-sm ${isOpen ? "rotate-180" : ""}`}
          />
        )}
      </button>

      {isOpen && !disabled && (
        <div className="absolute z-50 mt-1 w-full bg-white border-2 border-[#1A1A1A] shadow-xl overflow-hidden"
          style={{ maxHeight: "min(16rem, 50vh)" }}
        >
          <div className="p-2 border-b border-[#E8DFD0] sticky top-0 bg-white z-10">
            <div className="relative">
              <HiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-[#999] text-xs" />
              <input
                ref={inputRef}
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search..."
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck={false}
                className="w-full pl-8 pr-3 py-2.5 border border-[#E8DFD0] text-base focus:outline-none focus:border-[#8B1A1A]"
              />
            </div>
          </div>
          <div className="overflow-y-auto" style={{ maxHeight: "min(12rem, 40vh)", WebkitOverflowScrolling: "touch" }}>
            {filtered.length > 0 ? (
              filtered.map((opt) => (
                <button
                  type="button"
                  key={opt}
                  onClick={() => handleSelect(opt)}
                  className={`w-full text-left px-3.5 py-3 text-sm hover:bg-[#8B1A1A]/5 active:bg-[#8B1A1A]/10 transition-colors border-b border-[#F5F0E6] last:border-b-0 ${
                    opt === value
                      ? "bg-[#8B1A1A]/10 text-[#8B1A1A] font-bold"
                      : "text-[#1A1A1A]"
                  }`}
                >
                  {opt}
                </button>
              ))
            ) : (
              <div className="px-4 py-5 text-center text-[#999] text-sm">
                {allowCustom && search ? (
                  <button
                    type="button"
                    onClick={() => handleSelect(search)}
                    className="text-[#8B1A1A] font-bold hover:underline active:underline py-2 px-4"
                  >
                    Use &quot;{search}&quot;
                  </button>
                ) : (
                  "No results found"
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
