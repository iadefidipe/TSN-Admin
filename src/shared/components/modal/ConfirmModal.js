import Image from "next/image"
import React from "react"
import check from "../../../../public/icons/global/icon-modal.svg"
import PropTypes from "prop-types"
import { ModalButton } from "../buttons"

export const ConfirmModal = ({ title, btnLabel, subtext, clickFunc }) => {
  return (
    <div className='bg-modalBg absolute h-screen top-0 left-0 bottom-0 right-0 z-50 flex items-center justify-center  overflow-auto '>
      <div className=' p-6 flex flex-col items-center justify-center bg-white w-[500px] '>
        <div>
          <Image
            src={`${process.env.deploymentPath}/icons/global/icon-modal.svg`}
            alt=''
            width={220}
            height={220}
          />
        </div>
        <div className='flex flex-col  gap-[22px]  '>
          <h2 className=' text-h2 font-medium text-grey-2 text-center '>
            {title}
          </h2>

          <p className='text-grey-3 leading-5 font-regular text-center text-t-16  '>
            {subtext}
          </p>
        </div>
        <div>
          <ModalButton label={btnLabel} handleClick={clickFunc} />
        </div>
      </div>
    </div>
  )
}


