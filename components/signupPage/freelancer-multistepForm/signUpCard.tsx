"use client";
import { montserrat } from "@/app/fonts/font";
import Link from "next/link";
import React, { useState } from "react";

interface SignupCardProps {
  nextStep: () => void;
  email: string;
  setEmail: (email: string) => void;
}

const SignUpCard: React.FC<SignupCardProps> = ({ nextStep, email, setEmail }) => {
  const [error, setError] = useState<string | null>(null);

  const handleContinue = () => {
    if (!email.trim()) {
      setError("Please enter a valid email.");
      return;
    }
    setError(null);
    nextStep();
  };

  return (
    <div
      className="flex flex-col w-[794px] h-auto py-[44px] items-center rounded-[10px]"
      style={{ boxShadow: "0px 4px 45px 0px #0000001F" }}
    >
      <div className="py-2 flex items-center justify-center gap-y-7">
        <button
          className={`${montserrat.className} flex flex-row items-center justify-center gap-x-5 w-[443px] h-[35px] px-5 rounded-[100px] border border-[#000000] text-[12px] font-[600]`}
        >
          Login using{" "}
          <img
            src="/images/icons/google.svg"
            alt="google"
            className="w-[20px] h-[20px]"
          />
        </button>
      </div>
      <div className="flex flex-row gap-x-2 items-center justify-center">
        <hr className="h-[1px] w-[210px] bg-[#000000] rounded-[10px] py-[0.2px]" />
        <span className={`py-4 ${montserrat.className} text-[13px] font-semibold`}>
          or
        </span>
        <hr className="h-[1px] w-[210px] bg-[#000000] rounded-[10px] py-[0.2px]" />
      </div>
      <div className="flex flex-col items-center gap-y-4 w-full">
        <input
          className={`${montserrat.className} w-[443px] h-[35px] px-5 rounded-[10px] border-[1px] border-[#000000] text-[12px] font-[600] text-[#000000] placeholder:text-[#2A1E17] outline-none`}
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
      </div>
      <div className="mt-8 flex items-center justify-center gap-y-7 flex-col">
        <button
          onClick={handleContinue}
          className={`${montserrat.className} w-[443px] h-[35px] px-5 rounded-[100px] border-none text-[12px] font-[600] text-white bg-[#FF4C4A]`}
        >
          Continue with Email
        </button>
        <p className={`text-[13px] font-[500] ${montserrat.className}`}>
          Already have an account?{" "}
          <Link href="/login">
            <span className="text-[#FF4C4A] font-[500]">Login</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpCard;
