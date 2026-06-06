import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface FloatingLabelInputProps {
  label: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  name?: string;
  placeholder?: string;
}

const FloatingLabelInput: React.FC<FloatingLabelInputProps> = ({
  label,
  type = "text",
  value,
  onChange,
  required = false,
  name,
  placeholder = "Marry Doe",
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";
  const inputType = isPassword ? (showPassword ? "text" : "password") : type;

  return (
    <div className="relative mb-5 w-full">
      <label className="absolute left-3 top-[-10px] text-[13px] font-medium text-primary bg-[#ECECEC] px-1 z-10 pointer-events-none">
        {label}
        {required && <span className="text-error ml-0.5">*</span>}
      </label>
      <input
        type={inputType}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        required={required}
        name={name}
        placeholder={placeholder}
        className={`w-full px-4 py-3.5 text-sm text-text-secondary border rounded-lg bg-transparent transition-all outline-none
          ${isFocused ? "border-primary" : "border-[#CBCBCB]"}
        `}
        style={{ background: "transparent" }}
      />
      {isPassword && (
        <button
          type="button"
          className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-text-secondary hover:text-primary transition-colors flex items-center justify-center z-20"
          onClick={() => setShowPassword(!showPassword)}
          tabIndex={-1}
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      )}
    </div>
  );
};

export default FloatingLabelInput;
