import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  avatarButton: {
    [theme.breakpoints.down('sm')]: {
      order: 2,
    },
  },
}));
