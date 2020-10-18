import {
  Box,
  Button,
  Container,
  Grid,
  Modal,
  Paper,
  Typography,
} from '@material-ui/core';
import React, { useState } from 'react';

import { Product } from 'services/products/types';

import { Item } from './item/Item';
import { NoItems } from './noItems/NoItems';
import { useStyles } from './styles';

import { ReactComponent as CloseIcon } from 'assets/close.svg';

interface Props {
  items: Product[];
}

export const ItemsView: React.FC<Props> = ({ items }) => {
  const styleClasses = useStyles();

  const [detailsItem, setDetailsItem] = useState<Product | null>(null);

  const closeDetails = () => setDetailsItem(null);

  return (
    <React.Fragment>
      {items.length === 0 && (
        <Grid item xs={11} sm={8}>
          <NoItems />
        </Grid>
      )}
      {items.map(item => (
        <Grid item key={item.id}>
          <Item {...item} showDetails={() => setDetailsItem(item)} />
        </Grid>
      ))}
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
