import React from "react";
import PropTypes from "prop-types";

export const InfoCard = ({ title, icon, color, amount }) => {
  return (
    <div className="w-full rounded-lg p-6 flex items-center justify-between bg-white">
      <div>
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center"
          style={{background: color}}
        >
          {icon}
        </div>
        <h4 className="text-[#7D7D7D] text-base mt-2">{title}</h4>
      </div>
      <h2 className="text-black text-[40px] outfit-sb">{amount}</h2>
    </div>
  );
};

