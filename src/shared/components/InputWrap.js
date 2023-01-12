import PropTypes from "prop-types"
import React from "react"

export const InputWrap = ({ children, title }) => {
  return (
    <div className='flex flex-col gap-3'>
      <h5 className=' ml-6 font-light text-grey-2 text-t-16 capitalize'>{title}</h5>
      <div>{children}</div>
    </div>
  )
}


