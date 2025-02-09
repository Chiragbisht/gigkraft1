"use client";

import { useState } from "react";
import type { FormData } from "./types/types";

import { Progress } from "@/components/ui/progress";
import { WelcomeStep } from "./welcome";
import { ContactStep } from "./contact";
import { EducationStep } from "./education";
import { ExperienceStep } from "./experience";
import { JobTitleStep } from "./jobTitle";
import { LanguagesStep } from "./languages";
import { SkillsStep } from "./skills";
import { ProfileDescriptionStep } from "./profileDescription";
import { HourlyRateStep } from "./hourlyRate";
import { montserrat } from "@/app/fonts/font";

const INITIAL_DATA: FormData = {
  firstName: "",
  lastName: "",
  address: "",
  city: "",
  country: "",
  zipCode: "",
  phoneNumber: "",
  jobTitle: "",
  experiences: [],
  noExperience: false,
  education: [],
  languages: [],
  skills: [],
  profileDescription: "",
  hourlyRate: 0,
};

export default function MultiStepForm() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [formData, setFormData] = useState(INITIAL_DATA);

  function updateFields(fields: Partial<FormData>) {
    setFormData((prev) => ({ ...prev, ...fields }));
  }

  function nextStep() {
    setCurrentStepIndex((i) => (i >= steps.length - 1 ? i : i + 1));
  }

  function prevStep() {
    setCurrentStepIndex((i) => (i <= 0 ? i : i - 1));
  }

  const steps = [
    <WelcomeStep key="welcome" nextStep={nextStep} />,

    <JobTitleStep
      key="job-title"
      data={formData}
      updateFields={updateFields}
    />,
    <ExperienceStep
      key="experience"
      data={formData}
      updateFields={updateFields}
    />,
    <EducationStep
      key="education"
      data={formData}
      updateFields={updateFields}
    />,
    <LanguagesStep
      key="languages"
      data={formData}
      updateFields={updateFields}
    />,
    <SkillsStep key="skills" data={formData} updateFields={updateFields} />,
    <ProfileDescriptionStep
      key="description"
      data={formData}
      updateFields={updateFields}
    />,
    <HourlyRateStep key="rate" data={formData} updateFields={updateFields} />,
    <ContactStep key="contact" data={formData} updateFields={updateFields} />,
  ];

  return (
    <div
      className="flex flex-col lg:w-[794px] md:w-[494px] sm:w-[454px] w-[320px] px-2 lg:px-0 h-auto py-[34px] items-center rounded-[10px]"
      style={{ boxShadow: "0px 4px 45px 0px #0000001F" }}
    >
      <div className={`flex flex-col items-center justify-center h-full ${montserrat.className}`}>
        <div className="flex items-center justify-center h-full">
          {currentStepIndex > 0 && (
            <button
              onClick={prevStep}
              className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700"
            >
              ← Back
            </button>
          )}
          <div className="ml-auto text-sm font-medium text-gray-500">
            {currentStepIndex > 0
              ? `${currentStepIndex}/${steps.length - 1}`
              : ""}
          </div>
        </div>
        {currentStepIndex > 0 && (
          <Progress
            value={(currentStepIndex / (steps.length - 1)) * 100}
            className="mb-8 h-[5px] bg-gray-200 accent-white "
          />
        )}
        {steps[currentStepIndex]}
        {currentStepIndex > 0 && currentStepIndex < steps.length - 1 && (
          <div className="mt-8 flex justify-end">
            <button
              onClick={nextStep}
              className="rounded-full lg:max-w-[365px] h-[35px] lg:w-[365px] max-w-xs bg-[#FF4C4A] px-8  text-white hover:bg-[#FF4C4A]/80"
            >
              <span className={`${montserrat.className} text-[16px] font-[600]`}>Next</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
