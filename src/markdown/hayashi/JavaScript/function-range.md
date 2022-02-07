---
title: "【JavaScript, ES6】0≤i≤nの連番を作りたい"
date: "2021-12-14"
category: "パーツ"
tags: ["JavaScript", "ES6"]
author: "林 裕大"
---

```javascript:title=range.js
export const range = n => Array.from( Array( n ) ).map( ( _, i ) => i );
```
