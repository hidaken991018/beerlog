import { HISTORY_PATH_COUNT } from '@/constants/path';
import { pathHistoryState } from '@/globalstates/router/pathHistory';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { filterByIndex } from '@/utils/filterByIndex';

/**
 * パスの履歴を管理
 */
export const usePathHistory = () => {
  const setPathHistory = useSetRecoilState(pathHistoryState);
  const router = useRouter();

  useEffect(() => {
    setPathHistory((pre) => {
      const preValue = [...pre];
      preValue.unshift(router.asPath);
      const newValue = filterByIndex(preValue, HISTORY_PATH_COUNT);
      return newValue;
    });
  }, [router.asPath, setPathHistory]);
};
