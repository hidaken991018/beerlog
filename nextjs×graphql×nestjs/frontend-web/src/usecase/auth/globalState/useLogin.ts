import {
  clientloginState,
  loginUserInfoState,
} from '@/globalstates/userInfo/userInfo';
import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { useFetchLogin } from '@/repositories/auth/useFetchLogin';

/**
 * ログイン状態を管理する。
 */
export const useLogin = () => {
  const [isLogin, setIsLogin] = useRecoilState(clientloginState);
  const setUserInfo = useSetRecoilState(loginUserInfoState);
  const { isAuthenticated, user } = useAuth0();
  const { login, loginResult } = useFetchLogin();

  // Auth0ログイン済み,バック未ログイン
  if (isAuthenticated && !isLogin) {
    login(user);
  }

  useEffect(() => {
    setUserInfo(loginResult.data);
    if (loginResult.data) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [loginResult.data, setIsLogin, setUserInfo]);
};
