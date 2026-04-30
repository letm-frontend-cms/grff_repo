import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api.js";

export default function AddBlog() {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [tag, setTag] = useState("General");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage(null);
    try {
      await api.post("/blog", { title, slug, tag, content });
      navigate("/");
    } catch (err) {
      setMessage(err.response?.data?.message || "Failed to create blog.");
    }
  };

  return (
    <main className="page">
      <div className="card form-card">
        <h1>Add Blog</h1>
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
            <button type="submit" className="button">Save Blog</button>
          </div>
        </form>
      </div>
    </main>
  );
}
