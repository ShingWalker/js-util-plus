/**
 * console.log 自动显示类型、名字、值
 * @param value 值
 * @param name 名字(传引用类型的时候最好传name)
 */
export const ulg = (value: any, name?: any): any => {
  // tslint:disable-next-line:no-console
  return console.log(`type：${typeof(value)},`, `name：${name || value},` , 'value:', value)
}


type BrowserType = "IE6" | "IE7" | "IE8" | "IE9" | "IE10" | "IE11" | "0" | "FF" | "Opera" | "Safari" | "Chrome" | "Edge" | '' 

/**
 * 获取浏览器类型及IE版本
 */
export const  ugetBrowserType = (): BrowserType =>{ 
  // 取得浏览器的userAgent字符串
  const userAgent = navigator.userAgent; 
   // 判断是否Opera浏览器
  const  isOpera = userAgent.indexOf('Opera') > -1;
  // var isIE = userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1 && !isOpera; //判断是否IE浏览器
  const isIE = (window as any).ActiveXObject || 'ActiveXObject' in window
  // var isEdge = userAgent.indexOf('Windows NT 6.1; Trident/7.0;') > -1 && !isIE; //判断是否IE的Edge浏览器
  const isEdge = userAgent.indexOf('Edge') > -1; // 判断是否IE的Edge浏览器
  const isFF = userAgent.indexOf('Firefox') > -1; // 判断是否Firefox浏览器
  const isSafari = userAgent.indexOf('Safari') > -1 && userAgent.indexOf('Chrome') === -1; // 判断是否Safari浏览器
  const isChrome = userAgent.indexOf('Chrome') > -1 && userAgent.indexOf('Safari') > -1&&!isEdge; // 判断Chrome浏览器
 
  if (isIE) { 
     const reIE = new RegExp('MSIE (\\d+\\.\\d+);'); 
     reIE.test(userAgent); 
     // tslint:disable-next-line:no-string-literal
     const fIEVersion = parseFloat(RegExp['$1']); 
     if(userAgent.indexOf('MSIE 6.0') !== -1){
       return 'IE6';
     }else if(fIEVersion === 7) 
       { return 'IE7';} 
     else if(fIEVersion === 8) 
       { return 'IE8';} 
     else if(fIEVersion === 9) 
       { return 'IE9';} 
     else if(fIEVersion === 10) 
       { return 'IE10';} 
     else if(userAgent.toLowerCase().match(/rv:([\d.]+)\) like gecko/)){ 
        return 'IE11';
     } else {
     return '0' // IE版本过低
    } 
   }else if (isFF) { 
     return 'FF';
   }else if (isOpera) {
      return 'Opera';
   }else if (isSafari) {
      return 'Safari';
   }else if (isChrome) {
      return 'Chrome';
   }else if (isEdge) {
       return 'Edge';
   } else {
     return ''
   }
 }
