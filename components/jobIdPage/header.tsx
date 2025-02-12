import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <div className="border-b pb-6">
      <div className="flex items-center gap-4 mb-4">
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <ArrowLeft className="h-4 w-4" />
          <span className="sr-only">Back</span>
        </Button>
        <span className="text-sm text-muted-foreground">Back</span>
      </div>

      <div className="flex items-start justify-between gap-4">
        <div className="space-y-1">
          <h1 className="text-xl font-semibold">Looking for a UX Web Designer/Russian Speakers only</h1>
          <p className="text-sm text-muted-foreground">BIDDING ENDS IN 6 DAYS, 23 HOURS</p>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-right">
            <div className="text-xl font-semibold">$10.00 USD</div>
          </div>
          
        </div>
      </div>
    </div>
  )
}