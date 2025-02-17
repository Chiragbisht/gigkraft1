import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export function ContractHeader() {
  return (
    <div className="bg-gradient-to-r p-6 text-black">
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
        <div className="flex gap-6 text-sm font-medium">
        <Link
            href="/workflow"
            className="border-b-2 border-red-500 pb-2 text-black"
          >
            Active contracts (02)
          </Link>
          <button className="text-black/70 hover:text-red-500 border-b-2 border-transparent hover:border-red-500 pb-2">
            Completed contracts (07)
          </button>
          <Link href="/proposal" className="text-black/70 hover:text-red-500 border-b-2 border-transparent hover:border-red-500 pb-2">
            Proposals (09)
          </Link>
        </div>
      </div>
    </div>
  );
}
