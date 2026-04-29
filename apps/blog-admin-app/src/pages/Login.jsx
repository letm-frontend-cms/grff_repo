import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage(null);
    try {
      await login(email, password);
      navigate("/");
    } catch (err) {
      setMessage(err.message);
    }
  };

  return (
    <main className="page">
          <div className="card" style={{width: '40%', margin: '0 auto'}}>
        <h1>Admin Login</h1>
        <p>Enter admin credentials to manage blogs.</p>
        <form onSubmit={handleSubmit} className="form">
          <label>
            Email
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </label>
          <label>
            Password
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </label>
          {message && <p className="error">{message}</p>}
          <button type="submit">Login</button>
        </form>
      </div>
    </main>
  );
}
