import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";

function App() {
  const [loggedIn, setLoggedIn] = useState(
    Boolean(localStorage.getItem("token"))
  );

  const logout = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
  };

  return (
    <BrowserRouter>
      {loggedIn && <Navbar onLogout={logout} />}

      <div className="app-container">
        <Routes>
          {/* Public routes */}
          <Route
            path="/login"
            element={
              loggedIn ? (
                <Navigate to="/dashboard" />
              ) : (
                <LoginPage onLogin={() => setLoggedIn(true)} />
              )
            }
          />

          <Route
            path="/register"
            element={loggedIn ? <Navigate to="/dashboard" /> : <RegisterPage />}
          />

          {/* Protected route */}
          <Route
            path="/dashboard"
            element={
              loggedIn ? <Dashboard /> : <Navigate to="/login" />
            }
          />

          {/* Default route */}
          <Route
            path="*"
            element={<Navigate to={loggedIn ? "/dashboard" : "/login"} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
