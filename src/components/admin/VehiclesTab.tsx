"use client";

import { useState, useMemo } from "react";
import {
  HiSearch,
  HiDownload,
  HiChevronDown,
  HiChevronUp,
  HiSortAscending,
} from "react-icons/hi";
import { FaCar, FaMotorcycle } from "react-icons/fa";
import type { Vehicle } from "./AdminShell";
import * as XLSX from "xlsx";

const ALL_CLASSES = [
  "Best Stock Classic",
  "Best Modified Classic",
  "Best Modern Car (under 25 years)",
  "Best American Bike",
  "Best Import Bike",
  "Best Classic Truck",
];

const CLASS_PREFIX: Record<string, string> = {
  "Best Stock Classic": "SC",
  "Best Modified Classic": "MC",
  "Best Modern Car (under 25 years)": "MD",
  "Best American Bike": "AB",
  "Best Import Bike": "IB",
  "Best Classic Truck": "CT",
};

type SortField = "class_number" | "year" | "make" | "created_at";
type SortDir = "asc" | "desc";

interface Props {
  vehicles: Vehicle[];
  loading: boolean;
  onRefresh: () => void;
}

export default function VehiclesTab({ vehicles, loading, onRefresh }: Props) {
  const [search, setSearch] = useState("");
  const [classFilter, setClassFilter] = useState<string>("all");
  const [sortField, setSortField] = useState<SortField>("class_number");
  const [sortDir, setSortDir] = useState<SortDir>("asc");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  // Filter and sort
  const filtered = useMemo(() => {
    let result = [...vehicles];

    // Class filter
    if (classFilter !== "all") {
      result = result.filter((v) => v.class === classFilter);
    }

    // Search
    if (search) {
      const s = search.toLowerCase();
      result = result.filter(
        (v) =>
          v.make.toLowerCase().includes(s) ||
          v.model.toLowerCase().includes(s) ||
          v.class_number?.toLowerCase().includes(s) ||
          v.registration?.name.toLowerCase().includes(s) ||
          v.registration?.email.toLowerCase().includes(s) ||
          `${v.year}`.includes(s)
      );
    }

    // Sort
    result.sort((a, b) => {
      let cmp = 0;
      switch (sortField) {
        case "class_number":
          cmp = (a.class_number || "").localeCompare(b.class_number || "");
          break;
        case "year":
          cmp = a.year - b.year;
          break;
        case "make":
          cmp = a.make.localeCompare(b.make);
          break;
        case "created_at":
          cmp =
            new Date(a.created_at).getTime() -
            new Date(b.created_at).getTime();
          break;
      }
      return sortDir === "asc" ? cmp : -cmp;
    });

    return result;
  }, [vehicles, classFilter, search, sortField, sortDir]);

  // Group by class for display
  const grouped = useMemo(() => {
    if (classFilter !== "all") return null; // flat list when filtering
    const groups: Record<string, Vehicle[]> = {};
    for (const v of filtered) {
      if (!groups[v.class]) groups[v.class] = [];
      groups[v.class].push(v);
    }
    return groups;
  }, [filtered, classFilter]);

  // Class counts
  const classCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const v of vehicles) {
      counts[v.class] = (counts[v.class] || 0) + 1;
    }
    return counts;
  }, [vehicles]);

  // Toggle sort
  const toggleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDir(sortDir === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDir("asc");
    }
  };

  // Export to Excel
  const exportToExcel = () => {
    const data = (classFilter !== "all" ? filtered : vehicles).map((v) => ({
      "Class #": v.class_number || "—",
      Class: v.class,
      Type: v.vehicle_type === "bike" ? "Motorcycle" : "Car/Truck",
      Year: v.year,
      Make: v.make,
      Model: v.model,
      "Owner Name": v.registration?.name || "—",
      "Owner Email": v.registration?.email || "—",
      "Owner Phone": v.registration?.phone || "—",
      "Registered On": new Date(v.created_at).toLocaleDateString(),
    }));

    const ws = XLSX.utils.json_to_sheet(data);

    // Auto-size columns
    const colWidths = Object.keys(data[0] || {}).map((key) => ({
      wch: Math.max(
        key.length + 2,
        ...data.map((row) =>
          String(row[key as keyof typeof row] || "").length
        )
      ),
    }));
    ws["!cols"] = colWidths;

    const wb = XLSX.utils.book_new();
    const sheetName =
      classFilter !== "all"
        ? `${CLASS_PREFIX[classFilter] || "ALL"} Vehicles`
        : "All Vehicles";
    XLSX.utils.book_append_sheet(wb, ws, sheetName);

    // If exporting all, add separate sheets per class
    if (classFilter === "all") {
      for (const cls of ALL_CLASSES) {
        const classVehicles = vehicles.filter((v) => v.class === cls);
        if (classVehicles.length === 0) continue;
        const classData = classVehicles.map((v) => ({
          "Class #": v.class_number || "—",
          Year: v.year,
          Make: v.make,
          Model: v.model,
          "Owner Name": v.registration?.name || "—",
          "Owner Email": v.registration?.email || "—",
          "Owner Phone": v.registration?.phone || "—",
        }));
        const classWs = XLSX.utils.json_to_sheet(classData);
        classWs["!cols"] = Object.keys(classData[0] || {}).map((key) => ({
          wch: Math.max(
            key.length + 2,
            ...classData.map((row) =>
              String(row[key as keyof typeof row] || "").length
            )
          ),
        }));
        XLSX.utils.book_append_sheet(
          wb,
          classWs,
          CLASS_PREFIX[cls] || cls.slice(0, 20)
        );
      }
    }

    XLSX.writeFile(
      wb,
      `FallWheelsShow2026_Vehicles_${new Date().toISOString().split("T")[0]}.xlsx`
    );
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="animate-spin w-8 h-8 border-4 border-[#8B1A1A] border-t-transparent rounded-full" />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Controls Bar */}
      <div className="bg-[#1A1A1A] border border-[#333] p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3 flex-wrap">
          {/* Search */}
          <div className="relative">
            <HiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-[#555] text-sm" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search vehicles, owners..."
              className="pl-9 pr-3 py-2 bg-[#0F0F0F] border border-[#333] text-white text-sm w-56 focus:outline-none focus:border-[#8B1A1A] placeholder-[#555]"
            />
          </div>

          {/* Class Filter Tabs */}
          <div className="flex items-center gap-1 flex-wrap">
            <button
              onClick={() => setClassFilter("all")}
              className={`px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider transition-colors ${
                classFilter === "all"
                  ? "bg-[#8B1A1A] text-white"
                  : "bg-[#0F0F0F] text-[#888] border border-[#333] hover:text-white"
              }`}
            >
              All ({vehicles.length})
            </button>
            {ALL_CLASSES.map((cls) => (
              <button
                key={cls}
                onClick={() => setClassFilter(cls)}
                className={`px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider transition-colors ${
                  classFilter === cls
                    ? "bg-[#8B1A1A] text-white"
                    : "bg-[#0F0F0F] text-[#888] border border-[#333] hover:text-white"
                }`}
              >
                {CLASS_PREFIX[cls]} ({classCounts[cls] || 0})
              </button>
            ))}
          </div>
        </div>

        {/* Export Button */}
        <button
          onClick={exportToExcel}
          disabled={vehicles.length === 0}
          className="flex items-center gap-2 bg-[#059669] hover:bg-[#047857] disabled:bg-[#333] disabled:text-[#555] text-white font-bold text-xs uppercase tracking-wider px-4 py-2 transition-colors flex-shrink-0"
        >
          <HiDownload />
          Export to Excel
        </button>
      </div>

      {/* Sort Controls */}
      <div className="flex items-center gap-2 text-xs text-[#888]">
        <HiSortAscending className="text-sm" />
        <span className="font-bold uppercase tracking-wider">Sort by:</span>
        {(
          [
            { field: "class_number" as SortField, label: "Class #" },
            { field: "year" as SortField, label: "Year" },
            { field: "make" as SortField, label: "Make" },
            { field: "created_at" as SortField, label: "Date" },
          ] as const
        ).map((s) => (
          <button
            key={s.field}
            onClick={() => toggleSort(s.field)}
            className={`px-2 py-1 transition-colors ${
              sortField === s.field
                ? "bg-[#8B1A1A] text-white"
                : "bg-[#1A1A1A] text-[#888] hover:text-white border border-[#333]"
            }`}
          >
            {s.label}
            {sortField === s.field && (
              <span className="ml-1">{sortDir === "asc" ? "↑" : "↓"}</span>
            )}
          </button>
        ))}
      </div>

      {/* Vehicle List */}
      {filtered.length === 0 ? (
        <div className="bg-[#1A1A1A] border border-[#333] p-12 text-center">
          <p className="text-[#555]">
            {search || classFilter !== "all"
              ? "No vehicles match your filters."
              : "No vehicles registered yet."}
          </p>
        </div>
      ) : grouped && classFilter === "all" ? (
        // Grouped by class
        <div className="space-y-4">
          {ALL_CLASSES.filter((cls) => grouped[cls]?.length > 0).map((cls) => (
            <div
              key={cls}
              className="bg-[#1A1A1A] border border-[#333] overflow-hidden"
            >
              <div className="bg-[#222] px-5 py-3 flex items-center justify-between border-b border-[#333]">
                <div className="flex items-center gap-3">
                  <span
                    className="bg-[#8B1A1A] text-white text-[10px] font-black px-2 py-0.5 tracking-wider"
                  >
                    {CLASS_PREFIX[cls]}
                  </span>
                  <h3
                    className="text-white font-black text-sm uppercase tracking-wider"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {cls}
                  </h3>
                </div>
                <span className="text-[#888] text-xs font-bold">
                  {grouped[cls].length} vehicle{grouped[cls].length !== 1 ? "s" : ""}
                </span>
              </div>
              <div className="divide-y divide-[#222]">
                {grouped[cls].map((v) => (
                  <VehicleRow
                    key={v.id}
                    vehicle={v}
                    isExpanded={expandedId === v.id}
                    onToggle={() =>
                      setExpandedId(expandedId === v.id ? null : v.id)
                    }
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        // Flat list when filtering by class
        <div className="bg-[#1A1A1A] border border-[#333] overflow-hidden">
          <div className="divide-y divide-[#222]">
            {filtered.map((v) => (
              <VehicleRow
                key={v.id}
                vehicle={v}
                isExpanded={expandedId === v.id}
                onToggle={() =>
                  setExpandedId(expandedId === v.id ? null : v.id)
                }
              />
            ))}
          </div>
        </div>
      )}

      {/* Summary */}
      <div className="text-center text-[#555] text-xs py-2">
        Showing {filtered.length} of {vehicles.length} vehicles
      </div>
    </div>
  );
}

function VehicleRow({
  vehicle: v,
  isExpanded,
  onToggle,
}: {
  vehicle: Vehicle;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="hover:bg-[#1F1F1F]">
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-4 px-5 py-3 text-left"
      >
        {/* Class Number */}
        <span className="bg-[#0F0F0F] border border-[#333] text-[#C9A84C] font-mono font-bold text-xs px-2 py-1 w-20 text-center flex-shrink-0">
          {v.class_number || "—"}
        </span>

        {/* Type Icon */}
        <span className="flex-shrink-0 text-[#888]">
          {v.vehicle_type === "bike" ? (
            <FaMotorcycle className="text-sm" />
          ) : (
            <FaCar className="text-sm" />
          )}
        </span>

        {/* Vehicle Info */}
        <div className="flex-1 min-w-0">
          <span className="text-white font-bold text-sm">
            {v.year} {v.make} {v.model}
          </span>
        </div>

        {/* Owner */}
        <span className="text-[#888] text-xs hidden sm:block truncate max-w-40">
          {v.registration?.name || "—"}
        </span>

        {/* Date */}
        <span className="text-[#555] text-[10px] hidden md:block flex-shrink-0">
          {new Date(v.created_at).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
          })}
        </span>

        {/* Chevron */}
        {isExpanded ? (
          <HiChevronUp className="text-[#555] flex-shrink-0" />
        ) : (
          <HiChevronDown className="text-[#555] flex-shrink-0" />
        )}
      </button>

      {isExpanded && (
        <div className="px-5 pb-4 border-t border-[#222] pt-3">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
            <div>
              <span className="text-[#555] text-xs block">Class #</span>
              <span className="text-[#C9A84C] font-mono font-bold">
                {v.class_number || "—"}
              </span>
            </div>
            <div>
              <span className="text-[#555] text-xs block">Class</span>
              <span className="text-white">{v.class}</span>
            </div>
            <div>
              <span className="text-[#555] text-xs block">Type</span>
              <span className="text-white">
                {v.vehicle_type === "bike" ? "Motorcycle" : "Car/Truck"}
              </span>
            </div>
            <div>
              <span className="text-[#555] text-xs block">Vehicle</span>
              <span className="text-white">
                {v.year} {v.make} {v.model}
              </span>
            </div>
            <div>
              <span className="text-[#555] text-xs block">Owner</span>
              <span className="text-white">
                {v.registration?.name || "—"}
              </span>
            </div>
            <div>
              <span className="text-[#555] text-xs block">Email</span>
              <span className="text-white">
                {v.registration?.email || "—"}
              </span>
            </div>
            <div>
              <span className="text-[#555] text-xs block">Phone</span>
              <span className="text-white">
                {v.registration?.phone || "—"}
              </span>
            </div>
            <div>
              <span className="text-[#555] text-xs block">Registered</span>
              <span className="text-white">
                {new Date(v.created_at).toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
