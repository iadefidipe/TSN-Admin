import React from "react"
import PropTypes from "prop-types"
import Image from "next/image"

export const IconHeader = ({ iconName, label, nav }) => {
  return (
    <div className='flex flex-col  gap-1'>
      <div className='flex items-center gap-3'>
        <Image
          src={`${process.env.deploymentPath}/icons/admin/${iconName}.svg`}
          width={32}
          height={32}
          alt=''
        />
        <h2 className='text-t-24 leading-[28px] font-medium capitalize '>
          {label}
        </h2>
      </div>

      {nav && (
        <p className='text-t-14 font-semi-mid capitalize text-[#808281] '>
          Home / <span className='font-bold text-[#05162E] '>{label}</span>
        </p>
      )}
    </div>
  )
}

IconHeader.propTypes = {
  iconName: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  nav: PropTypes.bool,
}
