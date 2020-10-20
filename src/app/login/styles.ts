import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
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
    paddingTop: '2em',
  },
  content: {
    justifyContent: 'center',
  },
  forgotPassword: {
    fontSize: '14px',
    color: theme.palette.text.secondary,
    textDecoration: 'underline',
    marginTop: theme.spacing(1),
  },
}));
