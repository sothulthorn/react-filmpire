import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

const ImageLink = styled(Link)({
  display: 'flex',
  justifyContent: 'center',
  padding: '10% 0',
});

const Image = styled('img')({
  width: '70%',
});

const GenreLinks = styled(Link)(({ theme }) => ({
  color: theme.palette.text.primary,
  textDecoration: 'none',
}));

const GenreIcon = styled('img')(({ theme }) => ({
  filter: theme.palette.mode === 'dark' ? 'invert(1)' : 'dark',
}));

export { ImageLink, Image, GenreLinks, GenreIcon };
