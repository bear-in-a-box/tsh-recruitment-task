import React, { useCallback, useState } from 'react';
import type { FormEvent } from 'react';
import { Link, Redirect } from 'react-router-dom';

import { authService } from 'services';

import { AppRoute } from 'routing/AppRoute.enum';
import { useIsLoggedIn } from 'hooks/use-is-logged-in';

export const Login = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const isLoggedIn = useIsLoggedIn();

  const performLogin = async () => {
    try {
      setLoading(true);
      await authService.signIn({ username, password });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const onLoginRequest = (event: FormEvent) => {
    event.preventDefault();
    performLogin();
  };

  if (isLoggedIn) {
    return <Redirect to={AppRoute.home} />;
  }

  return (
    <>
      <Link to={AppRoute.home}>Products page</Link>
      <h2>Login</h2>
      <form onSubmit={onLoginRequest}>
        <div>
          <label>
            username:
            <input
              name="username"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            password:
            <input
              name="password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </label>
        </div>
        <button type="submit" disabled={loading}>
          submit
        </button>
      </form>
    </>
  );
};
