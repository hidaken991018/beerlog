import { LoginMutation, LoginDocument } from '@/repositories/generated/graphql';
import { useLoginUser } from '@/usecase/auth/useLoginUser';
import { useMutation } from '@apollo/client';
import { useAuth0, User } from '@auth0/auth0-react';

type Props = {
  children: React.ReactNode;
};
export const Auth = (props: Props) => {
  const { loginUser, isAuthenticated } = useLoginUser();
  if (isAuthenticated && !loginUser) return <h1>ローディング中です</h1>;
  return <>{props.children}</>;
};
