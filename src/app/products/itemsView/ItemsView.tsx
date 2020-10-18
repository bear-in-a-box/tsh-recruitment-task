import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Grid,
  Modal,
  Paper,
  Typography,
} from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';

import { productsService } from 'services';
import { Products, Product } from 'services/products/types';

import { Item } from './item/Item';
import { NoItems } from './noItems/NoItems';
import { useStyles } from './styles';

import { ReactComponent as CloseIcon } from 'assets/close.svg';
import { useObservable } from 'hooks/use-observable';

interface Props {
  data: Products;
}

export const ItemsView: React.FC<Props> = ({ data }) => {
  const styleClasses = useStyles();

  const [detailsItem, setDetailsItem] = useState<Product | null>(null);
  const filters = useObservable(
    productsService.filters$,
    productsService.filtersSync
  );

  const closeDetails = () => setDetailsItem(null);

  return (
    <React.Fragment>
      {data.items.length === 0 && (
        <Grid item xs={11} sm={8}>
          <NoItems />
        </Grid>
      )}
      {data.items.map(item => (
        <Grid item key={item.id}>
          <Item {...item} showDetails={() => setDetailsItem(item)} />
        </Grid>
      ))}
      {data.items.length > 0 && (
        <Grid xs={12} justify="center">
          <Pagination
            count={data.pageCount}
            page={filters.page}
            onChange={(_, value) =>
              productsService.updateFilters({ page: value })
            }
            className={styleClasses.pagination}
          />
        </Grid>
      )}
      <Modal
        open={detailsItem != null}
        onClose={closeDetails}
        className={styleClasses.modal}
      >
        <Container maxWidth="sm" className={styleClasses.modalContainer}>
          <Paper className={styleClasses.modalPaper}>
            <img
              alt={`Image for ${detailsItem?.name}`}
              src={detailsItem?.image}
            />
            <Button
              variant="text"
              onClick={closeDetails}
              className={styleClasses.modalCloseButton}
            >
              <CloseIcon />
            </Button>
            <Box p={2}>
              <Typography className={styleClasses.modalTitle}>
                {detailsItem?.name}
              </Typography>
              <Typography className={styleClasses.modalDescription}>
                {detailsItem?.description}
              </Typography>
            </Box>
          </Paper>
        </Container>
      </Modal>
    </React.Fragment>
  );
};
