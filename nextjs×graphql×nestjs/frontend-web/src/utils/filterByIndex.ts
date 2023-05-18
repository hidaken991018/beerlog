/**
 * 特定のインデックス以下を切り捨てる
 * @param array
 * @param filterCount
 * @returns
 */
export const filterByIndex = (array: Array<any>, filterCount: number) => {
  const newValue = array.filter((_, index) => {
    if (index <= filterCount - 1) {
      return true;
    } else {
      return false;
    }
  });
  return newValue;
};
