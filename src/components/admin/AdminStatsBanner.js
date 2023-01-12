import PropTypes from "prop-types"
import React from "react"
import { AdminStatTile } from "./AdminStatTile"

export const AdminStatsBanner = ({ total, active, inactive,label }) => {
  const statData = [
    { control: "total", label, value: total },
    { control: "active", label, value: active },
    { control: "inactive", label, value: inactive },
  ]
  return (
    <div className=' flex  gap-5  justify-between mt-[43px] mb-6 '>
      {statData.map((item, index) => (
        <AdminStatTile
          key={index}
          control={item.control}
          label={item.label}
          value={item.value}
        />
        
      ))}
    </div>
  )
}

AdminStatsBanner.propTypes = {
  total: PropTypes.number.isRequired,
  active: PropTypes.number.isRequired,
  inactive: PropTypes.number.isRequired,
}
