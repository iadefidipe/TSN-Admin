import React from 'react'
import PropTypes from "prop-types";

export const BlueButtonRounded = ({text, handleClick, disabled}) => {
  return (
    <button onClick={handleClick} className={`bg-[#1872F2] text-white py-3 px-7 lg:py-2 lg:px-8 tracking-tighter text-sm lg:text-base rounded-full ${disabled && 'opacity-75'}`}  disabled={disabled}>{text}</button>
  )
}

BlueButtonRounded.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};