import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesome } from '@expo/vector-icons';

const NavIcon = ({ color, ...props }) => (
  <FontAwesome
    size={16}
    style={{ color: color }}
    {...props}
  />
);

NavIcon.propTypes = {
  color: PropTypes.string,
};

export default NavIcon;
