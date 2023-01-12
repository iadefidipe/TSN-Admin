import { IconEdit, IconProfile } from "@/shared/components/icons"
import React from "react"
import { useSelector } from "react-redux"
import { AddButton } from "../edit/AddButton"
import { DefaultInput } from "../edit/DefaultInput"
import { DropdownInput } from "../edit/DropdownInput"
import { TextareaInput } from "../edit/TextareaInput"
import { ProfileHeader } from "./ProfileHeader"

export const PersonalInfo = () => {
  const { createInfoCurrentStep } = useSelector((state) => state.profile)
  const roles = ["Developer", "Programmer", "SEO"]
  const experience = ["0-1", "1+", "2+", "3+"]
  return (
    <div>
      <ProfileHeader
        image={"/img/profile/profile_calendar.png"}
        title={"Personal Information"}
        description={"Tell us about yourself so startups know who you are."}
        currentStep={createInfoCurrentStep}
      />
      <div className='block lg:flex items-start justify-between gap-10 py-10'>
        <div className='w-full lg:w-1/2'>
          <div className='flex items-center mb-6'>
            <div className='w-[120px] h-[120px] flex items-center justify-center rounded-full bg-[#1872F21A] mr-4'>
              <IconProfile />
            </div>
            <AddButton
              text='Change Profile Image'
              handleClick={() => null}
              icon={<IconEdit />}
            />
          </div>
          <DefaultInput
            placeholder='Deborah Dada'
            label={"Full name"}
            value=''
            handleChange={() => null}
          />
          <DefaultInput
            placeholder='Where are you located'
            label={"Location"}
            value=''
            handleChange={() => null}
          />
        </div>
        <div className='w-full lg:w-1/2'>
          <div className='flex-col lg:flex-row flex items-center gap-4'>
            <DropdownInput
              label={"Primary Role"}
              placeholder='Select role'
              handleChange={() => null}
              currentValue=''
              values={roles}
            />
            <DropdownInput
              label={"Years of experience"}
              placeholder='Select years of experience'
              handleChange={() => null}
              currentValue=''
              values={experience}
            />
          </div>
          <AddButton text='Add other Roles' handleClick={() => null} />
          <div className='mt-6'>
            <TextareaInput
              placeholder='Description about you'
              value=''
              handleChange={() => null}
              label='About You(Your Bio)'
              maxLength={"160"}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
