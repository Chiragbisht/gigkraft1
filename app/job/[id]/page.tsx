"use client";
import { montserrat } from "@/app/fonts/font";
import { ClientInfo } from "@/components/jobIdPage/clientInfo";
import { Header } from "@/components/jobIdPage/header";
import { JobDescription } from "@/components/jobIdPage/jobDescription";
import { ProjectStats } from "@/components/jobIdPage/projectStats";
import { SkillTags } from "@/components/jobIdPage/skillsTags";
import { VerificationBadges } from "@/components/jobIdPage/Verification";
import { Separator } from "@/components/ui/separator";
import { useParams} from "next/navigation";

// interface JobProps {
//   id: number;
// }
export default function JobPage() {
  const params = useParams();
  const idParam = Array.isArray(params.id) ? params.id[0] : params.id;
  console.log("idParam", idParam);

  return (
    <div
      className={`min-h-screen bg-gray-50 py-10 ${montserrat.className} lg:px-0 px-3`}
    >
      <div
        className="max-w-5xl mx-auto p-6 rounded-[10px]"
        style={{ boxShadow: "0px 4px 45px 0px #0000001F" }}
      >
        <Header />

        <div className="flex flex-col lg:flex-row gap-8 ">
          {/* Left Content */}
          <div className="flex-1 space-y-8 mt-4">
            <JobDescription />
            <SkillTags />
            <ProjectStats />
          </div>

          {/* Separator */}
          <Separator
            orientation="vertical"
            className="hidden lg:block w-[1px] bg-gray-300 h-auto self-stretch"
          />

          {/* Right Content */}
          <div className="w-full lg:w-[30%] space-y-8 mt-4 flex flex-col gap-4">
            <ClientInfo id={idParam} />
            <Separator
              orientation="horizontal"
              className="w-full h-[1px] bg-gray-300"
            />
            <VerificationBadges />
          </div>
        </div>
      </div>
    </div>
  );
}
