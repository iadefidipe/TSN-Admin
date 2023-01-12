import React, { useState } from "react"
import PropTypes from "prop-types"
import { ProfileContent } from "../ProfileContent"
import { CoverContent } from "../edit/CoverContent"
import { Button } from "@/shared/components"
import { IconPlusAdd } from "@/shared/components/icons"
import { GridCard } from "@/components/assessments/GridCard"
// import { skillsBadge } from "@/shared/profile/companyData"
import { Modal } from "@/shared/components/Modal"
import { useRouter } from "next/router"

export const SkillsBadge = ({ profile, cover }) => {
  const [open, setOpen] = useState(false)
  const [currentTab, setCurrentTab] = useState(profile.title)
  const tabs = [
    {
      title: profile.title,
      id: 1,
    },
    {
      title: cover.title,
      id: 3,
    },
  ]
  const router = useRouter()
 
  return (
    <div>
      <div className='flex flex-wrap items-center justify-between mb-6'>
        <h1 className='text-2xl font-semibold text-[#08111F] mb-3 lg:mb-0'>
          Talent’s Skill Badges
        </h1>
        <Button
          btnLabel='Contact Talent'
          handleClick={() => setOpen(true)}
          btnStyles={
            "!px-3 !py-2 text-base text-white gap-2 flex items-center !opacity-100 !cursor-pointer !h-11"
          }
          leadingIcon={<IconPlusAdd />}
        />
      </div>
      {/* <div className='grid grid-cols-1 gap-3 mb-4 lg:gap-6 lg:grid-cols-3 xl:grid-cols-4'>
        {skillsBadge.map((item) => {
          return <GridCard {...item} key={item.id} />
        })}
      </div> */}
      <div className='flex items-center gap-4 border-b border-[#7D7D7D30]'>
        {tabs.map((tab, index) => {
          return (
            <button
              className={`p-2 ${
                currentTab === tab.title
                  ? "text-[#1872F2] font-bold border-b border-[#1872F2]"
                  : "text-[#7D7D7D]"
              } text-base -mb-[1px] capitalize`}
              key={tab.title + tab.id}
              onClick={() => setCurrentTab(tab.title)}
            >
              {tab.title}
            </button>
          )
        })}
      </div>
      <div className='py-6'>
        {currentTab === profile.title && <ProfileContent {...profile} />}
        {currentTab === cover.title && <CoverContent {...cover} />}
      </div>
      <Modal
        title='Talent will be Contacted'
        description='Our Recruiters will reach out to the talent and reach out to you to proceed with the engagement'
        open={open}
        handleClose={() => {
          setOpen(false)
          router.push("/company/profile/job-openings")
        }}
        image=''
        buttonText='Go to Job Opening'
      />
    </div>
  )
}

SkillsBadge.propTypes = {
  profile: PropTypes.object.isRequired,
  cover: PropTypes.object.isRequired,
}
