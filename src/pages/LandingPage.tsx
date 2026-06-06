import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-end h-full px-6 pb-12">
      <div className="flex flex-col">
        <div className="mb-7">
          <h1 className="text-[28px] font-bold text-[#1D2226] mb-2 leading-tight">
            Welcome to PopX
          </h1>
          <p className="text-[15px] text-[#6b7280]">
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipiscing elit,
          </p>
        </div>

        <div className="w-full flex flex-col gap-3">
          <Button onClick={() => navigate("/signup")} variant="primary">
            Create Account
          </Button>
          <Button onClick={() => navigate("/login")} variant="secondary">
            Already Registered? Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
