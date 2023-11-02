import React from 'react';
import { Box, Typography, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';
import {
  FeatureCardContainer,
  StyledCard,
  StyledCardMedia,
  StyledCardContent,
} from './FeatureMovie.styles';

const FeatureMovie = ({ movie }) => {
  console.log('FeatureMovie');

  if (!movie) return null;

  return (
    <FeatureCardContainer component={Link} to={`/movie/${movie.id}`}>
      <StyledCard style={{ position: 'relative' }}>
        <StyledCardMedia
          media="picture"
          alt={movie.title}
          image={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          title={movie.title}
        />
        <Box padding="20px">
          <StyledCardContent
            style={{ position: 'relative', backgroundColor: 'transparent' }}
          >
            <Typography variant="h5" gutterBottom>
              {movie.title}
            </Typography>
            <Typography variant="body2">{movie.overview}</Typography>
          </StyledCardContent>
        </Box>
      </StyledCard>
    </FeatureCardContainer>
  );
};

export default FeatureMovie;
