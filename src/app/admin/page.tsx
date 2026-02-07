"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import AdminLogin from "@/components/admin/AdminLogin";
import AdminShell from "@/components/admin/AdminShell";

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setAuthenticated(!!session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setAuthenticated(!!session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (authenticated === null) {
    return (
      <div className="min-h-screen bg-[#111] flex items-center justify-center">
        <div className="animate-spin w-10 h-10 border-4 border-[#8B1A1A] border-t-transparent rounded-full" />
      </div>
    );
  }

  if (!authenticated) return <AdminLogin />;
  return <AdminShell />;
}
