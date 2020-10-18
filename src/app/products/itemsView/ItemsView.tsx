import { Grid } from '@material-ui/core';
import React from 'react';

import { Product } from 'services/products/types';

import { Item } from './item/Item';
import { NoItems } from './noItems/NoItems';

interface Props {
  items: Product[];
}

export const ItemsView: React.FC<Props> = ({ items }) => {
  return (
    <React.Fragment>
      {items.length === 0 && (
        <Grid item xs={11} sm={8}>
          <NoItems />
        </Grid>
      )}
      {items.map(({ id, ...props }) => (
        <Grid item key={id}>
          <Item {...props} />
        </Grid>
      ))}
    </React.Fragment>
  );
};
