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
  return (
    <>
      <Header />
      <Container sx={{ p: 2 }}>{props.children}</Container>
      <ButtomNavigation />
    </>
  );
};

export default Layout;
