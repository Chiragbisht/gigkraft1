import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
interface UserTypeProps {
  selectedUserType: string;
  setSelectedUserType: (type: "freelancer" | "client") => void;
  setUserType: (type: "freelancer" | "client") => void;
}
const UserType = ({selectedUserType, setSelectedUserType, setUserType}: UserTypeProps) => {
  return (
    <div>
      <RadioGroup
        value={selectedUserType}
        onValueChange={(value) => {
          setSelectedUserType(value as "freelancer" | "client"); // Update local state
          setUserType(value as "freelancer" | "client"); // Update parent state
        }}
        className="flex"
      >
        <div className="flex-1">
          <RadioGroupItem
            value="freelancer"
            id="freelancer"
            className="peer sr-only"
          />
          <Label
            htmlFor="freelancer"
            className="flex flex-1 items-center justify-center rounded-l-md border border-r-0 peer-data-[state=checked]:bg-red-50 peer-data-[state=checked]:border-red-100 peer-data-[state=checked]:text-red-600 py-2 cursor-pointer"
          >
            Freelancer
          </Label>
        </div>
        <div className="flex-1">
          <RadioGroupItem value="client" id="client" className="peer sr-only" />
          <Label
            htmlFor="client"
            className="flex flex-1 items-center justify-center rounded-r-md border peer-data-[state=checked]:bg-red-50 peer-data-[state=checked]:border-red-100 peer-data-[state=checked]:text-red-600 py-2 cursor-pointer"
          >
            Client
          </Label>
        </div>
      </RadioGroup>
    </div>
  );
};

export default UserType;
