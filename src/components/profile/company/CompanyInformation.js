import { IconEdit, IconProfile } from "@/shared/components/icons"
import React from "react"
import { useSelector } from "react-redux"
import { ProfileHeader } from "../create/ProfileHeader"
import { AddButton } from "../edit/AddButton"
import { DefaultInput } from "../edit/DefaultInput"
import { DropdownInput } from "../edit/DropdownInput"
import { TextareaInput } from "../edit/TextareaInput"

export const CompanyInformation = () => {
  const { createInfoCurrentStepCompany } = useSelector((state) => state.profile)
  const companyType = [
    "Type 1",
    "Type 2",
    "Type 3",
    "Type 4",
    "Type 5",
    "Type 5",
  ]
  const companySize = [
    "Size 1",
    "Size 2",
    "Size 3",
    "Size 4",
    "Size 5",
    "Size 5",
  ]
  return (
    <div>
      {" "}
      <ProfileHeader
        image={"/img/profile/profile_cover.png"}
        title={"Company Personal Information"}
        description={"Tell People about Your Company"}
        currentStep={createInfoCurrentStepCompany}
        company={true}
      />
      <div className='block lg:flex items-start justify-between gap-10 py-10'>
        <div className='w-full lg:w-1/2'>
          <div className='flex items-center mb-6'>
            <div className='w-[120px] h-[120px] flex items-center justify-center rounded-full bg-[#1872F21A] mr-4'>
              <IconProfile />
            </div>
            <AddButton
              text='Upload Company Logo'
              handleClick={() => null}
              icon={<IconEdit />}
            />
          </div>
          <DefaultInput
            placeholder='Add your company’s name'
            label={"Name"}
            value=''
            handleChange={() => null}
          />
          <DefaultInput
            placeholder='Where are you located'
            label={"Location"}
            value=''
            handleChange={() => null}
          />
          <DefaultInput
            placeholder='Begin with http:// or www.'
            label={"Website"}
            value=''
            handleChange={() => null}
          />
          <DropdownInput
            label={"Company Type"}
            placeholder='Select type'
            handleChange={() => null}
            currentValue=''
            values={companyType}
          />
        </div>
        <div className='w-full lg:w-1/2'>
          <DropdownInput
            label={"Company Size"}
            placeholder='Select size'
            handleChange={() => null}
            currentValue=''
            values={companySize}
          />
          <div className='mt-4'>
            <TextareaInput
              placeholder='Enter your company tagline...'
              value=''
              handleChange={() => null}
              label='Tagline'
              maxLength={"160"}
            />
          </div>
          <div className='mt-6'>
            <TextareaInput
              placeholder='More about the company'
              value=''
              handleChange={() => null}
              label='About'
              maxLength={"160"}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
