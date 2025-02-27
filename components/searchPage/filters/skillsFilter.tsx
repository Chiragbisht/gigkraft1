import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { montserrat } from "@/app/fonts/font";

export function SkillsFilter() {
  return (
    <div className={`space-y-4 pb-2 ${montserrat.className}`}>
      <div className="flex items-center justify-between">
        <h3 className="font-medium">Skills</h3>
        <Button variant="link" className="text-blue-600 h-auto p-0">
          View All
        </Button>
      </div>
      <div className="relative">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search" className="pl-8" />
      </div>
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <Checkbox id="website-design" />
          <Label htmlFor="website-design">Website Design</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="graphic-design" defaultChecked />
          <Label htmlFor="graphic-design">Graphic Design</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="logo-design" />
          <Label htmlFor="logo-design">Logo Design</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="illustrator" defaultChecked />
          <Label htmlFor="illustrator">Illustrator</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="corporate-identity" />
          <Label htmlFor="corporate-identity">Corporate Identity</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="photoshop" defaultChecked />
          <Label htmlFor="photoshop">Photoshop Design</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="ux-design" />
          <Label htmlFor="ux-design">UX design</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="ui-design" defaultChecked />
          <Label htmlFor="ui-design">UI design</Label>
        </div>
      </div>
    </div>
  );
}
