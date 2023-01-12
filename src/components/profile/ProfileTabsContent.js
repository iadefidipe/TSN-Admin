import React, { useState } from "react";
import PropTypes from "prop-types";
import { ProfileContent } from "./ProfileContent";
import { UploadResume } from "./create";
import { CoverContent } from "./edit/CoverContent";

export const ProfileTabsContent = ({ profile, resume, cover }) => {
  const [currentTab, setCurrentTab] = useState(profile.title);
  const tabs = [
    {
      title: profile.title,
      id: 1,
    },
    {
      title: resume.title,
      id: 2,
    },
    {
      title: cover.title,
      id: 3,
    },
  ];
  return (
    <div className="px-6 lg:px-10">
      <div className="flex items-center gap-4 border-b border-[#7D7D7D30]">
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
          );
        })}
      </div>
      <div className="py-6">
        {currentTab === profile.title && <ProfileContent {...profile} />}
        {currentTab === resume.title && (
          <div className="max-w-[700px]">
            <UploadResume {...resume} />
          </div>
        )}
        {currentTab === cover.title && <CoverContent {...cover} />}
      </div>
    </div>
  );
};

ProfileTabsContent.propTypes = {
  profile: PropTypes.object.isRequired,
  resume: PropTypes.object.isRequired,
  cover: PropTypes.object.isRequired,
};
