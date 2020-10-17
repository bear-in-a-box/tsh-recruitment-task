import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  sideImageContainer: {
    maxHeight: '100%',
    justifyContent: 'stretch',
    alignItems: 'stretch',
  },
  sideImage: {
    flexGrow: 1,
    objectFit: 'cover',
    objectPosition: 'center',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  logoWrapper: {
    alignSelf: 'flex-start',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
});
