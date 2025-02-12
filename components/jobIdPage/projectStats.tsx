import { Button } from "../ui/button";

export function ProjectStats() {
    return (
      <div className="space-y-4">
        <h2 className="font-semibold">Project Stats</h2>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Proposals:</span>
            <span>15 to 20</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Last viewed by client:</span>
            <span>3 minutes ago</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Interviewing:</span>
            <span>0</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Invites sent:</span>
            <span>0</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Unanswered invites:</span>
            <span>0</span>
          </div>
        </div>
      </div>
    )
  }