"use client"

import { useState } from "react"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react"
import  { StepProps } from "./types/types"

export function SkillsStep({ data, updateFields }: StepProps) {
  const [newSkill, setNewSkill] = useState("")

  const addSkill = () => {
    if (newSkill && !data.skills.includes(newSkill)) {
      updateFields({
        skills: [...data.skills, newSkill],
      })
      setNewSkill("")
    }
  }

  const removeSkill = (skillToRemove: string) => {
    updateFields({
      skills: data.skills.filter((skill) => skill !== skillToRemove),
    })
  }

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold">What are your top skills?</h2>
        <p className="text-gray-500">Add skills that showcase your expertise.</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {data.skills.map((skill) => (
          <Badge key={skill} variant="secondary" className="gap-1 pr-1">
            {skill}
            <button onClick={() => removeSkill(skill)} className="ml-1 rounded-full p-1 hover:bg-gray-200">
              <X className="h-3 w-3" />
            </button>
          </Badge>
        ))}
      </div>

      <div className="flex gap-2">
        <Input
          placeholder="Add a skill"
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              e.preventDefault()
              addSkill()
            }
          }}
        />
        <Button onClick={addSkill}>Add</Button>
      </div>
    </div>
  )
}

