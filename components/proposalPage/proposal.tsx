import React from "react";
import { ContractHeader } from "../workFlowPage/ContractHeader";
import UserList from "../homePage/userList/userList";

const Proposal = () => {
  return (
    <div className=" lg:px-0 px-3">
      <ContractHeader />
      <main className="max-w-3xl flex items-start py-6 ">
        <UserList />
      </main>
    </div>
  );
};

export default Proposal;
