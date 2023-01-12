import { Button } from "@/shared/components"
import { IconEdit, IconPin } from "@/shared/components/icons"
import { companyJobOpenings, jobsOpeningData } from "@/shared/data/profile"
import React from "react"
import { JobCard } from "./JobCard"
import { JobPostCard } from "./JobPostCard"

export const JobOpeningSinglePage = ({
  title,
  location,
  type,
  jobTags,
  about,
}) => {
  return (
    <>
      <div className='px-6 bg-white lg:px-10 py-11'>
        <div className='flex flex-wrap items-start justify-between'>
          <div className='mb-3 lg:mb-0'>
            <h1 className='text-[#353535] text-[40px] font-bold'>{title}</h1>
            <div className='flex items-center gap-4'>
              <div className='flex items-center gap-4'>
                <IconPin />
                {location}
              </div>
              <div className='flex items-center gap-4'>
                <div className='w-2 h-2 rounded bg-[#616974]' />
                {type}
              </div>
            </div>
          </div>
          {/* <Button
            btnLabel='Edit Job openings'
            handleClick={() => null}
            btnStyles={
              "!px-3 !py-2 text-base text-white gap-2 flex items-center opacity-100 !cursor-pointer !bg-[#FFECEA] !text-[#FF5B49] !h-11"
            }
            leadingIcon={<IconEdit />}
          /> */}
        </div>
        <h3 className='text-[#353535] text-xl font-semibold mt-6 mb-4'>
          Job Tags
        </h3>
        <div className='flex flex-wrap items-center gap-x-2 gap-y-4'>
          {jobTags?.split(" ").map((job, index) => {
            return (
              <div
                key={index}
                className='px-4 py-1 rounded-lg border-[0.5px] border-[#7D7D7D] text-sm'
              >
                {job}
              </div>
            )
          })}
        </div>
      </div>
      {/* <div className='mx-0 my-6 bg-white rounded-lg lg:mx-10'>
        <div className='flex items-center justify-between px-6 py-8'>
          <h4 className='text-[#353535] text-xl font-semibold'>
            Talent Matches
          </h4>
          <Button
            btnLabel='See all Matches'
            handleClick={() => null}
            btnStyles={
              "!px-3 !py-2 text-base text-white gap-2 flex items-center opacity-100 !cursor-pointer !bg-[#FFECEA] !text-[#FF5B49]"
            }
          />
        </div>
        <div className='flex gap-6 py-6 pl-6 overflow-x-auto lg:pl-10'>
          {jobsOpeningData.map((item) => {
            return <JobPostCard {...item} />
          })}
        </div>
      </div> */}
      <div className='p-6 mx-0 my-6 bg-white rounded-lg '>
        <h1 className='text-[#353535] text-xl font-semibold mb-4'>
          About The Job
        </h1>
        <p className='text-[#7D7D7D] text-base'>{about}</p>
        {/* <h3 className='text-[#111111] text-base font-semibold mt-4'>
          Requirements
        </h3>
        <p className='text-[#7D7D7D] text-base'>
          • At least 3 years of professional experience as a Product Designer
          <br />
          • Proven experience in all phases of the design process including user
          research, copywriting, wireframing, prototyping, visual design,
          interaction design, and usability testing
          <br />
          • UI/UX/Interaction Design experience is required
          <br />
          • Experience with eCommerce or Landing Page Design is a bonus
          <br />
          • Ability to collaborate with cross-functional team members is
          required
          <br />
          • Ability to collect and interpret both qualitative and quantitative
          feedback is required
          <br />
          • Experience with AR/VR is a strong advantage
          <br />
          • Full-time availability is a strong advantage
          <br />
        </p> */}
      </div>
      {/* 
      <div className='p-6 mx-0 my-6 bg-white rounded-lg lg:mx-10'>
        <div className='flex flex-wrap items-center justify-between'>
          <h1 className='text-[#353535] text-xl font-semibold mb-3 lg:mb-0'>
            Job openings
          </h1>
          <Button
            btnLabel='See all openings'
            btnStyles='!bg-[#FFECEA] !text-[#FF5B49] !px-3 !py-2 text-base opacity-100 !cursor-pointer !h-11'
            handleClick={() => router.push("/job-openings")}
          />
        </div>
        <div className='flex gap-6 py-6 overflow-x-auto '>
          {openings?.slice(0, 5).map((job) => {
            return (
              <JobCard
                title={job?.job_title}
                location={job?.work_place_type?.workplace_type}
                time={job?.date_modified}
                id={job?.job_opening_id}
              />
            )
          })}
        </div>
      </div> */}
    </>
  )
}
