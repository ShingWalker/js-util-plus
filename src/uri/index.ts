/**
 * 获取url上的值
 * @param name
 */
export const uriGetParam = (name: string): string => {
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
  const r = window.location.search.substr(1).match(reg);
  if (r != null) {
    return unescape(r[2]);
  }
  return '';
};
