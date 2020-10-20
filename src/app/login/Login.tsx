import React, { useState } from 'react';
import type { FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { Redirect } from 'react-router-dom';

import {
  Box,
  Button,
  Grid,
  Hidden,
  TextField,
  Typography,
} from '@material-ui/core';

import { authService } from 'services';

import SideImage from 'assets/login/side.jpg';
import { Logo } from 'common/logo/Logo';
import { useIsLoggedIn } from 'hooks/use-is-logged-in';
import { AppRoute } from 'routing/AppRoute.enum';

import { useStyles } from './styles';

export const Login = () => {
  const styleClasses = useStyles();
  const [t] = useTranslation();

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
    <Grid container>
      <Hidden smDown>
        <Grid container item sm={5} className={styleClasses.sideImageContainer}>
          <img src={SideImage} alt="" className={styleClasses.sideImage} />
        </Grid>
      </Hidden>
      <Grid item container xs={12} sm={7} className={styleClasses.content}>
        <Grid item xs={11} sm={9} className={styleClasses.logoWrapper}>
          <Logo />
        </Grid>
        <Grid item xs={11} sm={9}>
          <Typography variant="h4">{t('loginScreen.header')}</Typography>
          <form onSubmit={onLoginRequest} noValidate>
            <Box component="label" my={3}>
              <Typography variant="subtitle2">
                {t('loginScreen.usernameLabel')}
              </Typography>
              <TextField
                variant="outlined"
                placeholder={t('loginScreen.usernamePlaceholder')}
                name="username"
                value={username}
                onChange={e => setUsername(e.target.value)}
                fullWidth
              />
            </Box>
            <Box component="label" my={3}>
              <Typography variant="subtitle2">
                {t('loginScreen.passwordLabel')}
              </Typography>
              <TextField
                variant="outlined"
                placeholder={t('loginScreen.passwordPlaceholder')}
                name="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                fullWidth
              />
            </Box>
            <Box mt={1}>
              <Button
                type="submit"
                variant="contained"
                disabled={loading}
                fullWidth
                color="primary"
              >
                {t('loginScreen.loginButton')}
              </Button>
            </Box>
          </form>
          <Button variant="text" className={styleClasses.forgotPassword}>
            {t('loginScreen.forgotPassword')}
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};
