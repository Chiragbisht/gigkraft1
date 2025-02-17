import { ContractHeader } from "@/components/workFlowPage/ContractHeader";
import UserList from "@/components/Jobs/jobList/jobList";
import Proposal from "@/components/proposalPage/proposal";
import { montserrat } from "../fonts/font";

export default function ProposalsPage() {
  return (
     <div className={` ${montserrat.className} bg-gray-50 py-8`}>
        <div className=" w-full h-full max-w-6xl mx-auto  ">
            <Proposal/>
        </div>
        </div>
  );
}
