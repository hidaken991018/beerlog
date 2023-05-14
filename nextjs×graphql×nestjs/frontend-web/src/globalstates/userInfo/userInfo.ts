import { LoginMutation } from '@/repositories/generated/graphql';
import { atom } from 'recoil';
export const loginUserInfoState = atom<LoginMutation>({
  key: 'loginUserInfoState', // unique ID (with respect to other atoms/selectors)
  default: undefined, // default value (aka initial value)
});
