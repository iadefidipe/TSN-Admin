import React from "react";
import PropTypes from "prop-types";

export const Button = ({ text, primary, handleClick }) => {
  const primaryStyle = "text-white bg-[#1872F2]";
  const secondaryStyle = "text-[#1872F2] border border-[#1872F2]";
  const currentStyle = primary ? primaryStyle : secondaryStyle;
  return (
    <button
      className={`${currentStyle} px-6 py-2  rounded-xl text-base`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  primary: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};
