import React, { useState } from 'react';
import { Avatar, Button, Grid, Menu, MenuItem } from '@material-ui/core';

import SampleAvatar from 'assets/sample-avatar.jpg';
import { Logo } from 'common/logo/Logo';
import { authService } from 'services';

import { useStyles } from './styles';
import { Filters } from './filters/Filters';

export const TopBar: React.FC = () => {
  const styleClasses = useStyles();

  const [menuAnchor, setMenuAnchor] = useState<any>(null);

  return (
    <Grid
      item
      container
      xs={12}
      sm={10}
      alignItems="center"
      justify="space-between"
    >
      <Logo />
      <Filters />
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
  );
};
