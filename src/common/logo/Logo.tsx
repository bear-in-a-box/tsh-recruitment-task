import React from 'react';

import LogoImage from 'assets/logo.svg';

import { useStyles } from './styles';

export const Logo: React.FC = () => {
  const { image: imageClass } = useStyles();
  return <img src={LogoImage} className={imageClass} />;
};
