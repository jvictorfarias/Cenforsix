import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

const Button = ({ children, ...rest }) => (
  <Container {...rest}>{children}</Container>
);

export default Button;

Button.propTypes = {
  children: PropTypes.string.isRequired,
};
