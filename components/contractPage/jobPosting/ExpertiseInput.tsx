import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function ExpertiseInput() {
  return (
    <div className="space-y-2">
      <Label>Expertise level you want</Label>
      <RadioGroup defaultValue="medium" className="flex flex-wrap gap-4">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="fresher" id="fresher" />
          <Label htmlFor="fresher">Fresher</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="medium" id="medium-exp" />
          <Label htmlFor="medium-exp">Medium</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="experienced" id="experienced" />
          <Label htmlFor="experienced">Experienced</Label>
        </div>
      </RadioGroup>
    </div>
  )
}

