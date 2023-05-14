import { loginUserInfoState } from '@/globalstates/userInfo/userInfo';
import { LoginMutation, LoginDocument } from '@/repositories/generated/graphql';
import { useMutation } from '@apollo/client';
import { useAuth0, User } from '@auth0/auth0-react';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

export const useLoginUser = () => {
  const [loginUser, setLoginUser] = useRecoilState(loginUserInfoState);
  const { isAuthenticated, user } = useAuth0();
  const [loginMutation, loginResult] =
    useMutation<LoginMutation>(LoginDocument);

  /**
   * ログインをする（ユーザがいなければ作成する）
   * @param user
   */
  const login = async (user: User | undefined) => {
    if (user === undefined) return;
    await loginMutation({
      variables: {
        input: {
          // id: user.sub,
          email: user.email,
          name: user.name,
          avatarUrl: user.picture,
        },
      },
    });
  };
  // Auth0ログイン済み,バック未ログイン
  if (isAuthenticated && !loginResult.called) {
    login(user);
  }
  useEffect(() => {
    loginResult.data && setLoginUser(loginResult.data);
  }, [loginResult.data]);

  return {
    loginUser,
    isAuthenticated,
  };
};
