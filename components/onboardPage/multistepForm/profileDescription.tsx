import type { StepProps } from "./types/types"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function ProfileDescriptionStep({ data, updateFields }: StepProps) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold">Write your profile description</h2>
        <p className="text-gray-500">Tell clients what makes you unique and why they should hire you.</p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="profileDescription">Profile Description</Label>
        <Textarea
          id="profileDescription"
          placeholder="Write a compelling description of your skills and experience..."
          className="min-h-[200px]"
          value={data.profileDescription}
          onChange={(e) => updateFields({ profileDescription: e.target.value })}
        />
        <p className="text-sm text-gray-500">
          Minimum 100 characters, tell clients about your strengths and experience
        </p>
      </div>
    </div>
  )
}

