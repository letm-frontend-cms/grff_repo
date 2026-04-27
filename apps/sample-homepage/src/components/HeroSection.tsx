"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface AuthUtils {
  getSession: () => Promise<unknown>;
  logout: () => Promise<void>;
}

async function loadAuthUtils(): Promise<AuthUtils | null> {
  try {
    // auth_app container is already loaded & initialized by test-host
    const container = (window as unknown as Record<string, unknown>).auth_app as {
      get: (module: string) => Promise<() => AuthUtils>;
    } | undefined;
    if (!container) return null;
    const factory = await container.get("./useSession");
    return factory();
  } catch {
    return null;
  }
}

export default function HeroSection() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [authUtils, setAuthUtils] = useState<AuthUtils | null>(null);

  useEffect(() => {
    loadAuthUtils().then((utils) => {
      if (utils) {
        setAuthUtils(utils);
        utils.getSession().then((user : any) => {
          if(user && user['_id']){
            console.log("User session found in HeroSection:", user);
            setLoggedIn(true)
          }
          else {
            setLoggedIn(false);
          }
        });
      }
    });
  }, []);

  const handleLogout = async () => {
    if (authUtils) {
      await authUtils.logout();
    }
    setLoggedIn(false);
    window.location.href = "/";
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center grid-pattern overflow-hidden"
    >
      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm font-medium text-primary tracking-widest uppercase">
                An initiative for builders
              </p>
              <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight">
                <span className="gradient-text">Get Ready</span>
                <br />
                <span className="text-foreground">For Future</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
                <strong className="text-foreground">GRFF</strong> is an
                initiative to understand how to build scalable frontend
                applications by dividing them into independent modules and
                integrating them seamlessly — using micro-frontends, module
                federation, and modern tooling.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              {loggedIn ? (
                <>
                  <Link
                    href="/dashboard"
                    className="gradient-primary text-primary-foreground px-8 py-3 rounded-lg font-medium text-lg hover:opacity-90 transition-opacity glow-primary"
                  >
                    Dashboard
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    href="/signup"
                    className="gradient-primary text-primary-foreground px-8 py-3 rounded-lg font-medium text-lg hover:opacity-90 transition-opacity glow-primary"
                  >
                    Get Started Free
                  </Link>
                  <Link
                    href="/login"
                    className="bg-muted text-foreground px-8 py-3 rounded-lg font-medium text-lg hover:bg-surface-hover transition-colors border border-border"
                  >
                    Sign In
                  </Link>
                </>
              )}
            </div>

            <div className="flex items-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-green-500" />
                Free &amp; open source
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-primary" />
                Built with Next.js &amp; Module Federation
              </div>
            </div>
          </div>

          {/* Right — Illustration */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square">
              {/* Decorative card stack */}
              <div className="absolute inset-0 rounded-2xl glass glow-primary rotate-3 scale-95" />
              <div className="absolute inset-0 rounded-2xl glass -rotate-2 scale-98" />
              <div className="relative rounded-2xl glass p-8 flex flex-col items-center justify-center gap-6 h-full">
                <div className="text-6xl">🧩</div>
                <h3 className="text-xl font-heading font-bold text-foreground text-center">
                  Micro-Frontend Architecture
                </h3>
                <p className="text-sm text-muted-foreground text-center leading-relaxed">
                  Independent modules, one seamless experience. Each team ships
                  autonomously while the platform stays unified.
                </p>
                <div className="flex gap-3 flex-wrap justify-center">
                  {["Next.js", "Webpack MF", "React 19", "Tailwind v4"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="bg-muted text-muted-foreground text-xs px-3 py-1 rounded-full border border-border"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
