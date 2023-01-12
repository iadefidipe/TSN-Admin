import React from "react"
import PropTypes from "prop-types"
import { IconAddButton } from "@/shared/components/icons"

export const AddButton = ({ text, handleClick, icon = <IconAddButton /> }) => {
  return (
    <button
      onClick={handleClick}
      className='flex gap-2 p-3 bg-[#FFECEA] rounded-lg  items-center text-base text-[#FF5B49]'
    >
      {icon}
      {text}
    </button>
  )
}

AddButton.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.element,
  handleClick: PropTypes.func.isRequired,
}
