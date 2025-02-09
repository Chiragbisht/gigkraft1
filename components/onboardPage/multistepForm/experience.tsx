"use client"

import { useState } from "react"
import type { StepProps } from "./types/types"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export function ExperienceStep({ data, updateFields }: StepProps) {
  const [newExperience, setNewExperience] = useState({
    company: "",
    position: "",
    startDate: "",
    endDate: "",
    description: "",
  })

  const addExperience = () => {
    updateFields({
      experiences: [...data.experiences, newExperience],
    })
    setNewExperience({
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      description: "",
    })
  }

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold">Add your work experience</h2>
        <p className="text-gray-500">Tell us about your past work experience.</p>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox
          id="noExperience"
          checked={data.noExperience}
          onCheckedChange={(checked: boolean) => updateFields({ noExperience: checked })}
        />
        <Label htmlFor="noExperience">I don't have any work experience yet</Label>
      </div>

      {!data.noExperience && (
        <>
          <div className="space-y-4">
            {data.experiences.map((exp, index) => (
              <div key={index} className="rounded-lg border p-4">
                <h3 className="font-medium">{exp.position}</h3>
                <p className="text-sm text-gray-500">{exp.company}</p>
              </div>
            ))}
          </div>

          <div className="space-y-4 rounded-lg border p-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input
                  id="company"
                  value={newExperience.company}
                  onChange={(e) => setNewExperience((prev) => ({ ...prev, company: e.target.value }))}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="position">Position</Label>
                <Input
                  id="position"
                  value={newExperience.position}
                  onChange={(e) => setNewExperience((prev) => ({ ...prev, position: e.target.value }))}
                />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="startDate">Start Date</Label>
                <Input
                  id="startDate"
                  type="date"
                  value={newExperience.startDate}
                  onChange={(e) => setNewExperience((prev) => ({ ...prev, startDate: e.target.value }))}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="endDate">End Date</Label>
                <Input
                  id="endDate"
                  type="date"
                  value={newExperience.endDate}
                  onChange={(e) => setNewExperience((prev) => ({ ...prev, endDate: e.target.value }))}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={newExperience.description}
                onChange={(e) => setNewExperience((prev) => ({ ...prev, description: e.target.value }))}
              />
            </div>

            <Button onClick={addExperience} className=" bg-[#FF4C4A] w-full rounded h-[35px] px-8 font-medium text-white hover:bg-[#FF4C4A]/80">
              Add Experience
            </Button>
          </div>
        </>
      )}
    </div>
  )
}

