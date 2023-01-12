import Image from "next/image"
import PropTypes from "prop-types"
import React from "react"
import { IconMedalStar } from "@/shared/components/icons"

export const BadgeCard = ({ image, score, title }) => {
  return (
    <div className='max-w-[289px] hover:shadow bg-white rounded-lg p-4 cursor-pointer'>
      <div className='flex items-start justify-between'>
        <div className='relative w-[100px] h-[100px]'>
          <Image src={image} width={100} height={100} />
        </div>
        <IconMedalStar width='40' height='40' medium={true} />
      </div>
      <h4 className='capitalize  text-lg outfit-m text-[#353535] mt-4 mb-5'>
        python assessment
      </h4>

      <>
        <span className='text-sm text-[#7D7D7D] mb-[2px]'>Score</span>
        <h5 className='text-2xl text-[#1872F2] outfit-b'>92%</h5>
      </>
    </div>
  )
}
