"use client";

import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Textarea } from "@/components/ui/textarea";

import { montserrat } from "@/app/fonts/font";
import { SkillsInput } from "./jobPosting/SkillsInput";
import { TimelineInput } from "./jobPosting/TimelineInput";
import { ExpertiseInput } from "./jobPosting/ExpertiseInput";
import { BudgetInput } from "./jobPosting/BudgetInput";
import Months from "./jobPosting/months";

export default function JobPostingForm() {
  const [skills, setSkills] = useState<string[]>(["Web Design", "Mockup"]);

  return (
    <div
      className={`${montserrat.className} min-h-screen bg-gray-50 py-10 font-montserrat`}
    >
      <Card className="mx-auto lg:max-w-5xl max-w-[340px] md:max-w-[580px] sm:max-w-[480px] w-full">
        <CardContent className="p-6">
          <button className="flex items-center space-x-2 mb-6">
            <ArrowLeft className="h-5 w-6" />
            <span>Back</span>
          </button>

          <hr />

          <div className="grid grid-cols-8">
            <div className="col-span-6">
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="jobTitle">Job title</Label>
                  <Input
                    id="jobTitle"
                    placeholder="ex. need Web designer for figma"
                    className="bg-white"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">
                    Describe about the project
                  </Label>
                  <Textarea
                    id="description"
                    placeholder="write here"
                    className="min-h-[150px] bg-white"
                  />
                </div>

                <SkillsInput skills={skills} setSkills={setSkills} />

                <TimelineInput />

                <div className="space-y-2">
                 {/* <Label>How long your work take?</Label> */}
                 <Months/>
                </div>

                <ExpertiseInput />

                <BudgetInput />

                <div className="space-y-2">
                  <Label>Attachments</Label>
                  <div className="border-2 border-dashed rounded-lg p-8 text-center">
                    <p>
                      Drag or{" "}
                      <label className="text-red-500 cursor-pointer">
                        upload project
                        <input type="file" className="hidden" multiple />
                      </label>{" "}
                      files
                    </p>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex gap-4">
                    <Button
                      type="submit"
                      className="flex-1 bg-red-500 hover:bg-red-600 text-white"
                    >
                      Post job now
                    </Button>
                    <Button variant="outline" className="flex-1">
                      Save as draft
                    </Button>
                  </div>
                </div>
              </form>
            </div>

            <div className="col-span-2 justify-center mt-8">
              {/* <div className="flex flex-col items-center space-y-2">
                <button className="bg-[#FF4C4A] text-white font-semibold py-2 px-4 rounded-full">
                  Create contract
                </button>
                <button className="border border-gray-400 text-gray-700 font-semibold py-2 px-4 rounded-full">
                  Cancel contract
                </button>
              </div> */}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
