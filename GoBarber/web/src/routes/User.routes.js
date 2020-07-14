import React from 'react';
import { Switch } from 'react-router-dom';

import UserDashboard from '../pages/Dashboard/User';
import SelectProvider from '../pages/CreateAppointment/SelectProvider';
import SelectDateTime from '../pages/CreateAppointment/SelectDateTime';
import ConfirmAppointment from '../pages/CreateAppointment/ConfirmAppointment';
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
    <Route path="/providers" exact component={SelectProvider} isPrivate />
    <Route path="/providers/:id" component={SelectDateTime} isPrivate />
    <Route
      path="/confirm-appointment/:id/:time"
      component={ConfirmAppointment}
      isPrivate
    />
    <Route path="/profile" component={Profile} isPrivate />

    <Route
      path="/"
      component={() => <img src={logoNotFound} alt="not-found" />}
    />
  </Switch>
);

export default UserRoutes;
