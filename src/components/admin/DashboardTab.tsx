"use client";

import {
  HiUsers,
  HiTruck,
  HiClock,
  HiCalendar,
} from "react-icons/hi";
import { FaCar, FaMotorcycle } from "react-icons/fa";
import type { Registration, Vehicle } from "./AdminShell";

const EVENT_DATE = new Date("2026-09-19T11:00:00-05:00");

function getCountdown() {
  const diff = EVENT_DATE.getTime() - Date.now();
  if (diff <= 0) return "Event day!";
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  return `${days} days`;
}

const CLASS_COLORS: Record<string, string> = {
  "Best Stock Classic": "#8B1A1A",
  "Best Modified Classic": "#A0522D",
  "Best Modern Car (under 25 years)": "#2563EB",
  "Best American Bike": "#C9A84C",
  "Best Import Bike": "#059669",
  "Best Classic Truck": "#7C3AED",
};

interface Props {
  registrations: Registration[];
  vehicles: Vehicle[];
  loading: boolean;
}

export default function DashboardTab({ registrations, vehicles, loading }: Props) {
  const totalVehicles = vehicles.length;
  const totalCars = vehicles.filter((v) => v.vehicle_type === "car").length;
  const totalBikes = vehicles.filter((v) => v.vehicle_type === "bike").length;

  // Vehicles by class
  const byClass = vehicles.reduce<Record<string, number>>((acc, v) => {
    acc[v.class] = (acc[v.class] || 0) + 1;
    return acc;
  }, {});

  // Registrations over time (last 7 days with data)
  const regsByDate = registrations.reduce<Record<string, number>>((acc, r) => {
    const d = new Date(r.created_at).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
    acc[d] = (acc[d] || 0) + 1;
    return acc;
  }, {});

  // Recent registrations
  const recent = registrations.slice(0, 5);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="animate-spin w-8 h-8 border-4 border-[#8B1A1A] border-t-transparent rounded-full" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <StatCard
          icon={<HiUsers />}
          label="Registrations"
          value={registrations.length}
          color="#8B1A1A"
        />
        <StatCard
          icon={<HiTruck />}
          label="Total Vehicles"
          value={totalVehicles}
          sub={
            <span className="flex items-center gap-3 text-[#888] text-xs mt-1">
              <span className="flex items-center gap-1">
                <FaCar className="text-[10px]" /> {totalCars}
              </span>
              <span className="flex items-center gap-1">
                <FaMotorcycle className="text-[10px]" /> {totalBikes}
              </span>
            </span>
          }
          color="#C9A84C"
        />
        <StatCard
          icon={<HiClock />}
          label="Countdown"
          value={getCountdown()}
          isText
          color="#8B1A1A"
        />
        <StatCard
          icon={<HiCalendar />}
          label="Event Date"
          value="Sep 19, 2026"
          isText
          color="#C9A84C"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Vehicles by Class */}
        <div className="lg:col-span-2 bg-[#1A1A1A] border border-[#333] p-5 sm:p-6">
          <h3
            className="text-white font-black text-sm uppercase tracking-wider mb-5"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Vehicles by Class
          </h3>
          {Object.keys(byClass).length === 0 ? (
            <p className="text-[#555] text-sm">No vehicles registered yet.</p>
          ) : (
            <div className="space-y-3">
              {Object.entries(byClass)
                .sort(([, a], [, b]) => b - a)
                .map(([cls, count]) => {
                  const pct =
                    totalVehicles > 0
                      ? Math.round((count / totalVehicles) * 100)
                      : 0;
                  const color = CLASS_COLORS[cls] || "#8B1A1A";
                  return (
                    <div key={cls}>
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span className="text-[#ccc] font-medium">{cls}</span>
                        <span className="text-white font-bold">
                          {count}{" "}
                          <span className="text-[#888] font-normal text-xs">
                            ({pct}%)
                          </span>
                        </span>
                      </div>
                      <div className="h-2 bg-[#333] overflow-hidden">
                        <div
                          className="h-full transition-all duration-500"
                          style={{
                            width: `${pct}%`,
                            backgroundColor: color,
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
            </div>
          )}
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          {/* Recent Registrations */}
          <div className="bg-[#1A1A1A] border border-[#333] p-5 sm:p-6">
            <h3
              className="text-white font-black text-sm uppercase tracking-wider mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Recent Registrations
            </h3>
            {recent.length === 0 ? (
              <p className="text-[#555] text-sm">None yet.</p>
            ) : (
              <div className="space-y-3">
                {recent.map((r) => (
                  <div
                    key={r.id}
                    className="flex items-center gap-3"
                  >
                    <div className="w-8 h-8 bg-[#8B1A1A]/20 flex items-center justify-center text-[#8B1A1A] font-bold text-[10px] flex-shrink-0">
                      {r.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .toUpperCase()
                        .slice(0, 2)}
                    </div>
                    <div className="min-w-0">
                      <p className="text-white text-sm font-medium truncate">
                        {r.name}
                      </p>
                      <p className="text-[#888] text-xs truncate">{r.email}</p>
                    </div>
                    <span className="text-[#555] text-[10px] ml-auto flex-shrink-0">
                      {new Date(r.created_at).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Registration Timeline */}
          <div className="bg-[#1A1A1A] border border-[#333] p-5 sm:p-6">
            <h3
              className="text-white font-black text-sm uppercase tracking-wider mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Registration Activity
            </h3>
            {Object.keys(regsByDate).length === 0 ? (
              <p className="text-[#555] text-sm">No data yet.</p>
            ) : (
              <div className="space-y-2">
                {Object.entries(regsByDate)
                  .slice(0, 7)
                  .map(([date, count]) => (
                    <div
                      key={date}
                      className="flex items-center justify-between"
                    >
                      <span className="text-[#888] text-xs">{date}</span>
                      <div className="flex items-center gap-2">
                        <div className="flex gap-0.5">
                          {Array.from({ length: Math.min(count, 10) }).map(
                            (_, i) => (
                              <div
                                key={i}
                                className="w-2 h-2 bg-[#8B1A1A]"
                              />
                            )
                          )}
                        </div>
                        <span className="text-white text-xs font-bold w-6 text-right">
                          {count}
                        </span>
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({
  icon,
  label,
  value,
  sub,
  color,
  isText,
}: {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  sub?: React.ReactNode;
  color: string;
  isText?: boolean;
}) {
  return (
    <div className="bg-[#1A1A1A] border border-[#333] p-5">
      <div className="flex items-center gap-2 mb-3">
        <div
          className="w-8 h-8 flex items-center justify-center text-sm"
          style={{ backgroundColor: `${color}20`, color }}
        >
          {icon}
        </div>
        <span className="text-[#888] text-xs font-bold uppercase tracking-wider">
          {label}
        </span>
      </div>
      <p className={`font-black text-white ${isText ? "text-lg" : "text-3xl"}`}>
        {value}
      </p>
      {sub}
    </div>
  );
}
