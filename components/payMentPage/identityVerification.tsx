"use client";

import { Button } from "@/components/ui/button";

export default function IdentityVerification() {
  return (
    <div className="max-w-3xl p-6 bg-gray-50 border rounded-lg">
      <h1 className="text-2xl font-semibold mb-4">Identity Verified</h1>
      <p className="text-gray-600 mb-6">Verify your identity</p>

      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 border rounded-lg bg-white">
          <div className="font-medium">1. ID Documents Verification</div>
          <Button variant="outline" className="text-red-500 border-red-500 hover:bg-red-50">
            Add
          </Button>
        </div>

        <div className="flex items-center justify-between p-4 border rounded-lg bg-white">
          <div className="font-medium">2. Verify Your Face</div>
          <Button variant="outline" className="text-red-500 border-red-500 hover:bg-red-50">
            Add
          </Button>
        </div>
      </div>
    </div>
  );
}
