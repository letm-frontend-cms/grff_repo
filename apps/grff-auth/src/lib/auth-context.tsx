"use client";

import { createContext, useContext, ReactNode, useEffect } from "react";
import type { User } from "@/lib/api";
import { authApi, userApi } from "@/lib/api";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { API_URL } from '../../config'
import { getSession, logout as logoutSession } from "grff-auth-lib";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (token: string, user?: User) => void;
  logout: () => void;
  refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  // Custom useSession logic
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let mounted = true;
    userApi.getProfile()
      .then(res => {
        if (mounted) setUser(res.data?.user ?? null);
      })
      .catch(() => {
        if (mounted) setUser(null);
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });
    return () => { mounted = false; };
  }, []);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("GRFF_API_URL", API_URL);
    }
  }, []);

  const refreshUser = async () => {
    try {
      const res = await userApi.getProfile();
      setUser(res.data?.user ?? null);
    } catch {
      setUser(null);
    }
  };

  const login = async (_token: string, userData?: User) => {
    if (userData) {
      setUser(userData);
      return;
    }
    await refreshUser();
  };

  const logout = async () => {
    await authApi.logout();
    setUser(null);
    router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, refreshUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
