"use client"

import { useState } from "react"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface MilestoneStatusProps {
  status: "pending" | "submitted" | "confirmed" | "paid"
}

export function MilestoneStatus({ status }: MilestoneStatusProps) {
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [isConfirmed, setIsConfirmed] = useState(false)

  return (
    <>
      <div className="border-t mb-6 mt-6 pt-6">
        <div className="flex gap-6 text-sm mb-6 ml-6">
          <button className="border-b-2 border-gray-900 pb-2">Active milestones (02)</button>
          <button className="text-gray-500 hover:text-gray-900 pb-2">Awaiting milestones (0)</button>
          <button className="text-gray-500 hover:text-gray-900 pb-2">Payments request (0)</button>
        </div>

        {status === "pending" && (
          <div className="space-y-2 ml-6"> 
            <p className="font-medium">Last milestone paid: $200</p>
            <p className="text-sm text-gray-600">Next milestone to be paid: $200</p>
            <p className="text-sm text-gray-600">Waiting for submission</p>
            <p className="text-sm text-gray-600">Due date: 21 Feb 2022</p>
          </div>
        )}

        {status === "submitted" && (
          <div className="space-y-4">
            <p className="font-medium">Work submitted</p>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
            </p>
            <div className="flex items-center gap-4">
              <Switch checked={isConfirmed} onCheckedChange={setIsConfirmed} />
              <span className="text-sm">{isConfirmed ? "Accept" : "Request changes"}</span>
            </div>
          </div>
        )}

        {status === "confirmed" && (
          <div className="space-y-4">
            <p className="font-medium">Payment sent</p>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
            </p>
            <p className="text-sm text-gray-600">Date: 21 Feb 2022</p>
          </div>
        )}
      </div>

      <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you sure?</DialogTitle>
            <DialogDescription>
              If you choose yes then the amount to $200 Fee milestone will sent to freelancer account.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-4 mt-4">
            <div className="flex items-center gap-4">
              <Switch checked={isConfirmed} onCheckedChange={setIsConfirmed} />
              <span>Yes I am sure</span>
            </div>
            <Button variant="outline" onClick={() => setShowConfirmation(false)}>
              Cancel
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

