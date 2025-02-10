import type React from "react";
import { useState } from "react";
import { X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

interface SkillsInputProps {
  skills: string[];
  setSkills: React.Dispatch<React.SetStateAction<string[]>>;
}

export function SkillsInput({ skills, setSkills }: SkillsInputProps) {
  const [newSkill, setNewSkill] = useState<string>("");

  const handleAddSkill = (skill: string): void => {
    if (skill && !skills.includes(skill)) {
      setSkills([...skills, skill]);
      setNewSkill("");
    }
  };

  const handleRemoveSkill = (skillToRemove: string): void => {
    setSkills(skills.filter((skill) => skill !== skillToRemove));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddSkill(newSkill);
    }
  };

  return (
    <div className="space-y-2">
      <Label>Skills</Label>
      <div className="flex flex-wrap gap-2 mb-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="inline-flex items-center gap-1 px-4 py-[0.5px] bg-[#FF4C4A] text-white rounded-full text-sm"
          >
            {skill}
            <Button
              type="button"
              onClick={() => handleRemoveSkill(skill)}
              className="p-0 rounded-full "
            >
              <X className="h-4 w-4" />
            </Button>
          </span>
        ))}
      </div>
      <Input
        placeholder="Add skills"
        value={newSkill}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewSkill(e.target.value)}
        onKeyDown={handleKeyDown}
        className="bg-white"
      />
      <div className="flex flex-wrap gap-2 mt-2">
        {["Web Design", "MERN", "Backend", "GenAI", "Cloud Computing", "UI/UX"].map((suggestion, index) => (
          <button
            key={index}
            type="button"
            onClick={() => handleAddSkill(suggestion)}
            className="px-3 py-1 bg-gray-100 rounded-full text-sm hover:bg-gray-200"
          >
            {suggestion}
          </button>
        ))}
        <button type="button" className="px-3 py-1 text-gray-500 text-sm hover:text-gray-700">
          Add max 15 skills
        </button>
      </div>
    </div>
  );
}