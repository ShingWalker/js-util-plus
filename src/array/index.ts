/**
 * 判断数据是否为空（已判空）
 * @param arr
 */
export const arrIsNull = (arr: any[]): boolean => {
  let result: boolean;
  if (arr && arr.length > 0) {
    result = true;
  } else {
    result = false;
  }
  return result;
};
