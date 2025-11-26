import React from "react";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  className = "",
  ...rest
}) {
  const variantClass = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    danger: "btn-danger"
  }[variant];

  const sizeClass = {
    sm: "btn-sm",
    md: "btn-md",
    lg: "btn-lg"
  }[size];

  return (
    <button
      disabled={disabled}
      className={`${variantClass} ${sizeClass} ${disabled ? "btn-disabled" : ""} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}