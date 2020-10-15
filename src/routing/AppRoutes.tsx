import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Login } from 'app/login/Login';
import { Products } from 'app/products/Products';

import { AppRoute } from './AppRoute.enum';
import { GuardedRoute } from './common/GuardedRoute';

export const AppRoutes = () => {
  return (
    <Switch>
      <GuardedRoute path={AppRoute.home} exact component={Products} />
      <Route path={AppRoute.login} component={Login} />
    </Switch>
  );
};
