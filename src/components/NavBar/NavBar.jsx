import React, { useEffect, useState } from 'react';
import {
  AppBar,
  IconButton,
  Drawer,
  Button,
  Avatar,
  useMediaQuery,
} from '@mui/material';
import {
  Menu,
  AccountCircle,
  Brightness4,
  Brightness7,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import {
  ToolBar,
  MenuButton,
  NavDrawer,
  DrawerPaper,
  LinkButton,
} from './NavBar.styles';
import { SideBar, Search } from '..';
import { fetchToken, createSessionId, moviesApi } from '../../utils';
import { setUser, userSelector } from '../../features/auth';

const NavBar = () => {
  const { isAuthenticated, user } = useSelector(userSelector);
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery('(max-width:600px)');
  const dispatch = useDispatch();

  const token = localStorage.getItem('request_token');
  const sessionIdFromLocalStorage = localStorage.getItem('session_id');

  useEffect(() => {
    const logInUser = async () => {
      if (token) {
        if (sessionIdFromLocalStorage) {
          const { data: userData } = await moviesApi.get(
            `/account?session_id=${sessionIdFromLocalStorage}`
          );

          dispatch(setUser(userData));
        } else {
          const sessionId = await createSessionId();

          const { data: userData } = await moviesApi.get(
            `/account?session_id=${sessionId}`
          );

          dispatch(setUser(userData));
        }
      }
    };

    logInUser();
  }, [token]);

  return (
    <>
      <AppBar position="fixed">
        <ToolBar>
          {isMobile && (
            <MenuButton
              color="inherit"
              edge="start"
              style={{ outline: 'none' }}
              onClick={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
            >
              <Menu />
            </MenuButton>
          )}
          <IconButton color="inherit" sx={{ ml: 1 }} onClick={() => {}}>
            {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          {!isMobile && <Search />}
          <div>
            {!isAuthenticated ? (
              <Button color="inherit" onClick={fetchToken}>
                Login &nbsp; <AccountCircle />
              </Button>
            ) : (
              <LinkButton
                color="inherit"
                component={Link}
                to={`/profile/${user.id}`}
                onClick={() => {}}
              >
                {!isMobile && <>My Movies &nbsp;</>}{' '}
                <Avatar
                  style={{ width: 30, height: 30 }}
                  alt="Profile"
                  src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                />
              </LinkButton>
            )}
          </div>
          {isMobile && <Search />}
        </ToolBar>
      </AppBar>
      <div>
        <NavDrawer>
          {isMobile ? (
            <Drawer
              variant="temporary"
              anchor="right"
              open={mobileOpen}
              onClose={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
              classes={{ paper: DrawerPaper }}
              ModalProps={{ keepMounted: true }}
            >
              <SideBar setMobileOpen={setMobileOpen} />
            </Drawer>
          ) : (
            <Drawer classes={{ paper: DrawerPaper }} variant="permanent" open>
              <SideBar setMobileOpen={setMobileOpen} />
            </Drawer>
          )}
        </NavDrawer>
      </div>
    </>
  );
};

export default NavBar;
