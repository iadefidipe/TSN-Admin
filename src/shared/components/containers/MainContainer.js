import PropTypes from "prop-types"
import React from "react"

export const MainContainer = ({ children, bg, px, py }) => {
  return (
    <div className={`rounded-r-8 ${px} ${py }  ${bg || "bg-white"}  `}>
      {children}
    </div>
  )
}

