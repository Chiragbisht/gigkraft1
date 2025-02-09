"use client"

import { useState } from "react"
import type { StepProps } from "./types/types"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export function EducationStep({ data, updateFields }: StepProps) {
  const [newEducation, setNewEducation] = useState({
    institution: "",
    degree: "",
    field: "",
    graduationYear: "",
  })

  const addEducation = () => {
    updateFields({
      education: [...data.education, newEducation],
    })
    setNewEducation({
      institution: "",
      degree: "",
      field: "",
      graduationYear: "",
    })
  }

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold">Add your education</h2>
        <p className="text-gray-500">Tell us about your educational background.</p>
      </div>

      <div className="space-y-4">
        {data.education.map((edu, index) => (
          <div key={index} className="rounded-lg border p-4">
            <h3 className="font-medium">
              {edu.degree} in {edu.field}
            </h3>
            <p className="text-sm text-gray-500">{edu.institution}</p>
          </div>
        ))}
      </div>

      <div className="space-y-4 rounded-lg border p-4">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="institution">Institution</Label>
            <Input
              id="institution"
              value={newEducation.institution}
              onChange={(e) => setNewEducation((prev) => ({ ...prev, institution: e.target.value }))}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="degree">Degree</Label>
            <Input
              id="degree"
              value={newEducation.degree}
              onChange={(e) => setNewEducation((prev) => ({ ...prev, degree: e.target.value }))}
            />
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="field">Field of Study</Label>
            <Input
              id="field"
              value={newEducation.field}
              onChange={(e) => setNewEducation((prev) => ({ ...prev, field: e.target.value }))}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="graduationYear">Graduation Year</Label>
            <Input
              id="graduationYear"
              type="number"
              value={newEducation.graduationYear}
              onChange={(e) => setNewEducation((prev) => ({ ...prev, graduationYear: e.target.value }))}
            />
          </div>
        </div>

        <Button onClick={addEducation} className="w-full bg-[#FF4C4A]  hover:bg-[#FF4C4A]/80">
          Add Education
        </Button>
      </div>
    </div>
  )
}

