import Image from "next/image"
import React from "react"
import PropTypes from "prop-types"

export const AdminStatTile = ({ control, label, value }) => {
  return (
    <div className='py-[26px] pl-4 pr-8  rounded-r-8 bg-white w-[360px] flex items-center justify-between '>
      <div className='flex items-center gap-[10px] '>
        <Image
          src={`${process.env.deploymentPath}/icons/admin/stats-${control}.svg`}
          width={48}
          height={48}
          alt=''
        />
        <p className='text-t-14 text-[#808281] font-semi-mid leading-5 capitalize '>
          {control} {label}
        </p>
      </div>
      <div>
        <h3 className=' font-bold txt-t-24 leading-7   '>{value}</h3>
      </div>
    </div>
  )
}

AdminStatTile.propTypes = {
  control: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
}
