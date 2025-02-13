import { montserrat } from "@/app/fonts/font";
import JobDetails from "@/components/proposalSubmit/jobDetails";
import ProposalForm from "@/components/proposalSubmit/proposalForm";

export default function Page() {
  return (
    <div
      className={`min-h-screen bg-white py-10 ${montserrat.className} lg:px-0 px-3`}
    >
      <div
        className="max-w-5xl mx-auto p-6 rounded-[10px]"
        style={{ boxShadow: "0px 4px 45px 0px #0000001F" }}
      >
      <div className="space-y-8  ">
        <JobDetails />
        <ProposalForm />
      </div>
      </div>
    </div>
  );
}
