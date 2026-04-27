"use client";

const features = [
  {
    icon: "📚",
    title: "Courses",
    description:
      "Expert-led courses across web development, AI, system design, and more. Learn at your own pace.",
  },
  {
    icon: "📝",
    title: "Blogs",
    description:
      "Stay updated with in-depth technical articles, tutorials, and industry insights from our community.",
  },
  {
    icon: "👤",
    title: "Profile",
    description:
      "Track your progress, manage your learning path, and showcase your achievements all in one place.",
  },
  {
    icon: "🔐",
    title: "Secure Auth",
    description:
      "Enterprise-grade authentication with OTP verification, password recovery, and secure sessions.",
  },
  {
    icon: "🎨",
    title: "Design System",
    description:
      "Consistent, beautiful UI powered by our custom Tailwind design system with dark-first theming.",
  },
  {
    icon: "⚡",
    title: "Micro-Frontends",
    description:
      "Modular architecture where each feature is independently deployable by different teams.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Everything you need to{" "}
            <span className="gradient-text">level up</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A modular platform built by focused teams, each delivering the best
            experience in their domain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="glass rounded-2xl p-6 space-y-4 hover:border-primary/30 transition-colors group"
            >
              <div className="text-3xl">{feature.icon}</div>
              <h3 className="text-lg font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
