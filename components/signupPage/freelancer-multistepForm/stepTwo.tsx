"use client";

import { montserrat } from "@/app/fonts/font";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { useState } from "react";

interface SignupFormProps {
  nextStep: () => void;
  prevStep: () => void;
  setUserType: (type: "freelancer" | "client") => void;
  email: string;
}

export default function SignupForm({
  nextStep,
  prevStep,
  setUserType,
  email,
}: SignupFormProps) {
  const [selectedUserType, setSelectedUserType] = useState<
    "freelancer" | "client"
  >("freelancer");

  const handleCreateAccount = () => {
    setUserType(selectedUserType);
    nextStep();
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
            <Input type="text" placeholder="First Name" />
          </div>
          <div className="space-y-2">
            <Input type="text" placeholder="Last Name" />
          </div>
        </div>

        <div className="space-y-2">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Choose your country" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="us">United States</SelectItem>
              <SelectItem value="uk">United Kingdom</SelectItem>
              <SelectItem value="ca">Canada</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-3">
          <Label>I am a :</Label>
          <RadioGroup
            value={selectedUserType}
            onValueChange={(value) =>
              setUserType(value as "freelancer" | "client")
            }
            className="flex"
          >
            <div className="flex-1">
              <RadioGroupItem
                value="freelancer"
                id="freelancer"
                className="peer sr-only"
              />
              <Label
                htmlFor="freelancer"
                className="flex flex-1 items-center justify-center rounded-l-md border border-r-0 peer-data-[state=checked]:bg-red-50 peer-data-[state=checked]:border-red-100 peer-data-[state=checked]:text-red-600 py-2 cursor-pointer"
              >
                Freelancer
              </Label>
            </div>
            <div className="flex-1">
              <RadioGroupItem
                value="client"
                id="client"
                className="peer sr-only"
              />
              <Label
                htmlFor="client"
                className="flex flex-1 items-center justify-center rounded-r-md border peer-data-[state=checked]:bg-red-50 peer-data-[state=checked]:border-red-100 peer-data-[state=checked]:text-red-600 py-2 cursor-pointer"
              >
                Client
              </Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-4">
          <div className="flex items-start gap-2">
            <Checkbox id="emails" className="mt-1" />
            <Label htmlFor="emails" className="text-gray-600 font-normal">
              Yes! Send me genuinely useful emails every now and then.
            </Label>
          </div>

          <div className="flex items-start gap-2">
            <Checkbox id="terms" className="mt-1" />
            <Label htmlFor="terms" className="text-gray-600 font-normal">
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
          >
            Create My Account
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
