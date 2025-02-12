"use client"

import { useState } from "react"
import { ContractHeader } from "./ContractHeader"
import { ContractDetails } from "./ContractDetails"
import { MilestoneStatus } from "./MilestoneStatus"

type Status = "pending" | "submitted" | "confirmed" | "paid"

export function ContractView() {
  const [status, setStatus] = useState<Status>("pending")

  return (
    <div className="min-h-screen bg-gray-50">
      <ContractHeader />
      <main className="max-w-6xl mx-auto bg-white rounded-lg shadow-sm mt-6">
        <ContractDetails />
        <MilestoneStatus status={status} />
      </main>
    </div>
  )
}


