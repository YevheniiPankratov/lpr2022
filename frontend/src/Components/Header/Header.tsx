import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import { StyleToolbar } from '../index';
import RoutesList from '../../Layout/RoutesList';

export const Header = () => {
  const [isAuthorized, setAuthorized] = useState(false);
  const { HOME, LOGIN, SIGNUP } = RoutesList;

  return (
    <header>
      <AppBar position="sticky">
        <StyleToolbar>
          <Link to={HOME}>
            <IconButton edge="start" color="inherit" className="headerLink">
              <Typography>New App</Typography>
            </IconButton>
          </Link>
          <Box component="div">
            {isAuthorized ? (
              <Link
                to={HOME}
                className="headerLink"
                onClick={() => setAuthorized(true)}
              >
                Sign Out
              </Link>
            ) : (
              <>
                <Link to={LOGIN} className="headerLink">
                  Sign In
                </Link>
                <Link to={SIGNUP} className="headerLink">
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
