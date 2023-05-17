import { Container } from '@mui/material';
import { Header } from './Header';
import { ButtomNavigation } from './ButtomNavigation';
import { loadingState } from '@/globalstates/promise/loading';
import { useRecoilValue } from 'recoil';

type Props = {
  children: React.ReactNode;
};

/**
 * 画面(UI)の一番外側の要素
 * @param props
 * @returns
 */
const Layout = (props: Props) => {
  const loading = useRecoilValue(loadingState);
  return (
    <>
      <Header />
      <Container sx={{ p: 2 }}>{props.children}</Container>
      <ButtomNavigation />
      {loading && 'ローディング中です'}
    </>
  );
};

export default Layout;
