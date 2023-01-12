import { jobsOpeningData } from "@/shared/data/profile";
import React from "react";
import { JobPostCard } from "./JobPostCard";

export const TalentsMatch = () => {
  return (
    <div>
      {" "}
      <h1 className="text-[#353535] text-[40px] font-bold mb-[30px]">
        Talent Matches
      </h1>
      <div className="flex flex-wrap gap-6">
        {jobsOpeningData.map((item) => {
          return <JobPostCard {...item} />;
        })}
      </div>
    </div>
  );
};
