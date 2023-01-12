import React from "react"
import PropTypes from "prop-types"
import Image from "next/image"
import { IconMedalStar, IconProfileUser } from "@/shared/components/icons"

export const SingleAssessmentHeader = ({
  title,
  image,
  amountTaken,
  score,
  description,
}) => {
  function kFormatter(num) {
    return Math.abs(num) > 999
      ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
      : Math.sign(num) * Math.abs(num)
  }

  return (
    <>
      <div className='flex items-start justify-between'>
        <div className='block lg:flex items-center gap-6'>
          <div className='w-28 h-28 lg:w-[180px] lg:h-[180px] relative '>
            <Image src={image} layout='fill' />
          </div>
          <div>
            <h1 className='text-[#353535] text-2xl lg:text-3xl xl:text-4xl outfit-m mt-2 lg:mt-0 mb-1 lg:mb-3'>
              {title}
            </h1>
            <div className='px-3 py-2 bg-[#FFECEA] rounded-xl gap-2 flex items-center w-fit'>
              <IconProfileUser />
              <span className='text-sm text-[#FF5B49]'>
                {kFormatter(amountTaken)}+ Token this
              </span>
            </div>
          </div>
        </div>
        {score && <IconMedalStar width='80' height='80' big={true} />}
      </div>
      <p className='text-xl text-[#7D7D7D] my-8 font-light'>{description}</p>
    </>
  )
}

SingleAssessmentHeader.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  amountTaken: PropTypes.number.isRequired,
  score: PropTypes.number,
}
