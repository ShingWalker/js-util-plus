/**
 * 获取url上的值(支持hash路由)
 * @param name
 */
export const uriGetParam = (name: string): string => {
  const reg = new RegExp('[?&]' + name + '=([^&#]*)', 'i');
  const res = window.location.href.match(reg);
  if (res && res.length > 1) {
    return decodeURIComponent(res[1]);
  }
  return '';
};
