import { CircularProgress, Container, Grid } from '@material-ui/core';
import { Logo } from 'common/logo/Logo';
import { useObservable } from 'hooks/use-observable';
import React, { useMemo } from 'react';

import { authService, productsService } from 'services';
import { Products as Model } from 'services/products/types';
import { ItemsView } from './itemsView/ItemsView';
import { useStyles } from './styles';

export const Products = () => {
  const styleClasses = useStyles();

  const products: Model | Error | null = useObservable(
    productsService.products$,
    null
  );

  const itemsView = useMemo(() => {
    if (products == null) {
      return;
    }
    if (products instanceof Error) {
      return <p>Error!</p>;
    }
    return <ItemsView items={products.items} />;
  }, [products]);

  return (
    <Grid container direction="column" justify="flex-start" wrap="nowrap">
      <Grid item container className={styleClasses.topBar}>
        <Grid item xs={12} sm={10}>
          <Logo />
        </Grid>
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
          {products == null && <CircularProgress color="primary" />}
          {itemsView}
        </Grid>
      </Grid>
      {/* <p>{JSON.stringify(products)}</p> */}
      {/* <button onClick={() => authService.signOut()}>Logout</button> */}
    </Grid>
  );
};
