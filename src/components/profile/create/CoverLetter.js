import React from "react";
import { useSelector } from "react-redux";
import { ProfileHeader } from "./ProfileHeader";

export const CoverLetter = () => {
  const { createInfoCurrentStep } = useSelector((state) => state.profile);

  return (
    <div>
      {" "}
      <ProfileHeader
        image={"/img/profile/profile_cover.png"}
        title={"Cover Letter"}
        description={
          "Sharing more details about yourself will help you stand out more."
        }
        currentStep={createInfoCurrentStep}
      />{" "}
      <div className="w-full py-10">
        <div className="flex justify-between">
          <span className="text-[#353535] outfit-l pl-[27px] mb-3 text-base font-light inline-block">
            Cover Letter
          </span>
          <span className="text-[#353535] outfit-l text-base font-light inline-block">
            160
          </span>
        </div>
        <textarea
          className="w-full h-[440px] bg-[#F4F4F4] outline-none pl-6 py-4 text-[#7D7D7D] outfit-l text-sm resize-none"
          placeholder={"Write Something Here"}
          value={""}
          onChange={() => null}
          minLength="1"
          maxLength={"160"}
        />
      </div>
    </div>
  );
};
