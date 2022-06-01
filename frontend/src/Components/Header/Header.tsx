import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import { userStore } from '../../Stores/UserStore';
import { StyleToolbar } from '../index';
import RoutesList from '../../Layout/RoutesList';
import { initialUser } from '../../Helpers';

export const Header = () => {
  const { Home, Login, SignUp } = RoutesList;
  const [isAuth, setIsAuth, setUser] = userStore((state) => [
    state.isAuth,
    state.setIsAuth,
    state.setUser
  ]);

  const signOut = () => {
    localStorage.clear();
    setIsAuth(!isAuth);
    setUser(initialUser);
  };

  return (
    <header>
      <AppBar position="sticky">
        <StyleToolbar>
          <Link to={Home}>
            <IconButton edge="start" color="inherit" className="headerLink">
              <Typography>New App</Typography>
            </IconButton>
          </Link>
          <Box component="div">
            {isAuth ? (
              <Link to={Home} className="headerLink" onClick={signOut}>
                Sign Out
              </Link>
            ) : (
              <>
                <Link to={Login} className="headerLink">
                  Sign In
                </Link>
                <Link to={SignUp} className="headerLink">
                  Sign Up
                </Link>
              </>
            )}
          </Box>
        </StyleToolbar>
      </AppBar>
    </header>
  );
};
