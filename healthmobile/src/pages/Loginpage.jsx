import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import "./Login.css"; 

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <div className="auth-mobile-container">
      <div className="auth-content">
        <h1 className="auth-title">Welcome Back</h1>
        <p className="auth-subtitle">Sign in to access your digital pass.</p>

        <div className="auth-toggle-box">
          <button className="toggle-btn active">Sign In</button>
          <button className="toggle-btn" onClick={() => navigate("/register")}>
            Register
          </button>
        </div>

        <div className="auth-form">
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

          <p className="forgot-pass">Forgot Password?</p>

          <Button
            label="Sign In →"
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

export default LoginPage;