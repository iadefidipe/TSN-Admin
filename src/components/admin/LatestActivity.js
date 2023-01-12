import React from "react"
import PropTypes from "prop-types"
import Image from "next/image"
import { userService } from "@/services/index"
import { useEffect, useState } from "react"
import moment from "moment"

export const LatestActivity = () => {
  const [activity, setActivity] = useState([])
  const getData = async () => {
    const activity = await userService.getLatestActivity()
    setActivity(activity.data)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className='bg-white rounded-r-8 p-5 flex flex-col gap-5 '>
      <div>
        <h3 className='text-t-18 font-bold '>Latest Activity</h3>
        <p className='text-t-14 font-semi-mid text-[#808281]'>Last 30 Days</p>
      </div>

      <div>
        {activity?.map((activity, index) => (
          <div
            key={index}
            className='p-[10px]  rounded-r-8 w-[372px]  flex gap-4   even:bg-[#F6F8FA] '
          >
            <div>
              {activity.client_profile.company_logo && (
                <Image
                  src={activity.client_profile.company_logo}
                  alt=''
                  width={44}
                  height={44}
                  className='rounded-full '
                />
              )}
            </div>
            <div>
              <h5 className=' capitalize font-bold text-[#05162E] text-t-16  '>
                {activity.position_match_status.position_match_status}
              </h5>
              <p className=' text-t-12 mt-1 mb-[6px] '>
                {activity.client_profile.company_name} for music promoter{" "}
                {activity.job_opening.job_title}
              </p>
              <p className=' text-t-12 text-[#808281] '>{ moment(activity.date_modified).format('MM/DD/YY') }</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

LatestActivity.propTypes = {
  data: PropTypes.array.isRequired,
}
