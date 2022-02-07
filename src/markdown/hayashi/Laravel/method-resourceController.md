---
title: "【Laravel】リソースコントローラの'show','edit','udpate','destroy'メソッドの引数"
date: "2021-11-17"
category: "パーツ"
tags: ["Laravel"]
author: "林 裕大"
---

showメソッドのようにあらかじめモデルを取得した状態で受け取ることができる。  
findOrFailを使っているため、idで検索して見つからなかった場合は404を自動的に返すようになっている。  

```php:title=UserController.php
<?php
class UserController extends \App\Http\Controllers\Controller {
    public function show( User $user, Request $request ) {
        return $user;
    }
}
```
