import { Container } from '@mui/material';
import { Header } from './Header';
import { ButtomNavigation } from './ButtomNavigation';
import { User, useAuth0 } from '@auth0/auth0-react';
import { LoginMutation, LoginDocument } from '@/repositories/generated/graphql';
import { useMutation } from '@apollo/client';

type Props = {
  children: React.ReactNode;
};
const Layout = (props: Props) => {
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
  return (
    <>
      <Header />
      <Container sx={{ p: 2 }}>{props.children}</Container>
      <ButtomNavigation />
    </>
  );
};

export default Layout;
