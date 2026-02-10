import { Link } from "react-router-dom";
import Login from "../components/Login";

function LoginPage({ onLogin }) {
  return (
    <div className="auth-page">
      <h1 className="auth-title">SkillSwap</h1>
      <p className="auth-subtitle">
        Exchange skills. Learn together.
      </p>

      <Login onLogin={onLogin} />

      <p className="auth-switch">
        New user?{" "}
        <Link to="/register" className="auth-link">
          Create an account
        </Link>
      </p>
    </div>
  );
}

export default LoginPage;
