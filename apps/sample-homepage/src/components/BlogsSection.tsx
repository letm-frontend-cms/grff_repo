"use client";

const blogs = [
  {
    date: "Apr 10, 2026",
    tag: "Architecture",
    title: "Why We Chose Micro-Frontends Over a Monolith",
    excerpt:
      "A deep dive into the architectural trade-offs that led us to split GRFF into independently deployable modules.",
    readTime: "7 min read",
  },
  {
    date: "Mar 28, 2026",
    tag: "Webpack",
    title: "Module Federation — Sharing Code Without the Pain",
    excerpt:
      "How Webpack Module Federation lets separate Next.js apps share React, design tokens, and components at runtime.",
    readTime: "9 min read",
  },
  {
    date: "Mar 15, 2026",
    tag: "Design",
    title: "Building a CSS-Only Design System with Tailwind v4",
    excerpt:
      "How we created a zero-JS design system using @theme, @utility, and @layer directives in Tailwind CSS v4.",
    readTime: "6 min read",
  },
  {
    date: "Feb 22, 2026",
    tag: "Auth",
    title: "Secure JWT + OTP Authentication in Express.js",
    excerpt:
      "Step-by-step guide to building signup, OTP email verification, login, and password reset with bcrypt and JWT.",
    readTime: "8 min read",
  },
];

export default function BlogsSection() {
  return (
    <section id="blogs" className="py-24 px-4">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <p className="text-sm font-medium text-primary tracking-widest uppercase">
            From the team
          </p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground">
            Latest <span className="gradient-text">Blogs</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Technical deep dives, tutorials, and lessons learned while building
            this platform.
          </p>
        </div>

        {/* Blog cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogs.map((blog) => (
            <article
              key={blog.title}
              className="glass rounded-2xl p-8 flex flex-col gap-4 hover:border-primary/30 transition-colors group cursor-pointer"
            >
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span>{blog.date}</span>
                <span className="w-1 h-1 rounded-full bg-border" />
                <span className="bg-primary/15 text-primary px-2.5 py-0.5 rounded-full font-medium">
                  {blog.tag}
                </span>
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
                {blog.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {blog.excerpt}
              </p>
              <span className="text-sm font-medium text-primary hover:text-accent transition-colors">
                Read article · {blog.readTime}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
