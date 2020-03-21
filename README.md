# js-util-plus
## 一.介绍 
> 用typescript写的常用工具类

### 每次写项目都要写一些重复的工具类，因此把一些常用的工具类封装起来。

## 二.如何使用
```
yarn add js-util-plus / npm install js-util-plus --dev

import * as util from '../index';
```

## 三.API

## 1.string

1.1 strCheck 检验

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
4.1 cookieGet 获得coookie中某个值 
```
util.cookieGet(str: string) => string

// example
document.cookie="token=token";
util.cookieGet('token') => 'token'
```

## 5.uri
5.1 uriGetParam 获取uri上的某个参数
```
util.uriGetParam(str: string) => string

// example
www.xxx.com?a=1&b=2
util.uriGetParam('a') => '1'
```