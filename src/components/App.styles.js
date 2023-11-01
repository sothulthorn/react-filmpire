import { styled } from '@mui/system';

const DivRoot = styled('div')({
  display: 'flex',
  height: '100%',
});

const DivToolBar = styled('div')({
  height: '70px',
});

const MainContent = styled('main')({
  flexGrow: '1',
  padding: '2em',
  width: '100%',
});

export { DivRoot, DivToolBar, MainContent };
