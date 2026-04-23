"use client";

import { createContext, useContext, ReactNode, useEffect } from "react";
import type { User } from "grff-auth-lib";
import { getSession, setSession } from "grff-auth-lib";
import { useSession } from "grff-auth-lib/react";
import { useRouter } from "next/navigation";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (token: string, user?: User) => void;
  logout: () => void;
  refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const { user, loading, logout: logoutSession } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("GRFF_API_URL", process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api");
    }
  }, []);

  const refreshUser = async () => {
    await getSession();
  };

  const login = (_token: string, userData?: User) => {
    if (userData) {
      setSession(userData);
      return;
    }
    void refreshUser();
  };

  const logout = async () => {
    await logoutSession();
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
