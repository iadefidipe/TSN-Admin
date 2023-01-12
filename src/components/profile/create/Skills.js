import { IconCloseRed } from "@/shared/components/icons"
import React from "react"
import { useSelector } from "react-redux"
import { DefaultInput } from "../edit/DefaultInput"
import { ProfileHeader } from "./ProfileHeader"

export const Skills = () => {
  const { createInfoCurrentStep } = useSelector((state) => state.profile)
  const skills = [
    "UI Design",
    "UIUX Design",
    "Desgin Thinking",
    "Python",
    "UIUX Design",
    "Desgin Thinking",
    "Python",
  ]
  return (
    <div>
      {" "}
      <ProfileHeader
        image={"/img/profile/profile_cover.png"}
        title={"Skills"}
        description={"This will help startups hone in on your strengths."}
        currentStep={createInfoCurrentStep}
      />{" "}
      <div className='block lg:flex items-start justify-between gap-10 py-10'>
        <div className='w-full lg:w-1/2'>
          <DefaultInput
            placeholder='Select skill and tap enter'
            label={"Search Skills"}
            value=''
            handleChange={() => null}
          />
        </div>
        <div className='w-full lg:w-1/2 flex flex-wrap gap-4'>
          {skills.map((skill, index) => {
            return (
              <div
                key={index}
                className='flex gap-2 rounded-lg bg-[#347CE11A] p-3 text-[#1872F2] text-base'
              >
                {skill}
                <IconCloseRed />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
