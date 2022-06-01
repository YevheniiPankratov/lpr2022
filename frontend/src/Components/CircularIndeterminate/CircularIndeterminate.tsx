import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export const CircularIndeterminate = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '40vh'
      }}
    >
      <CircularProgress color="inherit" size={100} />
    </Box>
  );
};
