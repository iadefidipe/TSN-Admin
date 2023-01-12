import { ProfileLayout } from "@/shared/components/layouts"
import React from "react"
import { clientSidebarLinks } from "@/shared/data/profile"
import {
  MainContainer,
  SecContainer,
} from "@/shared/components/containers"
import { JobDescTag } from "@/shared/components"
import { SectionHeaderButton } from "@/shared/components"
import { ButtonColored } from "@/shared/components/buttons"
import { JobMatchCard, JobOpeningCard } from "@/shared/components/cards"
import Image from "next/image"
import { ConfirmModal } from "@/shared/components/modal"

function details() {
  return (
    <ProfileLayout title='client' sidebarLinks={clientSidebarLinks}>
      <MainContainer bg='bg-grey-6'>
        <div className='flex flex-col gap-6 bg-white rounded-tl-r-8 ronded-tr-r-8  pb-[25px] pt-[43px] px-6 '>
          <SectionHeaderButton
            title='Product Designer'
            btnTitle='Edit Job openings'
            iconName='edit'
            btnColor='bg-btnBg'
            textColor='text-sec-peach'
            titleTxt='text-t-40'
            weight='font-bold'
          />
          <div className='flex items-center gap-4'>
            <JobDescTag
              iconName='icon-location'
              text='On-site'
              width={13}
              height={16}
              gap='gap-[6px]'
              size='text-t-24'
            />
            <JobDescTag
              iconName='icon-dot'
              text='Full time'
              width={8}
              height={8}
              gap='gap-[12px]'
              size='text-t-24'
            />
          </div>
          <div className='flex flex-col gap-4'>
            <h3 className='text-t-20 font-medium text-grey-2  '>Job Tags</h3>
            <div className='flex flex-wrap gap-x-2 gap-y-4'>
              <div className='  rounded-r-8  py-1 px-4 border-[1px] border-grey-3 '>
                User Interface design
              </div>
            </div>
          </div>
        </div>

        <div className='pt-6 pb-[72px] px-10 flex flex-col gap-6'>
          <SecContainer>
            <div className='flex flex-col gap-[27px] '>
              <div className=' flex items-center justify-between '>
                <h3 className=' font-medium text-grey-2 text-t-20 '>
                  Talent Matches
                </h3>
                <ButtonColored
                  label='See All Openings'
                  bg='bg-peach-2'
                  color='text-sec-peach'
                />
              </div>
              <div>
                <JobMatchCard />
              </div>
            </div>
          </SecContainer>

          <SecContainer>
            <div className='flex flex-col gap-4 '>
              <h3 className=' font-medium text-t-20  '>About The Job </h3>
              <div className=' text-grey-3 font-regular flex flex-col gap-6 '>
                <p className=''>
                  Slack designers work with speed and efficiency to deliver the
                  highest quality of work. We are looking for someone who is
                  passionate about their client’s business, and ready to work on
                  exciting projects with Fortune 500 companies and Silicon
                  Valley startups, with great rates and zero hassles. If you are
                  looking for a place to advance your career, enhance your skill
                  set, and build connections around the globe, Slack is right
                  for you. Requirements• At least 3 years of professional
                  experience as a Product Designer • Proven experience in all
                  phases of the design process including user research,
                  copywriting, wireframing, prototyping, visual design,
                  interaction design, and usability testing • UI/UX/Interaction
                  Design experience is required • Experience with eCommerce or
                  Landing Page Design is a bonus • Ability to collaborate with
                  cross-functional team members is required • Ability to collect
                  and interpret both qualitative and quantitative feedback is
                  required • Experience with AR/VR is a strong advantage •
                  Full-time availability is a strong advantage
                </p>
                <div>
                  <h4 className='font-semi-mid text-grey-2'>Requirement</h4>
                  <div>
                    <p>
                      • At least 3 years of professional experience as a Product
                      Designer
                    </p>{" "}
                    <p>
                      • Proven experience in all phases of the design process
                      including user research, copywriting, wireframing,
                      prototyping, visual design, interaction design, and
                      usability testing
                    </p>
                    <p>
                      • UI/UX/Interaction Design experience is required •
                      Experience with eCommerce or Landing Page Design is a
                      bonus
                    </p>
                    <p>
                      • Ability to collaborate with cross-functional team
                      members is required
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SecContainer>

          <SecContainer>
            <div className='flex flex-col gap-[45px]'>
              <div className=' flex items-center justify-between '>
                <h3 className=' font-medium text-grey-2 text-t-20 '>Other</h3>
                <ButtonColored
                  label='See All Openings'
                  bg='bg-peach-2'
                  color='text-sec-peach'
                />
              </div>
              <JobOpeningCard
                title='Senior Product Designer, Music Promotion'
                timePosted='10hrs ago'
                jobDesc='On-site'
                jobType='Full time'
                jobLocation="Remote"
              />
            </div>
          </SecContainer>
        </div>
      </MainContainer>
    </ProfileLayout>
  )
}

export default details
