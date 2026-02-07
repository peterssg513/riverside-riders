"use client";

import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/lib/supabase";
import {
  HiUsers,
  HiTruck,
  HiClock,
  HiLogout,
  HiSearch,
  HiRefresh,
  HiCalendar,
  HiChevronDown,
  HiChevronUp,
} from "react-icons/hi";
import { FaCar, FaMotorcycle } from "react-icons/fa";

const EVENT_DATE = new Date("2026-09-19T11:00:00-05:00");

interface Registration {
  id: string;
  name: string;
  email: string;
  phone: string;
  created_at: string;
  vehicles: Vehicle[];
}

interface Vehicle {
  id: string;
  vehicle_type: string;
  year: number;
  make: string;
  model: string;
  class: string;
}

function getCountdown() {
  const now = new Date();
  const diff = EVENT_DATE.getTime() - now.getTime();
  if (diff <= 0) return "Event has started!";
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  return `${days} days, ${hours} hours`;
}

export default function AdminDashboard() {
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [countdown, setCountdown] = useState(getCountdown());
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [classFilter, setClassFilter] = useState<string>("all");

  const fetchRegistrations = useCallback(async () => {
    setLoading(true);
    const { data: regs, error: regError } = await supabase
      .from("registrations")
      .select("*")
      .order("created_at", { ascending: false });

    if (regError) {
      console.error("Error fetching registrations:", regError);
      setLoading(false);
      return;
    }

    // Fetch all vehicles
    const { data: vehicles, error: vehError } = await supabase
      .from("vehicles")
      .select("*");

    if (vehError) {
      console.error("Error fetching vehicles:", vehError);
    }

    const combined = (regs || []).map((reg) => ({
      ...reg,
      vehicles: (vehicles || []).filter(
        (v) => v.registration_id === reg.id
      ),
    }));

    setRegistrations(combined);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchRegistrations();
    const timer = setInterval(() => setCountdown(getCountdown()), 60000);
    return () => clearInterval(timer);
  }, [fetchRegistrations]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  const totalVehicles = registrations.reduce(
    (acc, r) => acc + r.vehicles.length,
    0
  );
  const totalCars = registrations.reduce(
    (acc, r) => acc + r.vehicles.filter((v) => v.vehicle_type === "car").length,
    0
  );
  const totalBikes = registrations.reduce(
    (acc, r) =>
      acc + r.vehicles.filter((v) => v.vehicle_type === "bike").length,
    0
  );

  // Get all unique classes
  const allClasses = Array.from(
    new Set(
      registrations.flatMap((r) => r.vehicles.map((v) => v.class))
    )
  ).sort();

  // Filter registrations
  const filtered = registrations.filter((reg) => {
    const matchesSearch =
      !search ||
      reg.name.toLowerCase().includes(search.toLowerCase()) ||
      reg.email.toLowerCase().includes(search.toLowerCase()) ||
      reg.vehicles.some(
        (v) =>
          v.make.toLowerCase().includes(search.toLowerCase()) ||
          v.model.toLowerCase().includes(search.toLowerCase())
      );

    const matchesClass =
      classFilter === "all" ||
      reg.vehicles.some((v) => v.class === classFilter);

    return matchesSearch && matchesClass;
  });

  return (
    <div className="min-h-screen bg-[#111]">
      {/* Header */}
      <header className="bg-[#0A0A0A] border-b border-white/10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#8B1A1A] flex items-center justify-center text-white font-bold text-xs">
              RR
            </div>
            <div>
              <h1 className="text-white font-bold text-lg">Admin Dashboard</h1>
              <p className="text-gray-500 text-xs">
                Fall Wheels Show 2026
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="/"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              View Site
            </a>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-gray-400 hover:text-red-400 text-sm transition-colors"
            >
              <HiLogout />
              Sign Out
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard
            icon={<HiUsers className="text-xl" />}
            label="Registrations"
            value={registrations.length}
            color="#8B1A1A"
          />
          <StatCard
            icon={<HiTruck className="text-xl" />}
            label="Total Vehicles"
            value={totalVehicles}
            sublabel={`${totalCars} cars • ${totalBikes} bikes`}
            color="#C5A55A"
          />
          <StatCard
            icon={<HiClock className="text-xl" />}
            label="Countdown"
            value={countdown}
            isText
            color="#8B1A1A"
          />
          <StatCard
            icon={<HiCalendar className="text-xl" />}
            label="Event Date"
            value="Sep 19, 2026"
            isText
            color="#C5A55A"
          />
        </div>

        {/* Registrations Table */}
        <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
          {/* Table Header */}
          <div className="p-6 border-b border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <h2 className="text-white font-bold text-lg">
              All Registrations ({filtered.length})
            </h2>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              {/* Search */}
              <div className="relative flex-1 sm:w-64">
                <HiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search name, email, vehicle..."
                  className="w-full pl-9 pr-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-[#8B1A1A] placeholder-gray-500"
                />
              </div>
              {/* Class Filter */}
              <select
                value={classFilter}
                onChange={(e) => setClassFilter(e.target.value)}
                className="px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-[#8B1A1A] appearance-none cursor-pointer"
              >
                <option value="all" className="bg-[#111]">All Classes</option>
                {allClasses.map((cls) => (
                  <option key={cls} value={cls} className="bg-[#111]">
                    {cls}
                  </option>
                ))}
              </select>
              {/* Refresh */}
              <button
                onClick={fetchRegistrations}
                className="p-2 text-gray-400 hover:text-white bg-white/5 border border-white/10 rounded-lg transition-colors"
              >
                <HiRefresh className={loading ? "animate-spin" : ""} />
              </button>
            </div>
          </div>

          {/* Table Content */}
          {loading ? (
            <div className="p-12 text-center">
              <div className="animate-spin w-8 h-8 border-4 border-[#8B1A1A] border-t-transparent rounded-full mx-auto" />
              <p className="text-gray-500 mt-4 text-sm">
                Loading registrations...
              </p>
            </div>
          ) : filtered.length === 0 ? (
            <div className="p-12 text-center">
              <HiUsers className="text-4xl text-gray-600 mx-auto mb-3" />
              <p className="text-gray-400">
                {search || classFilter !== "all"
                  ? "No registrations match your filters."
                  : "No registrations yet."}
              </p>
            </div>
          ) : (
            <div className="divide-y divide-white/5">
              {filtered.map((reg) => (
                <div key={reg.id} className="hover:bg-white/[0.02]">
                  {/* Registration Row */}
                  <button
                    onClick={() =>
                      setExpandedId(
                        expandedId === reg.id ? null : reg.id
                      )
                    }
                    className="w-full flex items-center justify-between px-6 py-4 text-left"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#8B1A1A]/20 flex items-center justify-center text-[#8B1A1A] font-bold text-sm flex-shrink-0">
                        {reg.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")
                          .toUpperCase()
                          .slice(0, 2)}
                      </div>
                      <div>
                        <p className="text-white font-medium">{reg.name}</p>
                        <p className="text-gray-500 text-sm">{reg.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="hidden sm:flex items-center gap-2">
                        {reg.vehicles.some(
                          (v) => v.vehicle_type === "car"
                        ) && (
                          <span className="flex items-center gap-1 text-gray-400 text-xs bg-white/5 px-2 py-1 rounded">
                            <FaCar />{" "}
                            {
                              reg.vehicles.filter(
                                (v) => v.vehicle_type === "car"
                              ).length
                            }
                          </span>
                        )}
                        {reg.vehicles.some(
                          (v) => v.vehicle_type === "bike"
                        ) && (
                          <span className="flex items-center gap-1 text-gray-400 text-xs bg-white/5 px-2 py-1 rounded">
                            <FaMotorcycle />{" "}
                            {
                              reg.vehicles.filter(
                                (v) => v.vehicle_type === "bike"
                              ).length
                            }
                          </span>
                        )}
                      </div>
                      <span className="text-gray-500 text-xs">
                        {new Date(reg.created_at).toLocaleDateString()}
                      </span>
                      {expandedId === reg.id ? (
                        <HiChevronUp className="text-gray-500" />
                      ) : (
                        <HiChevronDown className="text-gray-500" />
                      )}
                    </div>
                  </button>

                  {/* Expanded Details */}
                  {expandedId === reg.id && (
                    <div className="px-6 pb-4 border-t border-white/5">
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4 text-sm">
                        <div>
                          <span className="text-gray-500">Phone:</span>{" "}
                          <span className="text-white">{reg.phone}</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Email:</span>{" "}
                          <span className="text-white">{reg.email}</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Registered:</span>{" "}
                          <span className="text-white">
                            {new Date(reg.created_at).toLocaleString()}
                          </span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        {reg.vehicles.map((v) => (
                          <div
                            key={v.id}
                            className="flex items-center gap-3 bg-white/5 rounded-lg px-4 py-3"
                          >
                            {v.vehicle_type === "bike" ? (
                              <FaMotorcycle className="text-[#C5A55A]" />
                            ) : (
                              <FaCar className="text-[#C5A55A]" />
                            )}
                            <span className="text-white font-medium">
                              {v.year} {v.make} {v.model}
                            </span>
                            <span className="text-xs bg-[#8B1A1A]/20 text-[#8B1A1A] px-2 py-0.5 rounded ml-auto">
                              {v.class}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function StatCard({
  icon,
  label,
  value,
  sublabel,
  color,
  isText,
}: {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  sublabel?: string;
  color: string;
  isText?: boolean;
}) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-6">
      <div className="flex items-center gap-3 mb-3">
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: `${color}20`, color }}
        >
          {icon}
        </div>
        <span className="text-gray-400 text-sm">{label}</span>
      </div>
      <p
        className={`font-bold text-white ${
          isText ? "text-lg" : "text-3xl"
        }`}
      >
        {value}
      </p>
      {sublabel && (
        <p className="text-gray-500 text-xs mt-1">{sublabel}</p>
      )}
    </div>
  );
}
