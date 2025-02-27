import { montserrat } from "@/app/fonts/font"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export function ProjectTypeFilter() {
  return (
    <div className={`space-y-4 ${montserrat.className}`}>
      <h3 className="font-medium">Project type</h3>
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <Checkbox id="fixed-price" />
          <Label htmlFor="fixed-price">Fixed Price</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="hourly-rate" defaultChecked />
          <Label htmlFor="hourly-rate">Hourly Rate</Label>
        </div>
      </div>
    </div>
  )
}
