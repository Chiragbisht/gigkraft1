import type { StepProps } from "./types/types"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

export function HourlyRateStep({ data, updateFields }: StepProps) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold">Set your hourly rate</h2>
        <p className="text-gray-500">Clients will see this rate on your profile and in search results.</p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="hourlyRate">Hourly Rate ($)</Label>
          <div className="flex items-center gap-4">
            <Input
              id="hourlyRate"
              type="number"
              min="5"
              max="200"
              value={data.hourlyRate}
              onChange={(e) => updateFields({ hourlyRate: Number(e.target.value) })}
              className="w-24"
            />
            <Slider
              value={[data.hourlyRate]}
              onValueChange={([value]) => updateFields({ hourlyRate: value })}
              min={5}
              max={200}
              step={1}
              className="flex-1"
            />
          </div>
        </div>

        <div className="rounded-lg bg-gray-50 p-4">
          <div className="flex justify-between text-sm">
            <span>You'll receive</span>
            <span className="font-medium">${(data.hourlyRate * 0.8).toFixed(2)}/hr</span>
          </div>
          <div className="mt-2 text-xs text-gray-500">
            This includes the 20% service fee that helps us run the platform and provide services like payment
            protection.
          </div>
        </div>
      </div>
    </div>
  )
}

