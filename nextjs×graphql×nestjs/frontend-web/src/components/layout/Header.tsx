import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useAuth0 } from '@auth0/auth0-react';
import { useRecoilValue } from 'recoil';
import { clientloginState } from '@/globalstates/userInfo/userInfo';

/**
 * ヘッダー
 * @returns
 */
export function Header() {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const isLogin = useRecoilValue(clientloginState);

  // ユーザを作成していなければ作成し、作成済みであればそのまま続行

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            BEERLOG
          </Typography>
          {isLogin ? (
            <Button color="inherit" onClick={() => logout()}>
              Logout
            </Button>
          ) : (
            <Button color="inherit" onClick={() => loginWithRedirect()}>
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
