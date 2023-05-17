/**
 * パスの設定
 */
export const PAHT = {
  HOME: '/',
  POST: '/post',
};

/**
 * 履歴保持するパスの数
 */
export const HISTORY_PATH_COUNT = 5;

/**
 * ナビゲーションボタンの設定
 */
export const NAVIGATION = {
  PATH: [
    { path: PAHT.HOME, value: 0 },
    { path: PAHT.POST, value: 1 },
  ],
};
