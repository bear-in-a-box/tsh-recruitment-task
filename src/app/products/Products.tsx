import React, { useMemo } from 'react';
import { CircularProgress, Grid } from '@material-ui/core';

import { productsService } from 'services';
import { Products as Model } from 'services/products/types';
import { useObservable } from 'hooks/use-observable';

import { useStyles } from './styles';
import { ItemsView } from './itemsView/ItemsView';
import { TopBar } from './topBar/TopBar';

export const Products = () => {
  const styleClasses = useStyles();

  const products: Model | Error | null = useObservable(
    productsService.products$,
    null
  );

  const targetView = useMemo(() => {
    if (products == null) {
      return <CircularProgress color="primary" />;
    }
    if (products instanceof Error) {
      return <p>Error!</p>;
    }
    return <ItemsView data={products} />;
  }, [products]);

  return (
    <Grid container direction="column" justify="flex-start" wrap="nowrap">
      <Grid item container className={styleClasses.topBar}>
        <TopBar />
      </Grid>
      <Grid item container className={styleClasses.contentWrapper}>
        <Grid
          item
          container
          className={styleClasses.content}
          xs={12}
          sm={10}
          spacing={4}
        >
          {targetView}
        </Grid>
      </Grid>
    </Grid>
  );
};
