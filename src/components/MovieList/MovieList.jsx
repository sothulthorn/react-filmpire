import React from 'react';
import { MovieContainer } from './MovieList.styles';
import { Movie } from '..';

const MovieList = ({ movies, numberOfMovies }) => {
  console.log('Movie');

  return (
    <MovieContainer container>
      {movies.results.slice(0, numberOfMovies).map((movie, i) => (
        <Movie key={i} movie={movie} i={i} />
      ))}
    </MovieContainer>
  );
};

export default MovieList;
