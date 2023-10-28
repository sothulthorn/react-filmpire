import React from 'react';
import { CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';

import './styles.css';

import { Actors, NavBar, Movies, MovieInformation, Profile } from './index';

const App = () => (
  <div className="root">
    <CssBaseline />
    <NavBar />
    <main className="content">
      <div className="toolbar" />
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/movies/:id" element={<MovieInformation />} />
        <Route path="/actors/:id" element={<Actors />} />
      </Routes>
    </main>
  </div>
);

export default App;
