import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: '288px',
    height: '400px',
    overflow: 'hidden',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    position: 'relative',
  },
  content: {
    padding: theme.spacing(2),
  },
  image: {
    width: '100%',
    height: '170px',
    objectFit: 'cover',
  },
  title: {
    fontSize: '18px',
    color: '#1a181d',
  },
  description: {
    fontSize: '14px',
    color: '#9194a5',
  },
  promo: {
    backgroundColor: '#f9a52b',
    color: '#ffffff',
    fontSize: '14px',
    position: 'absolute',
    zIndex: 2,
    top: '16px',
    left: 0,
    padding: theme.spacing(1, 3),
  },
  actions: {
    width: '100%',
    alignSelf: 'flex-end',
  },
  rating: {
    marginBottom: theme.spacing(1),
  },
}));
