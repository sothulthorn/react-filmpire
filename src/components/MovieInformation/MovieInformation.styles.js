import { Button, Grid, Modal } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

const ContainerSpaceAround = styled(Grid)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-around',
  margin: '10px 0 !important',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
}));

const Poster = styled('img')(({ theme }) => ({
  borderRadius: '20px',
  boxShadow: '0.5em 1em 1em rgb(64, 64, 70)',
  width: '80%',
  [theme.breakpoints.down('md')]: {
    margin: '0 auto',
    width: '50%',
    height: '350px',
  },
  [theme.breakpoints.down('sm')]: {
    margin: '0 auto',
    width: '100%',
    height: '350px',
    marginBottom: '30px',
  },
}));

const GenreIcon = styled('img')(({ theme }) => ({
  filter: theme.palette.mode === 'dark' ? 'invert(1)' : 'dark',
  marginRight: '10px',
}));

const GenresContainer = styled(Grid)(({ theme }) => ({
  margin: '10px 0 !important',
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
}));

const Links = styled(Link)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textDecoration: 'none',
  [theme.breakpoints.down('sm')]: {
    padding: '0.5rem 1rem',
  },
}));

const CastImage = styled('img')(({ theme }) => ({
  width: '100%',
  maxWidth: '7em',
  height: '8em',
  objectFit: 'cover',
  borderRadius: '10px',
}));

const ButtonContainer = styled(Button)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
  },
}));

const ModalContainer = styled(Modal)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const IFrameVideo = styled('iframe')(({ theme }) => ({
  width: '50%',
  height: '50%',
  [theme.breakpoints.down('sm')]: {
    width: '90%',
    height: '90%',
  },
}));

export {
  ContainerSpaceAround,
  Poster,
  GenreIcon,
  GenresContainer,
  Links,
  CastImage,
  ButtonContainer,
  ModalContainer,
  IFrameVideo,
};
