import { montserrat } from "@/app/fonts/font"
import { Slider } from "@/components/ui/slider"

export function PriceRangeFilter() {
  return (
    <div className={` space-y-6 ${montserrat.className}`}>
      <div className="space-y-2 mt-1">
        <h3 className="font-medium">Fixed price</h3>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">$0</span>
            <span className="text-sm text-muted-foreground">$1000k+</span>
          </div>
          <Slider defaultValue={[500]} max={1000} step={1} className="w-full" />
        </div>
      </div>
      <div className="space-y-2 mt-1">
        <h3 className="font-medium">Hourly price</h3>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">$0</span>
            <span className="text-sm text-muted-foreground">$1000</span>
          </div>
          <Slider defaultValue={[500]} max={1000} step={1} className="w-full h-[4px]" />
        </div>
      </div>
    </div>
  )
}