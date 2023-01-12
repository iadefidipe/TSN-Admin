import React from "react"
import Image from "next/image"
import PropTypes from "prop-types"
import moment from "moment"

export const JobDescTag = ({
  iconName,
  text,
  width,
  height,
  gap,
  size,
  date,
  employ,
  work,
  desc
}) => {
  const handleEmploy = (text) => {
    if (text === 1) {
      return "fulltime"
    } else if (text === 2) {
      return "internship"
    } else if (text === 3) {
      return "contract"
    } else if (text === 4) {
      return "contract-To-Hire"
    } else if (text === 5) {
      return "co-op"
    } else if (text === 6) {
      return "super-flexible"
    } else{
      return text
    }
  }

  const handleWorkplace = (text) => {
    if (text === 1) {
      return "remote"
    } else if (text === 2) {
      return "onsite"
    } else if (text === 3) {
      return "hybrid"
    } else if (text === 4) {
      return "flexible"
    } else{
      return text
    }
  }


  return (
    <div
      className={`flex items-center ${gap} text-[#616974] font-light ${size} capitalize `}
    >
      <Image
        src={`${process.env.deploymentPath}/icons/global/${iconName}.svg`}
        alt={text}
        width={width}
        height={height}
      />
      <span>
        {date
          ? moment(text).fromNow()
          : employ
          ? handleEmploy(text)
          : work
          ? handleWorkplace(text)
          : text
          }
      </span>
    </div>
  )
}

JobDescTag.propTypes = {
  iconName: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  width: PropTypes.any.isRequired,
  height: PropTypes.any.isRequired,
  gap: PropTypes.string.isRequired,
  size: PropTypes.string,
  date: PropTypes.bool,
  employ: PropTypes.bool,
  work: PropTypes.bool
}
