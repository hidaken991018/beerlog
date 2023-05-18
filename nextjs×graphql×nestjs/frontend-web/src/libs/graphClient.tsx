import { COOKIE_KEY } from '@/constants/auth';
import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import Cookies from 'js-cookie';

// リクエストヘッダー設定
const middlewareLink = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: Cookies.get(COOKIE_KEY.AUTHORIZATION) || null,
    },
  }));

  return forward(operation);
});

const httpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_LOCAL_IF_HOST,
});
const client = new ApolloClient({
  link: ApolloLink.from([middlewareLink, httpLink]),
  cache: new InMemoryCache(),
});
export default client;
