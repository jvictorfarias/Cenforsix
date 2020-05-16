import React from 'react';
import PropTypes from 'prop-types';
import { Route as RouteDOM, Redirect } from 'react-router-dom';

const Route = ({ component: Component, isPrivate, ...rest }) => {
  const signed = false;

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  return <RouteDOM {...rest} component={Component} />;
};

export default Route;

Route.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

Route.defaultProps = {
  isPrivate: false,
};
