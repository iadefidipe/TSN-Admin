import React from "react";
import { TextareaInput } from "./TextareaInput";

export const Skills = () => {
  return (
    <>
      <h1 className="text-[#353535] text-xl font-semibold">Skills</h1>{" "}
      <div className="border-t border-[#7D7D7D30] py-6 mt-6">
        <TextareaInput
          placeholder="Search Skills"
          value=""
          handleChange={() => null}
          label="Select Skills and tap enter"
          maxLength={""}
        />
      </div>
    </>
  );
};
