import React from "react"
import PropTypes from "prop-types"
import { CalendarComponent } from "@/shared/components/CalendarComponent"

export const CalendarInput = ({
  dateValue,
  onDateChange,
  label,
  placeholder,
}) => {
  return (
    <div>
      <span className='text-[#353535] outfit-l pl-[27px] mb-3 inline-block'>
        {label}
      </span>
      <CalendarComponent
        date={dateValue}
        onChangeDate={onDateChange}
        placeholder={placeholder}
      />
    </div>
  )
}

CalendarInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  dateValue: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onDateChange: PropTypes.func.isRequired,
}
