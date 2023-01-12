import { useRef } from "react"
import PropTypes from "prop-types"

export const InputField = ({
  children,
  inputIcon,
  inputOnChange,
  inputPlaceholder,
  inputType,
  inputValue,
  childrenHandleClick = () => null,
  extraClass = "",
  right,
  width,
  iconFunc,
}) => {
  const inputRef = useRef(null)

  const iconHandleClick = () => {
    inputRef.current.focus()
  }

  return (
    <div
      className={`relative w-full rounded-lg input_field ${extraClass} ${width} `}
    >
      <div
        className={`absolute top-2/4 -translate-y-2/4 ${
          right ? "right-5" : "left-6"
        }  `}
        onClick={() => {
          iconHandleClick()
          iconFunc()
        }}
      >
        {inputIcon}
      </div>

      <input
        className='w-full h-full text-sm bg-transparent rounded-lg px-14 outline-1 outline-blue-300 outfit-l input_field-input'
        onChange={inputOnChange}
        placeholder={inputPlaceholder}
        ref={inputRef}
        type={inputType}
        value={inputValue}
      />

      {children && (
        <div
          className='absolute top-2/4 -translate-y-2/4 right-8  '
          onClick={childrenHandleClick}
        >
          {children}
        </div>
      )}
    </div>
  )
}


