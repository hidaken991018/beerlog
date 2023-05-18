import { COOKIE_KEY } from '@/constants/auth';
import { useAuth0 } from '@auth0/auth0-react';
import Cookies from 'js-cookie';
import { useEffect } from 'react';

export const useToken = () => {
  const { getAccessTokenSilently, isAuthenticated } = useAuth0();

  const getAccessToken = async () => {
    const accessToken = await getAccessTokenSilently();
    console.log(accessToken);
    Cookies.set(COOKIE_KEY.AUTHORIZATION, accessToken ?? '');
  };

  useEffect(() => {
    if (isAuthenticated) {
      getAccessToken();
    }
  }, [isAuthenticated]);
};
