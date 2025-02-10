import { Star } from "lucide-react"
import { DollarSign, LayoutGrid } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { montserrat } from "@/app/fonts/font"

export default function StatsSection() {
  return (
    <div className={`space-y-1 ${montserrat.className}`}>
      {/* Rating Section */}
      <div className="flex items-center gap-2 ">
        <div className="flex">
          {[...Array(4)].map((_, i) => (
            <Star key={i} className="w-3 h-3 fill-primary text-primary" />
          ))}
          <Star className="w-3 h-3 fill-muted text-muted-foreground" />
        </div>
        <span className="text-gray-600 text-[12px]">4/5 (12 Reviews)</span>
      </div>

      {/* Stats Row */}
      <div className="flex flex-wrap items-center">
        {/* Hourly Rate */}
        <div className="flex items-center gap-3 pr-6">
          <div className="p-2 rounded-full bg-red-100">
            <DollarSign className="w-5 h-5 text-red-500" />
          </div>
          <div>
            <div className="font-medium text-[12px]">50USD/ Hr</div>
            <div className="text-sm text-gray-600">Total earnings- 10k USD</div>
          </div>
        </div>

        {/* Separator */}
        <Separator orientation="vertical" className="h-12 mx-6" />

        {/* Projects Completed */}
        <div className="flex items-center gap-3 pl-6">
          <div className="p-2 rounded-full bg-blue-100">
            <LayoutGrid className="w-5 h-5 text-blue-500" />
          </div>
          <div className="font-medium text-[12px]">24 projects completed</div>
        </div>
      </div>
    </div>
  )
}