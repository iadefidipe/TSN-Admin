import React from "react"
import PropTypes from "prop-types"
import { useState } from "react"
import { BlueButton } from "@/shared/components/buttons/BlueButton"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  closeQuestion,
  openPassed,
  updateCurrentQuestionIndex,
} from "src/store/assessments"

export const QuestionInfo = ({ question, questionsLength }) => {
  const { title, options } = question
  const [selectedOption, setSelectedOption] = useState("")
  const { currentQuestionIndex } = useSelector((state) => state.assessments)
  const dispatch = useDispatch()
  useEffect(() => {
    setSelectedOption("")
  }, [question])

  return (
    <div className='py-6 px-5 lg:py-12 lg:px-10'>
      <h3 className='text-xl lg:text-2xl text-[#111111] outfit-m mb-12'>
        {title}
      </h3>
      <div>
        {options.map((item, index) => {
          return (
            <div
              className='flex items-center gap-3 mb-8 !cursor-pointer w-fit'
              key={index}
            >
              <div className='w-6 lg:w-8 h-6 lg:h-8'>
                <input
                  type={"radio"}
                  className='w-6 lg:w-8 h-6 lg:h-8 !cursor-pointer'
                  checked={selectedOption === item}
                  onChange={() => setSelectedOption(item)}
                  id={item.replace("/s/g", "") + index}
                  name={item.replace("/s/g", "") + index}
                />
              </div>
              <label
                className='text-base lg:text-lg text-[#111111] !cursor-pointer'
                htmlFor={item.replace("/s/g", "") + index}
              >
                {item}
              </label>
            </div>
          )
        })}
      </div>
      <div className='flex justify-end'>
        <BlueButton
          handleClick={() => {
            if (currentQuestionIndex === questionsLength - 1) {
              dispatch(closeQuestion())
              dispatch(openPassed())
            } else {
              dispatch(updateCurrentQuestionIndex(currentQuestionIndex + 1))
            }
          }}
          text={"Next"}
          disabled={selectedOption === ""}
        />
      </div>
    </div>
  )
}

QuestionInfo.propTypes = {
  question: PropTypes.object.isRequired,
  questionsLength: PropTypes.number.isRequired,
}
