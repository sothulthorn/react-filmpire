import { styled } from '@mui/system';
import { Card, CardMedia, CardContent } from '@mui/material';

const FeatureCardContainer = styled(Card)(({ theme }) => ({
  marginBottom: '20px',
  display: 'flex',
  justifyContent: 'center',
  height: '490px',
  textDecoration: 'none',
}));

const StyledCard = styled(Card)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-end',
  flexDirection: 'column',
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  right: 0,
  height: '100%',
  width: '100%',
  backgroundColor: 'rgba(0,0,0,0.575)',
  backgroundBlendMode: 'darken',
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  color: '#fff',
  width: '40%',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}));

export { FeatureCardContainer, StyledCard, StyledCardMedia, StyledCardContent };
