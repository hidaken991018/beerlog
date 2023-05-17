import { useMutation } from '@apollo/client';
import { User } from '@auth0/auth0-react';
import { LoginMutation, LoginDocument } from '../generated/graphql';

/**
 * ログイン
 * @returns
 */
export const useFetchLogin = () => {
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

  return {
    login,
    loginResult,
  };
};
