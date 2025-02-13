"use client";

import { useState } from "react";
import { ArrowLeft, Upload } from "lucide-react";
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
  const [files, setFiles] = useState<File[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFiles(Array.from(event.target.files));
    }
  };

  return (
    <div
      className={`${montserrat.className} min-h-screen bg-gray-50 py-10 font-montserrat lg:px-0 px-3 `}
    >
      <Card className="mx-auto max-w-5xl w-full">
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
                  <Months />
                </div>

                <ExpertiseInput />

                <BudgetInput />

                <div className="space-y-2">
                  <label className="text-sm font-medium">Attachments</label>
                  <label className="flex flex-col items-center justify-center rounded-lg border border-dashed border-destructive p-6 cursor-pointer hover:bg-gray-100">
                    <Upload className="h-6 w-6 text-destructive mb-2" />
                    <p className="text-sm text-muted-foreground">
                      Drag or{" "}
                      <span className="text-destructive">upload project</span>{" "}
                      files
                    </p>
                    <input
                      type="file"
                      multiple
                      className="hidden"
                      onChange={handleFileChange}
                    />
                  </label>
                  {files.length > 0 && (
                    <div className="mt-2 text-sm text-gray-600">
                      {files.map((file, index) => (
                        <p key={index}>{file.name}</p>
                      ))}
                    </div>
                  )}
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
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
