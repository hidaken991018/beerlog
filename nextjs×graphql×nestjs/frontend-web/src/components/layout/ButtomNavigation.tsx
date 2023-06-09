import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Paper,
} from '@mui/material';
import { useEffect, useState } from 'react';
import SportsBarIcon from '@mui/icons-material/SportsBar';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { useRouter } from 'next/router';
import { NAVIGATION, PAHT } from '@/constants/path';

export const ButtomNavigation = () => {
  const [value, setValue] = useState<number>(0);
  const router = useRouter();

  const toHome = () => {
    router.push(PAHT.HOME);
  };
  const toPostPage = () => {
    router.push(PAHT.POST);
  };

  useEffect(() => {
    NAVIGATION.PATH.forEach((nav) => {
      if (nav.path === router.asPath) {
        setValue(nav.value);
      }
    });
  }, [router.asPath]);
  return (
    <Box sx={{ pb: 5 }}>
      <Paper
        sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            label="LOG"
            icon={<SportsBarIcon />}
            onClick={toHome}
          />
          {/* <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} /> */}
          <BottomNavigationAction
            label="post"
            icon={<AddBoxIcon />}
            onClick={toPostPage}
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
};
