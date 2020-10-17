import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    background: {
      default: '#f2f2f2',
      paper: '#ffffff',
    },
    primary: {
      main: '#4460f7',
      dark: '#2140e8',
    },
    action: {
      active: '#4460f7',
      hover: '#2140e8',
      disabled: '#9194a5',
    },
  },
});

theme.props = {
  MuiButton: {
    disableElevation: true,
  },
};

theme.overrides = {
  MuiButton: {
    root: {
      textTransform: 'none',
      padding: '12px',
      fontSize: '16px',
    },
    disabled: {
      backgroundColor: '#9194a5 !important',
      color: '#ffffff !important',
    },
  },
};

export default theme;
