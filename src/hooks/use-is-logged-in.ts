import React from 'react';

import { authService } from 'services';

import { useObservable } from './use-observable';

export const useIsLoggedIn = (): boolean => {
  const isLoggedIn = useObservable(
    authService.isUserLoggedIn$,
    authService.isUserLoggedInSync
  );
  return isLoggedIn;
};
