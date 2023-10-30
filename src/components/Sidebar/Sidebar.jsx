import React, { useEffect } from 'react';
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  ListItemIcon,
  Box,
  CircularProgress,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { ImageLink, Image, GenreLinks, GenreIcon } from './Sidebar.styles';
import { useGetGenresQuery } from '../../services/TMDB';
import genreIcons from '../../assets/genres';
import { selectGenreOrCategory } from '../../features/currentGenreOrCategory';

const redLogo =
  'https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png';
const blueLogo =
  'https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png';

const categories = [
  { label: 'Popular', value: 'popular' },
  { label: 'Top Rated', value: 'top_rated' },
  { label: 'Upcoming', value: 'upcoming' },
];

const Sidebar = ({ setMobileOpen }) => {
  const theme = useTheme();
  const { data, isFetching } = useGetGenresQuery();
  const dispatch = useDispatch();
  const { genreIdOrCategoryName } = useSelector(
    (state) => state.currentGenreOrCategory
  );

  console.log(data);

  return (
    <>
      <ImageLink to="/">
        <Image
          src={theme.palette.mode === 'light' ? redLogo : blueLogo}
          alt="Filmpire Logo"
        />
      </ImageLink>
      <Divider />
      <List>
        <ListSubheader>Categories</ListSubheader>
        {categories.map(({ label, value }) => (
          <GenreLinks key={value} to="/">
            <ListItem
              onClick={() => dispatch(selectGenreOrCategory(value))}
              button
            >
              <ListItemIcon>
                <GenreIcon src={genreIcons[label.toLowerCase()]} height={30} />
              </ListItemIcon>
              <ListItemText primary={label} />
            </ListItem>
          </GenreLinks>
        ))}
      </List>
      <Divider />
      <List>
        <ListSubheader>Genres</ListSubheader>
        {isFetching ? (
          <Box display="flex" justifyContent="center">
            <CircularProgress />
          </Box>
        ) : (
          data.genres.map(({ name, id }) => (
            <GenreLinks key={name} to="/">
              <ListItem
                onClick={() => dispatch(selectGenreOrCategory(id))}
                button
              >
                <ListItemIcon>
                  <GenreIcon src={genreIcons[name.toLowerCase()]} height={30} />
                </ListItemIcon>
                <ListItemText primary={name} />
              </ListItem>
            </GenreLinks>
          ))
        )}
      </List>
    </>
  );
};

export default Sidebar;
