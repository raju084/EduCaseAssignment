import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FloatingLabelInput from "../components/FloatingLabelInput";
import Button from "../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { login, clearError } from "../store/userSlice";
import type { AppDispatch, RootState } from "../store";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { error, currentUser } = useSelector((state: RootState) => state.user);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (field: string, value: string) => {
    if (error) dispatch(clearError());
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(
      login({
        email: formData.email,
        password: formData.password,
      }),
    );
  };

  React.useEffect(() => {
    if (currentUser) {
      navigate("/profile");
    }
  }, [currentUser, navigate]);

  return (
    <div className="flex flex-col px-6 pt-8 h-full bg-[#ECECEC]">
      <div className="mb-6">
        <h1 className="text-[26px] font-bold text-[#1D2226] mb-2 leading-tight">
          Signin to your
          <br />
          PopX account
        </h1>
        <p className="text-[15px] text-[#6b7280]">
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit,
        </p>
      </div>

      <form onSubmit={handleLogin} className="flex flex-col">
        <FloatingLabelInput
          label="Email Address"
          placeholder="Enter email address"
          value={formData.email}
          onChange={(val) => handleInputChange("email", val)}
          required
        />

        <FloatingLabelInput
          label="Password"
          type="password"
          placeholder="Enter password"
          value={formData.password}
          onChange={(val) => handleInputChange("password", val)}
          required
        />

        {error && <p className="text-error text-xs mb-3">{error}</p>}

        <div className="mt-2">
          <Button type="submit" variant="primary">
            Login
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
