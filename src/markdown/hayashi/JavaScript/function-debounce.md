---
title: "【JavaScript, ES6】Lodashパッケージの_.debounce関数の中身"
date: "2021-12-23"
category: "パーツ"
tags: ["JavaScript", "ES6"]
author: "林 裕大"
---

多分実際のソースコードとは違いますが、option引数がない以外は再現できていると思います。  
lodashの動きは楽しいので再現のしがいがあります。  

```javascript:title=debounce.js
export const _debounce = ( func, wait = 0 ) => {
    let tID = null;
    return function( ...args ) {
        if ( tID ) clearTimeout( tID );
        tID = setTimeout( (  ) => {
            const context = this;
            Reflect.apply( func, context, args );
        }, wait );
    };
};
```
