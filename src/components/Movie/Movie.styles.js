import { styled } from '@mui/system';
import { Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const MovieItem = styled(Grid)(({ theme }) => ({
  padding: '10px',
}));

const MovieTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  textOverflow: 'ellipsis',
  width: '230px',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  marginTop: '10px',
  marginBottom: 0,
  textAlign: 'center',
}));

const MovieLink = styled(Link)(({ theme }) => ({
  alignItems: 'center',
  fontWeight: 'bolder',
  textDecoration: 'none',
  [theme.breakpoints.up('xs')]: {
    display: 'flex',
    flexDirection: 'column',
  },
  '&:hover': {
    cursor: 'pointer',
  },
}));

const MoviePoster = styled('img')(({ theme }) => ({
  borderRadius: '20px',
  height: '300px',
  marginBottom: '10px',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

export { MovieItem, MovieTitle, MovieLink, MoviePoster };
