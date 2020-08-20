/**
 * console.log 自动显示类型、名字、值
 * @param value 值
 * @param name 名字
 */
export const ulg = (value: any, name?: any): any => {
  // tslint:disable-next-line:no-console
  return console.log(`type：${typeof value},`, `name：${name || value},`, 'value:', value);
};
