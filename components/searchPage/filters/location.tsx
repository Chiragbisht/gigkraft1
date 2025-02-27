import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { montserrat } from "@/app/fonts/font"

export function LocationFilter() {
  return (
    <div className={`space-y-2 ${montserrat.className}`}>
      <h3 className="font-medium">Project location</h3>
      <div className="relative">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search" className="pl-8" />
      </div>
    </div>
  )
}

