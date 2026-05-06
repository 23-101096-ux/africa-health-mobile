import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import "./Login.css"; 

const RegisterPage = () => {
  const navigate = useNavigate();

  return (
    <div className="auth-mobile-container">
      <div className="auth-content">
        <h1 className="auth-title">Create Account</h1>
        <p className="auth-subtitle">Join the premier healthcare platform.</p>

        <div className="auth-toggle-box">
          <button className="toggle-btn" onClick={() => navigate("/login")}>
            Sign In
          </button>
          <button className="toggle-btn active">Register</button>
        </div>

        <div className="auth-form">
          <input
            type="text"
            placeholder="Full Name"
            className="auth-input-field"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="auth-input-field"
          />
          <input
            type="password"
            placeholder="Password"
            className="auth-input-field"
          />

          <Button
            label="Create Account →"
            onClick={() => navigate("/home")}
            variant="primary"
          />
        </div>

        <div className="divider">
          <span>Or continue with</span>
        </div>

        <div className="social-box">
          <button className="social-btn">G</button>
          <button className="social-btn"></button>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;