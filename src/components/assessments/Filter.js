import { assessmentsData } from "@/shared/data/assessments"
import { updateFilter } from "src/store/assessments"
import React from "react"
import { useDispatch, useSelector } from "react-redux"

export const Filter = () => {
  const filterData = [
    "All Assessments",
    ...new Set(assessmentsData.map((item) => item.filter)),
  ]
  const { currentFilter } = useSelector((state) => state.assessments)

  const dispatch = useDispatch()

  return (
    <div className='flex gap-3 my-10 lg:mt-16 lg:mb-14 flex-wrap'>
      {filterData.map((filter, index) => {
        return (
          <button
            key={index}
            className={`py-3 px-[18px] rounded-full text-base lg:text-xl cursor-pointer ${
              currentFilter === filter
                ? "bg-[#1872F2] text-white"
                : "bg-[#FFEFED] text-[#7D7D7D]"
            }`}
            onClick={() => dispatch(updateFilter(filter))}
          >
            {filter}
          </button>
        )
      })}
    </div>
  )
}
