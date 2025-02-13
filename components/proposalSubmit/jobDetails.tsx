import { Badge } from "@/components/ui/badge"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function JobDetails() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Link href="#" className="flex items-center text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="mr-1 h-4 w-4" />
          Back
        </Link>
      </div>

      <div className="space-y-4">
        <div>
          <h1 className="text-xl font-semibold">Looking for a UX Web Designer/Russian Speakers only</h1>
          <p className="text-sm text-muted-foreground">Posted 3 hours ago</p>
        </div>

        <div className="space-y-4">
          <p>
            I need a website for a software development and services company. The company is a new startup, so the focus
            is on what we offer to provide, than what we did in the past.
          </p>

          <div className="space-y-2">
            <p>The key areas are -</p>
            <ul className="list-inside space-y-1">
              <li>+Digital Transformation work</li>
              <li>+Platform modernization</li>
              <li>+Maintenance and support</li>
              <li>+Utility tool development</li>
              <li>+Secure Data migration</li>
              <li>+Round the clock support</li>
              <li>+IT Consulatancy</li>
            </ul>
          </div>

          <p>Contents development is included in the job which should be finalized after review with me.</p>
        </div>

        <div className="space-y-2">
          <h2 className="font-semibold">Skills and Expertise</h2>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">Web Design</Badge>
            <Badge variant="secondary">Mockup</Badge>
            <Badge variant="secondary">Web Design</Badge>
            <Badge variant="secondary">Mockup</Badge>
          </div>
        </div>

        <div className="flex items-center justify-between border-t pt-4">
          <h2 className="font-semibold">Terms</h2>
          <p className="text-sm">Client's budget: $10.00 USD</p>
        </div>
      </div>
    </div>
  )
}

