import React from "react";
import PropTypes from "prop-types";

export const DefaultInput = ({ placeholder, handleChange, value, label }) => {
  return (
    <div className="w-full">
      <span className="text-[#353535] outfit-l pl-[27px] mb-3 text-base font-light inline-block">
        {label}
      </span>
      <input
        type="text"
        className="w-full h-[54px] bg-[#F4F4F4] outline-none pl-6 text-[#7D7D7D] outfit-l text-sm mb-6"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

DefaultInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
