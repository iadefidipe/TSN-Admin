import React, { useState } from "react";
import { AddButton } from "./AddButton";
import { CalendarInput } from "./CalendarInput";
import { DefaultInput } from "./DefaultInput";

export const Education = () => {
  const [dateValue, setDateValue] = useState("");
  const onDateChange = (value) => {
    setDateValue(value);
  };
  return (
    <>
      <h1 className="text-[#353535] text-xl font-semibold">Education</h1>
      <div className="border-t border-[#7D7D7D30] py-6 mt-6">
        <DefaultInput
          handleChange={() => null}
          value=""
          placeholder={"Name of Institution"}
          label="Enter name of organisation "
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
        <DefaultInput
          handleChange={() => null}
          value=""
          placeholder={"Location"}
          label="Where are you located?"
        />
        <DefaultInput
          handleChange={() => null}
          value=""
          placeholder={"Course of Study"}
          label="Course of Study"
        />
        <div className="flex justify-end">
          <AddButton text="Add Experience" handleClick={() => null} />
        </div>{" "}
      </div>
    </>
  );
};
