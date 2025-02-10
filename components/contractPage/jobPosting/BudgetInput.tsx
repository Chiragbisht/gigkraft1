import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function BudgetInput() {
  return (
    <div className="space-y-4">
      <Label className="font-semibold text-lg">
        Tell us about your budget?
      </Label>
      <RadioGroup defaultValue="hourly" className="flex gap-4">
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            value="fixed"
            id="fixed"
            className="p-4 flex items-center justify-center"
            style={{ borderColor: "transparent" }} // Adjust or remove the border
          />
          <Label htmlFor="fixed" className="flex items-center space-x-1">
            <span className="icon">🏷️</span>
            <span className="font-semibold">Fixed price</span>
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            value="hourly"
            id="hourly"
            className="p-4 flex items-center justify-center"
            style={{ borderColor: "transparent" }} // Adjust or remove the border
          />
          <Label
            htmlFor="hourly"
            className="flex items-center space-x-1 text-red-500"
          >
            <span className="icon">⏳</span>
            <span className="font-semibold">Hourly</span>
          </Label>
        </div>
      </RadioGroup>
      <div className="flex flex-wrap items-center gap-4 mt-4">
        <div className="flex items-center gap-2">
          <span className="text-xl">$</span>
          <Input className="w-24 bg-white" placeholder="50.00" />
          <span className="text-gray-500">/hr</span>
        </div>
        <span className="text-gray-500">To</span>
        <div className="flex items-center gap-2">
          <span className="text-xl">$</span>
          <Input className="w-24 bg-white" placeholder="50.00" />
          <span className="text-gray-500">/hr</span>
        </div>
      </div>
    </div>
  );
}
