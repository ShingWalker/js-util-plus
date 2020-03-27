/**
 * 获取cookie中的值
 * @param cname
 */
export const cookieGet = (cname: string): string => {
  const name = cname + '=';
  const ca = document.cookie.split(';');
    for (const i of ca) {
      const c: any = i.trim();
      if (c.indexOf(name) === 0) return c.substring(name.length, c.length);
    }
  return '';
};
