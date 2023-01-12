import React, { useState } from "react";
import { DefaultInput } from "../edit/DefaultInput";
import { CalendarInput } from "../edit/CalendarInput";
import { ProfileHeader } from "./ProfileHeader";
import { AddButton } from "../edit/AddButton";
import { useSelector } from "react-redux";
import { DisplayCard } from "./DisplayCard";

export const Education = () => {
  const { createInfoCurrentStep } = useSelector((state) => state.profile);
  const [dateValue, setDateValue] = useState("");
  const onDateChange = (value) => {
    setDateValue(value);
  };
  return (
    <div>
      <ProfileHeader
        image={"/img/profile/profile_cover.png"}
        title={"Education"}
        description={"What schools have you studied at"}
        currentStep={createInfoCurrentStep}
      />
      <div className="block lg:flex items-start justify-between gap-10 py-10">
        <div className="w-full lg:w-1/2">
          <DefaultInput
            placeholder="Enter name of istitution"
            label={"Institution"}
            value=""
            handleChange={() => null}
          />
          <DefaultInput
            placeholder="Where are you located"
            label={"Location"}
            value=""
            handleChange={() => null}
          />
          <DefaultInput
            placeholder="Where are you located"
            label={"Course of Study"}
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
          <div className="flex justify-end mt-2">
            <AddButton text="Add other education" handleClick={() => null} />
          </div>
        </div>
        <div className="w-full lg:w-1/2 mt-4 lg:mt-0 grid gap-3">
          <DisplayCard
            title="BSc. Statistics"
            description={
              "Lorem ipsum dolor sit amet, consectetur adipscing elit, sed do eiusmod  tempor incididunt ut labore ipsum dolor sit amet, consectetur lavoreet..."
            }
            location="Oslo, Norway"
            experience={'3 Years'}
            company="University of London"
            image="/img/profile/upwork.jpg"
          />
          <DisplayCard
            title="WASSCE"
            description={
              "Lorem ipsum dolor sit amet, consectetur adipscing elit, sed do eiusmod  tempor incididunt ut labore ipsum dolor sit amet, consectetur lavoreet..."
            }
            location="Nigeria"
            experience={'3 Years'}
            company="Taidob College"
            image="/img/profile/upwork.jpg"
          />
        </div>
      </div>
    </div>
  );
};
