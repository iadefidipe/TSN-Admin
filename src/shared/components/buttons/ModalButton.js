import PropTypes from "prop-types"
import React from "react"

export const ModalButton = ({ label, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className='bg-blue text-white karla- py-5 w-[414px] rounded-r-8 text-t-18 font-extra-bold mt-12 '
    >
      {label}
    </button>
  )
}

ModalButton.propTypes = {
  label: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
}
