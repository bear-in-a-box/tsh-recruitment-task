import React from 'react';

import { ReactComponent as StarOutlined } from 'assets/rating/star-outlined.svg';
import { ReactComponent as StarFilled } from 'assets/rating/star-filled.svg';
import { Grid } from '@material-ui/core';
import { useStyles } from './styles';

interface Props {
  rate: number;
}

export const Rating: React.FC<Props> = ({ rate }) => {
  const styleClasses = useStyles();

  return (
    <React.Fragment>
      {Array.from({ length: 5 }).map((_v, i) => (
        <Grid item key={i}>
          {i + 1 <= rate ? (
            <StarFilled className={styleClasses.star} />
          ) : (
            <StarOutlined className={styleClasses.star} />
          )}
        </Grid>
      ))}
    </React.Fragment>
  );
};
