"use client";

import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/lib/supabase";
import { HiLogout, HiRefresh } from "react-icons/hi";
import DashboardTab from "./DashboardTab";
import VehiclesTab from "./VehiclesTab";

export interface Registration {
  id: string;
  name: string;
  email: string;
  phone: string;
  created_at: string;
}

export interface Vehicle {
  id: string;
  registration_id: string;
  vehicle_type: string;
  year: number;
  make: string;
  model: string;
  class: string;
  class_number: string | null;
  created_at: string;
  // Joined from registrations
  registration?: Registration;
}

const tabs = [
  { id: "dashboard", label: "Dashboard" },
  { id: "vehicles", label: "Registered Vehicles" },
];

export default function AdminShell() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    setLoading(true);

    const [regsRes, vehRes] = await Promise.all([
      supabase
        .from("registrations")
        .select("*")
        .order("created_at", { ascending: false }),
      supabase
        .from("vehicles")
        .select("*")
        .order("class", { ascending: true })
        .order("class_number", { ascending: true }),
    ]);

    if (regsRes.data) setRegistrations(regsRes.data);
    if (vehRes.data) {
      // Join registration data onto vehicles
      const regsMap = new Map(
        (regsRes.data || []).map((r) => [r.id, r])
      );
      const enriched = (vehRes.data || []).map((v) => ({
        ...v,
        registration: regsMap.get(v.registration_id),
      }));
      setVehicles(enriched);
    }

    setLoading(false);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <div className="min-h-screen bg-[#0F0F0F]">
      {/* Header */}
      <header className="bg-[#1A1A1A] border-b border-[#333] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 bg-[#8B1A1A] flex items-center justify-center text-white font-black text-[10px]">
                  RR
                </div>
                <span
                  className="text-white font-black text-sm tracking-wider uppercase hidden sm:block"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Admin
                </span>
              </div>

              {/* Tabs */}
              <div className="flex items-center gap-1 ml-4">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors ${
                      activeTab === tab.id
                        ? "bg-[#8B1A1A] text-white"
                        : "text-[#888] hover:text-white hover:bg-[#333]"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={fetchData}
                className="p-2 text-[#888] hover:text-white transition-colors"
                title="Refresh data"
              >
                <HiRefresh className={loading ? "animate-spin" : ""} />
              </button>
              <a
                href="/"
                className="text-[#888] hover:text-white text-xs font-bold uppercase tracking-wider transition-colors hidden sm:block"
              >
                View Site
              </a>
              <button
                onClick={handleLogout}
                className="flex items-center gap-1.5 text-[#888] hover:text-red-400 text-xs font-bold uppercase tracking-wider transition-colors"
              >
                <HiLogout className="text-sm" />
                <span className="hidden sm:inline">Sign Out</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        {activeTab === "dashboard" && (
          <DashboardTab
            registrations={registrations}
            vehicles={vehicles}
            loading={loading}
          />
        )}
        {activeTab === "vehicles" && (
          <VehiclesTab
            vehicles={vehicles}
            loading={loading}
            onRefresh={fetchData}
          />
        )}
      </main>
    </div>
  );
}
