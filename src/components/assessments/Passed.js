import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";

export const Passed = ({ passedBackground, image, title }) => {
  return (
    <div
      className="bg-[#FF5B49] rounded-lg flex items-center justify-center w-full min-h-[calc(100vh_-_118px_-_2rem)] lg:min-h-[calc(100vh_-_100px_-_4rem)] bg-no-repeat bg-center bg-cover relative"
      style={{ backgroundImage: `url(${passedBackground})` }}
    >
      <div className="font-extrabold text-white text-2xl lg:text-[32px] absolute top-5 lg:top-10 right-5 lg:right-10">
        1:30
      </div>
      <div className="flex flex-col items-center lg:mb-20 py-24">
        <div className="w-28 lg:w-40 h-28 lg:h-40 relative">
          <Image src={image} layout='fill' />
        </div>
        <h3 className="text-white text-2xl lg:text-5xl font-extrabold my-5">You Passed</h3>
        <p className="outfit-sb text-white text-lg lg:text-2xl mb-1">{title}</p>
        <span className="text-sm lg:text-base text-[#F4F4F4] opacity-80">
          Your badge has been added to you profile
        </span>
      </div>
    </div>
  );
};

Passed.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  passedBackground: PropTypes.string.isRequired,
};
