import React from "react"
import PropTypes from "prop-types"
import Image from "next/image"
import {
  IconMedalStar,
  IconNoteText,
  IconTimer,
} from "@/shared/components/icons"
import Link from "next/link"

export const GridCard = ({ title, image, note, time, score, slug }) => {
  return (
    <Link href={`/tsn/assessment/${slug}`} passHref>
      <div className='w-full bg-white rounded-lg p-4 cursor-pointer'>
        <div className='flex items-start justify-between'>
          <div className='relative w-[100px] h-[100px]'>
            <Image src={image} width={100} height={100} />
          </div>
          {score && <IconMedalStar width='40' height='40' medium={true} />}
        </div>
        <h4 className='text-lg outfit-m text-[#353535] mt-4 mb-5'>{title}</h4>
        {score ? (
          <>
            <span className='text-sm text-[#7D7D7D] mb-[2px]'>Score</span>
            <h5 className='text-2xl text-[#1872F2] outfit-b'>{score}%</h5>
          </>
        ) : (
          <>
            <div className='flex items-center gap-2 mb-2'>
              <IconNoteText colored={false} width='16' height='16' />
              <p className='text-[#7D7D7D] text-sm'>{note}</p>
            </div>
            <div className='flex items-center gap-2'>
              <IconTimer colored={false} width='16' height='16' />
              <p className='text-[#7D7D7D] text-sm'>{time}</p>
            </div>
          </>
        )}
      </div>
    </Link>
  )
}

