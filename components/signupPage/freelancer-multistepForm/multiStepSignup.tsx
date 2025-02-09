"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import SignupForm from "./stepTwo";
import SignUpCard from "./signUpCard";

type UserType = "freelancer" | "client" | null;

export default function MultiStepSignup() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState<UserType>(null);
  const router = useRouter();

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  // Redirect when reaching step 3
  useEffect(() => {
    if (step === 3) {
      if (userType === "freelancer") {
        router.push("/onboarding");
      } else if (userType === "client") {
        router.push("/profile");
      }
    }
  }, [step, userType, router]);

  return (
    <>
      {step === 1 && <SignUpCard nextStep={nextStep} email={email} setEmail={setEmail} password={password} setPassword={setPassword} />}
      {step === 2 && (
        <SignupForm nextStep={nextStep} prevStep={prevStep} setUserType={setUserType} email={email}  />
      )}
    </>
  );
}
