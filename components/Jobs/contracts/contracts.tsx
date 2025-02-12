import { montserrat } from '@/app/fonts/font'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle2, Cloud, X } from 'lucide-react'
import React from 'react'

const Contracts = () => {
  return (
    <Card className={  `w-full max-w-[392px] ${montserrat.className}`}
    style={{ boxShadow: "0px 4px 45px 0px #0000001F" }}
    >
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 border-b">
      <CardTitle className="text-[20px] font-medium ">My contracts</CardTitle>
      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground">Total</span>
        <span className="text-2xl font-bold">10</span>
      </div>
    </CardHeader>
    <CardContent className="space-y-4 pt-2">
      <div className="flex items-center gap-3">
        <CheckCircle2 className="h-6 w-6 text-green-500" />
        <span className="text-[14px]">
          Active projects : <span className="text-muted-foreground">02</span>
        </span>
      </div>
      <div className="flex items-center gap-3">
        <Cloud className="h-6 w-6 text-blue-500" />
        <span className="text-[14px]">
          Completed projects : <span className="text-muted-foreground">07</span>
        </span>
      </div>
      <div className="flex items-center gap-3">
        <X className="h-6 w-6 text-red-500" />
        <span className="text-[14px]">
          Cancelled projects : <span className="text-muted-foreground">07</span>
        </span>
      </div>
      <Button variant="outline" className="w-full mt-4 text-red-500 border-red-500 hover:bg-red-500/90 hover:text-white rounded-full ">
        View all
      </Button>
    </CardContent>
  </Card>
  )
}

export default Contracts