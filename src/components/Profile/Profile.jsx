import React, { useEffect } from 'react';
import { Typography, Button, Box } from '@mui/material';
import { ExitToApp } from '@mui/icons-material';
import { useSelector } from 'react-redux';

import { userSelector } from '../../features/auth';

const Profile = () => {
  const { user } = useSelector(userSelector);

  const favoriteMovies = [];

  const logOut = () => {
    localStorage.clear();

    window.location.href = '/';
  };

  return (
    <Box>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h4" gutterBottom>
          My Profile
        </Typography>
        <Button color="inherit" onClick={logOut}>
          Logout &nbsp; <ExitToApp />
        </Button>
      </Box>
      {!favoriteMovies.length ? (
        <Typography variant="h5">
          Add favorite or watchlist some movies to see them here!
        </Typography>
      ) : (
        <Box>Favorite Movies</Box>
      )}
    </Box>
  );
};

export default Profile;
