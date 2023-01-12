import React from "react";
import { About } from "./About";
import { BasicInfo } from "./BasicInfo";
import { Education } from "./Education";
import { Experience } from "./Experience";
import { Skills } from "./Skills";

export const EditProfile = () => {
  return (
    <>
      <BasicInfo />
      <About />
      <Experience />
      <Skills />
      <Education />
    </>
  );
};
