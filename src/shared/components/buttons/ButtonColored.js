import React from "react"
import PropTypes from "prop-types"

export const ButtonColored = ({
  label,
  bg,
  color,
  handleClick,
  px,
  py,
  font,
  radius,
  border,
}) => {
  return (
    <button
      onClick={handleClick}
      className={`  ${px || "px-3"} ${py || "py-3"} ${
        radius || "rounded-r-8"
      } ${border ? 'transparent' : bg} ${color} ${font}  font-regular text-t-16 ${border} `}
    >
      {label}
    </button>
  )
}

ButtonColored.propTypes = {
  label: PropTypes.string.isRequired,
  bg: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
  px: PropTypes.string,
  py: PropTypes.string,
  font: PropTypes.string,
  radius: PropTypes.string,
  border: PropTypes.string,
}
