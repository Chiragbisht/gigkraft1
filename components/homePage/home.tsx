import React from "react";
import Heading from "./header/heading";
import NoJobsAlert from "./jobsPopup";
import Searchbox from "./search/searchbox";
import MatchHeading from "./matches/matchesHeading";
import UserList from "./userList/userList";
import ProfileCompletionCard from "./profileCompletionCard/profileCommpletionCard";
import Verfication from "../profilePage/verification/verfication";

const Home = () => {
  return (
    <div className=" w-full max-auto h-full space-y-5 ">
      <Heading userName="Nitin" UserType="Client" />
      <div className=" flex flex-row gap-x-5 justify-between w-full">
        <div className=" flex flex-col items-start gap-y-5">
          <NoJobsAlert />
          <Searchbox />
          <MatchHeading />
          <UserList />
        </div>
        <div className=" xl:flex hidden flex-col items-end gap-y-5">
          <ProfileCompletionCard />
          <Verfication/>
        </div>
      </div>
    </div>
  );
};

export default Home;
