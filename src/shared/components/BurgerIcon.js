import PropTypes from 'prop-types';

export const BurgerIcon = ({ handleIsOpen, isOpen, genericHamburgerLine }) => {
  return (
    <button
      className={`fixed z-30 flex flex-col items-center justify-center w-12 h-12 shadow-md border-2 border-white transition-opacity duration-300 rounded group right-5 top-5 lg:hidden hover:opacity-100 ${ isOpen ? '' : 'sidebar opacity-50' } `}
      onClick={ handleIsOpen }
    >
      <div
        className={`${ genericHamburgerLine } ${ isOpen
          ? "rotate-45 translate-y-3 group-hover:opacity-100"
          : "group-hover:opacity-100 sidebar"
          }`}
      />
      <div
        className={`${ genericHamburgerLine } ${ isOpen ? "opacity-0" : "group-hover:opacity-100 sidebar"
          }`}
      />
      <div
        className={`${ genericHamburgerLine } ${ isOpen
          ? "-rotate-45 -translate-y-3 group-hover:opacity-100"
          : "group-hover:opacity-100 sidebar"
          }`}
      />
    </button>
  );
};

BurgerIcon.propTypes = {
  handleIsOpen: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  genericHamburgerLine: PropTypes.string
};
