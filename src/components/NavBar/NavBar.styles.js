import { IconButton, Toolbar, Drawer, Button } from '@mui/material';
import { styled } from '@mui/system';

const drawerWidth = 240;

const ToolBar = styled(Toolbar)(({ theme }) => ({
  height: '80px',
  display: 'flex',
  justifyContent: 'space-between',
  marginLeft: '240px',
  [theme.breakpoints.down('sm')]: {
    marginLeft: 0,
    flexWrap: 'wrap',
  },
}));

const MenuButton = styled(IconButton)(({ theme }) => ({
  marginRight: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}));

const NavDrawer = styled('nav')(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    width: drawerWidth,
    flexShrink: 0,
  },
}));

const DrawerPaper = styled(Drawer)({
  width: drawerWidth,
});
const LinkButton = styled(Button)({
  '&:hover': {
    color: 'white !important',
    textDecoration: 'none',
  },
});

export { ToolBar, MenuButton, NavDrawer, DrawerPaper, LinkButton };
