import { atom } from 'recoil';
/**
 * パスの保持
 */
export const pathHistoryState = atom<string[]>({
  key: 'pathHistoryState',
  default: [],
});
