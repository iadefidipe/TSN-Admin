import Image from "next/image"

import { uploadResumeHelper } from "src/helpers/profile"
import { BlueButton } from "@/shared/components/buttons/BlueButton"
import { useDispatch } from "react-redux"
import { setIncreaseCreateInfoCurrentStep } from "src/store/profile"
import { Modal } from "../../../shared/components/Modal"
import { useState } from "react"

export const UploadResumeBox = () => {
  const {
    dragActive,
    inputRef,
    handleDrag,
    handleDrop,
    handleChange,
    onButtonClick,
  } = uploadResumeHelper()
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)
  return (
    <>
      <form
        className='relative'
        onDragEnter={handleDrag}
        onSubmit={(e) => e.preventDefault()}
      > 
        <input
          ref={inputRef}
          type='file'
          disabled
          className='hidden'
          multiple={true}
          onChange={handleChange}
        />
        <div className='bg-[#FFF5F4] rounded-b-lg py-6 mb-[14px]'>
          <label className={dragActive ? "drag-active" : ""}>
            <div
              className='flex flex-col justify-center items-center'
              onClick={onButtonClick}
            >
              <div className='w-16 h-16 mb-[13.33px]'>
                <Image
                  src={`${process.env.deploymentPath}/icons/profile/upload-resume_icon.svg`}
                  width={64}
                  height={64}
                  alt='upload resume icon'
                />
              </div>
              <p className='w-[165px] mx-auto text-center text-[#353535] text-sm outfit-m mb-6'>
                Drag and Drop or Browse to Choose file
              </p>

              <span className='text-center text-[#7D7D7D] text-xs'>
                Supported files .pdf, .docs
              </span>
            </div>
          </label>
        </div>

        {/* <span className='text-[#353535] outfit-l pl-[27px] mb-[22px] inline-block'>
          Or upload from a URL
        </span> */}

        <div className='flex flex-col items-end'>
          {/* <input
            type='text'
            className='w-full h-[54px] bg-[#F4F4F4] outline-none pl-6 text-[#7D7D7D] outfit-l text-sm mb-6'
            placeholder='Add the file URL'
          /> */}

          {/* <BlueButton text='Submit' handleClick={() => setOpen(true)} /> */}
        </div>

        {dragActive && (
          <div
            disabled
            className='absolute w-full h-full top-0 left-0'
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          ></div>
        )}
      </form>
      <Modal
        title='Upload Successful'
        description='Your resume has successfully been uploaded to your profile.'
        open={open}
        handleClose={() => {
          setOpen(false)
          dispatch(setIncreaseCreateInfoCurrentStep())
        }}
        image=''
        buttonText='Done'
      />
    </>
  )
}
 