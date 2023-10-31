import React from 'react';
import { CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';

import { DivRoot, DivToolBar, MainContent } from './App.styles';

import { Actors, NavBar, Movies, MovieInformation, Profile } from './index';

const App = () => (
  <DivRoot>
    <CssBaseline />
    <NavBar />
    <MainContent>
      <DivToolBar />
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/movie/:id" element={<MovieInformation />} />
        <Route path="/actor/:id" element={<Actors />} />
      </Routes>
    </MainContent>
  </DivRoot>
);

export default App;
