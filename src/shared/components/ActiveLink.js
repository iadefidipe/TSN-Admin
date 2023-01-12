import { useRouter } from 'next/router';
import { useState } from 'react';
import PropTypes from 'prop-types';

export const ActiveLink = ({ label, href, stylesClass, navPath }) => {
  const { pathname, push } = useRouter();
  const [isActive, setIsActive] = useState(pathname === navPath);
  const activeStyles = isActive ? 'outfit-b cursor-default nav_link-active' : 'opacity-70 hover:opacity-100';

  const handleClick = (event) => {
    event.preventDefault();
    setIsActive(true);
    push(href);
  }

  if (isActive) {
    return (
      <a
        className={`${activeStyles} ${stylesClass}`}
      >
        <span>{label}</span>
      </a>
    );
  } else {
    return (
      <a
        href={href}
        onClick={handleClick}
        className={`${activeStyles} ${stylesClass}`}
      >
        <span>{label}</span>
      </a>
    );
  }
};

ActiveLink.propTypes = {
  stylesClass: PropTypes.string,
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  navPath: PropTypes.string.isRequired
};
