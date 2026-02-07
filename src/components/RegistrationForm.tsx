"use client";

import { useState, useCallback } from "react";
import { HiPlus, HiTrash, HiCheck, HiShieldCheck } from "react-icons/hi";
import { FaCar, FaMotorcycle } from "react-icons/fa";
import toast from "react-hot-toast";
import SearchableSelect from "./SearchableSelect";
import {
  carManufacturers,
  motorcycleManufacturers,
  vehicleClasses,
  getYearOptions,
  fetchModelsForMake,
  getMotorcycleModels,
} from "@/lib/vehicleData";

interface VehicleEntry {
  id: string;
  vehicleType: "car" | "bike";
  year: string;
  make: string;
  model: string;
  vehicleClass: string;
}

function createEmptyVehicle(): VehicleEntry {
  return {
    id: crypto.randomUUID(),
    vehicleType: "car",
    year: "",
    make: "",
    model: "",
    vehicleClass: "",
  };
}

const yearOptions = getYearOptions().map(String);

export default function RegistrationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [vehicles, setVehicles] = useState<VehicleEntry[]>([
    createEmptyVehicle(),
  ]);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [modelsCache, setModelsCache] = useState<Record<string, string[]>>({});
  const [modelsLoading, setModelsLoading] = useState<Record<string, boolean>>(
    {}
  );

  const loadModels = useCallback(
    async (make: string, vehicleType: "car" | "bike") => {
      if (!make) return;
      const cacheKey = `${vehicleType}-${make}`;
      if (modelsCache[cacheKey]) return;

      setModelsLoading((prev) => ({ ...prev, [cacheKey]: true }));

      if (vehicleType === "bike") {
        const models = getMotorcycleModels(make);
        setModelsCache((prev) => ({ ...prev, [cacheKey]: models }));
        setModelsLoading((prev) => ({ ...prev, [cacheKey]: false }));
      } else {
        const models = await fetchModelsForMake(make);
        setModelsCache((prev) => ({
          ...prev,
          [cacheKey]: models.length > 0 ? models : ["Other"],
        }));
        setModelsLoading((prev) => ({ ...prev, [cacheKey]: false }));
      }
    },
    [modelsCache]
  );

  const updateVehicle = (
    id: string,
    field: keyof VehicleEntry,
    value: string
  ) => {
    setVehicles((prev) =>
      prev.map((v) => {
        if (v.id !== id) return v;
        const updated = { ...v, [field]: value };
        if (field === "vehicleType") {
          updated.make = "";
          updated.model = "";
          updated.vehicleClass = "";
        }
        if (field === "make") {
          updated.model = "";
          if (value) loadModels(value, v.vehicleType);
        }
        return updated;
      })
    );
  };

  const addVehicle = () => {
    setVehicles((prev) => [...prev, createEmptyVehicle()]);
  };

  const removeVehicle = (id: string) => {
    if (vehicles.length <= 1) return;
    setVehicles((prev) => prev.filter((v) => v.id !== id));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !phone.trim()) {
      toast.error("Please fill in all personal information fields.");
      return;
    }
    for (const v of vehicles) {
      if (!v.year || !v.make || !v.model || !v.vehicleClass) {
        toast.error("Please fill in all vehicle fields.");
        return;
      }
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          vehicles: vehicles.map((v) => ({
            vehicleType: v.vehicleType,
            year: parseInt(v.year),
            make: v.make,
            model: v.model,
            class: v.vehicleClass,
          })),
        }),
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Registration failed");
      }

      setSubmitted(true);
      toast.success("You're registered! Check your email.");
    } catch (err) {
      toast.error(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  // ── SUCCESS STATE ──
  if (submitted) {
    return (
      <section id="register" className="py-14 sm:py-28 bg-[#F5F0E6]">
        <div className="max-w-xl mx-auto px-4 text-center">
          <div className="bg-white border-2 border-[#E8DFD0] p-6 sm:p-12">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-green-700 flex items-center justify-center mx-auto mb-5 sm:mb-6">
              <HiCheck className="text-white text-2xl sm:text-3xl" />
            </div>
            <h2
              className="text-xl sm:text-3xl font-black text-[#1A1A1A] uppercase tracking-wider"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              You&apos;re In!
            </h2>
            <p className="text-[#4B5563] mt-3 sm:mt-4 text-sm sm:text-base">
              Thanks, <strong>{name}</strong>! A confirmation email is on its way
              to <strong className="break-all">{email}</strong>.
            </p>
            <div className="bg-[#F5F0E6] p-4 sm:p-5 mt-4 sm:mt-6 text-left text-xs sm:text-sm text-[#4B5563] space-y-1">
              <p>
                <strong>Event:</strong> 5th Annual Fall Wheels Show
              </p>
              <p>
                <strong>Date:</strong> Saturday, September 19, 2026
              </p>
              <p>
                <strong>Registration:</strong> 10 AM
              </p>
              <p>
                <strong>Vehicles:</strong> {vehicles.length} registered
              </p>
            </div>
            <button
              onClick={() => {
                setSubmitted(false);
                setName("");
                setEmail("");
                setPhone("");
                setVehicles([createEmptyVehicle()]);
              }}
              className="mt-5 sm:mt-6 text-[#8B1A1A] font-bold hover:text-[#6B0F0F] transition-colors text-xs sm:text-sm uppercase tracking-wider"
            >
              Register Another Person →
            </button>
          </div>
        </div>
      </section>
    );
  }

  // ── FORM ──
  return (
    <section id="register" className="py-14 sm:py-28 bg-[#F5F0E6]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10">
          <span className="section-label">Registration</span>
          <h2
            className="text-2xl sm:text-4xl md:text-5xl font-black text-[#1A1A1A] uppercase tracking-wider mt-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Register Your Ride
          </h2>
          <p className="text-[#4B5563] text-sm sm:text-lg mt-3 sm:mt-4 max-w-lg mx-auto">
            No entry fee. Just fill out the form below and you&apos;re in.
            Takes less than 2 minutes.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Step 1: Personal Info */}
          <div className="bg-white border-2 border-[#E8DFD0] p-4 sm:p-8 mb-3 sm:mb-4">
            <div className="flex items-center gap-2.5 sm:gap-3 mb-5 sm:mb-6">
              <span className="w-6 h-6 sm:w-7 sm:h-7 bg-[#8B1A1A] text-white flex items-center justify-center text-[10px] sm:text-xs font-black">
                1
              </span>
              <h3
                className="font-black text-[#1A1A1A] uppercase tracking-wider text-sm sm:text-base"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Your Info
              </h3>
            </div>
            <div className="space-y-3 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-4">
              <div className="sm:col-span-2">
                <label className="block text-[10px] sm:text-xs font-bold text-[#1A1A1A] mb-1 sm:mb-1.5 uppercase tracking-wider">
                  Full Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  required
                  autoComplete="name"
                  className="w-full px-3.5 sm:px-4 py-3 border-2 border-[#E8DFD0] bg-[#FAF7F0] focus:outline-none focus:border-[#8B1A1A] transition-colors text-[#1A1A1A] text-base"
                />
              </div>
              <div>
                <label className="block text-[10px] sm:text-xs font-bold text-[#1A1A1A] mb-1 sm:mb-1.5 uppercase tracking-wider">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@example.com"
                  required
                  autoComplete="email"
                  inputMode="email"
                  className="w-full px-3.5 sm:px-4 py-3 border-2 border-[#E8DFD0] bg-[#FAF7F0] focus:outline-none focus:border-[#8B1A1A] transition-colors text-[#1A1A1A] text-base"
                />
              </div>
              <div>
                <label className="block text-[10px] sm:text-xs font-bold text-[#1A1A1A] mb-1 sm:mb-1.5 uppercase tracking-wider">
                  Phone
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(555) 123-4567"
                  required
                  autoComplete="tel"
                  inputMode="tel"
                  className="w-full px-3.5 sm:px-4 py-3 border-2 border-[#E8DFD0] bg-[#FAF7F0] focus:outline-none focus:border-[#8B1A1A] transition-colors text-[#1A1A1A] text-base"
                />
              </div>
            </div>
          </div>

          {/* Step 2: Vehicles */}
          <div className="bg-white border-2 border-[#E8DFD0] p-4 sm:p-8 mb-3 sm:mb-4">
            <div className="flex items-center gap-2.5 sm:gap-3 mb-5 sm:mb-6">
              <span className="w-6 h-6 sm:w-7 sm:h-7 bg-[#8B1A1A] text-white flex items-center justify-center text-[10px] sm:text-xs font-black">
                2
              </span>
              <h3
                className="font-black text-[#1A1A1A] uppercase tracking-wider text-sm sm:text-base"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Your Vehicle{vehicles.length > 1 ? "s" : ""}
              </h3>
            </div>

            <div className="space-y-4 sm:space-y-5">
              {vehicles.map((vehicle, idx) => (
                <VehicleCard
                  key={vehicle.id}
                  vehicle={vehicle}
                  index={idx}
                  modelsCache={modelsCache}
                  modelsLoading={modelsLoading}
                  onUpdate={(field, value) =>
                    updateVehicle(vehicle.id, field, value)
                  }
                  onRemove={() => removeVehicle(vehicle.id)}
                  canRemove={vehicles.length > 1}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={addVehicle}
              className="mt-4 sm:mt-5 w-full flex items-center justify-center gap-2 py-3.5 border-2 border-dashed border-[#8B1A1A]/40 text-[#8B1A1A] font-bold text-xs sm:text-sm uppercase tracking-wider hover:border-[#8B1A1A] active:border-[#8B1A1A] hover:bg-[#8B1A1A]/5 transition-colors"
            >
              <HiPlus />
              Add Another Vehicle
            </button>
          </div>

          {/* Submit */}
          <div className="bg-[#1A1A1A] p-4 sm:p-8 text-center">
            <button
              type="submit"
              disabled={submitting}
              className={`w-full px-8 sm:px-14 py-4 font-black text-base sm:text-lg uppercase tracking-wider transition-all ${
                submitting
                  ? "bg-[#555] cursor-not-allowed text-[#999]"
                  : "bg-[#8B1A1A] hover:bg-[#6B0F0F] active:bg-[#6B0F0F] text-white hover:shadow-lg hover:shadow-[#8B1A1A]/30"
              }`}
            >
              {submitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="animate-spin h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  Submitting...
                </span>
              ) : (
                `Register ${vehicles.length} Vehicle${vehicles.length > 1 ? "s" : ""} — Free`
              )}
            </button>
            <div className="flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-4 gap-y-1 mt-3 sm:mt-4 text-[#777] text-[10px] sm:text-xs">
              <span className="flex items-center gap-1">
                <HiShieldCheck className="text-sm" /> No entry fee
              </span>
              <span className="hidden sm:inline">•</span>
              <span>Confirmation email sent</span>
              <span className="hidden sm:inline">•</span>
              <span>Limited space</span>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

// ── VEHICLE CARD ──
function VehicleCard({
  vehicle,
  index,
  modelsCache,
  modelsLoading,
  onUpdate,
  onRemove,
  canRemove,
}: {
  vehicle: VehicleEntry;
  index: number;
  modelsCache: Record<string, string[]>;
  modelsLoading: Record<string, boolean>;
  onUpdate: (field: keyof VehicleEntry, value: string) => void;
  onRemove: () => void;
  canRemove: boolean;
}) {
  const makes =
    vehicle.vehicleType === "bike" ? motorcycleManufacturers : carManufacturers;

  const cacheKey = `${vehicle.vehicleType}-${vehicle.make}`;
  const models = modelsCache[cacheKey] || [];
  const modelLoading = modelsLoading[cacheKey] || false;

  const classes = vehicleClasses[vehicle.vehicleType];

  return (
    <div className="border-2 border-[#E8DFD0] bg-[#FAF7F0] p-4 sm:p-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <span className="text-[10px] sm:text-xs font-bold text-[#8B1A1A] uppercase tracking-[0.15em]">
          Vehicle {index + 1}
        </span>
        {canRemove && (
          <button
            type="button"
            onClick={onRemove}
            className="text-[#999] hover:text-[#8B1A1A] active:text-[#8B1A1A] transition-colors p-1"
          >
            <HiTrash className="text-base" />
          </button>
        )}
      </div>

      {/* Type Toggle */}
      <div className="grid grid-cols-2 gap-2 mb-3 sm:mb-4">
        <button
          type="button"
          onClick={() => onUpdate("vehicleType", "car")}
          className={`flex items-center justify-center gap-1.5 sm:gap-2 py-3 border-2 font-bold uppercase tracking-wider text-[10px] sm:text-xs transition-all ${
            vehicle.vehicleType === "car"
              ? "border-[#8B1A1A] bg-[#8B1A1A] text-white"
              : "border-[#E8DFD0] text-[#999] hover:border-[#8B1A1A]/40 active:border-[#8B1A1A]/40"
          }`}
        >
          <FaCar /> Car / Truck
        </button>
        <button
          type="button"
          onClick={() => onUpdate("vehicleType", "bike")}
          className={`flex items-center justify-center gap-1.5 sm:gap-2 py-3 border-2 font-bold uppercase tracking-wider text-[10px] sm:text-xs transition-all ${
            vehicle.vehicleType === "bike"
              ? "border-[#8B1A1A] bg-[#8B1A1A] text-white"
              : "border-[#E8DFD0] text-[#999] hover:border-[#8B1A1A]/40 active:border-[#8B1A1A]/40"
          }`}
        >
          <FaMotorcycle /> Motorcycle
        </button>
      </div>

      {/* Fields — stacked on mobile, 2-col on sm+ */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <SearchableSelect
          options={yearOptions}
          value={vehicle.year}
          onChange={(val) => onUpdate("year", val)}
          placeholder="Year"
          label="Year"
        />
        <SearchableSelect
          options={makes}
          value={vehicle.make}
          onChange={(val) => onUpdate("make", val)}
          placeholder="Make"
          label="Make"
          allowCustom
        />
        <SearchableSelect
          options={models}
          value={vehicle.model}
          onChange={(val) => onUpdate("model", val)}
          placeholder={vehicle.make ? "Model" : "Select make first"}
          label="Model"
          loading={modelLoading}
          disabled={!vehicle.make}
          allowCustom
        />
        <SearchableSelect
          options={classes}
          value={vehicle.vehicleClass}
          onChange={(val) => onUpdate("vehicleClass", val)}
          placeholder="Class"
          label="Class"
        />
      </div>
    </div>
  );
}
