import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  pagination: {
    '& .MuiPagination-ul': {
      justifyContent: 'center',
    },
  },
  modal: {
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContainer: {
    outline: 0,
  },
  modalPaper: {
    borderRadius: '8px',
    position: 'relative',
    outline: 0,
  },
  modalCloseButton: {
    position: 'absolute',
    top: theme.spacing(3),
    right: theme.spacing(1),
    zIndex: 2,
  },
  modalTitle: {
    fontSize: '18px',
    color: theme.palette.text.primary,
  },
  modalDescription: {
    fontSize: '14px',
    color: theme.palette.text.secondary,
  },
}));
