import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";

export const SkillCard = ({ title, description, handleClick }) => {
  return (
    <div className="w-full rounded-lg bg-[#FF5B49] relative p-4 overflow-hidden">
      <div>
        <h3 className="outfit-sb text-xl text-white tracking-tighter mt-2">
          {title}
        </h3>
        <p className="opacity-70 text-white text-sm mt-1 mb-4 w-4/5">{description}</p>
        <button
          className="capitalize rounded-lg bg-white w-[100px] h-8 btn_google_text text-xs outfit-m tracking-tighter"
          onClick={handleClick}
        >
          Start Now
        </button>
      </div>
      <div className="absolute bottom-0 right-0 w-[120px] h-[120px]">
        <Image src={`${process.env.deploymentPath}/img/assessments/star.png`} width={120} height={120} />
      </div>
    </div>
  );
};

SkillCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
