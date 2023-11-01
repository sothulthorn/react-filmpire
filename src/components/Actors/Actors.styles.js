import { styled } from '@mui/system';

const Image = styled('img')(({ theme }) => ({
  maxWidth: '90%',
  borderRadius: '20px',
  objectFit: 'cover',
  boxShadow: '0.5em 0.5em 1em',
}));

export { Image };
