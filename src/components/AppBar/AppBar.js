import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import { Navigation } from 'components/Navigation/Navigation';
import { useAuth } from 'hooks';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AuthNav/AuthNav';
import { Typography } from '@mui/material';

export const AppBarCont = () => {
  const { isLoggedIn } = useAuth();

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: '#35383d83',
      }}
    >
      <Toolbar>
        <ContactPhoneIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          PHONEBOOK
        </Typography>

        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Toolbar>
    </AppBar>
  );
};
