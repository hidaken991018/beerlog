import { pathHistoryState } from '@/globalstates/router/pathHistory';
import { useLogin } from '@/usecase/auth/globalState/useLogin';
import { usePathHistory } from '@/usecase/globalState/usePathHistory';
import { ReactNode, useEffect } from 'react';
import { RecoilState, useRecoilValue } from 'recoil';

type Props = {
  children: ReactNode;
};

/**
 * グローバル変数の更新を担う
 * @param props
 * @returns
 */
export const GlobalState = (props: Props) => {
  const pathHistory = useRecoilValue(pathHistoryState);
  usePathHistory();
  useLogin();
  useEffect(() => {
    console.log(pathHistory);
  }, [pathHistory]);
  return <>{props.children}</>;
};
