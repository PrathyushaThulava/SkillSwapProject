import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";
import "./Auth.css";

function Login({ onLogin }) {
  const [form, setForm] = useState({ email: "", password: "" });
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await loginUser(form);

    if (res.token) {
      localStorage.setItem("token", res.token);
      onLogin();
      navigate("/dashboard"); // ✅ REDIRECT HERE
    } else {
      setMsg(res.message || "Invalid credentials");
    }
  };

  return (
    <div className="auth-card">
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>

      <p className="auth-message">{msg}</p>
    </div>
  );
}

export default Login;
