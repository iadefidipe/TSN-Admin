import Image from "next/image"
import React from "react"
import PropTypes from "prop-types"
import {
  IconBehance,
  IconCamera,
  IconDibble,
  IconFacebook,
  IconLinkedin,
  IconPin,
  IconTwitter,
} from "@/shared/components/icons"
import { useS3Upload } from "next-s3-upload"
import { userService } from "@/services/index"

export const CompanyHeader = ({
  banner,
  companyName,
  logo,
  companyTag,
  id,
  setClient,
  setOpenModal
}) => {
  let { uploadToS3 } = useS3Upload()
  let handleCoverChange = async (event) => {
    try {
      let { url } = await uploadToS3(event.target.files[0])
      if (url !== undefined) {
        const data = { cover_img: url }
        const candidate = await userService.uploadClientImg(id, data)

        setClient(candidate.data)
      }
    } catch (error) {
      console.error(error)
    }
  }
  let handleProfileChange = async (event) => {
    try {
      let { url } = await uploadToS3(event.target.files[0])
      if (url !== undefined) {
        const data = { company_logo: url }
        const candidate = await userService.uploadClientImg(id, data)
        setClient(candidate.data)
      }
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div className=' bg-white  rounded-tr-r-8 rounded-tl-r-8  relative '>
      <div
        className='w-full rounded-lg flex items-center justify-center bg-cover bg-center bg-no-repeat h-[180px] lg:h-[230px]  '
        style={{
          backgroundImage: `url(${
            banner || process.env.deploymentPath  + "/img/profile/default_profile_cover.jpg"
          })`,
        }}
      >
        <input
          type='file'
          name='cover'
          accept='.jpg,.png'
          id='cover'
          className='hidden'
          onChange={(e) => handleCoverChange(e)}
        />

        <label htmlFor='cover'>
          <IconCamera medium />
        </label>
      </div>

      <div
        className='absolute left-5 lg:left-10 -bottom-[60px] lg:-bottom-[-110px] w-[120px] lg:w-[150px] h-[120px] lg:h-[150px] rounded-full border-4 border-white bg-cover bg-center bg-no-repeat flex items-end justify-center customDropShadow '
        style={{
          backgroundImage: `url(${
            logo || process.env.deploymentPath  + "/img/profile/default_profile_img.png"
          })`,
        }}
      >
        <div className='z-10 -mb-5'>
          <input
            type='file'
            name='avatar'
            accept='.jpg,.png'
            id='avatar'
            className='hidden'
            onChange={(e) => handleProfileChange(e)}
          />
          <label htmlFor='avatar'>
            <IconCamera small />
          </label>
        </div>
      </div>

      <div
        className=' pt-6 pb-[112px] pl-[222px] flex justify-between '
      >
        <div className=''>
          <h2 className=' capitalize font-bold text-t-24  text-grey-2 '>
            {companyName}
          </h2>
          <p className=' text-t-16 font-regular text-grey-3  leading-5'>
            {companyTag}
          </p>
        </div>
        <div>
          {" "}
          <button
            className={` bg-blue flex items-center p-[14px] gap-[10px] rounded-r-8`}
            onClick={() => setOpenModal(true)}
          >
            <p className='text-white'>Edit Client</p>{" "}
          </button>
        </div>
      </div>
    </div>
  )
}

CompanyHeader.propTypes = {
  banner: PropTypes.any.isRequired,
  companyName: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  companyTag: PropTypes.string.isRequired,
}
