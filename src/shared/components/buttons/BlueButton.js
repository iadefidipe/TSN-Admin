import React from "react";
import PropTypes from "prop-types";

export const BlueButton = ({ text, handleClick, disabled }) => {
  return (
    <button
      onClick={handleClick}
      className={`bg-[#1872F2] text-white py-3 px-7 lg:py-5 lg:px-9 tracking-tighter text-base lg:text-lg karla-eb rounded-lg ${
        disabled && "opacity-75"
      }`}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

BlueButton.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
