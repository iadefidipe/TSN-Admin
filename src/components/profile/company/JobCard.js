import { IconClock, IconPin } from "@/shared/components/icons"
import React from "react"
import PropTypes from "prop-types"

export const JobCard = ({ title, location, period, time }) => {
  return (
    <div className='rounded-lg bg-white drop-shadow-[0_1px_4px_rgba(17,17,17,0.12)] w-[95%] mx-auto lg:mx-0 lg:!w-[220px] !h-40 p-3'>
      <h2 className='h-12 overflow-hidden whitespace-nowrap line-clamp-2 text-ellipsis text-lg text-[#353535] font-medium'>
        {title}
      </h2>
      <div className='flex items-center justify-between mb-8'>
        <div className='flex items-center gap-2'>
          <IconPin />
          {location}
        </div>
        <div className='flex items-center gap-2'>
          <div className='w-2 h-2 rounded bg-[#616974]' />
          {period}
        </div>
      </div>
      <div className='flex items-center gap-2'>
        <IconClock />
        {time}
      </div>
    </div>
  )
}

