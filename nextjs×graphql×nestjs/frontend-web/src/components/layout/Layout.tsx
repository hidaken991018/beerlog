import { Container } from '@mui/material';
import ButtonAppBar from './AppBar';
import { ButtomNavigation } from './ButtomNavigation';

type Props = {
  children: React.ReactNode;
};
const Layout = (props: Props) => {
  return (
    <>
      <ButtonAppBar />
      <Container sx={{ p: 2 }}>{props.children}</Container>
      <ButtomNavigation />
    </>
  );
};

export default Layout;
