import { Button } from "@/shared/components"
import { companyJobOpenings } from "@/shared/data/profile"
import React from "react"
import { JobCard } from "./JobCard"

export const JobOpeningsCompany = () => {
  return (
    <div className='p-6 mx-0 my-6 bg-white rounded-lg lg:mx-10'>
      <div className='flex flex-wrap items-center justify-between'>
        <h1 className='text-[#353535] text-xl font-semibold mb-3 lg:mb-0'>
          Job openings
        </h1>
        <Button
          btnLabel='See all openings'
          btnStyles='!bg-[#FFECEA] !text-[#FF5B49] !px-3 !py-2 text-base opacity-100 !cursor-pointer !h-11'
        />
      </div>
      <div className='flex gap-6 py-6 overflow-x-auto '>
        {companyJobOpenings.map((job) => {
          return <JobCard {...job} />
        })}
      </div>
    </div>
  )
}
