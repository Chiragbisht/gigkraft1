import React from "react";
import Heading from "./header/heading";
import NoJobsAlert from "./jobsPopup";
import Searchbox from "./search/searchbox";
import MatchHeading from "./matches/matchesHeading";
import UserList from "./jobList/jobList";
import ProfileCompletionCard from "./profileCompletionCard/profileCommpletionCard";
import Verfication from "../profilePage/verification/verfication";
import Contracts from "./contracts/contracts";
import Bids from "./bids/bids";

const Jobs = () => {
  return (
    <div className=" w-full h-full space-y-5 ">
      <Heading userName="Adam" UserType="" />
      <div className=" flex flex-row gap-x-2 justify-between w-full">
        <div className=" flex flex-col lg:mx-0 mx-auto gap-y-5">
          <NoJobsAlert />
          <Searchbox />
          <MatchHeading />
          <UserList />
        </div>
        <div className=" xl:flex hidden flex-col items-end gap-y-5">
          <ProfileCompletionCard />
          <Contracts />
          <Bids />
        </div>
      </div>
    </div>
  );
};

export default Jobs;
