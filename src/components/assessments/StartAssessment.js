import React from "react"
import PropTypes from "prop-types"
import {
  IconNoteText,
  IconTickSquare,
  IconTimer,
} from "@/shared/components/icons"
import { IconMedal } from "@/shared/components/icons/IconMedal"
import { BlueButton } from "@/shared/components/buttons/BlueButton"
import { openQuestion } from "src/store/assessments"
import { useDispatch } from "react-redux"

export const StartAssessment = ({ note, time, instructions }) => {
  const dispatch = useDispatch()
  return (
    <>
      <div className='flex items-center gap-2 mb-2'>
        <IconNoteText colored={true} width='24' height='24' />
        <p className='text-[#7D7D7D] text-lg lg:text-xl'>{note}</p>
      </div>
      <div className='flex items-center gap-2 mb-2'>
        <IconTimer colored={true} width='24' height='24' />
        <p className='text-[#7D7D7D] text-lg lg:text-xl'>{time}</p>
      </div>
      <div className='flex items-center gap-2'>
        <IconMedal />
        <p className='text-[#7D7D7D] text-lg lg:text-xl'>
          Score in the top 30% to earn a badge
        </p>
      </div>
      <h2 className='mt-10 text-[#353535] text-2xl mb-4'>Instructions</h2>
      {instructions.map((item, index) => {
        return (
          <div
            className='flex items-start lg:items-center gap-2 mb-2'
            key={index}
          >
            <div className='w-6 mt-1 lg:mt-0'>
              <IconTickSquare />
            </div>
            <p className='text-[#7D7D7D] text-lg lg:text-xl'>{item}</p>
          </div>
        )
      })}
      <div className='mt-3 lg:mt-0 flex justify-end'>
        <BlueButton
          text='Start assessment'
          handleClick={() => dispatch(openQuestion())}
        />
      </div>
    </>
  )
}

StartAssessment.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  note: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  score: PropTypes.number,
  instructions: PropTypes.array.isRequired,
}
