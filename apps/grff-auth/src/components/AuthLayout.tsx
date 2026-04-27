"use client";

import Link from "next/link";

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}

export default function AuthLayout({ children, title, subtitle }: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-background grid-pattern flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <Link href="/">
            <h1 className="text-3xl font-bold font-heading gradient-text inline-block">GRFF</h1>
          </Link>
          <h2 className="mt-4 text-2xl font-heading font-semibold text-foreground">{title}</h2>
          {subtitle && <p className="mt-2 text-muted-foreground text-sm">{subtitle}</p>}
        </div>
        <div className="glass rounded-2xl p-8">{children}</div>
      </div>
    </div>
  );
}
