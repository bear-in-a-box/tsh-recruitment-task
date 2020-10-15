import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from 'theme';

export const AppProviders: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Router>{children}</Router>
  </ThemeProvider>
);
