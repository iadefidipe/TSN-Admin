import { IconCloseRed } from "@/shared/components/icons"
import React from "react"
import { useSelector } from "react-redux"
import { DisplayCard } from "../create/DisplayCard"
import { ProfileHeader } from "../create/ProfileHeader"
import { AddButton } from "../edit/AddButton"
import { DefaultInput } from "../edit/DefaultInput"
import { DropdownInput } from "../edit/DropdownInput"
import { TextareaInput } from "../edit/TextareaInput"

export const JobOpenings = () => {
  const { createInfoCurrentStepCompany } = useSelector((state) => state.profile)
  const companySize = [
    "Size 1",
    "Size 2",
    "Size 3",
    "Size 4",
    "Size 5",
    "Size 5",
  ]
  const skills = ["UI Design", "UIUX Design", "Python"]
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
      <div className='block lg:flex items-start justify-between gap-10 py-10'>
        <div className='w-full lg:w-1/2'>
          <DefaultInput
            placeholder='Enter Name of organisation'
            label={"Job Title"}
            value=''
            handleChange={() => null}
          />
          <DropdownInput
            label={"Workplace Type"}
            placeholder='Select type'
            handleChange={() => null}
            currentValue=''
            values={companySize}
          />
          <DropdownInput
            label={"Employment Type"}
            placeholder='Full time'
            handleChange={() => null}
            currentValue=''
            values={companySize}
          />
          <DropdownInput
            label={"Job Level"}
            placeholder='Entry'
            handleChange={() => null}
            currentValue=''
            values={companySize}
          />
          <DropdownInput
            label={"Select Skills"}
            placeholder='Search skills'
            handleChange={() => null}
            currentValue=''
            values={companySize}
          />
          <div className='flex items-center gap-6 flex-wrap'>
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
          <div className='mt-5'>
            <TextareaInput
              placeholder='Description about the job'
              value=''
              handleChange={() => null}
              label='Description'
              maxLength={"160"}
            />
          </div>
          <AddButton text='Add Other Openings' handleClick={() => null} />
        </div>
        <div className='w-full mt-4 lg:mt-0 lg:w-1/2'>
          <DisplayCard
            title='Job Requirements'
            description={
              "Lorem ipsum dolor sit amet, consectetur adipscing elit, sed do eiusmod  tempor incididunt ut labore ipsum dolor sit amet, consectetur lavoreet..."
            }
            location='On-site'
            experience={"Full Time"}
            company='Full time'
          />
        </div>
      </div>
    </div>
  )
}
