import { loadingState } from '@/globalstates/promise/loading';
import { useLogin } from '@/usecase/auth/globalState/useLogin';
import { useRecoilValue } from 'recoil';

type Props = {
  children: React.ReactNode;
};

/**
 *　認証・認可関連
 * @param props
 * @returns
 */
export const Auth = (props: Props) => {
  return <>{props.children}</>;
};
