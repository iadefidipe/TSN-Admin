import Image from "next/image";
import PropTypes from "prop-types";
import React, { useState } from "react";

export const DropdownInput = ({
  values,
  currentValue,
  label,
  handleChange,
  placeholder,
}) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const handleDropdown = () => {
    setOpenDropdown((state) => !state);
  };
  return (
    <div className="w-full">
      <span className="text-[#353535] outfit-l pl-[27px] mb-3 inline-block">
        {label}
      </span>
      <div className="relative h-full search_bar cursor-default">
        <div
          className="w-full h-[54px] bg-[#F4F4F4] outline-none pl-6 text-[#7D7D7D] outfit-l text-sm mb-6 flex items-center"
          onClick={handleDropdown}
        >
          <span className="text-sm ">
            {currentValue ? currentValue : placeholder}
          </span>
          <div className="absolute  top-2/4 lg:-translate-y-2/4 -translate-y-full right-[15px]">
            <Image
              className={`${
                openDropdown ? "rotate-180" : ""
              } transition-transform duration-300 ease-in-out`}
              src={`${process.env.deploymentPath}/img/profile/chevron_down_icon.svg`}
              width={12}
              height={7}
              alt="chevron down icon"
            />
          </div>
        </div>
        <div
          className={`${
            openDropdown ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          } z-10 absolute bg-[#F9F9F9] w-full h-96 top-[56px] border-[0.4px] border-[#A1A1A1] transition-all duration-300 ease-in-out overflow-y-scroll select_option`}
        >
          {values?.map((value, index) => (
            <span
              key={value + index}
              onClick={() => {
                handleChange(value);
                handleDropdown();
              }}
              className={` truncate px-1 select-none w-full h-10 inline-block text-center leading-10 select_option`}
              title={value}
            >
              {value}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

DropdownInput.propTypes = {
  values: PropTypes.array.isRequired,
  currentValue: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
