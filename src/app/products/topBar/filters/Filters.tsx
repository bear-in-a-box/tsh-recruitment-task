import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Checkbox,
  FormControlLabel,
  Grid,
  InputAdornment,
  OutlinedInput,
} from '@material-ui/core';

import { productsService } from 'services';

import { ReactComponent as SearchIcon } from 'assets/search.svg';

import { useStyles } from './styles';

export const Filters: React.FC = () => {
  const styleClasses = useStyles();
  const [t] = useTranslation();

  return (
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
          placeholder={t('productsScreen.filters.search')}
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
          label={t('productsScreen.filters.active')}
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
          label={t('productsScreen.filters.promo')}
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
  );
};
