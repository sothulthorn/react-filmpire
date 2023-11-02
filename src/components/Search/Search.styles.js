import { styled } from '@mui/system';
import { TextField } from '@mui/material';

const SearchContainer = styled('div')(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
}));

const SearchInput = styled(TextField)(({ theme }) => ({
  color: theme.palette.mode === 'light' && 'dark',
  filter: theme.palette.mode === 'light' && 'invert(1)',
  [theme.breakpoints.down('sm')]: {
    marginTop: '-10px',
    marginBottom: '10px',
  },
}));

export { SearchContainer, SearchInput };
