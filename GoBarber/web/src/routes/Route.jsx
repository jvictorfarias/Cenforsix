import React from 'react';
import PropTypes from 'prop-types';
import { Route as RouteDOM, Redirect } from 'react-router-dom';

import { store } from '../store';

const Route = ({ component: Component, isPrivate = false, ...rest }) => {
  const { signed } = store.getState().auth;

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  return <RouteDOM {...rest} render={props => <Component {...props} />} />;
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
