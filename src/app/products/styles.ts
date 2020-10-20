import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  topBar: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: '144px',
    padding: theme.spacing(0, 8),
    [theme.breakpoints.up('sm')]: {
      height: '144px',
    },
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
    },
  },
  contentWrapper: {
    flexGrow: 1,
    alignSelf: 'stretch',
    background: theme.palette.background.default,
    padding: theme.spacing(4),
    justifyContent: 'center',
    overflowY: 'auto',
  },
  content: {
    justifyContent: 'center',
  },
}));
