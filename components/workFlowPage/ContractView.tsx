"use client"

import { useState } from "react"
import { ContractHeader } from "./ContractHeader"
import { ContractDetails } from "./ContractDetails"
import { MilestoneStatus } from "./MilestoneStatus"
import { montserrat } from "@/app/fonts/font"

type Status = "pending" | "submitted" | "confirmed" | "paid"

export function ContractView() {
  const [status, setStatus] = useState<Status>("pending")

  const handleStatusChange = (newStatus: Status) => {
    setStatus(newStatus)
  }

  return (
    <div className={` max-w-6xl py-10 mx-auto w-full ${montserrat.className}`}>
      <ContractHeader />
      <div className=" w-full bg-white rounded-lg shadow-sm"
      style={{ boxShadow: "0px 4px 45px 0px #0000001F" }}
      >
        <ContractDetails />
        <MilestoneStatus status={status} onStatusChange={handleStatusChange} />
      </div>
    </div>
  )
}

