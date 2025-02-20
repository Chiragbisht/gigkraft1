"use client"; // Ensures this component runs on the client side

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import MetaMask from "../metaMaskPage/metaMask";

export default function BillingPage() {
  // Function to handle MetaMask connection
  const handleMetaMaskConnect = () => {
    console.log("Connecting to MetaMask...");
  };

  return (
    <div className="bg-background">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 border-r min-h-[calc(70vh-64px)] p-6">
          <nav className="space-y-6">
            <div className="space-y-3">
              <h2 className="text-lg font-semibold">Billing</h2>
              <div className="space-y-1">
                <Link href="#" className="block px-2 py-1 text-sm rounded-md bg-accent text-accent-foreground">
                  Billing & payments
                </Link>
              </div>
            </div>
            <div className="space-y-3">
              <h2 className="text-lg font-semibold">User Settings</h2>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="px-2 py-1">Identity Verified</div>
                <div className="px-2 py-1">Payment Verified</div>
                <div className="px-2 py-1">Phone Verified</div>
                <div className="px-2 py-1">Email Verified</div>
                <div className="px-2 py-1">Tax Information</div>
                <div className="px-2 py-1">Password & Security</div>
              </div>
            </div>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          <div className="mb-6">
            <Button variant="ghost" size="sm" className="gap-2">
              <ChevronLeft className="h-4 w-4" />
              Back
            </Button>
          </div>

          <h1 className="text-2xl font-semibold mb-8">Billing & Payments</h1>

          <div className="max-w-2xl">
            <h2 className="text-lg mb-6">Add Your Payment Method</h2>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="font-medium">1. Add Local Bank</div>
                <Button variant="outline" className="text-black bg-green-700 hover:bg-green-400 focus:outline-none focus:ring-4 focus:ring-gray-300
       font-medium rounded-lg text-sm px-8 py-2.5 me-3 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700
        dark:focus:ring-gray-700 dark:border-gray-700">
                  Add Bank
                </Button>
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-2">
                  <span className="font-medium">2. MetaMask Wallet</span>
                </div>
                {/* MetaMask Button */}
                <MetaMask />
              </div>

              {/* Optional: Render MetaMask component if needed */}
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
