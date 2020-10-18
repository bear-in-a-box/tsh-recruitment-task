import React from 'react';
import { Paper, Typography } from '@material-ui/core';

import { ReactComponent as BoardIcon } from 'assets/board.svg';
import { useStyles } from './styles';

export const NoItems: React.FC = () => {
  const styleClasses = useStyles();

  return (
    <Paper elevation={0} className={styleClasses.root}>
      <BoardIcon className={styleClasses.boardIcon} />
      <Typography className={styleClasses.info}>
        Ooops... It's empty here
      </Typography>
      <Typography className={styleClasses.infoSupport}>
        There are no products on the list
      </Typography>
    </Paper>
  );
};
