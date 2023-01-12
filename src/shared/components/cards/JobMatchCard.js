import Image from "next/image"
import React from "react"
import PropTypes from "prop-types"
import { ButtonColored, OrangeButton } from "../buttons"

export const JobMatchCard = ({percent}) => {
  return (
    <div className='font-manrope p-6 rounded-r-12 w-[370px]  shadow-match flex flex-col gap-6  '>
      <div className='flex flex-col gap-2 '>
        <div className='flex flex-col gap-1 '>
          <h4 className='text-t-18 font-medium leading-[30px]  text-[#08111F] '>
            Product Designer
          </h4>
          <div className='flex items-center  gap-3 '>
            <Image
              src={`${process.env.deploymentPath}/icons/global/icon-dot.svg`}
              alt=''
              width={8}
              height={8}
            />
            <span className='text-grey  text-t-16 font-regular '>
              3+ Years Experience
            </span>
          </div>
        </div>
        <div>
          <p className='text-grey  text-t-16 font-regular leading-[28px] '>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et...
          </p>
        </div>
      </div>
      <div className=' border-t-[1px] border-t-[#D7DBE1]   '></div>
      <div className="flex items-center justify-between" >
        <ButtonColored
          label='Contact'
          font='font-manrope'
          color='text-white'
          bg='bg-[#FF601B]'
          px='px-5'
          py='py-[6px]'
          radius='rounded-r-6'
        />

        { percent && <div>
          <h5 className="font-manrope font-bold text-blue text-t-20 " >{percent}%</h5>
        </div>}
      </div>
    </div>
  )
}


