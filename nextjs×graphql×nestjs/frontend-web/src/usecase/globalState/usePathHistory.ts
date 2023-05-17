import { HISTORY_PATH_COUNT } from '@/constants/path';
import { pathHistoryState } from '@/globalstates/router/pathHistory';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

/**
 * パスの履歴を管理
 */
export const usePathHistory = () => {
  const setPathHistory = useSetRecoilState(pathHistoryState);
  const router = useRouter();

  useEffect(() => {
    setPathHistory((pre) => {
      pre.unshift(router.asPath);
      return filterByIndex(pre, HISTORY_PATH_COUNT);
    });
  }, [router.asPath, setPathHistory]);
};
