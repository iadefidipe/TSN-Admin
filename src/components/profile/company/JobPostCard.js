import { Button } from "@/shared/components"
import React from "react"
import PropTypes from "prop-types"

export const JobPostCard = ({ title, description, period }) => {
  return (
    <div className='rounded-lg bg-white drop-shadow-[0_1px_4px_rgba(17,17,17,0.12)] min-w-full lg:!min-w-[370px] !min-h-[290px] !max-w-[370px] !max-h-[290px] p-6'>
      <h2 className='overflow-hidden whitespace-nowrap line-clamp-1 text-ellipsis text-lg text-[#08111F] font-medium'>
        {title}
      </h2>
      <div className='flex items-center gap-2'>
        <div className='w-2 h-2 rounded bg-[#616974]' />
        {period}
      </div>
      <div className='text-[#616974] text-base'>
        {description.slice(0, 100)}...
      </div>
      <div className='w-full h-[1px] bg-[#D7DBE1] my-6' />
      <Button
        btnLabel='Contact'
        btnStyles='!bg-[#FF601B] !text-white !text-base !opacity-100 !h-11'
      />
    </div>
  )
}

JobPostCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  period: PropTypes.string.isRequired,
}
