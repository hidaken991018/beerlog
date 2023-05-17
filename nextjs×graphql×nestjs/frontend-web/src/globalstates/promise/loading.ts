import { atom } from 'recoil';
/**
 * ローディングの状態管理
 */
export const loadingState = atom<boolean>({
  key: 'loadingState',
  default: false,
});
