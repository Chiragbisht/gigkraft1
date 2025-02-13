"use client";

import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

interface ClientInfoProps {
  id: string;
}

export function ClientInfo({ id }: ClientInfoProps) {
  const router = useRouter();
  const handleProposal = () => {
    router.push(`/job/${id}/proposal`);
  };
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <Button
          className="bg-red-500 hover:bg-red-600 rounded-full"
          onClick={handleProposal}
        >
          Submit a proposal
        </Button>
        <Button variant="outline" className=" rounded-full">
          Saved the project
        </Button>
      </div>

      <h2 className="text-xl font-semibold">About the client</h2>

      <div className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground">🇺🇸</span>
            <span>Manhattan, USA</span>
          </div>
          <p className="text-sm text-muted-foreground">
            It's currently 4:45 PM here
          </p>
          <p className="text-sm text-muted-foreground">
            Joined September 1, 2013
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="font-medium">Manhattan 7:03 pm</h3>
            <p className="text-sm text-muted-foreground">47 jobs posted</p>
            <p className="text-sm text-muted-foreground">
              45% hire rate, 2 open jobs
            </p>
          </div>

          <div>
            <h3 className="font-medium">$5k+ total spent</h3>
            <p className="text-sm text-muted-foreground">27 hires, 0 active</p>
          </div>

          <div>
            <h3 className="font-medium">$24.53 /hr avg hourly rate paid</h3>
            <p className="text-sm text-muted-foreground">210 hours</p>
          </div>

          <div>
            <p className="text-sm">Mid-sized company (10-99 people)</p>
            <p className="text-sm text-muted-foreground">
              Member since Jan 22, 2020
            </p>
          </div>

          <div>
            <div className="flex items-center gap-1">
              <span>4/5</span>
              <span className="text-sm text-muted-foreground">
                (12 Reviews)
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
