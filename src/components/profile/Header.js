import { useState, useEffect } from "react"
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
import { BlueButtonRounded } from "@/shared/components/buttons/BlueButtonRounded"
import { ButtonIcon } from "@/shared/components"
import Image from "next/image"
import Link from "next/link"
import { useS3Upload } from "next-s3-upload"
import { userService } from "@/services/index"
import { useAppDispatch, useAppSelector } from "src/store"
import { setCurrentCanditate } from "src/store/Candidate"
 
export const Header = ({
  fullname,
  profile_img,
  cover_img,
  location,
  skill,
  admin,
  urls,
  email,
  setOpenModal,
  id,
  setCandidate,
}) => {
  const logo = ["twitter", "Github", "instagram", "LinkedIn"]

  let { uploadToS3 } = useS3Upload()

  let handleCoverChange = async (event) => {
    try {
      let { url } = await uploadToS3(event.target.files[0])
      if (url !== undefined) {
        const data = { cover_img: url }
        const candidate = await userService.uploadImg(id, data)
      
        setCandidate(candidate.data)

      }
    } catch (error) {
      console.error(error)
    }
  }
  let handleProfileChange = async (event) => {
    try {
      let { url } = await uploadToS3(event.target.files[0])
      if (url !== undefined) {
        const data = { profile_img: url }
        const candidate = await userService.uploadImg(id, data)
        setCandidate(candidate.data)
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <div className='relative'>
        <div
          className='w-full rounded-lg flex items-center justify-center bg-cover bg-center bg-no-repeat h-[180px] lg:h-[230px]  '
          style={{
            backgroundImage: `url(${
              cover_img || process.env.deploymentPath + "/img/profile/default_profile_cover.jpg"
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
          className='absolute left-5 lg:left-10 -bottom-[60px] lg:-bottom-[75px] w-[120px] lg:w-[150px] h-[120px] lg:h-[150px] rounded-full border-4 border-white bg-cover bg-center bg-no-repeat flex items-end justify-center customDropShadow '
          style={{
            backgroundImage: `url(${
              profile_img || process.env.deploymentPath + "/img/profile/default_profile_img.png"
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
      </div>
      <div className='block lg:flex items-start justify-between px-6 pt-20 lg:pl-[222px] lg:pr-10 lg:pt-6 pb-9  '>
        <div className='mb-4 lg:mb-0  w-[500px] '>
          <h1 className='text-[#353535] text-2xl outfit-b'>{fullname}</h1>
          <h3 className='my-2 text-base text-[#7D7D7D] outfit-m'>{skill}</h3>
          <div className='flex items-center gap-2'>
            <IconPin />
            <h2 className='text-base text-[#616974]'>{location}</h2>
          </div>
          <div className='flex items-center gap-2 mt-2'>
            {urls?.map((item, index) => (
              <Link href={item.url}>
                {logo.includes(item.url_name) && (
                  <Image
                    src={`${process.env.deploymentPath}/icons/icon/${item.url_name}.svg`}
                    alt={item.url_name}
                    width={20}
                    height={20}
                  />
                )}
              </Link>
            ))}
          </div>
        </div>
        {!admin ? (
          <BlueButtonRounded text='Edit Profile' handleClick={() => null} />
        ) : (
          <div className='flex flex-row-reverse gap-3'>
            <a
              className={` bg-blue flex items-center p-[14px] gap-[10px] rounded-r-8`}
              href={`mailto:${email}`}
            >
              <Image
                src={`${process.env.deploymentPath}/icons/profile/add-square.svg`}
                alt='Contact Talent'
                width={20}
                height={20}
              />
              <p className='text-white'>Contact Talent</p>{" "}
            </a>
            <button
              className={` bg-blue flex items-center p-[14px] gap-[10px] rounded-r-8`}
              onClick={() => setOpenModal(true)}
            >
              <p className='text-white'>Edit Talent</p>{" "}
            </button>
            
          </div>
        )}
      </div>
    </>
  )
}

Header.propTypes = {
  fullname: PropTypes.string.isRequired,
  profile_img: PropTypes.string.isRequired,
  cover_img: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  skill: PropTypes.string.isRequired,
  admin: PropTypes.bool,
}
