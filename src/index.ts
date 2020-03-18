
/**
 * 获取url上的值 
 * @param name 
 */
export const getQueryString = (name: string): string => {
  const reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  const r = window.location.search.substr(1).match(reg);
  if (r != null) {
      return unescape(r[2]);
  };
  return '';
}

/**
 * 获取token
 * @param cname
 */
export const getCookie = (cname: string) :string => {
  const name = cname + "=";
  const ca = document.cookie.split(';');
  let i: any;
  for (i of ca) {
    const c = ca[i].trim();
    if (c.indexOf(name) === 0) return c.substring(name.length, c.length);
  }
  return '';
};