import { ButtonIcon } from "@/shared/components"
import React from "react"
import PropTypes from "prop-types"

export const SectionHeaderButton = ({
  title,
  titleTxt,
  btnTitle,
  iconName,
  btnColor,
  textColor,
  weight,
}) => {
  return (
    <div className='flex justify-between  items-center'>
      <div>
        <h2 className={`${titleTxt} font-t-40 text-grey-2 ${weight}`}>
          {title}
        </h2>
      </div>
      <div>
        {btnTitle && (
          <ButtonIcon
            iconName={iconName}
            label={btnTitle}
            btnBg={btnColor}
            textClr={textColor}
          />
        )}
      </div>
    </div>
  )
}

