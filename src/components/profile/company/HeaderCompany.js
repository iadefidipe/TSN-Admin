import React from "react"
import PropTypes from "prop-types"
import {
  IconBehance,
  IconCamera,
  IconDibble,
  IconFacebook,
  IconLinkedin,
  IconPlusAdd,
  IconTwitter,
} from "@/shared/components/icons"
import { Button } from "@/shared/components"

export const HeaderCompany = ({
  company_name,
  company_description,
  company_image,
  background_image,
}) => {
  return (
    <>
      <div className='relative'>
        <div
          className='w-full rounded-lg flex items-center justify-center bg-cover bg-center bg-no-repeat h-[180px] lg:h-[230px]'
          style={{ backgroundImage: `url(${background_image || process.env.deploymentPath+'/img/profile/default_profile_cover.jpg'})` }}
        >
          {/* <IconCamera medium /> */}
        </div>
        <div
          className='absolute left-5 lg:left-10 -bottom-[60px] lg:-bottom-[75px] w-[120px] lg:w-[150px] h-[120px] lg:h-[150px] rounded-full border-4 border-white bg-cover bg-center bg-no-repeat flex items-end justify-center customDropShadow'
          style={{ backgroundImage: `url(${
            company_image || 
            process.env.deploymentPath+'/img/profile/default_profile_img.png'})` }}
        >
          <div className='z-10 -mb-5'>
            {/* <IconCamera small />  */}
          </div>
        </div>
      </div>
      <div className='block lg:flex items-start justify-between px-6 pt-20 lg:pl-[222px] lg:pr-10 lg:pt-6 pb-9 bg-white'>
        <div className='mb-4 lg:mb-0'>
          <h1 className='text-[#353535] text-2xl outfit-b'>{company_name}</h1>
          <p className='mt-2 mb-8 text-base text-[#7D7D7D] outfit-m w-full lg:w-96'>
            {company_description}
          </p>
          <div className='flex items-center gap-2 mt-2'>
            <IconTwitter />
            <IconFacebook />
            <IconLinkedin />
            <IconDibble />
            <IconBehance />
          </div>
        </div>
        <Button
          btnLabel='Add Job openings'
          handleClick={() => null}
          btnStyles={
            "!px-3 !py-2 text-base text-white gap-2 flex items-center opacity-100 !cursor-pointer !h-12"
          }
          leadingIcon={<IconPlusAdd />}
        />
      </div>
    </>
  )
}

HeaderCompany.propTypes = {
  company_name: PropTypes.string.isRequired,
  company_description: PropTypes.string.isRequired,
  company_image: PropTypes.string.isRequired,
  background_image: PropTypes.string.isRequired,
}
