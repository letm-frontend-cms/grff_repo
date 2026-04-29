"use client";

const courses = [
  {
    icon: "🌐",
    title: "Micro-Frontend Fundamentals",
    level: "Intermediate",
    duration: "6 hours",
    description:
      "Learn how to split monolithic frontends into independently deployable modules using Webpack Module Federation.",
  },
  {
    icon: "⚛️",
    title: "React 19 & Server Components",
    level: "Intermediate",
    duration: "8 hours",
    description:
      "Deep dive into React 19 features — server components, actions, transitions, and the new use() hook.",
  },
  {
    icon: "🎨",
    title: "Building a Design System with Tailwind v4",
    level: "Beginner",
    duration: "4 hours",
    description:
      "Create a CSS-only, theme-driven design system using Tailwind CSS v4 custom properties and utilities.",
  },
  {
    icon: "🏗️",
    title: "Next.js 16 App Router Deep Dive",
    level: "Advanced",
    duration: "10 hours",
    description:
      "Master layouts, streaming, parallel routes, intercepting routes, and advanced data fetching patterns.",
  },
  {
    icon: "🔐",
    title: "Full-Stack Auth with JWT & OTP",
    level: "Intermediate",
    duration: "5 hours",
    description:
      "Build a complete authentication flow — signup, email OTP verification, login, and password reset with Express.js.",
  },
];

export default function CoursesSection() {
  return (
    <section id="courses" className="py-24 px-4 bg-surface">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <p className="text-sm font-medium text-primary tracking-widest uppercase">
            Learn by building
          </p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground">
            Featured <span className="gradient-text">Courses</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Hands-on courses covering the exact stack used to build GRFF —
            from micro-frontends to auth to design systems.
          </p>
        </div>

        {/* Course cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.title}
              className="glass rounded-2xl p-6 flex flex-col gap-4 hover:border-primary/30 transition-colors group"
            >
              <div className="text-4xl">{course.icon}</div>
              <div className="flex items-center gap-2 text-xs">
                <span className="bg-primary/15 text-primary px-2.5 py-0.5 rounded-full font-medium">
                  {course.level}
                </span>
                <span className="text-muted-foreground">{course.duration}</span>
              </div>
              <h3 className="text-lg font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
                {course.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {course.description}
              </p>
              <button className="mt-auto self-start text-sm font-medium text-primary hover:text-accent transition-colors">
                Start learning →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
