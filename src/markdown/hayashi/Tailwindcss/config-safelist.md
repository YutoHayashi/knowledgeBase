---
title: "【Tailwindcss】パージ対象からの除外について"
date: "2021-11-16"
category: "パーツ"
tags: ["Tailwindcss"]
author: "林 裕大"
---

動的にクラス名が変わる時などで、パージ対象から外したいとき
```javascript:title=tailwind.config.js
module.exports = {
    purge: {
        content: [ './src/**/*.{js,jsx,ts,tsx}' ],
        options: {
            safelist: [ 'bg-blue-500' ],
        },
    },
    // ~以下略
}
```
