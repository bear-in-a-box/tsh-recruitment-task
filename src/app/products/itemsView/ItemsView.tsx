import { Grid } from '@material-ui/core';
import React from 'react';

import { Product } from 'services/products/types';

import { Item } from './item/Item';

interface Props {
  items: Product[];
}

export const ItemsView: React.FC<Props> = ({ items }) => {
  return (
    <React.Fragment>
      {items.slice(0, 7).map(({ id, ...props }) => (
        <Grid item key={id}>
          <Item {...props} />
        </Grid>
      ))}
    </React.Fragment>
  );
};
