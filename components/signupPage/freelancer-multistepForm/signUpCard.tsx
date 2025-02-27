"use client";

import { montserrat } from "@/app/fonts/font";
import Link from "next/link";
import React, { useState } from "react";
import { useGoogleSignUp } from "@/utils/apiHandlers/auth";
import { z } from "zod";
import { toast } from "sonner";

interface SignupCardProps {
  nextStep: () => void;
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
}

const signupSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const SignUpCard: React.FC<SignupCardProps> = ({
  nextStep,
  email,
  setEmail,
  password,
  setPassword,
}) => {
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );

  // ✅ Call useGoogleSignUp() at the top level
  const {
    mutate: signUpWithGoogle,
    status,
    error: googleError,
  } = useGoogleSignUp();

  const handleGoogleSignUp = () => {
    signUpWithGoogle();
  };

  const handleContinue = () => {
    // ✅ Validate form using Zod
    const result = signupSchema.safeParse({ email, password });

    if (!result.success) {
      // 🔹 Extract errors from Zod response
      const fieldErrors: { email?: string; password?: string } = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as "email" | "password"] = err.message;
        }
      });

      // Set errors in state
      setErrors(fieldErrors);

      // Display errors using toast
      Object.values(fieldErrors).forEach((errorMessage) => {
        toast.error(errorMessage); // Corrected toast usage
      });

      return;
    }

    // Clear errors and continue to the next step
    setErrors({});
    nextStep();
  };

  const isLoading = status === "pending";

  return (
    <div
      className="flex flex-col bg-white lg:w-[794px] md:w-[494px] sm:w-[454px] w-[320px] h-auto py-[34px] items-center rounded-[10px]"
      style={{ boxShadow: "0px 4px 45px 0px #0000001F" }}
    >
      <div className="flex items-center justify-center pb-4">
        <p
          className={`font-semibold lg:text-[30px] text-[20px] ${montserrat.className}`}
        >
          Get Your Free Account
        </p>
      </div>

      {/* Google Sign Up */}
      <div className="py-2 flex items-center justify-center gap-y-7">
        <button
          onClick={handleGoogleSignUp}
          disabled={isLoading}
          className={`${
            montserrat.className
          } flex flex-row items-center justify-center gap-x-5 lg:w-[443px] w-[243px] h-[35px] px-5 rounded-[100px] border border-[#000000] text-[12px] font-[600] ${
            isLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isLoading ? "Signing in..." : "Login using"}
          <img
            src="/images/icons/google.svg"
            alt="google"
            className="w-[20px] h-[20px]"
          />
        </button>
      </div>
      {googleError && (
        <p className="text-red-500 text-sm mt-2">{googleError.message}</p>
      )}

      {/* OR Divider */}
      <div className="flex flex-row gap-x-2 items-center justify-center">
        <hr className="h-[1px] lg:w-[210px] w-[105px] bg-[#000000] rounded-[10px] py-[0.2px]" />
        <span
          className={`py-4 ${montserrat.className} text-[13px] font-semibold`}
        >
          or
        </span>
        <hr className="h-[1px] lg:w-[210px] w-[105px] bg-[#000000] rounded-[10px] py-[0.2px]" />
      </div>

      {/* Email & Password Fields */}
      <div className="flex flex-col items-center gap-y-4 w-full">
        <div className="w-full flex flex-col items-center">
          <input
            className={`${
              montserrat.className
            } lg:w-[443px] w-[243px] h-[35px] px-5 rounded-[10px] border-[1px] text-[12px] font-[600] text-[#000000] outline-none ${
              errors.email
                ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                : "border-[#000000] focus:border-[#000000] focus:ring-1 focus:ring-[#000000]"
            }`}
            type="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setErrors((prev) => ({ ...prev, email: undefined }));
            }}
          />

          {/* {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>} */}
        </div>

        <div className="w-full flex flex-col items-center">
          <input
            className={`${
              montserrat.className
            } lg:w-[443px] w-[243px] h-[35px] px-5 rounded-[10px] border-[1px] text-[12px] font-[600] text-[#000000] outline-none ${
              errors.password
                ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                : "border-[#000000] focus:border-[#000000] focus:ring-1 focus:ring-[#000000]"
            }`}
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setErrors((prev) => ({ ...prev, password: undefined }));
            }}
          />
          {/* {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>} */}
        </div>
      </div>

      {/* Continue Button */}
      <div className="mt-8 flex items-center justify-center gap-y-7 flex-col">
        <button
          onClick={handleContinue}
          className={`${montserrat.className} lg:w-[443px] w-[243px] h-[35px] px-5 rounded-[100px] border-none text-[12px] font-[600] text-white bg-[#FF4C4A]`}
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
