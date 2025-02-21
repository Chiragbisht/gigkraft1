"use client"; // Ensures this component runs on the client side

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import MetaMask from "../metaMaskPage/metaMask";
import IdentityVerification from "./identityVerification"; // Separate component
import ConnectCoinbaseWallet from "../walletPage/CoinbaseWallet";
import ConnectWallet from "../walletPage/binanceWallet";

export default function BillingPage() {
  const [activeSection, setActiveSection] = useState("billing");

  return (
    <div className="bg-background w-full"
    style={{ boxShadow: "0px 4px 45px 0px #0000001F" }}
    >
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 border-r min-h-[calc(70vh-64px)] p-6">
          <nav className="space-y-6">
            <div className="space-y-3">
              <h2 className="text-lg font-semibold">Billing</h2>
              <div className="space-y-1">
                <button
                  className={`block  px-2 py-1 text-sm rounded-md ${
                    activeSection === "billing" ? "bg-accent text-accent-foreground" : ""
                  }`}
                  onClick={() => setActiveSection("billing")}
                >
                  Billing & Payments
                </button>
              </div>
            </div>
            <div className="space-y-3">
              <h2 className="text-lg font-semibold">User Settings</h2>
              <div className="space-y-2 text-sm text-muted-foreground">
                <button
                  className={`w-full text-left px-2 py-1 hover:bg-gray-100 rounded-md ${
                    activeSection === "identity" ? "bg-gray-200" : ""
                  }`}
                  onClick={() => setActiveSection("identity")}
                >
                  Identity Verified
                </button>
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

          {activeSection === "billing" ? <BillingSection /> : <IdentityVerification />}
        </div>
      </div>
    </div>
  );
}

// Billing & Payment Section
function BillingSection() {
  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-semibold mb-8">Billing & Payments</h1>
      <h2 className="text-lg mb-6">Add Your Payment Method</h2>

      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 border rounded-lg">
          <div className="font-medium">1. Add Binance Wallet</div>
        <ConnectWallet/>
        </div>

        <div className="flex items-center justify-between p-4 border rounded-lg">
          <div className="flex items-center gap-2">
            <span className="font-medium">2. MetaMask Wallet</span>
          </div>
          <ConnectCoinbaseWallet />
        </div>
      </div>
    </div>
  );
}
