import React from "react"
import PropTypes from "prop-types"
import Image from "next/image"
import moment from "moment"
import holder from "../../../public/icons/global/company_logo.svg"

export const ProfileContent = ({
  about,
  skills,
  education,
  experience,
  experienceAmount,
}) => {
  return (
    <div className='items-start block lg:flex gap-14'>
      <div className='w-full lg:w-1/2'>
        <div className='mb-9'>
          <h3 className='text-[#353535] text-xl mb-4 font-semibold'>About</h3>
          <p className='text-[#7D7D7D] text-sm'>{about}</p>
        </div>
        <div className='mb-9'>
          <h3 className='text-[#353535] text-xl mb-4 font-semibold'>Skills</h3>
          <div className='flex flex-wrap gap-x-2 gap-y-4'>
            {skills?.split(' ').map((skill, index) => {
              return (
                <div
                  key={index}
                  className="border-[0.5px] rounded-lg py-1 px-4 border-[#7D7D7D] text-sm text-[#353535]"
                >
                  {skill}
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <h3 className='text-[#353535] text-xl mb-4 font-semibold'>
            Education
          </h3>
          <div>
             {education != undefined && education?.map((item, index) => {
              return (
                <div
                  key={index}
                  className='flex items-center justify-between mb-8'
                >
                  <div>
                    <h4 className='text-[#353535] text-base font-medium'>
                      {item.institution}
                    </h4>
                    {item.course_of_study && (
                      <p className='text-sm text-[#353535]'>
                        {item.course_of_study}
                      </p>
                    )}
                  </div>
                  <h5 className='text-base text-[#353535]'>
                    ({moment(item.end_date).format("YYYY")})
                  </h5>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div className='w-full lg:w-1/2'>
        <div className='flex items-center justify-between'>
          <h3 className='text-[#353535] text-xl mb-8 font-semibold'>
            Experience
          </h3>
          {/* <h4 className='text-[#1872F2] text-xl font-semibold'>
            {experienceAmount}
          </h4> */}
        </div>
        {experience != undefined && experience?.map((item, index) => {
          return (
            <div key={index} className='mb-8'>
              <div className='flex items-center gap-6 mb-4'>
                {item.company_logo !== null ? (
                  <Image
                    width={54}
                    height={54}
                    src={item.company_logo}
                    alt={item.company}
                  />
                ) : (
                  <Image src={holder} alt={item.company} />
                )}
                <div>
                  <h5 className='text-[#353535] text-base outfit-m '>
                    {item.title}
                  </h5>
                  <p className='text-base text-[#7D7D7D] outfit-m'>
                    {item.company}
                  </p>
                </div>
              </div>
              <span className='mb-4 text-sm'>
                {item.description}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}


