---
title: "【Laravel】バリデーション後のパラメータの取得について"
date: "2021-11-16"
category: "パーツ"
tags: ["Laravel"]
author: "林 裕大"
---

$request->validated()  
の形でバリデーション後のパラメータを連想配列として受け取ることができる。  
決まったキーとバリューを保証してくれる。  

```php:title=UserController.php
<?php
class UserController extends \App\Http\Controllers\Controller {
    public function save( \App\Http\Requests\UserSaveRequest $request ) {
        $param = $request->validated(  );
    }
}
```
