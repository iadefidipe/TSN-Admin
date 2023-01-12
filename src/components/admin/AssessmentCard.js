import React from "react"
import timer from "../../../public/icons/admin/timer.svg"
import note from "../../../public/icons/admin/note-text.svg"
import Image from "next/image"

export const AssessmentCard = ({ name, questions, duration, image, handleClick }) => {
  return (
    <div className='  bg-white shadow w-[263px] rounded-r-8 p-4 flex flex-col gap-4 items-start ' onClick={() => handleClick()} >
      {image !== null && <Image src={image} alt='' width={100} height={100} />}
      <div className='flex flex-col gap-6'>
        <h3 className=' text-t-18 text-grey-2  leading-[18.36px] '>{name}</h3>
        <div className='flex flex-col gap-4 '>
          <div className=' flex items-center text-t-12 text-grey-3 gap-2'>
            <Image
              src={`${process.env.deploymentPath}/icons/admin/timer.svg`}
              alt=''
              width={16}
              height={16}
            />
            <span>{duration} minutes</span>
          </div>
          <div className=' flex items-center text-t-12 text-grey-3 gap-2 '>
            <Image
              src={`${process.env.deploymentPath}/icons/admin/note-text.svg`}
              alt=''
              width={16}
              height={16}
            />
            <span>Assessment needs to be completed in one take.</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AssessmentCard
