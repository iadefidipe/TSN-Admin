import Image from "next/image";
import PropTypes from "prop-types";
import React from "react";

export const ProfileHeader = ({ image, title, description, currentStep, company }) => {
  return (
    <div className="rounded-lg bg-[#FF5B49] pt-3 lg:pt-7 pb-2 lg:pb-4 px-5 lg:px-10 flex items-center justify-between">
      <div className="flex items-start gap-2 lg:gap-4">
        <div className="w-14 h-14 relative rounded overflow-hidden">
          <Image src={image} width={56} height={56} />
        </div>
        <div>
          <h2 className="text-white text-base lg:text-2xl outfit-sb">{title}</h2>
          <p className="text-white text-sm lg:text-xl">{description}</p>
        </div>
      </div>
      <p className="text-white text-sm lg:text-xl">
        {currentStep + 1} of {company ? '3' : '6'} Questions
      </p>
    </div>
  );
};
ProfileHeader.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  currentStep: PropTypes.number.isRequired,
  company: PropTypes.bool,
};
