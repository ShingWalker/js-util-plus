import { arrIsNull } from '../array/index';

/**
 * 设置cookie
 * @param name
 * @param value
 */
export const storeCookieSet = (name: string, value: string) => {
  document.cookie = `${name}=${value}`;
};

/**
 * 获取cookie中的值
 * @param cname
 */
export const storeCookieGet = (cname: string): string => {
  const name = cname + '=';
  const ca = document.cookie.split(';');
  for (const i of ca) {
    const c: any = i.trim();
    if (c.indexOf(name) === 0) return c.substring(name.length, c.length);
  }
  return '';
};

/**
 * 删除单条cookie
 * @param name
 */
export const storeCookieDelete = (name: string): void => {
  document.cookie = `${name}=;expires=${new Date(0).toUTCString()};`;
};

/**
 * 删除所有cookie
 */
export const storeCookieRemove = (): void => {
  const keys = document.cookie.match(/[^ =;]+(?=\=)/g);
  if (keys && arrIsNull(keys)) {
    for (let i = keys.length; i--; ) {
      document.cookie = `${keys[i]}=;expires=${new Date(0).toUTCString()};`;
    }
  }
};

/**
 * 设置localStorage 已经JSON.stringify
 * @param name
 * @param value
 */
export const storeLocalStorageSet = (name: string, value: any): void => {
  localStorage.setItem(name, JSON.stringify(value));
};

/**
 * 获取localStorage 已经JSON.parse
 * @param name
 * @param value
 */
export const storeLocalStorageGet = (name: string): any => {
  let result = localStorage.getItem(name);
  result = (result && JSON.parse(result)) || null;
  return result;
};
