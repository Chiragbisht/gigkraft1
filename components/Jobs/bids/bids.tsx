import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Cloud, X } from "lucide-react"
import { montserrat } from "@/app/fonts/font"

export default function StatsCards() {
  return (
      <Card className={`w-full ${montserrat.className} max-w-[392px] `}
      style={{ boxShadow: "0px 4px 45px 0px #0000001F" }}
      >
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1 border-b">
          <CardTitle className="text-[20px] font-medium">Your Bids</CardTitle>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Available bids</span>
            <span className="text-2xl font-bold">16</span>
          </div>
        </CardHeader>
        <CardContent className="space-y-4 pt-2">
          <p className="text-[16px]">
            <span className="font-medium">16</span> bids left out of <span className="font-medium">6</span>
          </p>
          <Button variant="outline" className="w-full mt-4 text-red-500 border-red-500 hover:bg-red-500/90 hover:text-white rounded-full ">
            Get more Bids
          </Button>
        </CardContent>
      </Card>
 
  )
}

