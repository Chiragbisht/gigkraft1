import { ContractHeader } from "@/components/workFlowPage/ContractHeader";
import UserList from "@/components/Jobs/jobList/jobList";

export default function ProposalsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <ContractHeader />
      <main className="max-w-3xl mx-auto py-6 px-4">
        <UserList />
      </main>
    </div>
  );
}
