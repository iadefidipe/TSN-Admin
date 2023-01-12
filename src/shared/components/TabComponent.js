import React from "react"
import PropTypes from "prop-types"
import { useState } from "react"

export const TabComponent = ({ tabs, currentTab, setCurrentTab }) => {
  return (
    <div className='flex items-center gap-4 border-b border-[#7D7D7D30]'>
      {tabs.map((tab) => {
        return (
          <button
            className={`p-2 ${
              currentTab === tab.title
                ? "text-[#1872F2] font-bold border-b border-[#1872F2]"
                : "text-[#7D7D7D]"
            } text-base -mb-[1px] capitalize`}
            key={tab.title + tab.id}
            onClick={() => setCurrentTab(tab.title)}
          >
            {tab.title}
          </button>
        )
      })}
    </div>
  )
}


