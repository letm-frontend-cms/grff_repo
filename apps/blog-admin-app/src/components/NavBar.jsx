import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import api from "../api.js";
import { useAuth } from "../context/AuthContext.jsx";

export default function NavBar() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    api
      .get("/blog")
      .then((response) => {
        if (!mounted) return;
        setBlogs(response.data.data.blogs || []);
        setError(null);
      })
      .catch((err) => {
        if (!mounted) return;
        setError(err.response?.data?.message || "Unable to load blogs.");
      })
      .finally(() => {
        if (!mounted) return;
        setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="admin-nav">
      <div className="nav-brand">
        <Link to="/">GRFF Blog Admin</Link>
      </div>
      <div className="nav-links">
        <NavLink to="/" end>
          Dashboard
        </NavLink>
        <NavLink to="/add">Add Blog</NavLink>
        <div className="nav-dropdown" ref={dropdownRef}>
          <button
            type="button"
            className="dropdown-toggle"
            onClick={() => setOpen((current) => !current)}
            aria-expanded={open}
          >
            Blogs <span className="badge">{blogs.length}</span>
          </button>
          {open && (
            <div className="dropdown-menu">
              {loading ? (
                <span className="dropdown-item">Loading blogs…</span>
              ) : error ? (
                <span className="dropdown-error">{error}</span>
              ) : blogs.length === 0 ? (
                <span className="dropdown-item">No blogs yet</span>
              ) : (
                blogs.map((blog) => (
                  <Link
                    key={blog._id}
                    className="dropdown-item"
                    to={`/edit/${blog._id}`}
                    onClick={() => setOpen(false)}
                  >
                    {blog.title}
                  </Link>
                ))
              )}
            </div>
          )}
        </div>
      </div>
      <div className="nav-actions">
        <span className="nav-user">{user?.name || user?.email}</span>
        <button type="button" className="button secondary" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
}
