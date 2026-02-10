import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ onLogout }) {
  return (
    <nav className="navbar">
      <div className="navbar-brand">SkillSwap</div>

      <div>
        <Link className="nav-link" to="/dashboard">
          Dashboard
        </Link>
        <button className="logout-btn" onClick={onLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
