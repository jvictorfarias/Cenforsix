import React from 'react';
import ProviderRoutes from './Provider.routes';
import UserRoutes from './User.routes';

import { store } from '../store';

const Routes = () => {
  const { provider } = store.getState().user.profile;

  return provider ? <ProviderRoutes /> : <UserRoutes />;
};

export default Routes;
