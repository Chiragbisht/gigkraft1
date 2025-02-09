"use client"

import { useState } from "react"
import type { StepProps } from "./types/types"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

const PROFICIENCY_LEVELS = ["Basic", "Intermediate", "Advanced", "Native"] as const

export function LanguagesStep({ data, updateFields }: StepProps) {
  const [newLanguage, setNewLanguage] = useState({
    language: "",
    proficiency: "Basic" as (typeof PROFICIENCY_LEVELS)[number],
  })

  const addLanguage = () => {
    if (newLanguage.language) {
      updateFields({
        languages: [...data.languages, newLanguage],
      })
      setNewLanguage({
        language: "",
        proficiency: "Basic",
      })
    }
  }

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold">What languages do you speak?</h2>
        <p className="text-gray-500">Add languages you're comfortable working in.</p>
      </div>

      <div className="space-y-4">
        {data.languages.map((lang, index) => (
          <div key={index} className="flex items-center justify-between rounded-lg border p-4">
            <span className="font-medium">{lang.language}</span>
            <span className="text-sm text-gray-500">{lang.proficiency}</span>
          </div>
        ))}
      </div>

      <div className="grid gap-4 rounded-lg border p-4 md:grid-cols-2">
        <Select
          value={newLanguage.language}
          onValueChange={(value) => setNewLanguage((prev) => ({ ...prev, language: value }))}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select language" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="english">English</SelectItem>
            <SelectItem value="spanish">Spanish</SelectItem>
            <SelectItem value="french">French</SelectItem>
            <SelectItem value="german">German</SelectItem>
            <SelectItem value="chinese">Chinese</SelectItem>
            <SelectItem value="japanese">Japanese</SelectItem>
          </SelectContent>
        </Select>

        <Select
          value={newLanguage.proficiency}
          onValueChange={(value) =>
            setNewLanguage((prev) => ({
              ...prev,
              proficiency: value as (typeof PROFICIENCY_LEVELS)[number],
            }))
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Select proficiency" />
          </SelectTrigger>
          <SelectContent>
            {PROFICIENCY_LEVELS.map((level) => (
              <SelectItem key={level} value={level}>
                {level}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Button onClick={addLanguage} className="md:col-span-2 bg-[#FF4C4A]  hover:bg-[#FF4C4A]/80">
          Add Language
        </Button>
      </div>
    </div>
  )
}

