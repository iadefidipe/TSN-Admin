import React from "react";
import { TextareaInput } from "./TextareaInput";

export const About = () => {
  return (
    <>
      <h1 className="text-[#353535] text-xl font-semibold">Basic Info</h1>
      <div className="border-t border-[#7D7D7D30] py-6 mt-6">
        <TextareaInput
          placeholder="Tell people more about yourself..."
          value=""
          handleChange={() => null}
          label="Bio"
          maxLength={"160"}
        />
      </div>
    </>
  );
};
