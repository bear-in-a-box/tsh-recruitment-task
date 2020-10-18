import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  topBar: {
    width: '100%',
    height: '144px',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: '144px',
    padding: theme.spacing(0, 8),
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
  searchIcon: {
    width: '18px',
    height: '18px',
    '& path': {
      fill: theme.palette.text.primary,
    },
  },
}));
