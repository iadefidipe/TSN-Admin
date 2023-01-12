import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
 
export const Modal = ({
  open,
  image,
  title,
  description,
  buttonText,
  handleClose,
}) => {
  return (
    <div
      className={`fixed inset-0 w-screen h-screen flex items-center justify-center bg-[#00000066] ${
        open ? "flex" : "hidden"
      } z-[100000]`}
    >
      <div className="w-11/12 h-auto lg:w-[500px] lg:h-[500px] bg-white flex flex-col items-center p-10 pt-6">
        <div className="w-[220px] h-[220px] relative">
          <Image src={image ||  `${process.env.deploymentPath}/img/profile/modal_complete.png`} width={220} height={220} />
        </div>
        <h2 className="text-[#111111] font-semibold text-[32px] tracking-tighter mb-5">
          {title}
        </h2>
        <p className="text-[#7D7D7D] text-base mb-6 text-center">{description}</p>
        <button
          className="text-[#fff] bg-[#1872F2] rounded-lg !h-[60px] w-full flex items-center justify-center text-lg tracking-tighter"
          onClick={handleClose}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

