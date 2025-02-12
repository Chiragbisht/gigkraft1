import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export function ContractHeader() {
  return (
    <div className="bg-gradient-to-r from-purple-700 to-purple-900 p-6 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <Link href="#" className="text-white hover:text-white/90">
              <ArrowLeft className="h-6 w-6" />
            </Link>
            <h1 className="text-xl font-semibold">My contracts</h1>
          </div>
          <div className="text-sm">
            Total earnings: <span className="font-semibold">$10.00 USD</span>
          </div>
        </div>
        <div className="flex gap-6 text-sm">
          <button className="border-b-2 border-white pb-2">Active contracts (02)</button>
          <button className="text-white/70 hover:text-white pb-2">Completed contracts (07)</button>
          <button className="text-white/70 hover:text-white pb-2">Proposals (09)</button>
        </div>
      </div>
    </div>
  )
}

