import React from "react";
import PropTypes from "prop-types";

export const CoverContent = ({ content }) => {
  return (
    <>
      <h3 className="text-[#353535] text-xl mb-4 font-semibold">
        Cover Letter
      </h3>
      <p className="text-[#7D7D7D] text-base">{content}</p>
    </>
  );
};

CoverContent.propTypes = {
  content: PropTypes.string.isRequired,
};
