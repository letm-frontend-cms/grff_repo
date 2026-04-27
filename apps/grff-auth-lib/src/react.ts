"use client";

import { useCallback, useEffect, useState } from "react";
import { getSession, logout as logoutSession } from "./session";
import { getSessionSync, subscribe } from "./store";
import type { User } from "./types";

export interface UseSessionResult {
  user: User | null;
  loading: boolean;
  loggedIn: boolean;
  logout: () => Promise<void>;
}

export function useSession(): UseSessionResult {
  const [user, setUser] = useState<User | null>(() => getSessionSync());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = subscribe((nextUser) => {
      setUser(nextUser);
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    let mounted = true;

    getSession().finally(() => {
      if (mounted) {
        setLoading(false);
      }
    });

    return () => {
      mounted = false;
    };
  }, []);

  const logout = useCallback(async () => {
    await logoutSession();
  }, []);

  return {
    user,
    loading,
    loggedIn: Boolean(user),
    logout,
  };
}
