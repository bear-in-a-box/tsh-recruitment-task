import React, { useMemo, useState } from 'react';
import {
  Avatar,
  Button,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  Grid,
  InputAdornment,
  Menu,
  MenuItem,
  OutlinedInput,
} from '@material-ui/core';

import { authService, productsService } from 'services';
import { Products as Model } from 'services/products/types';
import { useObservable } from 'hooks/use-observable';

import { useStyles } from './styles';
import { ItemsView } from './itemsView/ItemsView';

import SampleAvatar from 'assets/sample-avatar.jpg';
import { Logo } from 'common/logo/Logo';
import { ReactComponent as SearchIcon } from 'assets/search.svg';

export const Products = () => {
  const styleClasses = useStyles();

  const [menuAnchor, setMenuAnchor] = useState<any>(null);

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
    return <ItemsView data={products} />;
  }, [products]);

  return (
    <Grid container direction="column" justify="flex-start" wrap="nowrap">
      <Grid item container className={styleClasses.topBar}>
        <Grid
          item
          container
          xs={12}
          sm={10}
          alignItems="center"
          justify="space-between"
        >
          <Logo />
          <Grid
            container
            item
            className={styleClasses.filters}
            spacing={1}
            xs={12}
            md={7}
          >
            <Grid item xs={12}>
              <OutlinedInput
                fullWidth
                placeholder="Search"
                endAdornment={
                  <InputAdornment position="end">
                    <SearchIcon className={styleClasses.searchIcon} />
                  </InputAdornment>
                }
                onChange={event =>
                  productsService.updateFilters({
                    search: event.target.value,
                  })
                }
              />
            </Grid>
            <Grid item>
              <FormControlLabel
                label="Active"
                control={
                  <Checkbox
                    name="check-active"
                    color="primary"
                    onChange={event =>
                      productsService.updateFilters({
                        active: event.target.checked,
                      })
                    }
                  />
                }
              />
            </Grid>
            <Grid item>
              <FormControlLabel
                label="Promo"
                control={
                  <Checkbox
                    name="check-promo"
                    color="primary"
                    onChange={event =>
                      productsService.updateFilters({
                        promo: event.target.checked,
                      })
                    }
                  />
                }
              />
            </Grid>
          </Grid>
          <Button
            variant="text"
            aria-haspopup="true"
            aria-controls="account-menu"
            onClick={event => setMenuAnchor(event.target)}
            disableRipple
            className={styleClasses.avatarButton}
          >
            <Avatar alt="User" src={SampleAvatar} />
          </Button>
          <Menu
            id="account-menu"
            anchorEl={menuAnchor}
            keepMounted
            open={Boolean(menuAnchor)}
            onClose={() => setMenuAnchor(null)}
          >
            <MenuItem onClick={() => authService.signOut()}>Log out</MenuItem>
          </Menu>
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
    </Grid>
  );
};
