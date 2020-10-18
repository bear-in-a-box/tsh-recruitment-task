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
    text: {
      primary: '#1a181d',
      secondary: '#9194a5',
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
  MuiPaper: {
    root: {
      overflow: 'hidden',
    },
    rounded: {
      borderRadius: '8px',
    },
  },
  MuiOutlinedInput: {
    root: {
      borderColor: '#e0e2ea',
      borderRadius: '8px',
    },
  },
  MuiCheckbox: {
    root: {
      '& .MuiSvgIcon-root': {
        width: '24px',
        height: '24px',
      },
    },
  },
  MuiFormControlLabel: {
    label: {
      fontSize: '14px',
    },
  },
  MuiMenuItem: {
    root: {
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
  },
};

export default theme;
