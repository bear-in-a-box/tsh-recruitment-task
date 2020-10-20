import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
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
}));
