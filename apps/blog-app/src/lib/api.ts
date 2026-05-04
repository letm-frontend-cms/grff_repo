import type { Blog } from './types';

// Match the URL resolution pattern from the reference component exactly.
// Host apps inject the backend origin via localStorage.GRFF_API_URL at runtime.
const base: string =
  typeof localStorage !== 'undefined' ? (localStorage.getItem('GRFF_API_URL') ?? '') : '';

export const BLOG_API_URL = base ? `${base}/blog` : '/api/blog';
export const BLOG_STREAM_URL = base ? `${base}/blog/stream` : '/api/blog/stream';

export async function fetchBlogs(): Promise<Blog[]> {
  const response = await fetch(BLOG_API_URL, {
    headers: { 'Content-Type': 'application/json' },
  });

  if (!response.ok) {
    throw new Error(`Failed to load blogs: ${response.status}`);
  }

  const payload = await response.json();
  return (payload?.data?.blogs ?? []) as Blog[];
}

export async function fetchBlog(id: string): Promise<Blog> {
  const response = await fetch(`${BLOG_API_URL}/${id}`, {
    headers: { 'Content-Type': 'application/json' },
  });

  if (!response.ok) {
    throw new Error(`Failed to load blog: ${response.status}`);
  }

  const payload = await response.json();
  return (payload?.data?.blog ?? payload?.data) as Blog;
}

/**
 * Opens an SSE connection to /api/blog/stream and calls onNew whenever
 * a "blog-created" event arrives. Returns a cleanup function that closes
 * the connection — call it from $effect's return or onDestroy.
 */
export function setupBlogStream(onNew: (blog: Blog) => void): () => void {
  if (typeof window === 'undefined' || !window.EventSource) {
    return () => {};
  }

  const source = new EventSource(BLOG_STREAM_URL);

  source.addEventListener('blog-created', (event: MessageEvent) => {
    try {
      const newBlog = JSON.parse(event.data) as Blog;
      onNew(newBlog);
    } catch (err) {
      console.error('Invalid SSE blog event data', err);
    }
  });

  source.onerror = () => {
    console.warn('Blog SSE connection closed or failed.');
    source.close();
  };

  return () => source.close();
}

export function formatDate(date?: string): string {
  if (!date) return '';
  try {
    return new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  } catch {
    return date;
  }
}

export function getReadTime(content: string): string {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}
