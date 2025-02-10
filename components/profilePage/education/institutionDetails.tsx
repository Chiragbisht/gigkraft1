import { montserrat } from "@/app/fonts/font";
import { Landmark } from "lucide-react";

interface CompanyRoleProps {
 degree: string;
 institute: string;
 dateOfStudy: string;
 description: string;
}

const InstitutionDetails: React.FC<CompanyRoleProps> = ({ degree, institute, dateOfStudy, description }) => {
  return (
    <div className="flex flex-col gap-y-2 w-full border-b border-[#D9D9D9] py-2 ">
      <div className={`${montserrat.className} flex items-start gap-x-3`}>
        <Landmark className="text-gray-600 w-7 h-7 mt-1" />
        <div className="flex flex-col">
          <h2 className={`${montserrat.className} text-[16px] font-semibold text-black`}>
            {degree}
          </h2>
          <p className="text-[14px] text-[#666]">{institute}</p>
          <p className="text-[12px] text-[#999]">{dateOfStudy}</p>
          <p className="text-[14px] text-[#333]">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default InstitutionDetails