import { Box, Button, Grid, Paper, Typography } from '@material-ui/core';
import React from 'react';

import { Product } from 'services/products/types';
import { Rating } from './rating/Rating';
import { useStyles } from './styles';

type Props = Omit<Product, 'id'> & {
  showDetails: () => void;
};

export const Item: React.FC<Props> = ({
  active,
  description,
  image,
  name,
  promo,
  rating,
  showDetails,
}) => {
  const styleClasses = useStyles();
  return (
    <Paper elevation={0} className={styleClasses.root}>
      <img src={image} alt={name} className={styleClasses.image} />
      {promo && (
        <Box component="span" className={styleClasses.promo}>
          Promo
        </Box>
      )}
      <Box p={2}>
        <Typography className={styleClasses.title}>{name}</Typography>
        <Typography className={styleClasses.description}>
          {description}
        </Typography>
      </Box>
      <Box p={2} className={styleClasses.actions}>
        <Grid
          container
          item
          xs={12}
          spacing={1}
          className={styleClasses.rating}
        >
          <Rating rate={rating} />
        </Grid>
        {active ? (
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={showDetails}
          >
            Show details
          </Button>
        ) : (
          <Button fullWidth variant="contained" disabled>
            Unavailable
          </Button>
        )}
      </Box>
    </Paper>
  );
};
