---
title: "【JavaScript, ES6】アロー関数を使ったときのthisの中身"
date: "2022-01-12"
category: "パーツ"
tags: ["JavaScript", "ES6"]
author: "林 裕大"
---

index.jsのmember2は通常の関数の初期化を使っているが、  
こちらはthisと結び付けを行うため、member1の値を参照することができる。  
対して、member3はアロー関数を使っていて、  
thisと結びつきが行われず、member1の値を参照することができない。

```javascript:title=index.js
const obj = {
    member1: 'foo',
    member2: function(  ) {
        return this.member1;
    },
    member3: (  ) => {
        return this.member1;
    }
}
```
