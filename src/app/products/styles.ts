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
  filters: {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    width: 'auto',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      order: 3,
      flexWrap: 'wrap',
    },
  },
  searchIcon: {
    width: '18px',
    height: '18px',
    '& path': {
      fill: theme.palette.text.primary,
    },
  },
  avatarButton: {
    [theme.breakpoints.down('sm')]: {
      order: 2,
    },
  },
}));
