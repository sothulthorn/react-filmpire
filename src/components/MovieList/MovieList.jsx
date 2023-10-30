import React from 'react';
import { MovieContainer } from './MovieList.styles';
import { Movie } from '..';

const MovieList = ({ movies }) => {
  console.log('Movie');

  return (
    <MovieContainer container>
      {movies.results.map((movie, i) => (
        <Movie key={i} movie={movie} i={i} />
      ))}
    </MovieContainer>
  );
};

export default MovieList;
