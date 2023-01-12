import React, { useState } from "react";
import { DefaultInput } from "../edit/DefaultInput";
import { TextareaInput } from "../edit/TextareaInput";
import { CalendarInput } from "../edit/CalendarInput";
import { ProfileHeader } from "./ProfileHeader";
import { AddButton } from "../edit/AddButton";
import { useSelector } from "react-redux";
import { DisplayCard } from "./DisplayCard";

export const WorkExperience = () => {
  const { createInfoCurrentStep } = useSelector((state) => state.profile);
  const [dateValue, setDateValue] = useState("");
  const onDateChange = (value) => {
    setDateValue(value);
  };
  return (
    <div>
      <ProfileHeader
        image={"/img/profile/profile_cover.png"}
        title={"Work Experience"}
        description={"What other positions have you held?"}
        currentStep={createInfoCurrentStep}
      />
      <div className="block lg:flex items-start justify-between gap-10 py-10">
        <div className="w-full lg:w-1/2">
          <DefaultInput
            placeholder="Enter name of organisation"
            label={"Company"}
            value=""
            handleChange={() => null}
          />
          <DefaultInput
            placeholder="Where are you located"
            label={"Location"}
            value=""
            handleChange={() => null}
          />
          <div className="flex-col lg:flex-row flex lg:gap-4">
            <CalendarInput
              label="Start Date"
              placeholder={"Select date"}
              date={dateValue}
              onChangeDate={onDateChange}
            />
            <CalendarInput
              label="End Date"
              placeholder={"Select date"}
              date={dateValue}
              onChangeDate={onDateChange}
            />
          </div>
          <TextareaInput
            placeholder="Description about job"
            value=""
            handleChange={() => null}
            label="Description"
            maxLength={"160"}
          />
          <div className="flex justify-end mt-2">
            <AddButton text="Add other experiences" handleClick={() => null} />
          </div>
        </div>
        <div className="w-full mt-4 lg:mt-0 lg:w-1/2 grid gap-3">
          <DisplayCard
            title="Web Designer"
            description={
              "Lorem ipsum dolor sit amet, consectetur adipscing elit, sed do eiusmod  tempor incididunt ut labore ipsum dolor sit amet, consectetur lavoreet..."
            }
            location="Oslo, Norway"
            experience={"3 Years"}
            company="Upwork"
            image="/img/profile/upwork.jpg"
          />
        </div>
      </div>
    </div>
  );
};
