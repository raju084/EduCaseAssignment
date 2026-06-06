import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: "primary" | "secondary" | "disabled";
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
  disabled = false,
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case "primary":
        return "bg-primary text-white hover:bg-primary-dark shadow-sm hover:shadow-md";
      case "secondary":
        return "bg-[#CBC9FF] text-[#3d2a9e] hover:bg-[#b8b5ff]";
      case "disabled":
        return "bg-[#CBCBCB] text-white cursor-not-allowed";
      default:
        return "";
    }
  };

  return (
    <button
      type={type}
      className={`w-full h-12 rounded-md font-semibold flex items-center justify-center transition-all text-[15px] ${getVariantClasses()} ${className}`}
      onClick={onClick}
      disabled={disabled || variant === "disabled"}
    >
      {children}
    </button>
  );
};

export default Button;
