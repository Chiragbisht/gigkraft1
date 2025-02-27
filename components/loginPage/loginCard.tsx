"use client";
import { useState } from "react";
import Link from "next/link";

import { montserrat } from "@/app/fonts/font";
import { useLocalLogin } from "@/utils/apiHandlers/auth";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/zustand/nameStore";

const LoginCard: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { mutate: login, status } = useLocalLogin();
  const isLoading = status === "pending"; // Set loading state
  const router = useRouter();
  const { setToken } = useAuthStore();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    login(
      { email, password },
      {
        onSuccess: (data) => {
          // console.log("User logged in successfully!", data);

          if (data?.token) {
            setToken(data.token); // Store token in Zustand
          }

          // Redirect based on userType
          if (data?.userType === "freelancer") {
            router.push("/jobs");
          } else {
            router.push("/home");
          }
        },
        onError: (error) => {
          console.error("Login failed:", error);
          alert(error.message || "Login failed. Please try again.");
        },
      }
    );
  };

  return (
    <div
      className="flex flex-col lg:w-[794px] bg-white md:w-[494px] sm:w-[494px] w-[320px] h-auto py-[44px] items-center rounded-[10px]"
      style={{ boxShadow: "0px 4px 45px 0px #0000001F" }}
    >
      <div className="flex items-center justify-center">
        <p
          className={`font-semibold lg:text-[30px] text-[20px] ${montserrat.className}`}
        >
          Login to your Account
        </p>
      </div>
      <form
        onSubmit={handleLogin}
        className="mt-12 flex flex-col items-center gap-y-7"
      >
        <input
          className={`${montserrat.className} lg:w-[443px] w-[243px] h-[35px] px-5 rounded-[10px] border-[1px] border-[#000000] text-[12px] font-[600] text-[#2A1E17] outline-none`}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className={`${montserrat.className} lg:w-[443px] w-[243px] h-[35px] px-5 rounded-[10px] border-[1px] border-[#000000] text-[12px] font-[600] text-[#2A1E17] outline-none`}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          disabled={isLoading}
          className={`${montserrat.className} lg:w-[443px] w-[243px] h-[35px] px-5 rounded-[100px] text-[12px] font-[600] text-white bg-[#FF4C4A]`}
        >
          {isLoading ? "Logging in..." : "Login"}
        </button>
      </form>
      <p className={`text-[13px] font-[500] mt-2 ${montserrat.className}`}>
        Don&apos;t have an account?{" "}
        <Link href="/signup">
          <span className="text-[#FF4C4A] font-[500]">Sign Up</span>
        </Link>
      </p>
    </div>
  );
};

export default LoginCard;
