import React from 'react';

import { initI18n } from 'i18n';
import { render } from 'tests';

import { Products } from './Products';

beforeAll(() => {
  initI18n();
});

describe('Products', () => {
  it('should render filters', async () => {
    const { getByText, getByPlaceholderText } = render(<Products />);

    expect(getByPlaceholderText('Search')).toBeInTheDocument();
    expect(getByText('Active')).toBeInTheDocument();
    expect(getByText('Promo')).toBeInTheDocument();
  });
});
