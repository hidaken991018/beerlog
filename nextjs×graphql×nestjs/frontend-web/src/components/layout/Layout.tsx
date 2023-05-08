import { Container } from '@mui/material';
import { Header } from './Header';
import { ButtomNavigation } from './ButtomNavigation';

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
