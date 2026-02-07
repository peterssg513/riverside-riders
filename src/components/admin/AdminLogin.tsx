"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import toast from "react-hot-toast";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      toast.error(error.message);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#111] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Brand */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-full bg-[#8B1A1A] flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
            RR
          </div>
          <h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>
          <p className="text-gray-500 text-sm mt-1">
            Riverside Riders Fall Wheels Show
          </p>
        </div>

        {/* Login Form */}
        <form
          onSubmit={handleLogin}
          className="bg-white/5 border border-white/10 rounded-2xl p-8"
        >
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#8B1A1A] focus:ring-2 focus:ring-[#8B1A1A]/20 transition-all placeholder-gray-500"
                placeholder="admin@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#8B1A1A] focus:ring-2 focus:ring-[#8B1A1A]/20 transition-all placeholder-gray-500"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full mt-6 py-3 rounded-lg font-bold transition-all duration-300 ${
              loading
                ? "bg-gray-600 cursor-not-allowed text-gray-400"
                : "bg-[#8B1A1A] hover:bg-[#A52A2A] text-white"
            }`}
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <div className="text-center mt-6">
          <a
            href="/"
            className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
          >
            ← Back to website
          </a>
        </div>
      </div>
    </div>
  );
}
