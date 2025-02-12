import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

export function ContractDetails() {
  return (
    <div className="p-6">
      <div className="flex justify-between mb-6">
        <Select defaultValue="all">
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Select contract" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
          </SelectContent>
        </Select>
        <div className="flex gap-2">
          <Button variant="outline" className="text-red-500 border-red-500 hover:bg-red-50">
            End contract
          </Button>
          <Button className="bg-red-500 hover:bg-red-600">Message</Button>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <h2 className="font-semibold">Russia - Research Support (Targeted Calling)</h2>
          <span className="text-xs text-red-500 border border-red-500 rounded px-2 py-0.5">Fixed rate</span>
        </div>
        <div className="text-sm text-gray-600">
          <p>Client name: Anisur Rahman</p>
          <p>
            Budget: <span className="font-semibold">$400</span> • 2 milestones
          </p>
        </div>
      </div>
    </div>
  )
}

