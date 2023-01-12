import React from "react";
import { useSelector } from "react-redux";
import { ProfileHeader } from "../create/ProfileHeader";
import { DefaultInput } from "../edit/DefaultInput";
import { DropdownInput } from "../edit/DropdownInput";
import { TextareaInput } from "../edit/TextareaInput";

export const OtherCompanyInformation = () => {
  const { createInfoCurrentStepCompany } = useSelector(
    (state) => state.profile
  );
  const companySize = [
    "Size 1",
    "Size 2",
    "Size 3",
    "Size 4",
    "Size 5",
    "Size 5",
  ];
  return (
    <div>
      {" "}
      <ProfileHeader
        image={"/img/profile/profile_cover.png"}
        title={"Other Company Details"}
        description={"Tell People about Your Company’s social presence"}
        currentStep={createInfoCurrentStepCompany}
        company={true}
      />
      <div className="block lg:flex items-start justify-between gap-10 py-10">
        <div className="w-full lg:w-1/2">
          <DefaultInput
            placeholder="Add your facebook URL"
            label={"Facebook URL"}
            value=""
            handleChange={() => null}
          />
          <DefaultInput
            placeholder="Add your twitter URL"
            label={"Twitter URL"}
            value=""
            handleChange={() => null}
          />
          <DefaultInput
            placeholder="Add your instagram URL"
            label={"Instagram URL"}
            value=""
            handleChange={() => null}
          />
          <DefaultInput
            placeholder="Add your linkedin URL"
            label={"Linkedin URL"}
            value=""
            handleChange={() => null}
          />
        </div>
        <div className="w-full lg:w-1/2">
          <DropdownInput
            label={"Company Size"}
            placeholder="Select size"
            handleChange={() => null}
            currentValue=""
            values={companySize}
          />
          <div className="mt-5">
            <TextareaInput
              placeholder="Enter your company tagline..."
              value=""
              handleChange={() => null}
              label="Tagline"
              maxLength={"160"}
            />
          </div>
          <div className="mt-6">
            <TextareaInput
              placeholder="More about the company"
              value=""
              handleChange={() => null}
              label="About"
              maxLength={"160"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
