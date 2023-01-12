import PropTypes from "prop-types"
import React from "react"

export const SecContainer = ({ children, px, py }) => {
  return (
    <section className={`rounded-r-8 ${px || "px-6"} ${py || "py-6"}  bg-white   `}>
      {children}
    </section>
  )
}

SecContainer.propTypes = {
  children: PropTypes.node.isRequired,
  bg: PropTypes.string,
  py: PropTypes.string,
  px: PropTypes.string,
}
