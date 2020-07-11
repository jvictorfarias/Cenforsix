import React from 'react';
import { Switch } from 'react-router-dom';

import UserDashboard from '../pages/Dashboard/User';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Profile from '../pages/Profile';

import logoNotFound from '../assets/not-found.svg';

import Route from './Route';

const UserRoutes = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/register" component={SignUp} />
    <Route path="/dashboard" component={UserDashboard} isPrivate />
    <Route path="/profile" component={Profile} isPrivate />

    <Route
      path="/"
      component={() => <img src={logoNotFound} alt="not-found" />}
    />
  </Switch>
);

export default UserRoutes;
