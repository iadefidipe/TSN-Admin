import React from "react";
import PropTypes from 'prop-types';

export const TextareaInput = ({
  placeholder,
  handleChange,
  value,
  label,
  maxLength,
}) => {
  return (
    <>
      <div className="w-full relative">
        <span className="text-[#353535] outfit-l pl-[27px] mb-3 inline-block">
          {label}
        </span>
        <textarea
          className="w-full h-32 bg-[#F4F4F4] outline-none pl-6 py-4 text-[#7D7D7D] outfit-l text-sm resize-none"
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          minLength="1"
          maxLength={maxLength}
        />
        <span className="absolute bottom-4 right-4 text-[#353535] text-base">
          {maxLength}
        </span>
      </div>
    </>
  );
};

TextareaInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  maxLength: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
