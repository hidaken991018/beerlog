import { LoginMutation } from '@/repositories/generated/graphql';
import { atom, selector } from 'recoil';
export const clientloginState = atom<boolean>({
  key: 'clientloginState',
  default: false,
});

/**
 * ログインユーザの状態管理
 */
export const loginUserInfoState = atom<LoginMutation | undefined | null>({
  key: 'loginUserInfoState',
  default: undefined,
});
