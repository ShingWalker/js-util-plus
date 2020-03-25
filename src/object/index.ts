/**
 * 判断对象是否为空（已判空）
 * @param obj
 */
export const objIsNull = (obj: object): boolean => {
  let result: boolean;
  if (obj && Object.keys(obj).length > 0) {
    result = true;
  } else {
    result = false;
  }
  return result;
};
