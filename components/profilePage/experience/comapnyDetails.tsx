import { montserrat } from "@/app/fonts/font";
import { Briefcase } from "lucide-react";

interface CompanyRoleProps {
  role: string;
  company: string;
  dateWorked: string;
  description: string;
}

const ComapnyDetails: React.FC<CompanyRoleProps> = ({ role, company, dateWorked, description }) => {
  return (
    <div className="flex flex-col gap-y-2 w-full border-b border-[#D9D9D9] py-2 ">
      <div className={`${montserrat.className} flex items-start gap-x-3`}>
        <Briefcase className="text-gray-600 w-6 h-6 mt-1" />
        <div className="flex flex-col">
          <h2 className={`${montserrat.className} text-[16px] font-semibold text-black`}>
            {role}
          </h2>
          <p className="text-[14px] text-[#666]">{company}</p>
          <p className="text-[12px] text-[#999]">{dateWorked}</p>
          <p className="text-[14px] text-[#333]">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ComapnyDetails