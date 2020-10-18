import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    height: '300px',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    flexGrow: 0,
    flexShrink: 0,
  },
  boardIcon: {
    marginBottom: theme.spacing(2),
    '& path': {},
  },
  info: {
    fontSize: '18px',
  },
  infoSupport: {
    fontSize: '14px',
    color: '#9194a5',
  },
}));
