import React from "react";
import "./Button.css";

const Button = ({
  label,
  onClick,
  icon = null,
  variant = "primary",
  fullWidth = true,
  disabled = false,
}) => {
  return (
    <button
      onClick={disabled ? undefined : onClick}
      className={`btn ${variant} ${fullWidth ? "full" : ""} ${
        disabled ? "disabled" : ""
      }`}
    >
      {label}
      {icon && <span className="btn-icon">{icon}</span>}
    </button>
  );
};

export default Button;