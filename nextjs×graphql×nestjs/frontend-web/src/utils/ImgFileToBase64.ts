/**
 * イメージファイルをbase64に変換する
 * @param file
 * @returns　base64テキスト
 */
export async function ImgFileToBase64(file: any) {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  await new Promise<void>((resolve) => (reader.onload = () => resolve()));
  const base64Text = reader.result;
  return base64Text;
}
