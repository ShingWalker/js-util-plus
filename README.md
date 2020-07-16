# js-util-plus
## 一.介绍 
> 用typescript写的常用工具类

### 每次写项目都要写一些重复的工具类，因此把一些常用的工具类封装起来。

## 二.如何使用
```
yarn add js-util-plus / npm install js-util-plus --dev

import * as util from 'js-util-plus';
```

## 三.API

## 1.string

1.1 strCheck 验证 

```
util.strCheck(str:string, type: StrEnum) => boolean

enum StrEnum {
  PHONE = 'phone', //校验手机号
  TEL = 'tel',     //检验电话
  CARD = 'card',   //检验身份证 
  PWD = 'pwd',     
  POSTAL = 'postal',
  QQ = 'qq', 
  EMAIL = 'email',
  MONEY = 'money',
  URL = 'URL',
  IP = 'IP',
  DATE = 'date',
  NUMBER ='number',
  ENGLISH = 'english',
  CHINESE = 'chinese',
  LOWER= 'lower',
  UPPER = 'upper',
  HTML = 'HTML'
}

// example
util.strCheck('18268100000', 'phone') => true
```

1.2 strTransformName 两个字名字中间加空格
```
util.strTransformName(name: string) => cname
// example
util.strTransformName('王五') => '王　五'
```

## 2.object 
2.1 objIsNull 对象判空 
```
util.objIsNull(obj: object) => boolean

// example
const obj = {} 
util.objIsNull(obj) => false  // 传参不需要判空，代码里已判空
```

## 3.array 
3.1 arrIsNull 数组判空
```
util.arrIsNull(arr: any[]) => boolean

// example
const arr = [] 
util.arrIsNull(arr) => false  // 传参不需要判空，代码里已判空
```

## 4.store
4.1 storeCookieSet 设置某个cookie
```
util.storeCookieSet(str: string, value: string) => void

// example
util.storeCookieSet('token', 'token')
```

4.2 storeCookieGet 获得coookie中某个值 
```
util.storeCookieGet(str: string) => string

// example
document.cookie="token=token";
util.storeCookieGet('token') => 'token'
```

4.3 storeCookieDelete 删除单条cookie
```
util.storeCookieDelete(str: string) => void 
```

4.4 storeCookieRemove  删除所有cookie
```
util.storeCookieRemove() => void
```
4.5 storeLocalStorageSet 设置localStorage 已经JSON.stringify
```
util.storeLocalStorageSet(name: string, value: any) => void
```

4.6  storeLocalStorageGet  获取localStorage 已经JSON.parse
```
util.storeLocalStorageGet(str: string) => any 
```


## 5.uri
5.1 uriGetParam 获取uri上的某个参数
```
util.uriGetParam(str: string) => string

// example
www.xxx.com?a=1&b=2
util.uriGetParam('a') => '1'
```

## 6.浏览器
6.1 browserGetType 获取浏览器类型
```
util.browserGetType() => string

// example
util.browserGetType() => 'Opera' || 'IE' || 'Edge' || 'Firefox' || 'Safari' || 'Chrome' || 'OverIE10'
```

6.1 browserIsNew 是否是现代浏览器（IE11及以上）
```
util.browserIsNew() => boolean

// example
// 如果是IE11及以上，返回true
util.browserIsNew() => true 
```