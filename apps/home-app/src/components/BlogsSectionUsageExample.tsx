"use client";

import { useEffect, useState } from "react";

interface Blog {
  _id: string;
  title: string;
  slug?: string;
  tag?: string;
  content: string;
  createdAt?: string;
}

const BACKEND_BASE_URL = localStorage.GRFF_API_URL || "";
const BLOG_API_URL = BACKEND_BASE_URL ? `${BACKEND_BASE_URL}/blog` : "/api/blog";
const BLOG_STREAM_URL = BACKEND_BASE_URL ? `${BACKEND_BASE_URL}/blog/stream` : "/api/blog/stream";

function formatDate(date?: string) {
  if (!date) return "";
  try {
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return date;
  }
}

function getReadTime(text: string) {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}

export default function BlogsSectionUsageExample() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    let source: EventSource | null = null;

    const fetchBlogs = async () => {
      try {
        const response = await fetch(BLOG_API_URL, {
          headers: { "Content-Type": "application/json" },
        });

        if (!response.ok) {
          throw new Error(`Failed to load blogs: ${response.status}`);
        }

        const payload = await response.json();
        const fetchedBlogs: Blog[] = payload?.data?.blogs || [];

        if (!mounted) return;
        setBlogs(fetchedBlogs);
      } catch (err) {
        if (!mounted) return;
        setError("Unable to load blogs at the moment.");
      } finally {
        if (mounted) setLoading(false);
      }
    };

    const setupSse = () => {
      if (typeof window === "undefined" || !window.EventSource) return;

      source = new EventSource(BLOG_STREAM_URL);

      source.addEventListener("blog-created", (event: MessageEvent) => {
        try {
          const newBlog = JSON.parse(event.data) as Blog;
          setBlogs((current) => [newBlog, ...current]);
        } catch (err) {
          console.error("Invalid SSE blog event data", err);
        }
      });

      source.onerror = () => {
        console.warn("Blog SSE connection closed or failed.");
        if (source) {
          source.close();
          source = null;
        }
      };
    };

    void fetchBlogs();
    setupSse();

    return () => {
      mounted = false;
      if (source) source.close();
    };
  }, []);

  return (
    <section id="blogs" className="py-24 px-4">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <p className="text-sm font-medium text-primary tracking-widest uppercase">
            From the team
          </p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground">
            Latest <span className="gradient-text">Blogs</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            This component fetches blogs from the API and updates live via SSE.
          </p>
        </div>

        {loading ? (
          <div className="text-center text-muted-foreground">Loading blogs…</div>
        ) : error ? (
          <div className="text-center text-destructive">{error}</div>
        ) : blogs.length === 0 ? (
          <div className="text-center text-muted-foreground">
            No blogs are available right now.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogs.map((blog) => (
              <article
                key={blog._id}
                className="glass rounded-2xl p-8 flex flex-col gap-4 hover:border-primary/30 transition-colors group"
              >
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span>{formatDate(blog.createdAt)}</span>
                  <span className="w-1 h-1 rounded-full bg-border" />
                  <span className="bg-primary/15 text-primary px-2.5 py-0.5 rounded-full font-medium">
                    {blog.tag || "General"}
                  </span>
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
                  {blog.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {blog.content.slice(0, 160).trim()}...
                </p>
                <span className="text-sm font-medium text-primary hover:text-accent transition-colors">
                  Read article · {getReadTime(blog.content)}
                </span>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
