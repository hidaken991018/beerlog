/**
 * ページの状態を返す
 * - Auth0ログイン・JWTあり：ログイン
 * - Auth0ログイン・JWTなし：ローディング
 * - Auth0ログアウト・JWTあり：ローディング
 * - Auth0ログアウト・JWTなし：未ログイン
 */
export const getPageState = (
  isAuthenticated: boolean,
  jwt: string | undefined
) => {
  let login: boolean = false;
  let loading: boolean = false;
  if (isAuthenticated && jwt) {
    // Auth0ログイン・JWTあり：ログイン
    login = true;
    loading = false;
  } else if (isAuthenticated && !jwt) {
    // Auth0ログイン・JWTなし：ローディング
    login = false;
    loading = true;
  } else if (!isAuthenticated && jwt) {
    // Auth0ログアウト・JWTあり：ローディング
    login = false;
    loading = true;
  } else if (!isAuthenticated && !jwt) {
    // Auth0ログアウト・JWTなし：未ログイン
    login = false;
    loading = false;
  }
  return { login: login, loading: loading };
};
