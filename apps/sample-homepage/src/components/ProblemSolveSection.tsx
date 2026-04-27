"use client";

const problems = [
  {
    icon: "🧱",
    problem: "Monolithic frontend codebases",
    solution:
      "Teams step on each other, deploys are risky, and builds are slow. GRFF splits the UI into independently owned modules.",
  },
  {
    icon: "🔄",
    problem: "Duplicate dependencies across apps",
    solution:
      "Module Federation shares React, design tokens, and utilities at runtime — no duplicated bundles.",
  },
  {
    icon: "🎨",
    problem: "Inconsistent UI across teams",
    solution:
      "A single CSS-only design system (tailwind-design-system) provides shared tokens and utilities everywhere.",
  },
  {
    icon: "🚢",
    problem: "Slow, coupled release cycles",
    solution:
      "Each micro-frontend deploys independently. Ship the homepage without touching auth or dashboard.",
  },
  {
    icon: "📚",
    problem: "Steep learning curve for modern tooling",
    solution:
      "GRFF includes step-by-step courses and blogs — learn by reading the code that runs in production.",
  },
];

export default function ProblemSolveSection() {
  return (
    <section className="py-24 px-4 bg-surface">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <p className="text-sm font-medium text-primary tracking-widest uppercase">
            Why it matters
          </p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground">
            Problems <span className="gradient-text">We Solve</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Traditional monolithic frontends don&apos;t scale for multi-team
            organisations. Here&apos;s how GRFF addresses that.
          </p>
        </div>

        {/* Problem → Solution rows */}
        <div className="space-y-6">
          {problems.map((item) => (
            <div
              key={item.problem}
              className="glass rounded-2xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 items-start hover:border-primary/30 transition-colors"
            >
              <div className="text-4xl">{item.icon}</div>
              <div className="space-y-2">
                <h3 className="text-lg font-heading font-semibold text-foreground">
                  {item.problem}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.solution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
