import React from 'react';
import { useTranslation } from 'react-i18next';
import { Paper, Typography } from '@material-ui/core';

import { ReactComponent as BoardIcon } from 'assets/board.svg';

import { useStyles } from './styles';

export const NoItems: React.FC = () => {
  const styleClasses = useStyles();
  const [t] = useTranslation();

  return (
    <Paper elevation={0} className={styleClasses.root}>
      <BoardIcon className={styleClasses.boardIcon} />
      <Typography className={styleClasses.info}>
        {t('productsScreen.noItems.title')}
      </Typography>
      <Typography className={styleClasses.infoSupport}>
        {t('productsScreen.noItems.subtitle')}
      </Typography>
    </Paper>
  );
};
