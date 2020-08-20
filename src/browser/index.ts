type BrowserType = 'Opera' | 'IE' | 'Edge' | 'Firefox' | 'Safari' | 'Chrome' | 'OverIE10' | '';

/**
 * 获取浏览器类型
 */
export const browserGetType = (): BrowserType => {
  const userAgent = navigator.userAgent;
  if (userAgent.indexOf('Opera') > -1 || userAgent.indexOf('OPR') > -1) {
    return 'Opera';
  } else if (userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1) {
    return 'IE';
  } else if (userAgent.indexOf('Edge') > -1) {
    return 'Edge';
  } else if (userAgent.indexOf('Firefox') > -1) {
    return 'Firefox';
  } else if (userAgent.indexOf('Safari') > -1 && userAgent.indexOf('Chrome') === -1) {
    return 'Safari';
  } else if (userAgent.indexOf('Chrome') > -1 && userAgent.indexOf('Safari') > -1) {
    return 'Chrome';
  } else if (!!(window as any).window.ActiveXObject || 'ActiveXObject' in window) {
    return 'OverIE10';
  } else {
    return '';
  }
};

/**
 * 是否是现代浏览器
 */
export const browserIsNew = (): boolean => {
  let result;
  // window.attachEvent 在 IE<=10 是有定义的，其他浏览器是 underfined
  if ((window as any).window.attachEvent) {
    result = false;
  } else {
    result = true;
  }
  return result;
};
