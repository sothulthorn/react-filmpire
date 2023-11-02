import React from 'react';
import { MovieContainer } from './MovieList.styles';
import { Movie } from '..';

const MovieList = ({ movies, numberOfMovies, excludeFirst }) => {
  const startFrom = excludeFirst ? 1 : 0;

  console.log('Movie');

  return (
    <MovieContainer container>
      {movies.results.slice(startFrom, numberOfMovies).map((movie, i) => (
        <Movie key={i} movie={movie} i={i} />
      ))}
    </MovieContainer>
  );
};

export default MovieList;
