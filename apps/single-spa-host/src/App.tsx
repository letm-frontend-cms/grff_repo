import { useMemo } from "react";

const routes = [
  { href: "/", label: "Home" },
  { href: "/login", label: "Login" },
  { href: "/signup", label: "Signup" },
  { href: "/verify-email", label: "Verify" },
  { href: "/forgot-password", label: "Forgot" },
  { href: "/reset-password", label: "Reset" },
  { href: "/dashboard", label: "Dashboard" },
];

export default function App() {
  const current = useMemo(() => window.location.pathname, []);

  return (
    <div className="shell">
      {/* <header className="shell-header">
        <div className="shell-title">Single-SPA Host Shell</div>
        <nav className="shell-nav" aria-label="Microfrontend routes">
          {routes.map((route) => (
            <a key={route.href} href={route.href} aria-current={current === route.href ? "page" : undefined}>
              {route.label}
            </a>
          ))}
        </nav>
      </header> */}
      {/* <Header/> */}
      <main id="mf-root" className="mf-container" />
    </div>
  );
}
