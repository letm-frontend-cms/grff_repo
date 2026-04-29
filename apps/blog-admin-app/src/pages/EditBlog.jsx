import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api.js";

export default function EditBlog() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [tag, setTag] = useState("");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await api.get(`/blog/${id}`);
        const { blog } = response.data.data;
        setTitle(blog.title);
        setSlug(blog.slug);
        setTag(blog.tag);
        setContent(blog.content);
      } catch (err) {
        setMessage(err.response?.data?.message || "Failed to load blog.");
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage(null);
    try {
      await api.put(`/blog/${id}`, { title, slug, tag, content });
      navigate("/");
    } catch (err) {
      setMessage(err.response?.data?.message || "Failed to update blog.");
    }
  };

  return (
    <main className="page">
      <div className="card form-card">
        <h1>Edit Blog</h1>
        {loading ? (
          <p>Loading blog…</p>
        ) : (
          <form onSubmit={handleSubmit} className="form">
            <label>
              Title
              <input value={title} onChange={(event) => setTitle(event.target.value)} required />
            </label>
            <label>
              Slug
              <input value={slug} onChange={(event) => setSlug(event.target.value)} required />
            </label>
            <label>
              Tag
              <input value={tag} onChange={(event) => setTag(event.target.value)} />
            </label>
            <label>
              Content
              <textarea value={content} onChange={(event) => setContent(event.target.value)} rows="8" required />
            </label>
            {message && <p className="error">{message}</p>}
            <div className="form-actions">
              <button type="button" className="button secondary" onClick={() => navigate("/")}>Cancel</button>
              <button type="submit" className="button">Save Changes</button>
            </div>
          </form>
        )}
      </div>
    </main>
  );
}
