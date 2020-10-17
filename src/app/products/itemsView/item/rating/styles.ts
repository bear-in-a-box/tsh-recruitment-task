import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  root: {},
  star: {
    width: '13px',
    height: '13px',
    '& path': {
      fill: '#f9a52b',
    },
  },
}));
