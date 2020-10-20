import React from 'react';

import { initI18n } from 'i18n';
import { render } from 'tests';

import { Login } from './Login';

beforeAll(() => {
  initI18n();
});

describe('Login', () => {
  it('should display all information', async () => {
    const { getByText } = render(<Login />);

    expect(getByText('Login')).toBeInTheDocument();
    expect(getByText('Username')).toBeInTheDocument();
    expect(getByText('Password')).toBeInTheDocument();
    expect(getByText('Log in')).toBeInTheDocument();
  });
});
