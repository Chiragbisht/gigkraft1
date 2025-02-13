"use client";

import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Upload } from "lucide-react";

export default function ProposalForm() {
  const [files, setFiles] = useState<File[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFiles(Array.from(event.target.files));
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <label className="text-sm font-medium">How long it will take?</label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="eg- 6months" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="3months">3 months</SelectItem>
            <SelectItem value="6months">6 months</SelectItem>
            <SelectItem value="9months">9 months</SelectItem>
            <SelectItem value="12months">12 months</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-4">
        <h2 className="font-medium">Additional details</h2>

        <div className="space-y-2">
          <label className="text-sm font-medium">Write cover letter</label>
          <Textarea placeholder="write here" className="min-h-[200px]" />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Attachments</label>
          <label className="flex flex-col items-center justify-center rounded-lg border border-dashed border-destructive p-6 cursor-pointer hover:bg-gray-100">
            <Upload className="h-6 w-6 text-destructive mb-2" />
            <p className="text-sm text-muted-foreground">
              Drag or <span className="text-destructive">upload project</span> files
            </p>
            <input
              type="file"
              multiple
              className="hidden"
              onChange={handleFileChange}
            />
          </label>
          {files.length > 0 && (
            <div className="mt-2 text-sm text-gray-600">
              {files.map((file, index) => (
                <p key={index}>{file.name}</p>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Button>Submit a proposal</Button>
        <Button variant="ghost">Cancel</Button>
      </div>
    </div>
  );
}
