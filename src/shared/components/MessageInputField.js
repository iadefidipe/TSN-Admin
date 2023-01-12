import React from "react";
import PropTypes from "prop-types";
import { useRef } from "react";
import { IconEmoji, IconPapelClip, IconSend } from "./icons";

export const MessageInputField = ({
  emojiHandleClick,
  fileHandleClick,
  handleClickSubmit,
  emojiIcon = <IconEmoji />,
  fileIcon = <IconPapelClip />,
  sendIcon = <IconSend />,
  inputOnChange,
  inputPlaceholder = "Enter your message here...",
  inputType = "text",
  inputValue,
  extraClass = "",
}) => {
  const inputRef = useRef(null);

  return (
    <div className="flex items-center gap-6">
      <div className={`relative w-full rounded-lg input_field ${extraClass}`}>
        <input
          className="w-full h-full text-sm bg-transparent rounded-lg pl-6 pr-20 outline-1 outline-blue-300 outfit-l input_field-input"
          onChange={inputOnChange}
          placeholder={inputPlaceholder}
          ref={inputRef}
          type={inputType}
          value={inputValue}
        />

        <div
          className="absolute top-2/4 -translate-y-2/4 right-14"
          onClick={emojiHandleClick}
        >
          {emojiIcon}
        </div>
        <div
          className="absolute top-2/4 -translate-y-2/4 right-6"
          onClick={fileHandleClick}
        >
          {fileIcon}
        </div>
      </div>
      <div onClick={handleClickSubmit}>{sendIcon}</div>
    </div>
  );
};

MessageInputField.propTypes = {
  inputOnChange: PropTypes.func,
  inputPlaceholder: PropTypes.string.isRequired,
  inputType: PropTypes.string,
  inputValue: PropTypes.string,
  emojiIcon: PropTypes.element,
  fileIcon: PropTypes.element,
  sendIcon: PropTypes.element,
  childrenHandleClick: PropTypes.func,
  emojiHandleClick: PropTypes.func,
  fileHandleClick: PropTypes.func,
  handleClickSubmit: PropTypes.func,
  extraClass: PropTypes.string,
};
