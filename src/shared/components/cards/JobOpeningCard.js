import React from "react"
import { JobDescTag } from "@/shared/components"
import PropTypes from "prop-types"
import Link from "next/link"
import { useAppDispatch } from "src/store"
import { getClient } from "src/store/client"

export const JobOpeningCard = ({
  title,
  timePosted,
  jobType,
  jobDesc,
  jobLocation,
  id,
  clientId,
}) => {
  const dispatch = useAppDispatch()

  const handleClient = () => {
    if (clientId) {
      localStorage.setItem("client", JSON.stringify(clientId))
    }
    // dispatch(getClient(clientId))
  }
  
 
  return (
    <Link href={{pathname:`/job-opening/${id}`, query:{openingID: id}}}>
      <div
        className=' rounded-r-8 bg-white pt-3 pb-[18px] px-[11px] shadow-opening max-w-[220px] flex flex-col gap-[33px]  max-h-[160px] '
        onClick={() => clientId && handleClient()}
      >
        <div className='flex flex-col gap-2 '>
          <h3 className=' text-grey-2 text-t-18  font-semi-mid'>{title}123</h3>
          <div className='  flex gap-[30px] '>
            <JobDescTag
              iconName='icon-location'
              text={jobLocation}
              width={13}
              height={16}
              gap='gap-[6px]'
              employ
            />
            <JobDescTag
              iconName='icon-dot'
              text={jobType}
              width={8}
              height={8}
              gap='gap-[12px]'
              work
            />
          </div>
        </div>
        <JobDescTag
          iconName='clock'
          text={timePosted}
          width={16}
          height={16}
          gap='gap-[8px]'
          date
        />
      </div>
    </Link>
  )
}

export default JobOpeningCard

