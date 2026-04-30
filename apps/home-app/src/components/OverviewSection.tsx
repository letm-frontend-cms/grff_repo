"use client";

const highlights = [
  {
    icon: "⚡",
    title: "Micro-Frontend Architecture",
    description:
      "Each feature is an independently developed, tested, and deployed module — enabling parallel team workflows.",
  },
  {
    icon: "🔗",
    title: "Module Federation",
    description:
      "Webpack Module Federation lets separate builds share code at runtime without monolithic coupling.",
  },
  {
    icon: "🎨",
    title: "Shared Design System",
    description:
      "A CSS-only Tailwind v4 design system ensures visual consistency across every micro-frontend.",
  },
  {
    icon: "🚀",
    title: "Next.js 16 App Router",
    description:
      "Server components, streaming, and the latest React 19 features power each application shell.",
  },
];

export default function OverviewSection() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <p className="text-sm font-medium text-primary tracking-widest uppercase">
            About the project
          </p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground">
            What is <span className="gradient-text">GRFF</span>?
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            GRFF — Get Ready For Future — is a hands-on initiative to explore
            scalable frontend architecture. We break a platform into independent
            micro-frontends (homepage, auth, dashboard, courses, blogs) and
            stitch them together at runtime using Webpack Module Federation.
          </p>
        </div>

        {/* Highlight cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="glass rounded-2xl p-8 space-y-4 hover:border-primary/30 transition-colors group"
            >
              <div className="text-4xl">{item.icon}</div>
              <h3 className="text-lg font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
