import React from "react";
import { Button } from "./Button";
import { DefaultInput } from "./DefaultInput";
import { DropdownInput } from "./DropdownInput";

export const BasicInfo = () => {
  const roles = ["Developer", "Programmer", "SEO"];
  const experience = ["0-1", "1+", "2+", "3+"];

  return (
    <>
      <div className=" flex items-center justify-between">
        <h1 className="text-[#353535] text-xl font-semibold">Basic Info</h1>
        <div className="flex items-center gap-6">
          <Button primary={false} text={"Cancel"} handleClick={() => null} />
          <Button primary={true} text={"Save"} handleClick={() => null} />
        </div>
      </div>
      <div className="border-t border-[#7D7D7D30] py-6 mt-6">
        <div className="flex-col lg:flex-row flex items-center lg:gap-8">
          <DefaultInput
            handleChange={() => null}
            value=""
            placeholder={"Enter first name"}
            label="First Name"
          />
          <DefaultInput
            handleChange={() => null}
            value=""
            placeholder={"Enter last name"}
            label="Last Name"
          />
        </div>
        <div>
          <DefaultInput
            handleChange={() => null}
            value=""
            placeholder={"Enter title"}
            label="Title"
          />
        </div>
        <div className="flex-col lg:flex-row flex items-center lg:gap-8">
          <DropdownInput
            label={"Primary Role"}
            placeholder="Select role"
            handleChange={() => null}
            currentValue=""
            values={roles}
          />
          <DropdownInput
            label={"Years of experience"}
            placeholder="Select years of experience"
            handleChange={() => null}
            currentValue=""
            values={experience}
          />
        </div>
      </div>
    </>
  );
};
