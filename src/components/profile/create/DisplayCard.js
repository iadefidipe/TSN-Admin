import React from "react"
import PropTypes from "prop-types"
import { IconClose, IconPin } from "@/shared/components/icons"
import Image from "next/image"

export const DisplayCard = ({
  image,
  title,
  description,
  location,
  company,
  experience,
}) => {
  return (
    <div className='w-full bg-[#FFF5F4] p-4'>
      <div className='flex items-start justify-between'>
        <div className='flex gap-4 items-center'>
          {image && (
            <div className='w-12 h-12 relative'>
              <Image src={image} width={48} height={48} />
            </div>
          )}
          <div>
            <h3 className='text-[#353535] text-lg font-medium'>{company}</h3>
            <p className='flex gap-2 items-center text-base font-light'>
              <IconPin />
              {location}
              <span className='w-3 h-3 rounded-full bg-[#35353580]' />
              {experience}
            </p>
          </div>
        </div>
        <IconClose />
      </div>
      <h2 className='text-base text-[#353535] font-medium mt-4 mb-2'>
        {title}
      </h2>
      <p className='text-base text-[#353535] font-light'>{description}</p>
    </div>
  )
}

DisplayCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  experience: PropTypes.string.isRequired,
}
