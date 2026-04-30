"use client";

import { useEffect, useState } from "react";
import { getSession, logout } from "grff-auth-lib";
import type { User } from "grff-auth-lib";
import HeroSection from "./HeroSection";
import OverviewSection from "./OverviewSection";
import CoursesSection from "./CoursesSection";
import BlogsSection from "./BlogsSection";
import ProblemSolveSection from "./ProblemSolveSection";

export default function HomePage() {
  const [loadingSession, setLoadingSession] = useState(true);
  const [sessionUser, setSessionUser] = useState<User | null>(null);

  useEffect(() => {
    let mounted = true;

    const checkSession = async () => {
      try {
        if (!mounted) return;
        const user = await getSession();
        console.log("Session user:", user);
        setSessionUser(user);
      } catch {
        if (mounted) {
          setSessionUser(null);
        }
      } finally {
        if (mounted) {
          setLoadingSession(false);
        }
      }
    };

    void checkSession();

    return () => {
      mounted = false;
    };
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
    } finally {
      setSessionUser(null);
      window.location.href = "/login";
    }
  };

  return (
    <div className="bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="glass border border-border rounded-lg p-4 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs text-muted-foreground">Session status</p>
            {loadingSession ? (
              <p className="text-sm font-medium text-foreground">Checking session...</p>
            ) : sessionUser ? (
              <p className="text-sm font-medium text-foreground">
                Active: {sessionUser.name || sessionUser.email}
              </p>
            ) : (
              <p className="text-sm font-medium text-destructive">No active session</p>
            )}
          </div>

          {sessionUser ? (
            <button
              onClick={handleLogout}
              className="px-4 py-2 rounded-md border border-border text-sm font-medium hover:bg-muted transition-colors"
            >
              Logout
            </button>
          ) : null}
        </div>
      </div>

      <HeroSection />
      <OverviewSection />
      <CoursesSection />
      <BlogsSection />
      <ProblemSolveSection />
    </div>
  );
}
