"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import SignupForm from "./step-two/stepTwo";
import SignUpCard from "./signUpCard";

type UserType = "freelancer" | "client" | null;

export default function MultiStepSignup() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState<UserType>("freelancer");
  const [country, setCountry] = useState("");
  const [image, setImage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [termsandconditions, setTermsandconditions] = useState(false);
  const router = useRouter();
// Log whenever any of the values change
useEffect(() => {
  console.log("Updated values:");
  console.log("First Name:", firstName);
  console.log("Last Name:", lastName);
  console.log("Country:", country);
  console.log("Terms Accepted:", termsandconditions);
  console.log("Email:", email);
  console.log("Password:", password);
  console.log("User Type:", userType);
}, [firstName, lastName, country, termsandconditions, email, password, userType]);

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
      {step === 1 && (
        <SignUpCard
          nextStep={nextStep}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
        />
      )}
      {step === 2 && (
        <SignupForm
          nextStep={nextStep}
          password={password}
          prevStep={prevStep}
          setUserType={setUserType}
          email={email}
          setCountry={setCountry}
          image={image}
          setImage={setImage}
          firstName={firstName}
          country={country}
          setFirstName={setFirstName}
          lastName={lastName} 
          setLastName={setLastName}
          setTermsandconditions={setTermsandconditions}
          termsandconditions={termsandconditions}
        />
      )}
    </>
  );
}
