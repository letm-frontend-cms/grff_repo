import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api.js";
import { useAuth } from "../context/AuthContext.jsx";

export default function Dashboard() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  useEffect(() => {
    let isMounted = true;

    const fetchBlogs = async () => {
      try {
        const response = await api.get("/blog");
        if (isMounted) {
          setBlogs(response.data.data.blogs);
        }
      } catch (err) {
        setError(err.response?.data?.message || "Unable to load blogs.");
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchBlogs();
    return () => {
      isMounted = false;
    };
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this blog?")) return;
    try {
      await api.delete(`/blog/${id}`);
      setBlogs((current) => current.filter((item) => item._id !== id));
    } catch (err) {
      setError(err.response?.data?.message || "Could not delete blog.");
    }
  };

  return (
    <main className="page">
      <div className="header-row">
        <div>
          <h1>Admin CMS</h1>
          <p>Manage blogs with add, edit, and delete operations.</p>
        </div>
      </div>

      <div className="toolbar">
        <button type="button" onClick={() => navigate("/add")}>Add Blog</button>
      </div>

      {loading ? (
        <p>Loading blogs...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : blogs.length === 0 ? (
        <p>No blogs found. Use the Add Blog button to create one.</p>
      ) : (
        <div className="grid-list">
          {blogs.map((blog) => (
            <article key={blog._id} className="card">
              <div className="card-header">
                <h2>{blog.title}</h2>
                <span>{blog.tag}</span>
              </div>
              <p>{blog.content.slice(0, 160)}...</p>
              <div className="card-footer">
                <small>Slug: {blog.slug}</small>
                <div className="actions">
                  <Link to={`/edit/${blog._id}`} className="button secondary">Edit</Link>
                  <button type="button" className="button danger" onClick={() => handleDelete(blog._id)}>
                    Delete
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}
