import { montserrat } from "@/app/fonts/font";
import Link from "next/link";
import React from "react";
import { GoogleLogo } from "./google-button";

const LoginCard: React.FC = () => {
  return (
    <div
      className="flex flex-col w-[794px] h-[506px] py-[44px] items-center rounded-[10px]"
      style={{ boxShadow: "0px 4px 45px 0px #0000001F" }}
    >
      <div className=" flex items-center justify-center">
        <p className={` font-semibold text-[30px] ${montserrat.className}`}>
          Login to your Account{" "}
        </p>
      </div>
      <div className=" mt-12 flex flex-col items-center gap-y-7 ">
        <input
          className={`${montserrat.className} w-[443px] h-[35px] px-5 rounded-[10px] border-[1px] border-[#000000] text-[12px] font-[600] text-[#2A1E17] outline-none`}
          type="text"
          placeholder="Email"
        />
        <input
          className={`${montserrat.className} w-[443px] h-[35px] px-5 rounded-[10px] border-[1px] border-[#000000] text-[12px] font-[600] text-[#2A1E17] outline-none`}
          type="password"
          placeholder="password"
        />
      </div>
      <div className="mt-8 flex items-center justify-center gap-y-7 flex-col">
        <button
          className={`${montserrat.className} w-[443px] h-[35px] px-5 rounded-[100px] border-none text-[12px] font-[600] text-white bg-[#FF4C4A]`}
        >
          Login
        </button>
        <p className={`text-[13px] font-[500] ${montserrat.className}`}>
          Don&apos;t have an account?{" "}
          <Link href={"/signup"}>
            {" "}
            <span className="text-[#FF4C4A] font-[500]">Sign Up</span>
          </Link>
        </p>
      </div>
      <span className={` py-4 ${montserrat.className} text-[12px] text-[#FF4C4A]`}>or</span>
      <div className='py-2 flex items-center justify-center gap-y-7'>
        <button className={`${montserrat.className} flex flex-row items-center justify-center gap-x-5 w-[443px] h-[35px] px-5 rounded-[100px] border border-[#000000] text-[12px] font-[600] `}> Login using <img src="/images/icons/google.svg" alt="google" className='w-[20px] h-[20px]' /></button>
      </div>
    </div>
  );
};

export default LoginCard;
