import { styled } from '@mui/system';
import { Typography, Button } from '@mui/material';

const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const PrevButton = styled(Button)(({ theme }) => ({
  margin: '30px 2px',
}));

const NextButton = styled(Button)(({ theme }) => ({
  margin: '30px 2px',
}));

const PageNumber = styled(Typography)(({ theme }) => ({
  margin: '0 20px !important',
  color: theme.palette.text.primary,
}));

export { Container, PrevButton, NextButton, PageNumber };
