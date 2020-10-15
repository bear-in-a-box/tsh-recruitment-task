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

export default theme;
