"use client";

import { montserrat } from "@/app/fonts/font";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useState } from "react";
import CountrySelect from "./countrySelect/countrySelect";
import UserType from "./userType";
import { useLocalSignUp } from "@/utils/apiHandlers/auth";
import { useAuthStore } from "@/zustand/nameStore";

interface SignupFormProps {
  nextStep: () => void;
  prevStep: () => void;
  setUserType: (type: "freelancer" | "client") => void;

  setImage: (image: string) => void;
  setTermsandconditions: (termsandconditions: boolean) => void;
  image: string;
  email: string;
  termsandconditions: boolean;
  firstName: string;
  lastName: string;

  setCountry: (country: { value: string; label: string } | null) => void;
  country: { value: string; label: string } | null;

  setFirstName: (firstName: string) => void;
  setLastName: (lastName: string) => void;
  password: string;
}

export default function SignupForm({
  nextStep,
  prevStep,
  setUserType,
  email,
  setCountry,
  country,
  setTermsandconditions,
  termsandconditions,
  firstName,
  setFirstName,
  lastName,
  setLastName,
  password,
}: SignupFormProps) {
  const [selectedUserType, setSelectedUserType] = useState<
    "freelancer" | "client"
  >("freelancer");

  const { mutate: localSignUp, status } = useLocalSignUp();
  // if status=='pending'{

  // }
  const { setToken } = useAuthStore();
  const handleCreateAccount = () => {
    const userData = {
      firstName,
      lastName,
      email,
      password,
      userType: selectedUserType,
      country: country ? country.value : "", // ✅ Ensure value is extracted correctly
      termsandconditions,
    };

    console.log("Signing up user:", userData); // Debugging

    localSignUp(userData, {
      onSuccess: (data) => {
        if (data.token) {
          setToken(data.token);
        }
        setUserType(selectedUserType);
        nextStep();
      },
      onError: (error) => {
        console.error("Signup error:", error.message);
      },
    });
  };

  return (
    <Card
      className={`lg:w-[794px] md:w-[494px] sm:w-[454px] w-[320px] h-auto py-[44px] items-center rounded-[10px] ${montserrat.className}`}
      style={{ boxShadow: "0px 4px 45px 0px #0000001F" }}
    >
      <CardHeader className="space-y-6">
        <CardTitle className="lg:text-[30px] text-[20px] font-medium text-center">
          Complete your free account setup
        </CardTitle>
        <div className="flex items-center gap-3 justify-center">
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-medium">
            {email[0]?.toUpperCase() || "U"}
          </div>
          <span className="text-gray-600">{email}</span>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>

        <div className="space-y-2">
          <CountrySelect setCountry={(value) => setCountry(value)} />
        </div>

        <div className="space-y-3">
          <Label>I am a :</Label>
          <UserType
            selectedUserType={selectedUserType}
            setSelectedUserType={setSelectedUserType}
            setUserType={setUserType}
          />
        </div>

        <div className="space-y-4">
          {/* <div className="flex items-center gap-2">
            <Checkbox id="subscribe-emails" className="mt-1" />
            <Label
              htmlFor="subscribe-emails"
              className="text-gray-600 font-normal"
            >
              Yes! Send me genuinely useful emails every now and then.
            </Label>
          </div> */}

          <div className="flex items-center gap-2">
            <Checkbox
              id="terms-checkbox"
              className="mt-1"
              checked={termsandconditions}
              onCheckedChange={(checked) => setTermsandconditions(!!checked)}
            />
            <Label
              htmlFor="terms-checkbox"
              className="text-gray-600 font-normal"
            >
              Yes, I understand and agree to the{" "}
              <Link href="#" className="text-red-500 hover:underline">
                Terms of Service
              </Link>
              , including the{" "}
              <Link href="#" className="text-red-500 hover:underline">
                User Agreement and Privacy Policy
              </Link>
              .
            </Label>
          </div>
        </div>

        <div className="flex justify-between">
          <Button variant="outline" onClick={prevStep}>
            Back
          </Button>
          <Button
            className="bg-red-500 hover:bg-red-600 text-white py-2 px-6"
            onClick={handleCreateAccount}
            disabled={status === "pending"}
          >
            {status === "pending" ? "Creating Account..." : "Create My Account"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
