import { clientSidebarLinks } from "@/shared/data/profile"
import { ProfileLayout } from "@/shared/components/layouts"
import React from "react"
import { MainContainer } from "@/shared/components/containers"
import { SectionHeaderButton } from "@/shared/components"

function details() {
  return (
    <ProfileLayout title='client' sidebarLinks={clientSidebarLinks}>
      <MainContainer>
        <div className=' pl-[38px] pt-6 pr-[42px] '>
          <SectionHeaderButton
            title={`Talent's Skill Badges`}
            btnTitle='Contact Talent'
            iconName='add-square'
            btnColor='bg-blue'
            textColor='text-white'
            titleTxt='text-t-24'
            weight='font-medium'
          />

          <div>
            <div></div>
          </div>
        </div>
      </MainContainer>
    </ProfileLayout>
  )
}

export default details
