import React, { useState } from "react";
import { AddButton } from "./AddButton";
import { CalendarInput } from "./CalendarInput";
import { DefaultInput } from "./DefaultInput";
import { TextareaInput } from "./TextareaInput";

export const Experience = () => {
  const [dateValue, setDateValue] = useState("");
  const onDateChange = (value) => {
    setDateValue(value);
  };
  return (
    <>
      <h1 className="text-[#353535] text-xl font-semibold">Experience</h1>{" "}
      <div className="border-t border-[#7D7D7D30] py-6 mt-6">
        <DefaultInput
          handleChange={() => null}
          value=""
          placeholder={"Enter name of organization"}
          label="Company"
        />
        <DefaultInput
          handleChange={() => null}
          value=""
          placeholder={"Location"}
          label="Where are you located?"
        />
        <div className="flex-col lg:flex-row flex lg:gap-8">
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
          placeholder="Description"
          value=""
          handleChange={() => null}
          label="Description about job"
          maxLength={"160"}
        />
        <div className="flex justify-end">
          <AddButton text="Add Experience" handleClick={() => null} />
        </div>{" "}
      </div>
    </>
  );
};
