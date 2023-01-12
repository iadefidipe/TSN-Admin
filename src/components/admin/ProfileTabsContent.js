import React, { useState } from "react"
import PropTypes from "prop-types"
import { ProfileContent } from "@/components/profile/ProfileContent"
import { UploadResume } from "@/components/profile/create"
import { CoverContent } from "@/components/profile/edit/CoverContent"
import { BadgeContent } from "./BadgeContent"

export const ProfileTabsContent = ({ profile, resume, cover }) => {
  const [currentTab, setCurrentTab] = useState(profile.title)
  const tabs = [
    {
      title: profile.title,
      id: 1,
    },
    {
      title: resume.title,
      id: 2,
    },
    {
      title: cover.title,
      id: 3,
    },
    // {
    //   title: "badges",
    //   id: 4,
    // },
  ]

  return (
    <div className='px-6 lg:px-10'>
      <div className='flex items-center gap-4 border-b border-[#7D7D7D30]'>
        {tabs.map((tab) => {
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
      <div className='py-6  '>
        {currentTab === profile.title && <ProfileContent {...profile} />}
        {currentTab === resume.title && (
          <div className=' flex '>
            <div className='max-w-[700px] flex-1 '>
              <UploadResume />
            </div>
            <div className='flex-1 '>
              {resume.content !== null && (
                <object
                  data={resume.content}
                  width='100%'
                  height={600}
                ></object>
              )}
            </div>
          </div>
        )}
        {currentTab === cover.title && <CoverContent {...cover} />}
        {currentTab === "badges" && <BadgeContent />}
      </div>
    </div>
  )
}

