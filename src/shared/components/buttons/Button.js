import PropTypes from "prop-types";

const customStyles =
  "bg-blue-p w-full h-14 lg:w-auto lg:h-[60px] px-[50px] karla-b text-lg text-white rounded-lg opacity-50 transition-opacity duration-300 ease-in-out cursor-default tracking-tighter";

export const Button = ({ btnStyles, btnLabel, handleClick, leadingIcon }) => {
  return (
    <button className={`${customStyles} ${btnStyles}`} onClick={handleClick}>
      {leadingIcon}
      {btnLabel}
    </button>
  );
};

Button.propTypes = {
  btnStyles: PropTypes.string,
  btnLabel: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
  leadingIcon: PropTypes.element,
};
