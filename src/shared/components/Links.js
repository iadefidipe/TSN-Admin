import PropTypes from 'prop-types';

import { ActiveLink } from '.';

export const Links = ({ navItems, classStyles }) => {
  return (
    <>    
      {
        navItems.map(({ to, label, navPath, iconUrl }) => (
          <ActiveLink
            key={ label }
            href={ to }
            label={ label }
            stylesClass={ classStyles }
            navPath={ navPath }
            iconUrl={ iconUrl }
          />
        ))
      }
    </>
  );
};

Links.propTypes = {
  navItems: PropTypes.arrayOf(PropTypes.shape(
    {
      to: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired 
    }
  )).isRequired,
};
