
/**
 * 获取url上的值 
 * @param name 
 */
export const getQueryString = (name: string): string => {
  let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  let r = window.location.search.substr(1).match(reg);
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
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i].trim();
    if (c.indexOf(name) === 0) return c.substring(name.length, c.length);
  }
  return '';
};