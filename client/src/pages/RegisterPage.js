import { Link } from "react-router-dom";
import Register from "../components/Register";

function RegisterPage() {
  return (
    <div className="auth-page">
      <h1 className="auth-title">SkillSwap</h1>
      <p className="auth-subtitle">
        Join the skill exchange community
      </p>

      <Register />

      <p className="auth-switch">
        Already have an account?{" "}
        <Link to="/login" className="auth-link">
          Login
        </Link>
      </p>
    </div>
  );
}

export default RegisterPage;
