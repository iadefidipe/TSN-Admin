import React from "react"
import PropTypes from "prop-types"
import Image from "next/image"

export const ButtonIcon = ({ iconName, label, btnBg, textClr, handleClick }) => {
  return (
    <button
      className={`${btnBg}  flex items-center p-[14px] gap-[10px] rounded-r-8`}
      onClick={() => handleClick()}
    >
      <Image
        src={`${process.env.deploymentPath}/icons/profile/${iconName}.svg`}
        alt={label}
        width={20}
        height={20}
      />

      <p className={`${textClr}`}>{label}</p>
    </button>
  )
}

