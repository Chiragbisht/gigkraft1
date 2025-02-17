"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface MilestoneStatusProps {
  status: "pending" | "submitted" | "confirmed" | "paid";
  onStatusChange: (
    newStatus: "pending" | "submitted" | "confirmed" | "paid"
  ) => void;
}

export function MilestoneStatus({
  status,
  onStatusChange,
}: MilestoneStatusProps) {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleConfirm = () => {
    setShowConfirmation(false);
    setIsConfirmed(true); // Ensure the "Accept" button remains active
    onStatusChange("confirmed"); // Update status properly
  };

  return (
    <>
      <div className="border-t ml-6 mt-6 p-6">
        <div className="flex gap-6 text-sm mb-6">
          <button className="border-b-2 border-gray-900 pb-2">
            Active milestones (01)
          </button>
          <button className="text-gray-500 hover:text-gray-900 pb-2">
            Awaiting milestones (0)
          </button>
          <button className="text-gray-500 hover:text-gray-900 pb-2">
            Payments request (0)
          </button>
        </div>

        {status === "pending" && (
          <div className="space-y-2 ml-6">
            <p className="font-medium">Last milestone paid: $200</p>
            <p className="text-sm text-gray-600">
              Next milestone to be paid: $200
            </p>
            <p className="text-sm text-gray-600">Waiting for submission</p>
            <p className="text-sm text-gray-600">Due date: 21 Feb 2022</p>
            <div className="flex">
              <Button
                className="ml-auto mr-8"
                onClick={() => onStatusChange("submitted")}
              >
                Submit Work
              </Button>
            </div>
          </div>
        )}

        {status === "submitted" && (
          <div className="space-y-4">
            <p className="font-medium">Work submitted</p>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
              eiusmod
            </p>
            <div className="flex mr-6 justify-end gap-4">
              <Button
                variant={isConfirmed ? "default" : "outline"}
                onClick={() => {
                  setIsConfirmed(true);
                  setShowConfirmation(true);
                }}
              >
                Accept
              </Button>
              <Button
                variant={!isConfirmed ? "default" : "outline"}
                onClick={() => {
                  setIsConfirmed(false);
                  setShowConfirmation(false);
                }}
              >
                Request Changes
              </Button>
            </div>
          </div>
        )}

        {status === "confirmed" && (
          <div className="space-y-4">
            <p className="font-medium">Payment sent</p>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
              eiusmod
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
              If you choose yes, then the amount of $200 Fee milestone will be
              sent to the freelancer's account.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-4 mt-4">
            <div className="flex justify-end gap-4">
              <Button
                variant="outline"
                onClick={() => setShowConfirmation(false)}
              >
                Cancel
              </Button>
              <Button onClick={handleConfirm}>Confirm</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
