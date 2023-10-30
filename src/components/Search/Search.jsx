import React, { useState, useEffect } from 'react';
import { TextField, InputAdornment } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { SearchContainer, Input } from './Search.styles';
import { searchMovie } from '../../features/currentGenreOrCategory';

const Search = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      dispatch(searchMovie(query));
    }
  };

  return (
    <SearchContainer>
      <TextField
        onKeyDown={handleKeyPress}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        variant="standard"
        InputProps={{
          className: Input,
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </SearchContainer>
  );
};

export default Search;
