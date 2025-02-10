import React from "react";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Months = () => {
  return (
    <div className="w-full">
      <Label className="mb-2 block text-sm font-medium text-gray-700">
        How long will your work take?
      </Label>
      <Select>
        <SelectTrigger className="w-full max-w-[200px] bg-white border border-gray-300 rounded-md">
          <SelectValue placeholder="Ex: 1-6 months" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1-3">1-3 months</SelectItem>
          <SelectItem value="3-6">3-6 months</SelectItem>
          <SelectItem value="6-12">6-12 months</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Months;
