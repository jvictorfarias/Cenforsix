import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Cart from '../pages/Cart';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/cart" exact component={Cart} />
  </Switch>
);

export default Routes;
