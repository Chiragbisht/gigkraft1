import { montserrat } from "@/app/fonts/font"
import type { StepProps } from "./types/types"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function JobTitleStep({ data, updateFields }: StepProps) {
  return (
    <div className={`space-y-8 ${montserrat.className} `}>
      <div>
        <h2 className="text-2xl font-bold">What's your job title?</h2>
        <p className="text-gray-500">This helps clients find you for the right jobs.</p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="jobTitle">Job Title</Label>
        <Input
          id="jobTitle"
          placeholder="e.g. Full Stack Developer"
          value={data.jobTitle}
          onChange={(e) => updateFields({ jobTitle: e.target.value })}
        />
      </div>
    </div>
  )
}

