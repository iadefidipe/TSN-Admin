import { Button } from "@/shared/components"
import { IconPlusAdd } from "@/shared/components/icons"
import { companyJobOpenings } from "@/shared/data/profile"
import React, { useState } from "react"
import { JobCard } from "./JobCard"

export const JobopeningsPage = () => {
  const [currentTab, setCurrentTab] = useState("Active")
  const tabs = [
    {
      title: "Active",
      id: 1,
    },
    {
      title: "Inactive",
      id: 2,
    },
  ]
  return (
    <>
      <div className='flex flex-wrap items-center justify-between mb-10 lg:mb-16'>
        <h1 className='text-3xl font-semibold text-[#353535] mb-3 lg:mb-0'>
          Job Openings
        </h1>
        <Button
          btnLabel='Add Job openings'
          handleClick={() => null}
          btnStyles={
            "!px-3 !py-2 text-base text-white gap-2 flex items-center opacity-100 !cursor-pointer !h-11"
          }
          leadingIcon={<IconPlusAdd />}
        />
      </div>
      <div className='flex items-center gap-4 border-b border-[#7D7D7D30] mb-11'>
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
      <div className='flex flex-wrap gap-x-4 gap-y-4 lg:gap-y-8'>
        {companyJobOpenings.map((job) => {
          return <JobCard {...job} />
        })}
      </div>
    </>
  )
}
