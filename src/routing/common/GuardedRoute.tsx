import React, { useMemo } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

import { useIsLoggedIn } from 'hooks/use-is-logged-in';
import { AppRoute } from 'routing/AppRoute.enum';

export const GuardedRoute: React.FC<RouteProps> = props => {
  const isLoggedIn = useIsLoggedIn();

  const contents = useMemo(() => {
    if (!isLoggedIn) {
      return <Redirect to={AppRoute.login} />;
    }
    return <Route {...props} />;
  }, [isLoggedIn]);

  return contents;
};
